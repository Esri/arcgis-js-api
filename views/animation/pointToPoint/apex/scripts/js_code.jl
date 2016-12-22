using SymPy

opmap = Dict(:(*) => "*",
             :(.*) => "*",
             :(/) => "/",
             :(./) => "/",
             :(+) => "+",
             :(-) => "-")

priomap = Dict(:(*) => 2, :(.*) => 2, :(/) => 2, :(./) => 2, :(+) => 1, :(-) => 1)

function js_code(ex::Expr, prio, pop, freevars)
  if ex.head == :call
    op = ex.args[1]
    args = ex.args[2:end]

    if op == :(-) && length(args) == 1
      return string("-", js_code(args[1], 3, 0, freevars))
    elseif haskey(opmap, op)
      nprio = priomap[op]

      ret = join([js_code(args[i], nprio, i == 1 ? 0 : op, freevars) for i in 1:length(args)], string(" ", opmap[op], " "))

      if nprio < prio || (pop != 0 && op != pop && nprio == prio)
        ret = string("(", ret, ")")
      end

      return ret
    elseif op == :(^) || op == :(.^)
      if isa(args[1], Symbol) && isa(args[2], Number)
        expanded = Expr(:call, :(*), [args[1] for i in 1:args[2]]...)
        return js_code(expanded, prio, :(^), freevars)
      else
        return string("Math.pow(", js_code(args[1], 0, 0, freevars), ", ", js_code(args[2], 0, 0, freevars), ")")
      end
    elseif op == :log
      return string("Math.log(", js_code(args[1], 0, 0, freevars) , ")")
    else
      return string(ex)
    end
  elseif ex.head == :if
    cond = js_code(ex.args[1], 0, 0, freevars)
    truepart = js_code(ex.args[2], 0, 0, freevars)
    falsepart = js_code(ex.args[3], 0, 0, freevars)

    return string(cond, " ? ", truepart, " : ", falsepart)
  elseif ex.head == :comparison
    lhs = js_code(ex.args[1], 3, 0, freevars)
    rhs = js_code(ex.args[3], 3, 0, freevars)

    return string(lhs, " ", ex.args[2], " ", rhs)
  else
    return string(ex)
  end
end

function js_code(sym::Symbol, prio, op, freevars)
  ret = string(sym)

  if ret == "ln2"
    return "Math.LN2"
  end

  if !(ret in freevars)
    push!(freevars, ret)
  end

  if ismatch(r"^x[0-9]+$", ret) || ismatch(r"_$", ret) || ret == "apexDistance"
    return ret
  elseif ret in ("ascensionFactor", "descensionFactor")
    return string("p.", ret)
  else
    return string("d.", ret)
  end
end

js_code(sym::Sym, prio, op, freevars) = js_code(parse(julia_code(sym)), prio, op, freevars)
js_code(ex, prio, op, freevars) = string(ex)

js_code(ex) = js_code(ex, 0, 0, [])

js_code(terms::Tuple) = js_code(fname, terms, [])

function js_code(terms::Tuple, paramvars)
  terms, exprs = terms
  expr = exprs[1]

  body = []
  termnames = []
  freevars = []

  for term in terms
    push!(termnames, string(term[1]))
    push!(body, string("  const ", term[1], " = ", js_code(term[2], 0, 0, freevars), ";"))
  end

  if length(terms) > 0
    push!(body, "")
  end

  push!(body, string("  return ", js_code(expr, 0, 0, freevars), ";"))

  freevars = filter(x -> !(x in termnames), freevars)

  for var in freevars
    if !(var in paramvars)
      push!(paramvars, var)
    end
  end

  return join(body, "\n")
end

workspace()

using SymPy

include("js_code.jl")

# Define free variable symbols
@syms ln2, l0, l1, apexDistance, ascensionFactor, descensionFactor, panAngle, windowSize, desiredPixelFlow, tanHalfFov, averageLookAtRadius

# Zoom-pan ratio used during ascension/descension
lFp(l0, l1, sl, k) = ((l1 / l0) - 1) / (-(1 / (sl * windowSize) * ln2 * panAngle) / (l0 * tanHalfFov / (windowSize * averageLookAtRadius)) * k)

# eye/lookAt distance while zoom/panning
fL(l0, l1, sl, k) = lFp(l0, l1, sl, k) / (1 + lFp(l0, l1, sl, k)) * desiredPixelFlow

# Ascension/descension time
tADpl(l0, l1, sl, k) = (sl * (log(l0 / l1) / ln2) * windowSize) / fL(l0, l1, sl, k)

# Ascension/descension time in simplified case without panning
tADl(l0, l1, sl, k) = (sl * (log(l0 / l1) / ln2) * windowSize) / desiredPixelFlow

# Panion time
tPp(l, k) = (panAngle * k * averageLookAtRadius * windowSize / (tanHalfFov * l)) / desiredPixelFlow

# Specific time functions for all cases
tApl(h) = simplify(tADpl(l0, h, -1, ascensionFactor))
tAl(h) = simplify(tADl(l0, h, -1, ascensionFactor))
tP(h) = simplify(tPp(h, 1 - ascensionFactor - descensionFactor))
tDpl(h) = simplify(tADpl(h, l1, 1, descensionFactor))
tDl(h) = simplify(tADl(h, l1, 1, descensionFactor))

tBaseLine(l0, l1) = simplify(tADpl(l0, l1, Piecewise((-1, LessThan(l0, l1)), (1, true)), 1))

timefuncs = ((
  ("AscensionZoomPan", tApl),
  ("AscensionZoomOnly", tAl),
  ("Panion", tP),
  ("DescensionZoomPan", tDpl),
  ("DescensionZoomOnly", tDl))

#
# # Derivatives
# dtApl(h) = simplify(diff(tApl(h), h))
# dtAl(h) = simplify(diff(tAl(h), h))
# dtP(h) = simplify(diff(tP(h), h))
# dtDpl(h) = simplify(diff(tDpl(h), h))
# dtDl(h) = simplify(diff(tDl(h), h))
#
# # Second Derivatives
# ddtApl(h) = simplify(diff(tApl(h), h, h))
# ddtAl(h) = simplify(diff(tAl(h), h, h))
# ddtP(h) = simplify(diff(tP(h), h, h))
# ddtDpl(h) = simplify(diff(tDpl(h), h, h))
# ddtDl(h) = simplify(diff(tDl(h), h, h))

function outputFunctions()
  funcbodies = []
  paramvars = []

  for f in timefuncs
    push!(funcbodies, (string("t", f[1]), js_code(cse(f[2](apexDistance)), paramvars)))
    push!(funcbodies, (string("dt", f[1]), js_code(cse(diff(f[2](apexDistance), apexDistance)), paramvars)))
    push!(funcbodies, (string("ddt", f[1]), js_code(cse(diff(f[2](apexDistance), apexDistance, apexDistance)), paramvars)))
  end

  blinecode = js_code(cse(tBaseLine(l0, l1)), paramvars)

  ret = []

  # Output params interface
  sort!(paramvars)

  push!(ret, "import { PathDefinition } from \"./interfaces\";\n")

  push!(ret, "export interface Params {")
  push!(ret, "  ascensionFactor: number;")
  push!(ret, "  descensionFactor: number;")
  push!(ret, "}\n")

  for f in funcbodies
    push!(ret, string("export function ", f[1], "(d: PathDefinition, p: Params, apexDistance: number): number {"))
    push!(ret, f[2])
    push!(ret, "}\n")
  end

  push!(ret, string("export function tBaseLine(d: PathDefinition): number {"))
  push!(ret, blinecode)
  push!(ret, "}\n")

  display(join(ret, "\n"))
end

outputFunctions()

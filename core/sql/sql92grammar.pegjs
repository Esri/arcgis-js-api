{

function createUnaryExpr(op, e) {
    return {
      type     : 'unary_expr',
      operator : op,
      expr     : e
    }
  }

  function createBinaryExpr(op, left, right, escape) {
    var expr= {
      type      : 'binary_expr',
      operator  : op,
      left      : left,
      right     : right
    }
    if (escape!==undefined) {
      expr.escape = escape;
    }
    return expr;
  }

  function createList(head, tail) {
    var result = [head];
    for (var i = 0; i < tail.length; i++) {
      result.push(tail[i][3]);
    }
    return result;
  }

  function createExprList(head, tail, room) {
    var exprList = createList(head, tail);
    return exprList;
  }

  function createBinaryExprChain(head, tail) {
    var result = head;
    for (var i = 0; i < tail.length; i++) {
      result = createBinaryExpr(tail[i][1], result, tail[i][3]);
    }
    return result;
  }


}


start = __ f:expr __ { return f; }


expr_list
  = head:expr tail:(__ COMMA __ expr)*{
      var el = {
        type : 'expr_list'
      }
      var l = createExprList(head, tail, el);

      el.value = l;
      return el;
    }


expr = or_expr

or_expr
  = head:and_expr tail:(__ KW_OR __ and_expr)* {
      return createBinaryExprChain(head, tail);
    }

and_expr
  = head:not_expr tail:(__ KW_AND __ not_expr)* {
      return createBinaryExprChain(head, tail);
    }

//here we should use `NOT` instead of `comparision_expr` to support chain-expr
not_expr
  = (KW_NOT / "!" !"=") __ expr:not_expr {
      return createUnaryExpr('NOT', expr);
    }
  / comparison_expr

comparison_expr
  = left:additive_expr __ rh:comparison_op_right? {
      if ((rh == '') || (rh== undefined) || (rh==null)) {
        return left;
      } else {
        var res = null;
        if (rh.type == 'arithmetic') {
          res = createBinaryExprChain(left, rh.tail);
        } else {
          res = createBinaryExpr(rh.op, left, rh.right, rh.escape);
        }
        return res;
      }
    }


comparison_op_right
  = arithmetic_op_right
    / in_op_right
    / between_op_right
    / is_op_right
    / like_op_right


arithmetic_op_right
  = l:(__ arithmetic_comparison_operator __ additive_expr)+ {
      return {
        type : 'arithmetic',
        tail : l
      }
    }

arithmetic_comparison_operator
  = ">=" / ">" / "<=" / "<>" / "<" / "=" / "!="

is_op_right
  = op:KW_IS __ KW_NOT __ right:additive_expr {
      return {
        op    : op + "NOT",
        right : right
      }
    }
  / op:KW_IS __ right:additive_expr {
      return {
        op    : op,
        right : right
      }
    }



between_op_right


  =  KW_NOT __ op:KW_BETWEEN __  begin:additive_expr __ KW_AND __ end:additive_expr {
      return {
        op    : "NOT" + op,
        right : {
          type : 'expr_list',
          value : [begin, end]
        }
      }
    }

  / op:KW_BETWEEN __  begin:additive_expr __ KW_AND __ end:additive_expr {
      return {
        op    : op,
        right : {
          type : 'expr_list',
          value : [begin, end]
        }
      }
    }

like_op
  = nk:(KW_NOT __ KW_LIKE) { return nk[0] + ' ' + nk[2]; }
  / KW_LIKE

in_op
  = nk:(KW_NOT __ KW_IN) { return nk[0] + ' ' + nk[2]; }
  / KW_IN


like_op_right
 = op:like_op __ right:literal_string_or_param __ KW_ESCAPE __ escapesequence:literal_string {
     return {
        op    : op,
        right : right,
        escape: escapesequence.value
      }
 }
  / op:like_op __ right:literal_string_or_param {
      return {
        op    : op,
        right : right,
        escape: ''
      }
    }

in_op_right
  = op:in_op __ LPAREN  __ l:expr_list __ RPAREN {
      return {
        op    : op,
        right : l
      }
    }
  / op:in_op __ LPAREN  __  RPAREN {
      return {
        op    : op,
        right : { type : 'expr_list', value: []}
      }
    }
  / op:in_op __ e:param {
      return {
        op    : op,
        right : e
      }
    }


additive_expr
  = head:multiplicative_expr
    tail:(__ additive_operator  __ multiplicative_expr)* {
      return createBinaryExprChain(head, tail);
    }

additive_operator
  = "+" / "-"

multiplicative_expr
  = head:primary
    tail:(__ multiplicative_operator  __ primary)* {
      return createBinaryExprChain(head, tail)
    }

multiplicative_operator
  = "*" / "/" / "%"



primary
  = literal
  / extract_func
  / substring_func
  / func_call
  / case_expression
  / column_ref
  / param
  / LPAREN __ e:expr __ RPAREN {
      e.paren = true;
      return e;
    }


column_ref
  = col:column {
      return {
        type  : 'column_ref',
        table : '',
        column: col
      };
    }

column =
  name:column_name  {
    return name;
  }


column_name
  =  start:ident_start parts:column_part* { return start + parts.join(''); }

ident_name
  =  start:ident_start parts:ident_part* { return start + parts.join(''); }

ident_start = [A-Za-z_\u0080-\uffff]

ident_part  = [A-Za-z0-9_]

//to support column name like `cf1:name` in hbase
column_part  = [A-Za-z0-9_.\u0080-\uffff]


param
  = l:('@' ident_name) {
    var p = {
      type : 'param',
      value: l[1]
    }
    return p;
  }


extract_func
 = KW_EXTRACT __ LPAREN __ typeofextract:extract_field __ KW_FROM __ datefield:expr __ RPAREN {
 return  {
        type : 'function',
        name : "extract",
        args : { type:"expr_list", value: [{ type: "string", value: typeofextract}, datefield]
      }};
 }

substring_func
  = KW_SUBSTRING __ LPAREN __ stringexpr:expr __ KW_FROM __ fromexpr:expr __ length:( KW_FOR __ expr __ )? RPAREN {
return {
        type : 'function',
        name : "substring",
        args :  {
          type: "expr_list",
          value: length ? [stringexpr, fromexpr, length[2]] : [stringexpr, fromexpr]
        }
      };
}

func_call
  = name:ident __ LPAREN __ l:expr_list? __ RPAREN {
      return {
        type : 'function',
        name : name,
        args : l ? l : { type:"expr_list", value: [] }
      }
    }

extract_field
   = KW_YEAR / KW_MONTH / KW_DAY / KW_HOUR / KW_MINUTE / KW_SECOND

literal
  = literal_string / literal_numeric / literal_bool /literal_null / literal_date / literal_timestamp

literal_list
  = head:literal tail:(__ COMMA __ literal)* {
      return createList(head, tail);
    }

literal_timestamp
   = KW_TIMESTAMP __  stringdate:literal_string_or_param {
      return {
        type  : 'timestamp',
        value : stringdate.value
      };

   }


literal_date
   = KW_DATE __  stringdate:literal_string_or_param {
      return {
        type  : 'date',
        value : stringdate.value
      };

   }

literal_null
  = KW_NULL {
      return {
        type  : 'null',
        value : null
      };
    }

literal_bool
  = KW_TRUE {
      return {
        type  : 'bool',
        value : true
      };
    }
  / KW_FALSE {
      return {
        type  : 'bool',
        value : false
      };
    }


literal_string_or_param
 = literal_string / param

literal_string
  = ("'" / "N'") str: ("''" { return "'"; } / [^'])* "'" {
      return {
        type  : 'string',
        value : str.join('')
      }
    }



case_expression
  = simple_case
  / searched_case

simple_case
 =  KW_CASE __ caseoperand:expr __ clauses:(simple_when_clause)* __ KW_END {
      return {
          type: "case_expression",
          format: "simple",
          operand: caseoperand,
          clauses: clauses,
          else: null
      }
   }
  / KW_CASE __ caseoperand:expr __  clauses:(simple_when_clause)* __ elseclause:else_clause __ KW_END{
      return {
          type: "case_expression",
          format: "simple",
          operand: caseoperand,
          clauses: clauses,
          else: elseclause.value
      }
   }

searched_case
  = KW_CASE __ clauses:(searched_when_clause)* __ KW_END {
      return {
          type: "case_expression",
          format: "searched",
          clauses: clauses,
          else: null
      }
   }
  / KW_CASE __  clauses:(searched_when_clause)* __ elseclause:else_clause __ KW_END {
      return {
          type: "case_expression",
          format: "searched",
          clauses: clauses,
          else: elseclause.value
      }
   }



searched_when_clause
 = KW_WHEN __ whenoperand:expr __ KW_THEN __ result:expr {
      return {
          "type": "when_clause",
          "operand": whenoperand,
          "value":result
      }
 }



simple_when_clause
 = KW_WHEN __ whenoperand:expr __ KW_THEN __ result:expr {
      return {
          "type": "when_clause",
          "operand": whenoperand,
          "value":result
      }
 }


 else_clause
  = KW_ELSE __ result:expr {
      return {
          "type": "else_clause",
          "value":result
      }
  }




single_char
  = [^'\\\0-\x1F\x7f]
  / escape_char

double_char
  = [^"\\\0-\x1F\x7f]
  / escape_char

escape_char
  = "\\'"  { return "'";  }
  / '\\"'  { return '"';  }
  / "\\\\" { return "\\"; }
  / "\\/"  { return "/";  }
  / "\\b"  { return "\b"; }
  / "\\f"  { return "\f"; }
  / "\\n"  { return "\n"; }
  / "\\r"  { return "\r"; }
  / "\\t"  { return "\t"; }
  / "\\u" h1:hexDigit h2:hexDigit h3:hexDigit h4:hexDigit {
      return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
    }

line_terminator
  = [\n\r]

literal_numeric
  = n:number !ident_start {
      return {
        type  : 'number',
        value : n
      }
    }

number
  = int_:int frac:frac exp:exp  {  return parseFloat(int_ + frac + exp); }
  / int_:int frac:frac          { return parseFloat(int_ + frac);       }
  / int_:int exp:exp            { return parseFloat(int_ + exp);        }
  / int_:int                    { return parseFloat(int_);              }

int
  = digit19:digit19 digits:digits     { return digit19 + digits;       }
  / digit:digit
  / op:("-" / "+" ) digit19:digit19 digits:digits { return "-" + digit19 + digits; }
  / op:("-" / "+" ) digit:digit                   { return "-" + digit;            }

frac
  = "." digits:digits { return "." + digits; }

exp
  = e:e digits:digits { return e + digits; }

digits
  = digits:digit+ { return digits.join(""); }

digit   = [0-9]
digit19 = [1-9]

hexDigit
  = [0-9a-fA-F]

e
  = e:[eE] sign:[+-]? { return "e" + (sign ===null ? "" : sign); }


KW_NULL      = "NULL"i      !ident_part
KW_TRUE      = "TRUE"i      !ident_part
KW_FALSE     = "FALSE"i     !ident_part
KW_IN        = "IN"i        !ident_part    { return 'IN';       }
KW_IS        = "IS"i        !ident_part    { return 'IS';       }
KW_LIKE      = "LIKE"i      !ident_part    { return 'LIKE';     }
KW_ESCAPE    = "ESCAPE"i    !ident_part    { return 'ESCAPE';     }
KW_CONTAINS  = "CONTAINS"i  !ident_part    { return 'CONTAINS'; }

KW_NOT       = "NOT"i       !ident_part    { return 'NOT';      }
KW_AND       = "AND"i       !ident_part    { return 'AND';      }
KW_OR        = "OR"i        !ident_part    { return 'OR';       }

KW_BETWEEN   = "BETWEEN"i   !ident_part    { return 'BETWEEN';  }
KW_FROM      = "FROM"i      !ident_part    { return 'FROM';  }
KW_FOR       = "FOR"i       !ident_part    { return 'FOR';  }
KW_SUBSTRING = "SUBSTRING"i !ident_part    { return 'SUBSTRING';  }
KW_EXTRACT   = "EXTRACT"i   !ident_part    { return 'EXTRACT';  }
KW_TIMESTAMP = "TIMESTAMP"i !ident_part    { return 'TIMESTAMP';    }
KW_DATE      = "DATE"i      !ident_part    { return 'DATE';    }

KW_YEAR      = "YEAR"i      !ident_part    { return 'YEAR';     }
KW_MONTH     = "MONTH"i     !ident_part    { return 'MONTH';     }
KW_DAY       = "DAY"i       !ident_part    { return 'DAY';     }
KW_HOUR      = "HOUR"i      !ident_part    { return 'HOUR';     }
KW_MINUTE    = "MINUTE"i    !ident_part    { return 'MINUTE';     }
KW_SECOND    = "SECOND"i    !ident_part    { return 'SECOND';     }

KW_CASE      = "CASE"i      !ident_part    { return 'CASE';     }
KW_END       = "END"i       !ident_part    { return 'END';     }
KW_WHEN      = "WHEN"i      !ident_part    { return 'WHEN';     }
KW_THEN      = "THEN"i      !ident_part    { return 'THEN';     }
KW_ELSE      = "ELSE"i      !ident_part    { return 'ELSE';     }

//special characters
DOT       = '.'
COMMA     = ','
STAR      = '*'
LPAREN    = '('
RPAREN    = ')'

LBRAKE    = '['
RBRAKE    = ']'

 KW_VAR_PRE ="@"
__ =
  whitespace*

char = .

whitespace =
  [ \t\n\r]



ident =
  name:ident_name {
    return name;
  }
  / '`' chars:[^`]+ '`' {
    return chars.join('');
  }

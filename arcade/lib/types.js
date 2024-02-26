// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/extends"],(function(e,n,t){"use strict";var i,r;Object.defineProperty(n,"__esModule",{value:!0}),n.isTemplateElement=n.isProperty=n.isVariableDeclarator=n.isUpdateExpression=n.isUnaryExpression=n.isMemberExpression=n.isTemplateLiteral=n.isObjectExpression=n.isLogicalExpression=n.isLiteral=n.isIdentifier=n.isCallExpression=n.isBinaryExpression=n.isAssignmentExpression=n.isArrayExpression=n.isExpression=n.isVariableDeclaration=n.isReturnStatement=n.isIfStatement=n.isFunctionDeclaration=n.isForStatement=n.isForInStatement=n.isExpressionStatement=n.isEmptyStatement=n.isContinueStatement=n.isBreakStatement=n.isBlockComment=n.isBlockStatement=n.isStatement=n.isProgram=n.ParsingError=n.ParsingErrorMessages=n.ParsingErrorCodes=n.TokenNames=n.TokenType=n.OperatorPrecedence=n.BinaryOperators=n.LogicalOperators=n.AssignmentOperators=n.UnaryOperators=n.UpdateOperators=n.Syntax=n.Keywords=void 0,function(e){e.Break="break",e.Continue="continue",e.Else="else",e.False="false",e.For="for",e.From="from",e.Function="function",e.If="if",e.Import="import",e.Export="export",e.In="in",e.Null="null",e.Return="return",e.True="true",e.Var="var",e.While="while"}(n.Keywords||(n.Keywords={})),function(e){e.AssignmentExpression="AssignmentExpression",e.ArrayExpression="ArrayExpression",e.BlockComment="BlockComment",e.BlockStatement="BlockStatement",e.BinaryExpression="BinaryExpression",e.BreakStatement="BreakStatement",e.CallExpression="CallExpression",e.ContinueStatement="ContinueStatement",e.EmptyStatement="EmptyStatement",e.ExpressionStatement="ExpressionStatement",e.ExportNamedDeclaration="ExportNamedDeclaration",e.ExportSpecifier="ExportSpecifier",e.ForStatement="ForStatement",e.ForInStatement="ForInStatement",e.FunctionDeclaration="FunctionDeclaration",e.Identifier="Identifier",e.IfStatement="IfStatement",e.ImportDeclaration="ImportDeclaration",e.ImportDefaultSpecifier="ImportDefaultSpecifier",e.LineComment="LineComment",e.Literal="Literal",e.LogicalExpression="LogicalExpression",e.MemberExpression="MemberExpression",e.ObjectExpression="ObjectExpression",e.Program="Program",e.Property="Property",e.ReturnStatement="ReturnStatement",e.TemplateElement="TemplateElement",e.TemplateLiteral="TemplateLiteral",e.UnaryExpression="UnaryExpression",e.UpdateExpression="UpdateExpression",e.VariableDeclaration="VariableDeclaration",e.VariableDeclarator="VariableDeclarator",e.WhileStatement="WhileStatement"}(n.Syntax||(n.Syntax={})),n.UpdateOperators=["++","--"],n.UnaryOperators=["-","+","!","~"],n.AssignmentOperators=["=","/=","*=","%=","+=","-="],n.LogicalOperators=["||","&&"],n.BinaryOperators=["|","&",">>","<<",">>>","^","==","!=","<","<=",">",">=","+","-","*","/","%"],n.OperatorPrecedence={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},function(e){e[e.Unknown=0]="Unknown",e[e.BooleanLiteral=1]="BooleanLiteral",e[e.EOF=2]="EOF",e[e.Identifier=3]="Identifier",e[e.Keyword=4]="Keyword",e[e.NullLiteral=5]="NullLiteral",e[e.NumericLiteral=6]="NumericLiteral",e[e.Punctuator=7]="Punctuator",e[e.StringLiteral=8]="StringLiteral",e[e.Template=10]="Template"}(n.TokenType||(n.TokenType={})),n.TokenNames=["Unknown","Boolean","<end>","Identifier","Keyword","Null","Numeric","Punctuator","String","RegularExpression","Template"],function(e){e.InvalidModuleUri="InvalidModuleUri",e.ForInOfLoopInitializer="ForInOfLoopInitializer",e.IdentiferExpected="IdentiferExpected",e.InvalidEscapedReservedWord="InvalidEscapedReservedWord",e.InvalidExpression="InvalidExpression",e.InvalidFunctionIdentifier="InvalidFunctionIdentifier",e.InvalidHexEscapeSequence="InvalidHexEscapeSequence",e.InvalidLeftHandSideInAssignment="InvalidLeftHandSideInAssignment",e.InvalidLeftHandSideInForIn="InvalidLeftHandSideInForIn",e.InvalidTemplateHead="InvalidTemplateHead",e.InvalidVariableAssignment="InvalidVariableAssignment",e.KeyMustBeString="KeyMustBeString",e.NoFunctionInsideBlock="NoFunctionInsideBlock",e.NoFunctionInsideFunction="NoFunctionInsideFunction",e.ModuleExportRootOnly="ModuleExportRootOnly",e.ModuleImportRootOnly="ModuleImportRootOnly",e.PunctuatorExpected="PunctuatorExpected",e.TemplateOctalLiteral="TemplateOctalLiteral",e.UnexpectedBoolean="UnexpectedBoolean",e.UnexpectedEndOfScript="UnexpectedEndOfScript",e.UnexpectedIdentifier="UnexpectedIdentifier",e.UnexpectedKeyword="UnexpectedKeyword",e.UnexpectedNull="UnexpectedNull",e.UnexpectedNumber="UnexpectedNumber",e.UnexpectedPunctuator="UnexpectedPunctuator",e.UnexpectedString="UnexpectedString",e.UnexpectedTemplate="UnexpectedTemplate",e.UnexpectedToken="UnexpectedToken"}(r=n.ParsingErrorCodes||(n.ParsingErrorCodes={})),n.ParsingErrorMessages=((i={})[r.InvalidModuleUri]="Module uri must be a text literal.",i[r.ForInOfLoopInitializer]="for-in loop variable declaration may not have an initializer.",i[r.IdentiferExpected]="'${value}' is an invalid identifier.",i[r.InvalidEscapedReservedWord]="Keyword cannot contain escaped characters.",i[r.InvalidExpression]="Invalid expression.",i[r.InvalidFunctionIdentifier]="'${value}' is an invalid function identifier.",i[r.InvalidHexEscapeSequence]="Invalid hexadecimal escape sequence.",i[r.InvalidLeftHandSideInAssignment]="Invalid left-hand side in assignment.",i[r.InvalidLeftHandSideInForIn]="Invalid left-hand side in for-in.",i[r.InvalidTemplateHead]="Invalid template structure.",i[r.InvalidVariableAssignment]="Invalid variable assignment.",i[r.KeyMustBeString]="Object property keys must be a word starting with a letter.",i[r.NoFunctionInsideBlock]="Functions cannot be declared inside of code blocks.",i[r.NoFunctionInsideFunction]="Functions cannot be declared inside another function.",i[r.ModuleExportRootOnly]="Module exports cannot be declared inside of code blocks.",i[r.ModuleImportRootOnly]="Module import cannot be declared inside of code blocks.",i[r.PunctuatorExpected]="'${value}' expected.",i[r.TemplateOctalLiteral]="Octal literals are not allowed in template literals.",i[r.UnexpectedBoolean]="Unexpected boolean literal.",i[r.UnexpectedEndOfScript]="Unexpected end of Arcade expression.",i[r.UnexpectedIdentifier]="Unexpected identifier.",i[r.UnexpectedKeyword]="Unexpected keyword.",i[r.UnexpectedNull]="Unexpected null literal.",i[r.UnexpectedNumber]="Unexpected number.",i[r.UnexpectedPunctuator]="Unexpected ponctuator.",i[r.UnexpectedString]="Unexpected text literal.",i[r.UnexpectedTemplate]="Unexpected quasi '${value}'.",i[r.UnexpectedToken]="Unexpected token '${value}'.",i);var a=function(e){function n(t){var i,r,a=t.code,o=t.index,s=t.line,l=t.column,c=t.len,p=void 0===c?0:c,d=t.description,u=t.data,m=e.call(this,""+(null!=d?d:a))||this;return m.declaredRootClass="esri.arcade.lib.parsingerror",m.name="ParsingError",m.code=a,m.index=o,m.line=s,m.column=l,m.len=p,m.data=u,m.description=d,m.range={start:{line:s,column:l-1},end:{line:s,column:l+p}},null===(r=(i=Error).captureStackTrace)||void 0===r||r.call(i,m,n),m}return t(n,e),n}(Error);n.ParsingError=a,n.isProgram=function(e){return"Program"===(null==e?void 0:e.type)},n.isStatement=function(e){switch(null==e?void 0:e.type){case"BlockStatement":case"BreakStatement":case"ContinueStatement":case"EmptyStatement":case"ExpressionStatement":case"ForInStatement":case"ForStatement":case"FunctionDeclaration":case"IfStatement":case"ReturnStatement":case"VariableDeclaration":return!0;default:return!1}},n.isBlockStatement=function(e){return"BlockStatement"===(null==e?void 0:e.type)},n.isBlockComment=function(e){return"BlockComment"===(null==e?void 0:e.type)},n.isBreakStatement=function(e){return"BreakStatement"===(null==e?void 0:e.type)},n.isContinueStatement=function(e){return"ContinueStatement"===(null==e?void 0:e.type)},n.isEmptyStatement=function(e){return"EmptyStatement"===(null==e?void 0:e.type)},n.isExpressionStatement=function(e){return"ExpressionStatement"===(null==e?void 0:e.type)},n.isForInStatement=function(e){return"ForInStatement"===(null==e?void 0:e.type)},n.isForStatement=function(e){return"ForStatement"===(null==e?void 0:e.type)},n.isFunctionDeclaration=function(e){return"FunctionDeclaration"===(null==e?void 0:e.type)},n.isIfStatement=function(e){return"IfStatement"===(null==e?void 0:e.type)},n.isReturnStatement=function(e){return"ReturnStatement"===(null==e?void 0:e.type)},n.isVariableDeclaration=function(e){return"VariableDeclaration"===(null==e?void 0:e.type)},n.isExpression=function(e){switch(null==e?void 0:e.type){case"ArrayExpression":case"AssignmentExpression":case"BinaryExpression":case"CallExpression":case"Identifier":case"Literal":case"LogicalExpression":case"MemberExpression":case"ObjectExpression":case"TemplateLiteral":case"UpdateExpression":case"UnaryExpression":return!0;default:return!1}},n.isArrayExpression=function(e){return"ArrayExpression"===(null==e?void 0:e.type)},n.isAssignmentExpression=function(e){return"AssignmentExpression"===(null==e?void 0:e.type)},n.isBinaryExpression=function(e){return"BinaryExpression"===(null==e?void 0:e.type)},n.isCallExpression=function(e){return"CallExpression"===(null==e?void 0:e.type)},n.isIdentifier=function(e){return"Identifier"===(null==e?void 0:e.type)},n.isLiteral=function(e){return"Literal"===(null==e?void 0:e.type)},n.isLogicalExpression=function(e){return"LogicalExpression"===(null==e?void 0:e.type)},n.isObjectExpression=function(e){return"ObjectExpression"===(null==e?void 0:e.type)},n.isTemplateLiteral=function(e){return"TemplateLiteral"===(null==e?void 0:e.type)},n.isMemberExpression=function(e){return"MemberExpression"===(null==e?void 0:e.type)},n.isUnaryExpression=function(e){return"UnaryExpression"===(null==e?void 0:e.type)},n.isUpdateExpression=function(e){return"UpdateExpression"===(null==e?void 0:e.type)},n.isVariableDeclarator=function(e){return"VariableDeclarator"===(null==e?void 0:e.type)},n.isProperty=function(e){return"Property"===(null==e?void 0:e.type)},n.isTemplateElement=function(e){return"TemplateElement"===(null==e?void 0:e.type)}}));
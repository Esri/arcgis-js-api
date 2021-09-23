/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t={concatenate:{min:"0",max:"*"},expects:{min:"1",max:"*"},getfeatureset:{min:"1",max:"2"},week:{min:"1",max:"2"},fromjson:{min:"1",max:"1"},length3d:{min:"1",max:"2"},tohex:{min:"1",max:"1"},hash:{min:"1",max:"1"},isoweek:{min:"1",max:"1"},isoweekday:{min:"1",max:"1"},isomonth:{min:"1",max:"1"},isoyear:{min:"1",max:"1"},resize:{min:"2",max:"3"},slice:{min:"0",max:"*"},splice:{min:"0",max:"*"},push:{min:"2",max:"2"},pop:{min:"1",max:"1"},includes:{min:"2",max:"2"},array:{min:"1",max:"2"},front:{min:"1",max:"1"},back:{min:"1",max:"1"},insert:{min:"3",max:"3"},erase:{min:"2",max:"2"},split:{min:"2",max:"4"},guid:{min:"0",max:"1"},today:{min:"0",max:"0"},angle:{min:"2",max:"3"},bearing:{min:"2",max:"3"},urlencode:{min:"1",max:"1"},now:{min:"0",max:"0"},timestamp:{min:"0",max:"0"},day:{min:"1",max:"1"},month:{min:"1",max:"1"},year:{min:"1",max:"1"},hour:{min:"1",max:"1"},second:{min:"1",max:"1"},millisecond:{min:"1",max:"1"},minute:{min:"1",max:"1"},weekday:{min:"1",max:"1"},toutc:{min:"1",max:"1"},tolocal:{min:"1",max:"1"},date:{min:"0",max:"7"},datediff:{min:"2",max:"3"},dateadd:{min:"2",max:"3"},trim:{min:"1",max:"1"},text:{min:"1",max:"2"},left:{min:"2",max:"2"},right:{min:"2",max:"2"},mid:{min:"2",max:"3"},upper:{min:"1",max:"1"},proper:{min:"1",max:"2"},lower:{min:"1",max:"1"},find:{min:"2",max:"3"},iif:{min:"3",max:"3"},decode:{min:"2",max:"*"},when:{min:"2",max:"*"},defaultvalue:{min:"2",max:"2"},isempty:{min:"1",max:"1"},domaincode:{min:"2",max:"4"},domainname:{min:"2",max:"4"},polygon:{min:"1",max:"1"},point:{min:"1",max:"1"},polyline:{min:"1",max:"1"},extent:{min:"1",max:"1"},multipoint:{min:"1",max:"1"},ringisclockwise:{min:"1",max:"1"},geometry:{min:"1",max:"1"},count:{min:"0",max:"*"},number:{min:"1",max:"2"},acos:{min:"1",max:"1"},asin:{min:"1",max:"1"},atan:{min:"1",max:"1"},atan2:{min:"2",max:"2"},ceil:{min:"1",max:"2"},floor:{min:"1",max:"2"},round:{min:"1",max:"2"},cos:{min:"1",max:"1"},exp:{min:"1",max:"1"},log:{min:"1",max:"1"},min:{min:"0",max:"*"},constrain:{min:"3",max:"3"},console:{min:"0",max:"*"},max:{min:"0",max:"*"},pow:{min:"2",max:"2"},random:{min:"0",max:"0"},sqrt:{min:"1",max:"1"},sin:{min:"1",max:"1"},tan:{min:"1",max:"1"},abs:{min:"1",max:"1"},isnan:{min:"1",max:"1"},stdev:{min:"0",max:"*"},average:{min:"0",max:"*"},mean:{min:"0",max:"*"},sum:{min:"0",max:"*"},variance:{min:"0",max:"*"},distinct:{min:"0",max:"*"},first:{min:"1",max:"1"},top:{min:"2",max:"2"},boolean:{min:"1",max:"1"},dictionary:{min:"0",max:"*"},typeof:{min:"1",max:"1"},reverse:{min:"1",max:"1"},replace:{min:"3",max:"4"},sort:{min:"1",max:"2"},feature:{min:"1",max:"*"},haskey:{min:"2",max:"2"},indexof:{min:"2",max:"2"},disjoint:{min:"2",max:"2"},intersects:{min:"2",max:"2"},touches:{min:"2",max:"2"},crosses:{min:"2",max:"2"},within:{min:"2",max:"2"},contains:{min:"2",max:"2"},overlaps:{min:"2",max:"2"},equals:{min:"2",max:"2"},relate:{min:"3",max:"3"},intersection:{min:"2",max:"2"},union:{min:"1",max:"2"},difference:{min:"2",max:"2"},symmetricdifference:{min:"2",max:"2"},clip:{min:"2",max:"2"},cut:{min:"2",max:"2"},area:{min:"1",max:"2"},areageodetic:{min:"1",max:"2"},length:{min:"1",max:"2"},lengthgeodetic:{min:"1",max:"2"},distancegeodetic:{min:"2",max:"3"},distance:{min:"2",max:"3"},densify:{min:"2",max:"3"},densifygeodetic:{min:"2",max:"3"},generalize:{min:"2",max:"4"},buffer:{min:"2",max:"3"},buffergeodetic:{min:"2",max:"3"},offset:{min:"2",max:"6"},rotate:{min:"2",max:"3"},issimple:{min:"1",max:"1"},simplify:{min:"1",max:"1"},centroid:{min:"1",max:"1"},isselfintersecting:{min:"1",max:"1"},multiparttosinglepart:{min:"1",max:"1"},setgeometry:{min:"2",max:"2"},portal:{min:"1",max:"1"},getuser:{min:"1",max:"2"},subtypes:{min:"1",max:"1"},subtypecode:{min:"1",max:"1"},subtypename:{min:"1",max:"1"},domain:{min:"2",max:"3"},convertdirection:{min:"3",max:"3"},schema:{min:"1",max:"1"}};for(const R in t)t[R].fmin=t[R].min,t[R].fmax=t[R].max;const n=["featureset","getuser","featuresetbyid","featuresetbyname","featuresetbyassociation","featuresetbyrelationshipname","featuresetbyurl","getfeatureset","attachments","featuresetbyportalitem"],a=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","length3d","lengthgeodetic","distance","distancegeodetic","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","simplify","multiparttosinglepart"];function r(e){return"string"==typeof e||e instanceof String}function i(e,n){const a=t[e.name.toLowerCase()];void 0===a?t[e.name.toLowerCase()]="sync"===n?{min:e.min,max:e.max}:{fmin:e.min,fmax:e.max}:"sync"===n?(a.min=e.min,a.max=e.max):(a.fmin=e.min,a.fmax=e.max)}function s(e,t){return"0"!==e.min&&t.length<Number(e.min)||"*"!==e.max&&t.length>Number(e.max)?-2:1}function o(e,t,n){if(null!==n.localScope&&void 0!==n.localScope[e.toLowerCase()]){const a=n.localScope[e.toLowerCase()];if("FormulaFunction"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),s(a.signature,t);if("any"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),s(a.signature,t)}if(void 0!==n.globalScope[e.toLowerCase()]){const a=n.globalScope[e.toLowerCase()];if("FormulaFunction"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),s(a.signature,t);if("any"===a.type)return void 0===a.signature&&(a.signature={min:"0",max:"*"}),s(a.signature,t)}return-1}function l(e,t){if(e)for(const n of e)c(n,t)}function c(e,t){if(e&&!1!==t(e))switch(e.type){case"ArrayExpression":l(e.elements,t);break;case"AssignmentExpression":case"BinaryExpression":c(e.left,t),c(e.right,t);break;case"BlockStatement":l(e.body,t);break;case"BreakStatement":break;case"CallExpression":c(e.callee,t),l(e.arguments,t);break;case"ContinueStatement":case"EmptyStatement":break;case"ExpressionStatement":c(e.expression,t);break;case"ForInStatement":c(e.left,t),c(e.right,t),c(e.body,t);break;case"ForStatement":c(e.init,t),c(e.test,t),c(e.update,t),c(e.body,t);break;case"FunctionDeclaration":c(e.id,t),l(e.params,t),c(e.body,t);break;case"Identifier":break;case"IfStatement":c(e.test,t),c(e.consequent,t),c(e.alternate,t);break;case"Literal":break;case"LogicalExpression":c(e.left,t),c(e.right,t);break;case"MemberExpression":c(e.object,t),c(e.property,t);break;case"ObjectExpression":l(e.properties,t);break;case"Program":l(e.body,t);break;case"Property":c(e.key,t),c(e.value,t);break;case"ReturnStatement":case"UnaryExpression":case"UpdateExpression":c(e.argument,t);break;case"VariableDeclaration":l(e.declarations,t);break;case"VariableDeclarator":c(e.id,t),c(e.init,t);break;case"TemplateLiteral":l(e.expressions,t),l(e.quasis,t)}}function m(e,t=!0){let n=g(e,"SYNTAX","UNREOGNISED");try{switch(e.type){case"VariableDeclarator":return"Identifier"!==e.id.type?g(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==e.init?m(e.init,!1):"";case"VariableDeclaration":for(let a=0;a<e.declarations.length;a++)if(n=m(e.declarations[a],t),""!==n)return n;return"";case"ForInStatement":if(n=m(e.left,t),""!==n)return n;if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return g(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return g(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return g(e,"SYNTAX","LEFTNOTVAR");return n=m(e.right,t),""!==n?n:(n=m(e.body,t),""!==n?n:"");case"ForStatement":return null!==e.test&&(n=m(e.test,t),""!==n)||(null!==e.init&&(n=m(e.init,t),""!==n)||null!==e.update&&(n=m(e.update,t),""!==n)||null!==e.body&&(n=m(e.body,t),""!==n))?n:"";case"ContinueStatement":case"EmptyStatement":case"BreakStatement":return"";case"IfStatement":return n=m(e.test,t),""!==n||null!==e.consequent&&(n=m(e.consequent,!1),""!==n)||null!==e.alternate&&(n=m(e.alternate,!1),""!==n)?n:"";case"BlockStatement":{const a=[];for(let t=0;t<e.body.length;t++)"EmptyStatement"!==e.body[t].type&&a.push(e.body[t]);e.body=a;for(let r=0;r<e.body.length;r++)if(n=m(e.body[r],t),""!==n)return n;return""}case"FunctionDeclaration":return!1===t?g(e,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==e.id.type?g(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):m(e.body,!1);case"ReturnStatement":return null!==e.argument?m(e.argument,t):"";case"UpdateExpression":return"Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type?g(e,"SYNTAX","ASSIGNMENTTOVARSONLY"):m(e.argument,t);case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return g(e,"SYNTAX","ASSIGNMENTTOVARSONLY");if(n=m(e.left,t),""!==n)return n;switch(e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:return g(e,"SYNTAX","OPERATORNOTRECOGNISED")}return m(e.right,!1);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type||e.expression.type,m(e.expression,!1);case"Identifier":n="";break;case"MemberExpression":return n=m(e.object,t),""!==n?n:!0===e.computed?m(e.property,t):"";case"Literal":case"TemplateElement":return"";case"CallExpression":if("Identifier"!==e.callee.type)return g(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(let a=0;a<e.arguments.length;a++)if(n=m(e.arguments[a],t),""!==n)return n;return"";case"UnaryExpression":n=m(e.argument,t);break;case"BinaryExpression":if(n=m(e.left,t),""!==n)return n;if(n=m(e.right,t),""!==n)return n;switch(e.operator){case"|":case"&":case">>":case"<<":case">>":case">>>":case"^":case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:return g(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"LogicalExpression":if(n=m(e.left,t),""!==n)return n;if(n=m(e.right),""!==n)return n;switch(e.operator){case"&&":case"||":break;default:return g(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"ArrayExpression":n="";for(let a=0;a<e.elements.length;a++)if(n=m(e.elements[a],t),""!==n)return n;return n;case"TemplateLiteral":n="";for(let a=0;a<e.quasis.length;a++)if(n=m(e.quasis[a],t),""!==n)return n;for(let a=0;a<e.expressions.length;a++)if(n=m(e.expressions[a],t),""!==n)return n;return n;case"ObjectExpression":n="";for(let a=0;a<e.properties.length;a++){if(n="",null!==e.properties[a].key&&("Literal"!==e.properties[a].key.type&&"Identifier"!==e.properties[a].key.type&&(n=g(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[a].key.type)){const t=e.properties[a].key,r="value"in t?t.value:null;"string"==typeof r||r instanceof String||(n=g(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===n&&(n=m(e.properties[a],t)),""!==n)return n}return n;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?g(e,"SYNTAX","ONLYLITERAL"):("Identifier"!==e.key.type&&(n=m(e.key,t),""!==n)||(n=m(e.value,t)),n);default:return n}return n}catch(a){throw a}}function p(e,t){let n=g(e,"SYNTAX","UNREOGNISED"),a=null,r="";try{switch(e.type){case"VariableDeclarator":{const n=null===e.init?"":p(e.init,t);return""!==n?n:("Identifier"===e.id.type&&(null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),"")}case"FunctionDeclaration":return a=x(e.id.name.toLowerCase(),e),r=N(e,t),""!==r?r:null!==t.localScope?g(e,"SYNTAX","GLOBALFUNCTIONSONLY"):(a.isnative=!1,t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[a]},"");case"VariableDeclaration":n="";for(let a=0;a<e.declarations.length;a++)if(n=p(e.declarations[a],t),""!==n)return n;return n;case"IfStatement":return n=p(e.test,t),""!==n?n:"AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type?g(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==e.consequent&&(n=p(e.consequent,t),""!==n)||null!==e.alternate&&(n=p(e.alternate,t),""!==n)?n:"";case"EmptyStatement":return"";case"BlockStatement":for(let a=0;a<e.body.length;a++)if(n=p(e.body[a],t),""!==n)return n;return"";case"ReturnStatement":return null!==e.argument?p(e.argument,t):"";case"ForInStatement":if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return g(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return g(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return g(e,"SYNTAX","LEFTNOTVAR");return n=p(e.left,t),""!==n?n:(n=p(e.right,t),""!==n?n:(n=p(e.body,t),""!==n?n:""));case"ForStatement":return null!==e.init&&(n=p(e.init,t),""!==n)||(null!==e.test&&(n=p(e.test,t),""!==n)||null!==e.body&&(n=p(e.body,t),""!==n)||null!==e.update&&(n=p(e.update,t),""!==n))?n:"";case"BreakStatement":case"ContinueStatement":return"";case"UpdateExpression":{if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)return g(e,"SYNTAX","ASSIGNMENTTOVARSONLY");let n=!1;return"MemberExpression"===e.argument.type?p(e.argument,t):(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(n=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(n=!0),!1===n?"Identifier "+e.argument.name+" has not been declared.":"")}case"AssignmentExpression":{if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return g(e,"SYNTAX","ASSIGNMENTTOVARSONLY");let n=p(e.right,t);if(""!==n)return n;let a=!1;return"MemberExpression"===e.left.type?(n=p(e.left,t),""!==n?n:""):(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(a=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(a=!0),!1===a?"Identifier "+e.left.name+" has not been declared.":"")}case"ExpressionStatement":return"AssignmentExpression"===e.expression.type||e.expression.type,p(e.expression,t);case"Identifier":{const a=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[a])return"";n=void 0!==t.globalScope[a]?"":g(e,"SYNTAX","VARIABLENOTFOUND");break}case"MemberExpression":return n=p(e.object,t),""!==n?n:!0===e.computed?p(e.property,t):"";case"Literal":case"TemplateElement":return"";case"CallExpression":{if("Identifier"!==e.callee.type)return g(e,"SYNTAX","ONLYNODESSUPPORTED");n="";for(let r=0;r<e.arguments.length;r++)if(n=p(e.arguments[r],t),""!==n)return n;const a=o(e.callee.name,e.arguments,t);-1===a&&(n=g(e,"SYNTAX","NOTFOUND")),-2===a&&(n=g(e,"SYNTAX","WRONGSIGNATURE"));break}case"UnaryExpression":n=p(e.argument,t);break;case"BinaryExpression":return n=p(e.left,t),""!==n?n:(n=p(e.right,t),""!==n?n:"");case"LogicalExpression":return n=p(e.left,t),""!==n?n:"AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type?g(e.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(n=p(e.right,t),""!==n?n:"AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type?g(e.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case"ArrayExpression":n="";for(let a=0;a<e.elements.length;a++)if(n=p(e.elements[a],t),""!==n)return n;return n;case"TemplateLiteral":n="";for(let a=0;a<e.quasis.length;a++)if(n=p(e.quasis[a],t),""!==n)return n;for(let a=0;a<e.expressions.length;a++)if(n=p(e.expressions[a],t),""!==n)return n;return n;case"ObjectExpression":n="";for(let a=0;a<e.properties.length;a++){if(n="",null!==e.properties[a].key&&("Literal"!==e.properties[a].key.type&&"Identifier"!==e.properties[a].key.type&&(n=g(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[a].key.type)){const t=e.properties[a].key,r="value"in t?t.value:null;"string"==typeof r||r instanceof String||(n=g(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===n&&(n=p(e.properties[a],t)),""!==n)return n}return n;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?g(e,"SYNTAX","ONLYLITERAL"):("Identifier"!==e.key.type&&(n=p(e.key,t),""!==n)||(n=p(e.value,t)),n);case"Program":case"TemplateElement":return n;default:return k(e),n}return n}catch(i){throw i}}function u(e,t){let n=!1;const a=t.toLowerCase();return c(e,(e=>!n&&("Identifier"===e.type&&e.name&&e.name.toLowerCase()===a&&(n=!0),!0))),n}function f(e,t){let n=!1;const a=t.toLowerCase();return c(e,(e=>!n&&("CallExpression"!==e.type||"Identifier"!==e.callee.type||!e.callee.name||e.callee.name.toLowerCase()!==a||(n=!0,!1)))),n}function d(e){const t=[];return c(e,(e=>"MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?t.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&t.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase()),!1))),t}function y(e){const t=[];return c(e,(e=>{if("CallExpression"===e.type&&"Identifier"===e.callee.type&&"expects"===e.callee.name.toLowerCase()){let n="";for(let a=0;a<(e.arguments||[]).length;a++)0===a?"Identifier"===e.arguments[a].type&&(n=e.arguments[a].name.toLowerCase()):n&&"Literal"===e.arguments[a].type&&r(e.arguments[a].value)&&t.push(n+"."+e.arguments[a].value.toLowerCase());return!1}return"MemberExpression"!==e.type||"Identifier"!==e.object.type||(!1===e.computed&&e.object&&e.object.name&&e.property&&"Identifier"===e.property.type&&e.property.name?t.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase()):e.object&&e.object.name&&e.property&&"Literal"===e.property.type&&"string"==typeof e.property.value&&t.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase()),!1)})),t}function x(e,t){const n=[];if(void 0!==t.params&&null!==t.params)for(let a=0;a<t.params.length;a++)n.push("any");return{name:e,return:"any",params:n}}function N(e,t){const n={globalScope:t.globalScope,localScope:{}};for(let a=0;a<e.params.length;a++){const t=e.params[a].name;n.localScope[t.toLowerCase()]={type:"any"}}return p(e.body,n)}function S(e,t,n,a){const r={};null==e&&(e={}),null==n&&(n={}),r.infinity={type:"any"},r.textformatting={type:"any"},r.pi={type:"any"};for(const i in t)"sync"===a&&void 0!==t[i].min?r[i]={type:"FormulaFunction",signature:{min:t[i].min,max:t[i].max}}:"sync"!==a&&void 0!==t[i].fmin&&(r[i]={type:"FormulaFunction",signature:{min:t[i].fmin,max:t[i].fmax}});for(let i=0;i<n.length;i++){const e=n[i];r[e.name]={type:"FormulaFunction",signature:e}}for(const i in e)r[i]=e[i],r[i].type="any";return r}function E(e,n,a="async",r=t){const i={globalScope:S(n.vars,r,n.customFunctions,a),localScope:null};return p(e.body[0].body,i)}function b(e){return"BlockStatement"!==e.body[0].body.type?"Invalid formula content.":m(e.body[0].body)}function g(e,t,n){let a="";switch(t){case"SYNTAX":a="Syntax Error: ";break;case"RUNTIME":a="Runtime Error: ";break;default:a="Syntax Error: "}try{switch(e.type){case"IfStatement":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":a+=" Non Boolean used as Condition"}break;case"UpdateExpression":case"AssignmentExpression":switch(n){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":a+=" Assignments not be made in logical tests";break;case"ASSIGNMENTTOVARSONLY":a+=" Assignments can only be made to identifiers"}break;case"ExpressionStatement":a+=" Assignments can only be made to identifiers";break;case"FunctionDeclaration":switch(n){case"GLOBALFUNCTIONSONLY":a+=" Functions cannot be declared as variables";break;case"FUNCTIONMUSTHAVEIDENTIFIER":a+=" Function Definition must have an identifier"}break;case"VariableDeclaration":a+=" Only 1 variable can be declared at a time";break;case"VariableDeclarator":switch(n){case"FUNCTIONVARIABLEDECLARATOR":a+=" Functions cannot be declared as variables";break;case"VARIABLEMUSTHAVEIDENTIFIER":a+=" Variable Definition must have an identifier"}break;case"Identifier":a+=" Identifier Not Found. ",a+=e.name;break;case"ObjectExpression":if("OBJECTPROPERTYMUSTBESTRING"===n)a+=" Property name must be a string";break;case"ForStatement":if("CANNOT_USE_NONBOOLEAN_IN_CONDITION"===n)a+=" Non Boolean used as Condition";break;case"ForInStatement":switch(n){case"ONLY1VAR":a+=" Can only declare 1 var for use with IN";break;case"CANNOTDECLAREVAL":a+=" Can only declare value for use with IN";break;case"LEFTNOVAR":a+="Must provide a variable to iterate with.";break;case"VARIABLENOTDECLARED":a+="Variable must be declared before it is used..";break;case"CANNOTITERATETHISTYPE":a+="This type cannot be used in an IN loop"}break;case"MemberExpression":switch(n){case"PROPERTYNOTFOUND":a+="Cannot find member property. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"OUTOFBOUNDS":a+="Out of Bounds. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"NOTFOUND":a+="Cannot call member method on null. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:"";break;case"INVALIDTYPE":a+="Cannot call member property on object of this type. ",a+=!1===e.computed&&"Identifier"===e.property.type?e.property.name:""}break;case"Property":if("ONLYLITERAL"===n)a+="Property names must be literals or identifiers";break;case"Literal":break;case"CallExpression":switch(n){case"WRONGSIGNATURE":a+="Function signature does not match: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"ONLYNODESUPPORTED":a+="Functions must be declared.",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTAFUNCTION":a+="Not a Function: ",a+="Identifier"===e.callee.type?e.callee.name:"";break;case"NOTFOUND":a+="Function Not Found: "+("Identifier"===e.callee.type?e.callee.name:"")}break;case"UnaryExpression":switch(n){case"NOTSUPPORTEDUNARYOPERATOR":a+="Operator "+e.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case"NOTSUPPORTEDTYPE":a+="Unary operator "+e.operator+" cannot be used with this argument."}case"BinaryExpression":if("OPERATORNOTRECOGNISED"===n)a+="Binary Operator not recognised "+e.operator;break;case"LogicalExpression":switch(n){case"ONLYBOOLEAN":a+="Operator "+e.operator+" cannot be used. Only || or && are allowed values";break;case"ONLYORORAND":a+="Logical Expression "+e.operator+" being applied to parameters that are not boolean."}break;case"ArrayExpression":if("FUNCTIONCONTEXTILLEGAL"===n)a+=" Cannot Put Function inside Array.";break;default:a+="Expression contains unrecognised code structures."}}catch(r){throw r}return a}function T(e,t,n){return{line:e.loc.start.line,character:e.loc.start.column,reason:g(e,t,n)}}function O(e,t,n,a){const r={globalScope:t.globalScope,localScope:{}};for(let i=0;i<e.params.length;i++){const t=e.params[i].name;r.localScope[t.toLowerCase()]={type:"any"}}A(e.body,r,n,a,!1)}function A(e,t,n,a,r=!0){if(null===e)throw new Error("Unnexpexted Expression Syntax");let i=null;try{switch(e.type){case"VariableDeclarator":return"Identifier"!==e.id.type?a.push(T(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==t.localScope?t.localScope[e.id.name.toLowerCase()]:t.globalScope[e.id.name.toLowerCase()],null===t.localScope?t.globalScope[e.id.name.toLowerCase()]={type:"any"}:t.localScope[e.id.name.toLowerCase()]={type:"any"}),void(null!==e.init&&A(e.init,t,n,a,r));case"FunctionDeclaration":return!1===r&&a.push(T(e,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==e.id.type&&a.push(T(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),i=x("",e),O(e,t,n,a),null!==t.localScope&&a.push(T(e,"SYNTAX","GLOBALFUNCTIONSONLY")),i.isnative=!1,void("Identifier"===e.id.type&&(t.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[i]}));case"VariableDeclaration":for(let i=0;i<e.declarations.length;i++)A(e.declarations[i],t,n,a,r);return;case"IfStatement":return null!==e.test&&(A(e.test,t,n,a,r),"AssignmentExpression"!==e.test.type&&"UpdateExpression"!==e.test.type||a.push(T(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==e.consequent&&A(e.consequent,t,n,a,r),void(null!==e.alternate&&A(e.alternate,t,n,a,r));case"EmptyStatement":return;case"BlockStatement":if(null!==e.body)for(let i=0;i<e.body.length;i++)A(e.body[i],t,n,a,r);return;case"ReturnStatement":return void(null!==e.argument&&A(e.argument,t,n,a,r));case"ForInStatement":return"VariableDeclaration"===e.left.type?(e.left.declarations.length>1&&a.push(T(e,"SYNTAX","ONLY1VAR")),null!==e.left.declarations[0].init&&a.push(T(e,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==e.left.type&&a.push(T(e,"SYNTAX","LEFTNOTVAR")),A(e.left,t,n,a,r),A(e.right,t,n,a,r),void A(e.body,t,n,a,r);case"ForStatement":return null!==e.init&&A(e.init,t,n,a,r),null!==e.test&&A(e.test,t,n,a,r),null!==e.body&&A(e.body,t,n,a,r),void(null!==e.update&&A(e.update,t,n,a,r));case"BreakStatement":case"ContinueStatement":return;case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)a.push(T(e,"SYNTAX","ASSIGNMENTTOVARSONLY"));else{if("Identifier"===e.argument.type){let r=!1;!1===n&&(null!==t.localScope&&void 0!==t.localScope[e.argument.name.toLowerCase()]&&(r=!0),void 0!==t.globalScope[e.argument.name.toLowerCase()]&&(r=!0),!1===r&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."}))}"MemberExpression"===e.argument.type&&A(e.argument,t,n,a,r)}return;case"AssignmentExpression":{switch("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type&&a.push(T(e,"SYNTAX","ASSIGNMENTTOVARSONLY")),e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:a.push(T(e,"SYNTAX","OPERATORNOTRECOGNISED"))}A(e.right,t,n,a,r);let i=!1;return"Identifier"===e.left.type&&(null!==t.localScope&&void 0!==t.localScope[e.left.name.toLowerCase()]&&(i=!0),void 0!==t.globalScope[e.left.name.toLowerCase()]&&(i=!0),!1===n&&!1===i&&a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.left.name+" has not been declared."})),void("MemberExpression"===e.left.type&&A(e.left,t,n,a,r))}case"ExpressionStatement":return"AssignmentExpression"===e.expression.type||e.expression.type,void A(e.expression,t,n,a,r);case"Identifier":{const r=e.name.toLowerCase();if(null!==t.localScope&&void 0!==t.localScope[r])return;if(void 0!==t.globalScope[r])return;!1===n&&a.push(T(e,"SYNTAX","VARIABLENOTFOUND"));break}case"MemberExpression":return A(e.object,t,n,a,r),void(!0===e.computed&&A(e.property,t,n,a,r));case"Literal":case"TemplateElement":return;case"CallExpression":"Identifier"!==e.callee.type&&a.push(T(e,"SYNTAX","ONLYNODESSUPPORTED"));for(let i=0;i<e.arguments.length;i++)A(e.arguments[i],t,n,a,r);if("Identifier"===e.callee.type){const r=o(e.callee.name,e.arguments,t);!1===n&&-1===r&&a.push(T(e,"SYNTAX","NOTFOUND")),-2===r&&a.push(T(e,"SYNTAX","WRONGSIGNATURE"))}return;case"UnaryExpression":return void A(e.argument,t,n,a,r);case"BinaryExpression":switch(A(e.left,t,n,a,r),A(e.right,t,n,a,r),e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":case"&":case"|":case"^":case"<<":case">>":case">>>":break;default:a.push(T(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return;case"LogicalExpression":switch(e.operator){case"&&":case"||":break;default:a.push(T(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return A(e.left,t,n,a,r),"AssignmentExpression"!==e.left.type&&"UpdateExpression"!==e.left.type||a.push(T(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),A(e.right,t,n,a,r),void("AssignmentExpression"!==e.right.type&&"UpdateExpression"!==e.right.type||a.push(T(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case"ArrayExpression":for(let i=0;i<e.elements.length;i++)A(e.elements[i],t,n,a,r);return;case"TemplateLiteral":for(let i=0;i<e.quasis.length;i++)A(e.quasis[i],t,n,a,r);for(let i=0;i<e.expressions.length;i++)A(e.expressions[i],t,n,a,r);return;case"ObjectExpression":for(let i=0;i<e.properties.length;i++)A(e.properties[i],t,n,a,r);return;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type&&a.push(T(e,"SYNTAX","ONLYLITERAL")),"Literal"===e.key.type&&A(e.key,t,n,a,r),void A(e.value,t,n,a,r);default:a.push(T(e,"SYNTAX","UNRECOGNISED"))}return}catch(s){a.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Unnexpected Syntax"})}}function I(e,n,a,r="async",i=t){const s=[];if("BlockStatement"!==e.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];null==n&&(n={vars:{},customFunctions:[]});const o={globalScope:S(n.vars,i,n.customFunctions,r),localScope:null};try{A(e.body[0].body,o,a,s)}catch(l){}return s}function h(e){const t=[];return c(e,(e=>("CallExpression"===e.type&&"Identifier"===e.callee.type&&t.push(e.callee.name.toLowerCase()),!0))),t}function L(e,t=[]){let r=null;if(void 0===e.usesFeatureSet){null===r&&(r=h(e)),e.usesFeatureSet=!1;for(let t=0;t<r.length;t++)n.indexOf(r[t])>-1&&(e.usesFeatureSet=!0,e.isAsync=!0);if(!1===e.usesFeatureSet&&t&&t.length>0)for(const n of t)if(u(e,n)){e.usesFeatureSet=!0,e.isAsync=!0;break}}if(void 0===e.usesGeometry){e.usesGeometry=!1,null===r&&(r=h(e));for(let t=0;t<r.length;t++)a.indexOf(r[t])>-1&&(e.usesGeometry=!0)}}function C(e){const t=h(e);for(let a=0;a<t.length;a++)if(n.indexOf(t[a])>-1)return!0;return!1}function k(e){}e.addFunctionDeclaration=i,e.checkFunctionSignature=s,e.checkScript=I,e.constructGlobalScope=S,e.extractAllIssues=A,e.extractAllIssuesInFunction=O,e.extractFunctionDeclaration=x,e.findExpectedFieldLiterals=y,e.findFieldLiterals=d,e.findFunction=o,e.findFunctionCalls=h,e.findScriptDependencies=L,e.functionDecls=t,e.makeError=T,e.nodeErrorMessage=g,e.referencesFunction=f,e.referencesMember=u,e.scriptUsesFeatureSet=C,e.testValidityOfExpression=p,e.validateFunction=N,e.validateLanguage=b,e.validateLanguageNode=m,e.validateScript=E,e.walk=c,Object.defineProperty(e,"__esModule",{value:!0})}));

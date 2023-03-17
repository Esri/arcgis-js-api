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

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator","./polyfill/tsSupport/assign","./polyfill/tsSupport/spreadarray","./polyfill/tsSupport/extends","./ArcadeModule","./ArcadeModuleLoader","./Dictionary","./executionError","./Feature","./FunctionWrapper","./languageUtils","./treeAnalysis","./functions/array","./functions/date","./functions/geomasync","./functions/geometry","./functions/maths","./functions/stats","./functions/string","../geometry/Geometry","../SpatialReference"],(function(e,r,t,n,o,i,a,u,c,s,l,d,f,p,E,h,v,x,w,m,b,g,y,A){"use strict";function C(e){return e&&"function"==typeof e.then}Object.defineProperty(r,"__esModule",{value:!0}),r.executeScript=r.extend=r.functionHelper=void 0;function S(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a;return n(this,(function(n){switch(n.label){case 0:t=[],o=0,n.label=1;case 1:return o<r.arguments.length?(a=(i=t).push,[4,O(e,r.arguments[o])]):[3,4];case 2:a.apply(i,[n.sent()]),n.label=3;case 3:return o++,[3,1];case 4:return[2,t]}}))}))}function R(e,r,o){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return!0===r.preparsed?[2,o(e,null,r.arguments)]:[4,S(e,r)];case 1:return t=n.sent(),[2,o(e,r,t)]}}))}))}var F=function(e){function r(r,t){var n=e.call(this)||this;return n.definition=null,n.context=null,n.definition=r,n.context=t,n}return a(r,e),r.prototype.createFunction=function(e){var r=this;return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o={spatialReference:r.context.spatialReference,console:r.context.console,lrucache:r.context.lrucache,timeReference:r.context.timeReference?r.context.timeReference:null,exports:r.context.exports,libraryResolver:r.context.libraryResolver,interceptor:r.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:r.context.globalScope};if(o.depthCounter.depth>64)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.MaximumCallDepth,null);return fe(r.definition,o,t,null)}},r.prototype.call=function(e,r){var t=this;return N(e,r,(function(n,o,i){var a,u={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeReference:null!==(a=e.timeReference)&&void 0!==a?a:null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(u.depthCounter.depth>64)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.MaximumCallDepth,r);return fe(t.definition,u,i,r)}))},r.prototype.marshalledCall=function(e,r,o,i){var a=this;return i(e,r,(function(u,c,s){return t(a,void 0,void 0,(function(){var t,a,u;return n(this,(function(n){switch(n.label){case 0:return t={spatialReference:e.spatialReference,globalScope:o.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeReference:null!==(u=e.timeReference)&&void 0!==u?u:null,interceptor:e.interceptor,localScope:{}},s=s.map((function(r){return!p.isFunctionParameter(r)||r instanceof f.ScopeMarshalledFunction?r:f.wrapModuleScopedResponse(r,e,i)})),a=f.wrapModuleScopedResponse,[4,fe(this.definition,t,s,r)];case 1:return[2,a.apply(void 0,[n.sent(),o,i])]}}))}))}))},r}(f.ArcadeFunction),I=function(e){function r(r){return e.call(this,r)||this}return a(r,e),r.prototype.global=function(e){return t(this,void 0,void 0,(function(){var r,t,o;return n(this,(function(n){switch(n.label){case 0:return(r=this.executingContext.globalScope[e.toLowerCase()]).valueset?[3,2]:(t=r,[4,O(this.executingContext,r.node)]);case 1:t.value=n.sent(),r.valueset=!0,n.label=2;case 2:return p.isFunctionParameter(r.value)&&(r.value instanceof f.ScopeMarshalledFunction||((o=new f.ScopeMarshalledFunction).fn=r.value,o.parameterEvaluator=N,o.context=this.executingContext,r.value=o)),[2,r.value]}}))}))},r.prototype.setGlobal=function(e,r){if(p.isFunctionParameter(r))throw new l.ArcadeExecutionError(null,l.ExecutionErrorCodes.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:r,valueset:!0,node:null}},r.prototype.hasGlobal=function(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]},r.prototype.loadModule=function(e){var r;return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return null==(t=e.spatialReference)&&(t=new A({wkid:102100})),this.moduleScope=ve({},e.customfunctions,e.timeReference),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new c.ArcadeModuleLoader(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:xe,lrucache:e.lrucache,timeReference:null!==(r=e.timeReference)&&void 0!==r?r:null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},[4,O(this.executingContext,this.source.syntax)];case 1:return n.sent(),[2]}}))}))},r}(u.ArcadeModule);function N(e,r,o){return t(this,void 0,void 0,(function(){var t,i,a;return n(this,(function(n){switch(n.label){case 0:return!0===r.preparsed?(C(t=o(e,null,r.arguments)),[2,t]):[4,S(e,r)];case 1:return i=n.sent(),C(a=o(e,r,i)),[2,a]}}))}))}function O(e,r,o){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return r.breakpoint&&!0!==o?[4,r.breakpoint()]:[3,2];case 1:return n.sent(),[2,O(e,r,!0)];case 2:switch(n.trys.push([2,59,,60]),null==r?void 0:r.type){case"VariableDeclarator":return[3,3];case"ImportDeclaration":return[3,5];case"ExportNamedDeclaration":return[3,7];case"VariableDeclaration":return[3,9];case"BlockStatement":case"Program":return[3,11];case"FunctionDeclaration":return[3,13];case"ReturnStatement":return[3,15];case"IfStatement":return[3,17];case"ExpressionStatement":return[3,19];case"UpdateExpression":return[3,21];case"AssignmentExpression":return[3,23];case"ForStatement":return[3,25];case"WhileStatement":return[3,27];case"ForInStatement":return[3,29];case"BreakStatement":return[3,31];case"EmptyStatement":return[3,32];case"ContinueStatement":return[3,33];case"TemplateElement":return[3,34];case"TemplateLiteral":return[3,36];case"Identifier":return[3,38];case"MemberExpression":return[3,40];case"Literal":return[3,42];case"CallExpression":return[3,43];case"UnaryExpression":return[3,45];case"BinaryExpression":return[3,47];case"LogicalExpression":return[3,49];case"ArrayExpression":return[3,51];case"ObjectExpression":return[3,53];case"Property":return[3,55]}return[3,57];case 3:return[4,Z(e,r)];case 4:return[2,n.sent()];case 5:return[4,J(e,r)];case 6:return[2,n.sent()];case 7:return[4,Q(e,r)];case 8:return[2,n.sent()];case 9:return[4,X(e,r,0)];case 10:return[2,n.sent()];case 11:return[4,V(e,r)];case 12:return[2,n.sent()];case 13:return[4,z(e,r)];case 14:return[2,n.sent()];case 15:return[4,Y(e,r)];case 16:return[2,n.sent()];case 17:return[4,W(e,r)];case 18:return[2,n.sent()];case 19:return[4,_(e,r)];case 20:return[2,n.sent()];case 21:return[4,D(e,r)];case 22:return[2,n.sent()];case 23:return[4,U(e,r)];case 24:return[2,n.sent()];case 25:return[4,j(e,r)];case 26:return[2,n.sent()];case 27:return[4,L(e,r)];case 28:return[2,n.sent()];case 29:return[4,q(e,r)];case 30:return[2,n.sent()];case 31:return[2,p.breakResult];case 32:return[2,p.voidOperation];case 33:return[2,p.continueResult];case 34:return[4,ae(e,r)];case 35:return[2,n.sent()];case 36:return[4,ce(e,r)];case 37:return[2,n.sent()];case 38:return[4,oe(e,r)];case 39:return[2,n.sent()];case 40:return[4,$(e,r)];case 41:return[2,n.sent()];case 42:return[2,r.value];case 43:return[4,ie(e,r)];case 44:return[2,n.sent()];case 45:return[4,ee(e,r)];case 46:return[2,n.sent()];case 47:return[4,te(e,r)];case 48:return[2,n.sent()];case 49:return[4,ne(e,r)];case 50:return[2,n.sent()];case 51:return[4,re(e,r)];case 52:return[2,n.sent()];case 53:return[4,M(e,r)];case 54:return[2,n.sent()];case 55:return[4,k(e,r)];case 56:return[2,n.sent()];case 57:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.Unrecognised,r);case 58:return[3,60];case 59:throw t=n.sent(),l.ensureArcadeExecutionError(e,r,t);case 60:return[2]}}))}))}function M(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u,c,d,f,E,h;return n(this,(function(n){switch(n.label){case 0:t=[],c=0,n.label=1;case 1:return c<r.properties.length?(o=t,i=c,[4,O(e,r.properties[c])]):[3,4];case 2:o[i]=n.sent(),n.label=3;case 3:return c++,[3,1];case 4:for(a={},u=new Map,c=0;c<t.length;c++){if(d=t[c],p.isFunctionParameter(d.value))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.NoFunctionInDictionary,r);if(!1===p.isString(d.key))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyMustBeString,r);f=d.key.toString(),E=f.toLowerCase(),u.has(E)?f=u.get(E):u.set(E,f),d.value===p.voidOperation?a[f]=null:a[f]=d.value}return(h=new s(a)).immutable=!1,[2,h]}}))}))}function k(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.value)];case 1:return t=n.sent(),"Identifier"===r.key.type?[2,{key:r.key.name,value:t}]:[4,O(e,r.key)];case 2:return[2,{key:n.sent(),value:t}]}}))}))}function L(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a;return n(this,(function(n){switch(n.label){case 0:return t={testResult:!0,lastAction:p.voidOperation},o=t,[4,O(e,r.test)];case 1:if(o.testResult=n.sent(),!1===t.testResult)return[2,p.voidOperation];if(!0!==t.testResult)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r);n.label=2;case 2:return!0!==t.testResult?[3,5]:(i=t,[4,O(e,r.body)]);case 3:return i.lastAction=n.sent(),t.lastAction===p.breakResult?[3,5]:t.lastAction instanceof p.ReturnResult?[3,5]:(a=t,[4,O(e,r.test)]);case 4:if(a.testResult=n.sent(),!0!==t.testResult&&!1!==t.testResult)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r);return[3,2];case 5:return t.lastAction instanceof p.ReturnResult?[2,t.lastAction]:[2,p.voidOperation]}}))}))}function B(e,r,o){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.body)];case 1:return t=n.sent(),o.lastAction=t,o.lastAction===p.breakResult?(o.testResult=!1,[2,o]):o.lastAction instanceof p.ReturnResult?(o.testResult=!1,[2,o]):null===r.update?[3,3]:[4,O(e,r.update)];case 2:return n.sent(),[2,o];case 3:return[2,o]}}))}))}function P(e,r,o,i,a,u){try{(function(e,r,o){var i;return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return null===r.test?[3,2]:[4,O(e,r.test)];case 1:if(t=n.sent(),!0===(null===(i=e.abortSignal)||void 0===i?void 0:i.aborted))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.Cancelled,r);if(o.testResult=t,!1===o.testResult)return[2,o];if(!0!==o.testResult)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r);return[2,B(e,r,o)];case 2:return[2,B(e,r,o)]}}))}))})(e,r,o).then((function(){try{!0===o.testResult?++u>100?(u=0,setTimeout((function(){P(e,r,o,i,a,u)}),0)):P(e,r,o,i,a,u):o.lastAction instanceof p.ReturnResult?i(o.lastAction):i(p.voidOperation)}catch(e){a(e)}}),(function(e){a(e)}))}catch(e){a(e)}}function j(e,r){try{return null!==r.init?O(e,r.init).then((function(){return new Promise((function(t,n){var o={testResult:!0,lastAction:p.voidOperation};P(e,r,o,(function(e){t(e)}),(function(e){n(e)}),0)}))})):new Promise((function(t,n){var o={testResult:!0,lastAction:p.voidOperation};P(e,r,o,(function(e){t(e)}),(function(e){n(e)}),0)}))}catch(e){return Promise.reject(e)}}function T(e,r,t,n,o,i){try{if(void 0===i&&(i="i"),0===t.length)return void n.resolve(p.voidOperation);!function e(r,t,n,o,i,a,u,c,s,l){try{if(o<=a)return void c(p.voidOperation);i.value="k"===u?n[a]:a,O(r,t.body).then((function(d){try{d instanceof p.ReturnResult?c(d):d===p.breakResult?c(p.voidOperation):++l>100?(l=0,setTimeout((function(){e(r,t,n,o,i,a+1,u,c,s,l)}),0)):e(r,t,n,o,i,a+1,u,c,s,l)}catch(e){s(e)}}),(function(e){s(e)}))}catch(e){s(e)}}(e,r,t,t.length,o,0,i,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}function K(e,r,t,n,o,i){try{if(void 0===i&&(i="i"),0===t.length)return void n.resolve(p.voidOperation);!function e(r,t,n,o,i,a,u,c,s){try{if(n.length()<=i)return void u(p.voidOperation);o.value="k"===a?n.get(i):i,O(r,t.body).then((function(l){l instanceof p.ReturnResult?u(l):l===p.breakResult?u(p.voidOperation):++s>100?(s=0,setTimeout((function(){e(r,t,n,o,i+1,a,u,c,s)}),0)):e(r,t,n,o,i+1,a,u,c,s)}),(function(e){c(e)}))}catch(e){c(e)}}(e,r,t,o,0,i,(function(e){n.resolve(e)}),(function(e){n.reject(e)}),0)}catch(e){n.reject(e)}}function q(e,r){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,new Promise((function(t,n){O(e,r.right).then((function(o){try{("VariableDeclaration"===r.left.type?O(e,r.left):Promise.resolve()).then((function(){try{var i="";if("VariableDeclaration"===r.left.type){var a=r.left.declarations[0].id;"Identifier"===a.type&&(i=a.name)}else"Identifier"===r.left.type&&(i=r.left.name);if(!i)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);i=i.toLowerCase();var u=null;if(null!=e.localScope&&void 0!==e.localScope[i]&&(u=e.localScope[i]),null===u&&void 0!==e.globalScope[i]&&(u=e.globalScope[i]),null===u)return void n(new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r));p.isArray(o)||p.isString(o)?T(e,r,o,{reject:n,resolve:t},u):p.isImmutableArray(o)?K(e,r,o,{reject:n,resolve:t},u):o instanceof s||p.isFeature(o)?function(e,r,t,n,o){try{T(e,r,t.keys(),n,o,"k")}catch(e){n.reject(e)}}(e,r,o,{reject:n,resolve:t},u):p.isFeatureSet(o)?function e(r,t,n,o,i,a,u,c){try{r.next().then((function(s){try{if(null===s)a(p.voidOperation);else{var l=d.createFromGraphicLikeObject(s.geometry,s.attributes,o,t.timeReference);l._underlyingGraphic=s,i.value=l,O(t,n.body).then((function(s){try{s===p.breakResult?a(p.voidOperation):s instanceof p.ReturnResult?a(s):++c>100?(c=0,setTimeout((function(){e(r,t,n,o,i,a,u,c)}),0)):e(r,t,n,o,i,a,u,c)}catch(e){u(e)}}),(function(e){u(e)}))}}catch(e){u(e)}}),(function(e){u(e)}))}catch(e){u(e)}}(o.iterator(e.abortSignal),e,r,o,u,(function(e){t(e)}),(function(e){n(e)}),0):T(e,r,[],{reject:n,resolve:t},u)}catch(e){n(e)}}),n)}catch(e){n(e)}}),n)}))]}))}))}function D(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u,c,d,f,E,h;return n(this,(function(n){switch(n.label){case 0:return"MemberExpression"!==(t=r.argument).type?[3,12]:(o={t:null},[4,O(e,t.object)]);case 1:return i=n.sent(),a=null,o.t=i,!0!==t.computed?[3,3]:[4,O(e,t.property)];case 2:return a=n.sent(),[3,4];case 3:"Identifier"===t.property.type&&(a=t.property.name),n.label=4;case 4:if(u=o.t,!p.isArray(u))return[3,5];if(!p.isNumber(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ArrayAccessorMustBeNumber,r);if(a<0&&(a=u.length+a),a<0||a>=u.length)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);return c=p.toNumber(u[a]),u[a]="++"===r.operator?c+1:c-1,[3,11];case 5:if(!(u instanceof s))return[3,6];if(!1===p.isString(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0!==u.hasField(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FieldNotFound,r,{key:a});return c=p.toNumber(u.field(a)),u.setField(a,"++"===r.operator?c+1:c-1),[3,11];case 6:if(!(u instanceof I))return[3,10];if(!1===p.isString(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ModuleAccessorMustBeString,r);return!0!==u.hasGlobal(a)?[3,8]:(f=(d=p).toNumber,[4,u.global(a)]);case 7:return c=f.apply(d,[n.sent()]),u.setGlobal(a,"++"===r.operator?c+1:c-1),[3,9];case 8:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ModuleExportNotFound,r);case 9:return[3,11];case 10:if(!p.isFeature(u))throw p.isImmutableArray(u)?new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.Immutable,r):new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidParameter,r);if(!1===p.isString(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0!==u.hasField(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FieldNotFound,r,{key:a});c=p.toNumber(u.field(a)),u.setField(a,"++"===r.operator?c+1:c-1),n.label=11;case 11:return!1===r.prefix?[2,c]:[2,"++"===r.operator?c+1:c-1];case 12:if(!(E="Identifier"===r.argument.type?r.argument.name.toLowerCase():""))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);if(null!=e.localScope&&void 0!==e.localScope[E])return h=p.toNumber(e.localScope[E].value),e.localScope[E]={value:"++"===r.operator?h+1:h-1,valueset:!0,node:r},!1===r.prefix?[2,h]:[2,"++"===r.operator?h+1:h-1];if(void 0!==e.globalScope[E])return h=p.toNumber(e.globalScope[E].value),e.globalScope[E]={value:"++"===r.operator?h+1:h-1,valueset:!0,node:r},!1===r.prefix?[2,h]:[2,"++"===r.operator?h+1:h-1];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r)}}))}))}function G(e,r,t,n,o){switch(r){case"=":return e===p.voidOperation?null:e;case"/=":return p.toNumber(t)/p.toNumber(e);case"*=":return p.toNumber(t)*p.toNumber(e);case"-=":return p.toNumber(t)-p.toNumber(e);case"+=":return p.isString(t)||p.isString(e)?p.toString(t)+p.toString(e):p.toNumber(t)+p.toNumber(e);case"%=":return p.toNumber(t)%p.toNumber(e);default:throw new l.ArcadeExecutionError(o,l.ExecutionErrorCodes.UnsupportedOperator,n)}}function U(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u,c,d,f,E,h;return n(this,(function(n){switch(n.label){case 0:return"MemberExpression"!==(t=r.left).type?[3,13]:[4,O(e,t.object)];case 1:return o=n.sent(),i=null,!0!==t.computed?[3,3]:[4,O(e,t.property)];case 2:return i=n.sent(),[3,4];case 3:if("Identifier"!==t.property.type)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);i=t.property.name,n.label=4;case 4:return[4,O(e,r.right)];case 5:if(h=n.sent(),!p.isArray(o))return[3,6];if(!p.isNumber(i))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ArrayAccessorMustBeNumber,r);if(i<0&&(i=o.length+i),i<0||i>o.length)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);if(i===o.length){if("="!==r.operator)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);o[i]=G(h,r.operator,o[i],r,e)}else o[i]=G(h,r.operator,o[i],r,e);return[3,12];case 6:if(!(o instanceof s))return[3,7];if(!1===p.isString(i))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0===o.hasField(i))o.setField(i,G(h,r.operator,o.field(i),r,e));else{if("="!==r.operator)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FieldNotFound,r,{key:i});o.setField(i,G(h,r.operator,null,r,e))}return[3,12];case 7:if(!(o instanceof I))return[3,11];if(!1===p.isString(i))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyAccessorMustBeString,r);return!0!==o.hasGlobal(i)?[3,9]:(u=(a=o).setGlobal,c=[i],d=G,f=[h,r.operator],[4,o.global(i)]);case 8:return u.apply(a,c.concat([d.apply(void 0,f.concat([n.sent(),r,e]))])),[3,10];case 9:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ModuleExportNotFound,r);case 10:return[3,12];case 11:if(!p.isFeature(o))throw p.isImmutableArray(o)?new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.Immutable,r):new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidParameter,r);if(!1===p.isString(i))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.KeyAccessorMustBeString,r);if(!0===o.hasField(i))o.setField(i,G(h,r.operator,o.field(i),r,e));else{if("="!==r.operator)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FieldNotFound,r,{key:i});o.setField(i,G(h,r.operator,null,r,e))}n.label=12;case 12:return[2,p.voidOperation];case 13:return E=t.name.toLowerCase(),null==e.localScope?[3,15]:void 0===e.localScope[E]?[3,15]:[4,O(e,r.right)];case 14:return h=n.sent(),e.localScope[E]={value:G(h,r.operator,e.localScope[E].value,r,e),valueset:!0,node:r.right},[2,p.voidOperation];case 15:return void 0===e.globalScope[E]?[3,17]:[4,O(e,r.right)];case 16:return h=n.sent(),e.globalScope[E]={value:G(h,r.operator,e.globalScope[E].value,r,e),valueset:!0,node:r.right},[2,p.voidOperation];case 17:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r)}}))}))}function _(e,r){return t(this,void 0,void 0,(function(){var t,o;return n(this,(function(n){switch(n.label){case 0:return"AssignmentExpression"===r.expression.type?[2,O(e,r.expression)]:"CallExpression"!==r.expression.type?[3,2]:[4,O(e,r.expression)];case 1:return(t=n.sent())===p.voidOperation?[2,p.voidOperation]:[2,new p.ImplicitResult(t)];case 2:return[4,O(e,r.expression)];case 3:return(o=n.sent())===p.voidOperation?[2,p.voidOperation]:[2,new p.ImplicitResult(o)]}}))}))}function W(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.test)];case 1:if(!0===(t=n.sent()))return[2,O(e,r.consequent)];if(!1===t)return null!==r.alternate?[2,O(e,r.alternate)]:[2,p.voidOperation];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r)}}))}))}function V(e,r){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,H(e,r,0)]}))}))}function H(e,r,o){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return o>=r.body.length?[2,p.voidOperation]:[4,O(e,r.body[o])];case 1:return(t=n.sent())instanceof p.ReturnResult||t===p.breakResult||t===p.continueResult?[2,t]:o===r.body.length-1?[2,t]:[2,H(e,r,o+1)]}}))}))}function Y(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return null===r.argument?[2,new p.ReturnResult(p.voidOperation)]:[4,O(e,r.argument)];case 1:return t=n.sent(),[2,new p.ReturnResult(t)]}}))}))}function z(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){return t=r.id.name.toLowerCase(),e.globalScope[t]={valueset:!0,node:null,value:new F(r,e)},[2,p.voidOperation]}))}))}function J(e,r){var o,i;return t(this,void 0,void 0,(function(){var t,a,u;return n(this,(function(n){switch(n.label){case 0:return t=r.specifiers[0].local.name.toLowerCase(),a=e.libraryResolver.loadLibrary(t),u=null,(null===(o=e.libraryResolver._moduleSingletons)||void 0===o?void 0:o.has(a.uri))?(u=e.libraryResolver._moduleSingletons.get(a.uri),[3,3]):[3,1];case 1:return[4,(u=new I(a)).loadModule(e)];case 2:n.sent(),null===(i=e.libraryResolver._moduleSingletons)||void 0===i||i.set(a.uri,u),n.label=3;case 3:return e.globalScope[t]={value:u,valueset:!0,node:r},[2,p.voidOperation]}}))}))}function Q(e,r){return t(this,void 0,void 0,(function(){var t,o,i;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.declaration)];case 1:if(n.sent(),"FunctionDeclaration"===r.declaration.type)e.exports[r.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===r.declaration.type)for(t=0,o=r.declaration.declarations;t<o.length;t++)i=o[t],e.exports[i.id.name.toLowerCase()]="variable";return[2,p.voidOperation]}}))}))}function X(e,r,o){return t(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return o>=r.declarations.length?[2,p.voidOperation]:[4,O(e,r.declarations[o])];case 1:return t.sent(),o===r.declarations.length-1?[2,p.voidOperation]:[4,X(e,r,o+1)];case 2:return t.sent(),[2,p.voidOperation]}}))}))}function Z(e,r){return t(this,void 0,void 0,(function(){var t,o,i;return n(this,(function(n){switch(n.label){case 0:return t=null,null!==r.init?[3,1]:(t=null,[3,3]);case 1:return[4,O(e,r.init)];case 2:t=n.sent(),n.label=3;case 3:if(null!==e.localScope){if(t===p.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);return o=r.id.name.toLowerCase(),null!=e.localScope&&(e.localScope[o]={value:t,valueset:!0,node:r.init}),[2,p.voidOperation]}if("Identifier"!==r.id.type)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);return i=r.id.name.toLowerCase(),t===p.voidOperation&&(t=null),e.globalScope[i]={value:t,valueset:!0,node:r.init},[2,p.voidOperation]}}))}))}function $(e,r){return t(this,void 0,void 0,(function(){var t,o;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.object)];case 1:if(null===(t=n.sent()))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.MemberOfNull,r);if(!1===r.computed){if("Identifier"===r.property.type){if(t instanceof s||p.isFeature(t))return[2,t.field(r.property.name)];if(t instanceof y)return[2,w.geometryMember(t,r.property.name,e,r)];if(t instanceof I){if(!t.hasGlobal(r.property.name))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r);return[2,t.global(r.property.name)]}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}return[4,O(e,r.property)];case 2:if(o=n.sent(),t instanceof s||p.isFeature(t)){if(p.isString(o))return[2,t.field(o)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(t instanceof I){if(p.isString(o))return[2,t.global(o)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(t instanceof y){if(p.isString(o))return[2,w.geometryMember(t,o,e,r)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(p.isArray(t)){if(p.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length+o),o>=t.length||o<0)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);return[2,t[o]]}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(p.isImmutableArray(t)){if(p.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length()+o),o>=t.length()||o<0)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);return[2,t.get(o)]}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}if(p.isString(t)){if(p.isNumber(o)&&isFinite(o)&&Math.floor(o)===o){if(o<0&&(o=t.length+o),o>=t.length||o<0)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.OutOfBounds,r);return[2,t[o]]}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidMemberAccessKey,r)}}))}))}function ee(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.argument)];case 1:if(t=n.sent(),p.isBoolean(t)){if("!"===r.operator)return[2,!t];if("-"===r.operator)return[2,-1*p.toNumber(t)];if("+"===r.operator)return[2,1*p.toNumber(t)];if("~"===r.operator)return[2,~p.toNumber(t)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.UnsupportedUnaryOperator,r)}if("-"===r.operator)return[2,-1*p.toNumber(t)];if("+"===r.operator)return[2,1*p.toNumber(t)];if("~"===r.operator)return[2,~p.toNumber(t)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.UnsupportedUnaryOperator,r)}}))}))}function re(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a;return n(this,(function(n){switch(n.label){case 0:t=[],a=0,n.label=1;case 1:return a<r.elements.length?(i=(o=t).push,[4,O(e,r.elements[a])]):[3,4];case 2:i.apply(o,[n.sent()]),n.label=3;case 3:return a++,[3,1];case 4:for(a=0;a<t.length;a++){if(p.isFunctionParameter(t[a]))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.NoFunctionInArray,r);t[a]===p.voidOperation&&(t[a]=null)}return[2,t]}}))}))}function te(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u,c,s;return n(this,(function(n){switch(n.label){case 0:return o=t=[],i=0,[4,O(e,r.left)];case 1:return o[i]=n.sent(),a=t,u=1,[4,O(e,r.right)];case 2:switch(a[u]=n.sent(),c=t[0],s=t[1],r.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return[2,p.binaryOperator(p.toNumber(c),p.toNumber(s),r.operator)];case"==":return[2,p.equalityTest(c,s)];case"!=":return[2,!p.equalityTest(c,s)];case"<":case">":case"<=":case">=":return[2,p.greaterThanLessThan(c,s,r.operator)];case"+":return p.isString(c)||p.isString(s)?[2,p.toString(c)+p.toString(s)]:[2,p.toNumber(c)+p.toNumber(s)];case"-":return[2,p.toNumber(c)-p.toNumber(s)];case"*":return[2,p.toNumber(c)*p.toNumber(s)];case"/":return[2,p.toNumber(c)/p.toNumber(s)];case"%":return[2,p.toNumber(c)%p.toNumber(s)];default:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.UnsupportedOperator,r)}return[2]}}))}))}function ne(e,r){return t(this,void 0,void 0,(function(){var t,o;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.left)];case 1:if(t=n.sent(),o=null,!p.isBoolean(t))return[3,8];switch(r.operator){case"||":return[3,2];case"&&":return[3,4]}return[3,6];case 2:return!0===t?[2,t]:[4,O(e,r.right)];case 3:if(o=n.sent(),p.isBoolean(o))return[2,o];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.LogicExpressionOrAnd,r);case 4:return!1===t?[2,t]:[4,O(e,r.right)];case 5:if(o=n.sent(),p.isBoolean(o))return[2,o];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.LogicExpressionOrAnd,r);case 6:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.LogicExpressionOrAnd,r);case 7:return[3,9];case 8:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.LogicalExpressionOnlyBoolean,r);case 9:return[2]}}))}))}function oe(e,r){return t(this,void 0,void 0,(function(){var t,o,i;return n(this,(function(n){switch(n.label){case 0:return t=r.name.toLowerCase(),null==e.localScope?[3,2]:void 0===e.localScope[t]?[3,2]:!0===(o=e.localScope[t]).valueset?[2,o.value]:null!==o.d?[2,o.d]:(o.d=O(e,o.node),[4,o.d]);case 1:return i=n.sent(),o.value=i,o.valueset=!0,[2,i];case 2:return void 0===e.globalScope[t]?[3,4]:!0===(o=e.globalScope[t]).valueset?[2,o.value]:null!==o.d?[2,o.d]:(o.d=O(e,o.node),[4,o.d]);case 3:return i=n.sent(),o.value=i,o.valueset=!0,[2,i];case 4:throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.InvalidIdentifier,r)}}))}))}function ie(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u;return n(this,(function(n){switch(n.label){case 0:return"MemberExpression"!==r.callee.type?[3,6]:[4,O(e,r.callee.object)];case 1:if(!((t=n.sent())instanceof I))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FuncionNotFound,r);return!1!==r.callee.computed?[3,2]:(i=r.callee.property.name,[3,4]);case 2:return[4,O(e,r.callee.property)];case 3:i=n.sent(),n.label=4;case 4:if(o=i,!t.hasGlobal(o))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FuncionNotFound,r);return[4,t.global(o)];case 5:if(a=n.sent(),!p.isFunctionParameter(a))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.CallNonFunction,r);return[2,a.call(e,r)];case 6:if("Identifier"!==r.callee.type)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FuncionNotFound,r);if(null!=e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){if(u=e.localScope[r.callee.name.toLowerCase()],p.isFunctionParameter(u.value))return[2,u.value.call(e,r)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.CallNonFunction,r)}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){if(u=e.globalScope[r.callee.name.toLowerCase()],p.isFunctionParameter(u.value))return[2,u.value.call(e,r)];throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.CallNonFunction,r)}throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.FuncionNotFound,r)}}))}))}function ae(e,r){return t(this,void 0,void 0,(function(){return n(this,(function(e){return[2,r.value?r.value.cooked:""]}))}))}function ue(e,r,t){if(p.isFunctionParameter(e))throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.NoFunctionInTemplateLiteral,t);return e}function ce(e,r){return t(this,void 0,void 0,(function(){var t,o,i,a,u,c,s,l,d;return n(this,(function(n){switch(n.label){case 0:t=[],o=0,n.label=1;case 1:return o<r.expressions.length?[4,O(e,r.expressions[o])]:[3,4];case 2:i=n.sent(),t[o]=p.toString(i),n.label=3;case 3:return o++,[3,1];case 4:for(a="",u=0,c=0,s=r.quasis;c<s.length;c++)l=s[c],a+=l.value?l.value.cooked:"",!1===l.tail&&(d=t[u]?ue(t[u],e,r):"",a+=d,u++);return[2,a]}}))}))}var se={};function le(e,r,o,i){return t(this,void 0,void 0,(function(){var t,a;return n(this,(function(n){switch(n.label){case 0:return[4,O(e,r.arguments[o])];case 1:return t=n.sent(),p.equalityTest(t,i)?[2,O(e,r.arguments[o+1])]:1===(a=r.arguments.length-o)?[2,O(e,r.arguments[o])]:2===a?[2,null]:3===a?[2,O(e,r.arguments[o+2])]:[2,le(e,r,o+2,i)]}}))}))}function de(e,r,o,i){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return!0===i?[2,O(e,r.arguments[o+1])]:3===r.arguments.length-o?[2,O(e,r.arguments[o+2])]:[4,O(e,r.arguments[o+2])];case 1:if(t=n.sent(),!1===p.isBoolean(t))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.ModuleExportNotFound,r.arguments[o+2]);return[2,de(e,r,o+2,t)]}}))}))}function fe(e,r,o,i){return t(this,void 0,void 0,(function(){var t,a,u,c;return n(this,(function(n){switch(n.label){case 0:if(t=e.body,o.length!==e.params.length)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.WrongNumberOfParameters,null);for(a=0;a<o.length;a++)"Identifier"===(u=e.params[a]).type&&null!=r.localScope&&(r.localScope[u.name.toLowerCase()]={d:null,value:o[a],valueset:!0,node:null});return[4,O(r,t)];case 1:if((c=n.sent())instanceof p.ReturnResult)return[2,c.value];if(c===p.breakResult)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.UnexpectedToken,i);if(c===p.continueResult)throw new l.ArcadeExecutionError(r,l.ExecutionErrorCodes.UnexpectedToken,i);return c instanceof p.ImplicitResult?[2,c.value]:[2,c]}}))}))}v.registerFunctions(se,R),g.registerFunctions(se,R),m.registerFunctions(se,R),w.registerFunctions(se,R),b.registerFunctions(se,R),x.registerFunctions({functions:se,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:R,standardFunctionAsync:N}),se.iif=function(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return p.pcCheck(null===r.arguments?[]:r.arguments,3,3,e,r),[4,O(e,r.arguments[0])];case 1:if(t=n.sent(),!1===p.isBoolean(t))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r);return t?[2,O(e,r.arguments[1])]:[2,O(e,r.arguments[2])]}}))}))},se.decode=function(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:if(r.arguments.length<2)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.WrongNumberOfParameters,r);if(2===r.arguments.length)return[2,O(e,r.arguments[1])];if((r.arguments.length-1)%2==0)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.WrongNumberOfParameters,r);return[4,O(e,r.arguments[0])];case 1:return t=n.sent(),1,[2,le(e,r,1,t)]}}))}))},se.when=function(e,r){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:if(r.arguments.length<3)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.WrongNumberOfParameters,r);if(r.arguments.length%2==0)throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.WrongNumberOfParameters,r);return[4,O(e,r.arguments[0])];case 1:if(t=n.sent(),!1===p.isBoolean(t))throw new l.ArcadeExecutionError(e,l.ExecutionErrorCodes.BooleanConditionRequired,r.arguments[0]);return 0,[2,de(e,r,0,t)]}}))}))};var pe={fixSpatialReference:p.fixSpatialReference,parseArguments:S,standardFunction:R,standardFunctionAsync:N,evaluateIdentifier:oe};for(var Ee in se)se[Ee]={value:new f.NativeFunction(se[Ee]),valueset:!0,node:null};var he=function(){};function ve(e,r,t){var n=new he;null==e&&(e={}),null==r&&(r={});var o=new s({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(var i in o.immutable=!1,n.textformatting={value:o,valueset:!0,node:null},r)n[i]={value:new f.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)e[i]&&"esri.Graphic"===e[i].declaredClass?n[i]={value:d.createFromGraphic(e[i],t),valueset:!0,node:null}:n[i]={value:e[i],valueset:!0,node:null};return n}function xe(e){console.log(e)}function we(e){for(var r={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:R,standardFunctionAsync:N,evaluateIdentifier:oe},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)se[n]={value:new f.NativeFunction(r.functions[n]),valueset:!0,node:null},he.prototype[n]=se[n];for(t=0;t<r.signatures.length;t++)E.addFunctionDeclaration(r.signatures[t],"async")}(he.prototype=se).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},he.prototype.pi={value:Math.PI,valueset:!0,node:null},r.functionHelper=pe,r.extend=we,we([h]),r.executeScript=function(e,r){var o;return t(this,void 0,void 0,(function(){var t,i,a,u,s;return n(this,(function(n){switch(n.label){case 0:return null==(t=r.spatialReference)&&(t=new A({wkid:102100})),i=null,e.usesModules&&(i=new c.ArcadeModuleLoader(new Map,e.loadedModules)),a=ve(r.vars,r.customfunctions,r.timeReference),[4,O(u={spatialReference:t,services:r.services,exports:{},libraryResolver:i,abortSignal:void 0===r.abortSignal||null===r.abortSignal?{aborted:!1}:r.abortSignal,globalScope:a,console:r.console?r.console:xe,timeReference:null!==(o=r.timeReference)&&void 0!==o?o:null,lrucache:r.lrucache,interceptor:r.interceptor,localScope:null,depthCounter:{depth:1}},e)];case 1:if((s=n.sent())instanceof p.ReturnResult&&(s=s.value),s instanceof p.ImplicitResult&&(s=s.value),s===p.voidOperation&&(s=null),s===p.breakResult)throw new l.ArcadeExecutionError(u,l.ExecutionErrorCodes.IllegalResult,null);if(s===p.continueResult)throw new l.ArcadeExecutionError(u,l.ExecutionErrorCodes.IllegalResult,null);if(p.isFunctionParameter(s))throw new l.ArcadeExecutionError(u,l.ExecutionErrorCodes.IllegalResult,null);return[2,s]}}))}))}}));
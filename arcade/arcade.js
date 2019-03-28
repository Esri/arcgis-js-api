// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./arcadeCompiler","./arcadeRuntime","./parser","./treeAnalysis","../core/has","../core/promiseUtils"],function(e,n,t,r,i,c,u,s){function o(e,n){if(!0===n.useAsync||!0===e.isAsync)return f(e,n);if(u("csp-restrictions")){return function(n,t){return r.executeScript(e,n,t)}}return t.compileScript(e,n)}function f(e,n){if(null===_)throw new Error("Async Arcade must be enabled for this script");if(u("csp-restrictions")||!1===k){return function(n,t){return _.executeScript(e,n,t)}}return t.compileScript(e,n,!0)}function a(e){r.extend(e),t.extend(e,"sync"),null===_?j.push(e):(t.extend(e,"async"),_.extend(e))}function p(e,n){return void 0===n&&(n=[]),i.parseScript(e,n)}function l(e,n,t){return void 0===t&&(t=""),i.validateScript(e,n,t)}function d(e,n,t,r){return void 0===r&&(r=""),i.scriptCheck(e,n,t,r)}function y(e,n,t,r){return void 0===r&&(r=[]),S(i.parseScript(e,r),n,t)}function S(e,n,t){if(!0===n.useAsync||!0===e.isAsync){if(null===_)throw new Error("Async Arcade must be enabled for this script");return _.executeScript(e,n,t)}return r.executeScript(e,n,t)}function v(e,n){return r.referencesMember(e,n)}function m(e,n){return r.referencesFunction(e,n)}function h(e,n){return void 0===n&&(n=!1),i.extractFieldLiterals(e,n)}function x(e,n){return void 0===n&&(n=[]),void 0===e.usesGeometry&&c.findScriptDependencies(e,n),!0===e.usesGeometry}function A(){return q||(q=s.create(function(n,t){e(["../geometry/geometryEngine","./functions/geomsync"],function(e,t){R=!0,t.setGeometryEngine(e),n(!0)},function(e){t(e)})}))}function b(){return null!==I?I:I=t.enableAsyncSupport().then(function(){return s.create(function(n,r){e(["./arcadeAsyncRuntime"],function(e){try{_=e;for(var i=0,c=j;i<c.length;i++){var u=c[i];_.extend(u),t.extend(u,"async")}j=null,n(!0)}catch(e){r(e)}},r)})})}function g(){return L}function F(){return!!_}function E(){return R}function G(){return P||(P=b().then(function(){return s.create(function(n,r){e(["./featureSetUtils","./functions/featuresetbase","./functions/featuresetgeom","./functions/featuresetstats","./functions/featuresetstring"],function(e,i,c,u,s){try{T=e,_.extend([i,c,u,s]),t.extend([i,c,u,s],"async"),L=!0,n(!0)}catch(e){r(e)}},r)})}))}function w(e,n){return void 0===n&&(n=[]),void 0===e.usesFeatureSet&&c.findScriptDependencies(e,n),!0===e.usesFeatureSet}function U(e,n){return void 0===n&&(n=[]),void 0===e.isAsync&&c.findScriptDependencies(e,n),!0===e.isAsync}function C(e,n){if(n){for(var t=0,r=n;t<r.length;t++){if(v(e,r[t]))return!0}return!1}return!1}function D(e,n,t,r){return void 0===t&&(t=[]),void 0===r&&(r=!1),s.create(function(i,c){var u="string"==typeof e?p(e):e,o=[];u&&(!1===E()&&(x(u)||r)&&o.push(A()),!1===F()&&(!0===u.isAsync||n)&&o.push(b()),!1===g()&&(w(u)||C(u,t))&&o.push(G())),o?s.all(o).then(function(){i(!0)},c):i(!0)})}function M(e){if(x(e))return!0;var n=c.findFunctionCalls(e,!0);return n.indexOf("geometry")>-1||n.indexOf("feature")>-1}function O(){return T}Object.defineProperty(n,"__esModule",{value:!0});var k=function(){if(u("csp-restrictions"))return!1;try{return new Function("function* test() {}; return true")()}catch(e){return!1}}(),L=!1,R=!1,_=null,j=[];n.compileScript=o,n.extend=a,n.parseScript=p,n.validateScript=l,n.scriptCheck=d,n.parseAndExecuteScript=y,n.executeScript=S,n.referencesMember=v,n.referencesFunction=m,n.extractFieldLiterals=h,n.scriptUsesGeometryEngine=x;var q=null;n.enableGeometrySupport=A;var I=null;n.enableAsyncSupport=b,n.isFeatureSetSupportEnabled=g,n.isAsyncEnabled=F,n.isGeometryEnabled=E;var P=null;n.enableFeatureSetSupport=G,n.scriptUsesFeatureSet=w,n.scriptIsAsync=U,n.loadScriptDependencies=D,n.scriptTouchesGeometry=M;var T=null;n.featureSetUtils=O});
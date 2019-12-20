// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","./arcadeCompiler","./arcadeRuntime","./languageUtils","./parser","./treeAnalysis","dojo/has","./polyfill/promiseUtils","../moment"],function(e,n,t,r,i,u,c,s,o,f){"use strict";function a(e,n){if(!0===n.useAsync||!0===e.isAsync)return p(e,n);if(s("csp-restrictions")){return function(n){return r.executeScript(e,n)}}return t.compileScript(e,n)}function p(e,n){if(null===q)throw new Error("Async Arcade must be enabled for this script");if(s("csp-restrictions")||!1===k){return function(n){return q.executeScript(e,n)}}return t.compileScript(e,n,!0)}function l(e){r.extend(e),t.extend(e,"sync"),null===q?I.push(e):(t.extend(e,"async"),q.extend(e))}function d(e,n){return void 0===n&&(n=[]),u.parseScript(e,n)}function y(e,n,t){return void 0===t&&(t=""),u.validateScript(e,n,t)}function S(e,n,t,r){return void 0===r&&(r=""),u.scriptCheck(e,n,t,r)}function m(e,n,t){return void 0===t&&(t=[]),v(u.parseScript(e,t),n)}function v(e,n){if(!0===n.useAsync||!0===e.isAsync){if(null===q)throw new Error("Async Arcade must be enabled for this script");return q.executeScript(e,n)}return r.executeScript(e,n)}function h(e,n){return r.referencesMember(e,n)}function x(e,n){return r.referencesFunction(e,n)}function A(e,n){return void 0===n&&(n=!1),u.extractFieldLiterals(e,n)}function b(e,n){return void 0===n&&(n=[]),void 0===e.usesGeometry&&c.findScriptDependencies(e,n),!0===e.usesGeometry}function g(){return P||(P=o.create(function(n,t){e(["../geometry/geometryEngine","./functions/geomsync"],function(e,t){_=!0,t.setGeometryEngine(e),n(!0)},function(e){t(e)})}))}function F(){return null!==T?T:T=t.enableAsyncSupport().then(function(){return o.create(function(n,r){e(["./arcadeAsyncRuntime"],function(e){try{q=e;for(var i=0,u=I;i<u.length;i++){var c=u[i];q.extend(c),t.extend(c,"async")}I=null,n(!0)}catch(e){r(e)}},r)})})}function E(){return R}function G(){return!!q}function U(){return _}function w(){return z||(z=F().then(function(){return o.create(function(n,r){e(["./featureSetUtils","./functions/featuresetbase","./functions/featuresetgeom","./functions/featuresetstats","./functions/featuresetstring"],function(e,i,u,c,s){try{B=e,q.extend([i,u,c,s]),t.extend([i,u,c,s],"async"),R=!0,n(!0)}catch(e){r(e)}},r)})}))}function M(e,n){return void 0===n&&(n=[]),void 0===e.usesFeatureSet&&c.findScriptDependencies(e,n),!0===e.usesFeatureSet}function C(e,n){return void 0===n&&(n=[]),void 0===e.isAsync&&c.findScriptDependencies(e,n),!0===e.isAsync}function D(e,n){if(n){for(var t=0,r=n;t<r.length;t++){if(h(e,r[t]))return!0}return!1}return!1}function L(e,n,t,r){return void 0===t&&(t=[]),void 0===r&&(r=!1),o.create(function(i,u){var c="string"==typeof e?d(e):e,s=[];c&&(!1===U()&&(b(c)||r)&&s.push(g()),!1===G()&&(!0===c.isAsync||n)&&s.push(F()),!1===E()&&(M(c)||D(c,t))&&s.push(w())),s?o.all(s).then(function(){i(!0)},u):i(!0)})}function O(e){if(b(e))return!0;var n=c.findFunctionCalls(e,!0);return n.indexOf("geometry")>-1||n.indexOf("feature")>-1}function j(){return B}Object.defineProperty(n,"__esModule",{value:!0});var k=function(){if(s("csp-restrictions"))return!1;try{return new Function("function* test() {}; return true")()}catch(e){return!1}}(),R=!1,_=!1,q=null,I=[];n.compileScript=a,n.extend=l,n.parseScript=d,n.validateScript=y,n.scriptCheck=S,n.parseAndExecuteScript=m,n.executeScript=v,n.referencesMember=h,n.referencesFunction=x,n.extractFieldLiterals=A,n.scriptUsesGeometryEngine=b;var P=null;n.enableGeometrySupport=g;var T=null;n.enableAsyncSupport=F,n.isFeatureSetSupportEnabled=E,n.isAsyncEnabled=G,n.isGeometryEnabled=U;var z=null;n.enableFeatureSetSupport=w,n.scriptUsesFeatureSet=M,n.scriptIsAsync=C,n.loadScriptDependencies=L,n.scriptTouchesGeometry=O;var B=null;n.featureSetUtils=j,i.MomentLibrary.Moment=f});
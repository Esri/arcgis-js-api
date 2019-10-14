// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./arcadeCompiler","./arcadeRuntime","./languageUtils","./parser","./treeAnalysis","../core/has","../core/promiseUtils","../intl/moment"],function(e,n,t,r,i,u,c,o,s,f){function a(e,n){if(!0===n.useAsync||!0===e.isAsync)return l(e,n);if(o("csp-restrictions")){return function(n){return r.executeScript(e,n)}}return t.compileScript(e,n)}function l(e,n){if(null===I)throw new Error("Async Arcade must be enabled for this script");if(o("csp-restrictions")||!1===_){return function(n){return I.executeScript(e,n)}}return t.compileScript(e,n,!0)}function p(e){r.extend(e),t.extend(e,"sync"),null===I?P.push(e):(t.extend(e,"async"),I.extend(e))}function d(e,n){return void 0===n&&(n=[]),u.parseScript(e,n)}function y(e,n,t){return void 0===t&&(t=""),u.validateScript(e,n,t)}function S(e,n,t,r){return void 0===r&&(r=""),u.scriptCheck(e,n,t,r)}function m(e,n,t){return void 0===t&&(t=[]),v(u.parseScript(e,t),n)}function v(e,n){if(!0===n.useAsync||!0===e.isAsync){if(null===I)throw new Error("Async Arcade must be enabled for this script");return I.executeScript(e,n)}return r.executeScript(e,n)}function h(e,n){return r.referencesMember(e,n)}function x(e,n){return r.referencesFunction(e,n)}function A(e,n){return void 0===n&&(n=!1),u.extractFieldLiterals(e,n)}function b(e,n){return void 0===n&&(n=[]),void 0===e.usesGeometry&&c.findScriptDependencies(e,n),!0===e.usesGeometry}function g(){return T||(T=s.create(function(n,t){e(["../geometry/geometryEngine","./functions/geomsync"],function(e,t){q=!0,t.setGeometryEngine(e),n(!0)},function(e){t(e)})}))}function F(){return null!==z?z:z=t.enableAsyncSupport().then(function(){return s.create(function(n,r){e(["./arcadeAsyncRuntime"],function(e){try{I=e;for(var i=0,u=P;i<u.length;i++){var c=u[i];I.extend(c),t.extend(c,"async")}P=null,n(!0)}catch(e){r(e)}},r)})})}function E(){return j}function G(){return!!I}function M(){return q}function U(){return B||(B=F().then(function(){return s.create(function(n,r){e(["./featureSetUtils","./functions/featuresetbase","./functions/featuresetgeom","./functions/featuresetstats","./functions/featuresetstring"],function(e,i,u,c,o){try{H=e,I.extend([i,u,c,o]),t.extend([i,u,c,o],"async"),j=!0,n(!0)}catch(e){r(e)}},r)})}))}function w(e,n){return void 0===n&&(n=[]),void 0===e.usesFeatureSet&&c.findScriptDependencies(e,n),!0===e.usesFeatureSet}function C(e,n){return void 0===n&&(n=[]),void 0===e.isAsync&&c.findScriptDependencies(e,n),!0===e.isAsync}function D(e,n){if(n){for(var t=0,r=n;t<r.length;t++){if(h(e,r[t]))return!0}return!1}return!1}function L(e,n,t,r){return void 0===t&&(t=[]),void 0===r&&(r=!1),s.create(function(i,u){var c="string"==typeof e?d(e):e,o=[];o.push(R()),c&&(!1===M()&&(b(c)||r)&&o.push(g()),!1===G()&&(!0===c.isAsync||n)&&o.push(F()),!1===E()&&(w(c)||D(c,t))&&o.push(U())),o?s.all(o).then(function(){i(!0)},u):i(!0)})}function O(e){if(b(e))return!0;var n=c.findFunctionCalls(e,!0);return n.indexOf("geometry")>-1||n.indexOf("feature")>-1}function k(){return H}function R(){return null!==J?J:J=f.loadMoment().then(function(e){return i.MomentLibrary.Moment=e,!0})}Object.defineProperty(n,"__esModule",{value:!0});var _=function(){if(o("csp-restrictions"))return!1;try{return new Function("function* test() {}; return true")()}catch(e){return!1}}(),j=!1,q=!1,I=null,P=[];n.compileScript=a,n.extend=p,n.parseScript=d,n.validateScript=y,n.scriptCheck=S,n.parseAndExecuteScript=m,n.executeScript=v,n.referencesMember=h,n.referencesFunction=x,n.extractFieldLiterals=A,n.scriptUsesGeometryEngine=b;var T=null;n.enableGeometrySupport=g;var z=null;n.enableAsyncSupport=F,n.isFeatureSetSupportEnabled=E,n.isAsyncEnabled=G,n.isGeometryEnabled=M;var B=null;n.enableFeatureSetSupport=U,n.scriptUsesFeatureSet=w,n.scriptIsAsync=C,n.loadScriptDependencies=L,n.scriptTouchesGeometry=O;var H=null;n.featureSetUtils=k,n.load=R;var J=null});
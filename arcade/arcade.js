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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","./arcadeCompiler","./arcadeRuntime","./languageUtils","./parser","./treeAnalysis","dojo/has","./polyfill/promiseUtils","../moment"],(function(e,n,t,r,i,u,c,s,o,f){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){if(s("csp-restrictions"))return!1;try{return new Function("function* test() {}; return true")()}catch(e){return!1}}(),p=!1,l=!1,d=null,y=[];function S(e,n){return void 0===n&&(n=[]),u.parseScript(e,n)}function m(e,n){if(!0===n.useAsync||!0===e.isAsync){if(null===d)throw new Error("Async Arcade must be enabled for this script");return d.executeScript(e,n)}return r.executeScript(e,n)}function v(e,n){return r.referencesMember(e,n)}function h(e,n){return void 0===n&&(n=[]),void 0===e.usesGeometry&&c.findScriptDependencies(e,n),!0===e.usesGeometry}n.compileScript=function(e,n){if(!0===n.useAsync||!0===e.isAsync)return function(e,n){if(null===d)throw new Error("Async Arcade must be enabled for this script");if(s("csp-restrictions")||!1===a){return function(n){return d.executeScript(e,n)}}return t.compileScript(e,n,!0)}(e,n);if(s("csp-restrictions")){return function(n){return r.executeScript(e,n)}}return t.compileScript(e,n)},n.extend=function(e){r.extend(e),t.extend(e,"sync"),null===d?y.push(e):(t.extend(e,"async"),d.extend(e))},n.parseScript=S,n.validateScript=function(e,n,t){return void 0===t&&(t=""),u.validateScript(e,n,t)},n.scriptCheck=function(e,n,t,r){return void 0===r&&(r=""),u.scriptCheck(e,n,t,r)},n.parseAndExecuteScript=function(e,n,t){return void 0===t&&(t=[]),m(u.parseScript(e,t),n)},n.executeScript=m,n.referencesMember=v,n.referencesFunction=function(e,n){return r.referencesFunction(e,n)},n.extractFieldLiterals=function(e,n){return void 0===n&&(n=!1),u.extractFieldLiterals(e,n)},n.scriptUsesGeometryEngine=h;var x=null;function A(){return x||(x=o.create((function(n,t){e(["../geometry/geometryEngine","./functions/geomsync"],(function(e,t){l=!0,t.setGeometryEngine(e),n(!0)}),(function(e){t(e)}))})))}n.enableGeometrySupport=A;var b=null;function g(){return null!==b?b:b=t.enableAsyncSupport().then((function(){return o.create((function(n,r){e(["./arcadeAsyncRuntime"],(function(e){try{d=e;for(var i=0,u=y;i<u.length;i++){var c=u[i];d.extend(c),t.extend(c,"async")}y=null,n(!0)}catch(e){r(e)}}),r)}))}))}function F(){return p}function E(){return!!d}function G(){return l}n.enableAsyncSupport=g,n.isFeatureSetSupportEnabled=F,n.isAsyncEnabled=E,n.isGeometryEnabled=G;var U=null;function w(){return U||(U=g().then((function(){return o.create((function(n,r){e(["./featureSetUtils","./functions/featuresetbase","./functions/featuresetgeom","./functions/featuresetstats","./functions/featuresetstring"],(function(e,i,u,c,s){try{C=e,d.extend([i,u,c,s]),t.extend([i,u,c,s],"async"),p=!0,n(!0)}catch(e){r(e)}}),r)}))})))}function M(e,n){return void 0===n&&(n=[]),void 0===e.usesFeatureSet&&c.findScriptDependencies(e,n),!0===e.usesFeatureSet}n.enableFeatureSetSupport=w,n.scriptUsesFeatureSet=M,n.scriptIsAsync=function(e,n){return void 0===n&&(n=[]),void 0===e.isAsync&&c.findScriptDependencies(e,n),!0===e.isAsync},n.loadScriptDependencies=function(e,n,t,r){return void 0===t&&(t=[]),void 0===r&&(r=!1),o.create((function(i,u){var c="string"==typeof e?S(e):e,s=[];c&&(!1===G()&&(h(c)||r)&&s.push(A()),!1===E()&&(!0===c.isAsync||n)&&s.push(g()),!1===F()&&(M(c)||function(e,n){if(n){for(var t=0,r=n;t<r.length;t++){if(v(e,r[t]))return!0}return!1}return!1}(c,t))&&s.push(w())),s?o.all(s).then((function(){i(!0)}),u):i(!0)}))},n.scriptTouchesGeometry=function(e){if(h(e))return!0;var n=c.findFunctionCalls(e);return n.indexOf("geometry")>-1||n.indexOf("feature")>-1};var C=null;n.featureSetUtils=function(){return C},i.MomentLibrary.Moment=f}));
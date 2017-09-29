// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./arcadeRuntime","./parser","./Feature","./arcadeCompiler","dojo/has","dojo/Deferred"],function(e,r,t,n,i,c,o,u){function s(e,r){if(o("csp-restrictions")){var n=function(r,n){return t.executeScript(e,r,n)};return n}return c.compileScript(e,r)}function f(e){t.extend(e),c.extend(e)}function a(e){return i.fromFeature(e)}function p(e){return n.parseScript(e)}function l(e,r){return n.validateScript(e,r,"simple")}function d(e,r,t){return n.scriptCheck(e,r,t,"full")}function m(e,r,i){return t.executeScript(n.parseScript(e),r,i)}function g(e,r,n){return t.executeScript(e,r,n)}function S(e,r){return t.referencesMember(e,r)}function x(e,r){return t.referencesFunction(e,r)}function y(e,r){return void 0===r&&(r=!1),n.extractFieldLiterals(e,r)}function v(e){for(var r=t.findFunctionCalls(e),n=0;n<r.length;n++)if(F.indexOf(r[n])>-1)return!0;return!1}function h(){var r=new u;return e(["esri/geometry/geometryEngine","./functions/geomsync"],function(e,t){t.setGeometryEngine(e),r.resolve(!0)},function(e){r.reject(e)}),r.promise}Object.defineProperty(r,"__esModule",{value:!0});var F=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","lengthgeodetic","distance","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","simplify","multiparttosinglepart"];r.compileScript=s,r.extend=f,r.constructFeature=a,r.parseScript=p,r.validateScript=l,r.scriptCheck=d,r.parseAndExecuteScript=m,r.executeScript=g,r.referencesMember=S,r.referencesFunction=x,r.extractFieldLiterals=y,r.scriptUsesGeometryEngine=v,r.enableGeometrySupport=h});
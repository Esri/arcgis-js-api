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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./arcadeCompiler","./arcadeRuntime","./parser","../core/has"],function(e,r,t,n,i,c,o){function u(e,r){if(o("csp-restrictions")){return function(r,t){return i.executeScript(e,r,t)}}return n.compileScript(e,r)}function s(e){i.extend(e),n.extend(e)}function f(e){return c.parseScript(e)}function a(e,r){return c.validateScript(e,r,"simple")}function p(e,r,t){return c.scriptCheck(e,r,t,"full")}function l(e,r,t){return i.executeScript(c.parseScript(e),r,t)}function d(e,r,t){return i.executeScript(e,r,t)}function m(e,r){return i.referencesMember(e,r)}function g(e,r){return i.referencesFunction(e,r)}function S(e,r){return void 0===r&&(r=!1),c.extractFieldLiterals(e,r)}function x(e){for(var r=i.findFunctionCalls(e),t=0;t<r.length;t++)if(v.indexOf(r[t])>-1)return!0;return!1}function y(){var r=new t;return e(["esri/geometry/geometryEngine","./functions/geomsync"],function(e,t){t.setGeometryEngine(e),r.resolve(!0)},function(e){r.reject(e)}),r.promise}Object.defineProperty(r,"__esModule",{value:!0});var v=["disjoint","intersects","touches","crosses","within","contains","overlaps","equals","relate","intersection","union","difference","symmetricdifference","clip","cut","area","areageodetic","length","lengthgeodetic","distance","densify","densifygeodetic","generalize","buffer","buffergeodetic","offset","rotate","issimple","simplify","multiparttosinglepart"];r.compileScript=u,r.extend=s,r.parseScript=f,r.validateScript=a,r.scriptCheck=p,r.parseAndExecuteScript=l,r.executeScript=d,r.referencesMember=m,r.referencesFunction=g,r.extractFieldLiterals=S,r.scriptUsesGeometryEngine=x,r.enableGeometrySupport=y});
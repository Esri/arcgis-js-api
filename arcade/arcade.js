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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","exports","./arcadeRuntime","./parser","./Feature","./arcadeCompiler","dojo/has"],function(e,r,t,c,n,i,u){function o(e,r){if(u("csp-restrictions")){var c=function(r,c){return t.executeScript(e,r,c)};return c}return i.compileScript(e,r)}function p(e){return n.fromFeature(e)}function a(e){return c.parseScript(e)}function f(e,r){return c.validateScript(e,r,"simple")}function s(e,r,t){return c.scriptCheck(e,r,t,"full")}function l(e,r,n){return t.executeScript(c.parseScript(e),r,n)}function d(e,r,c){return t.executeScript(e,r,c)}function S(e,r){return t.referencesMember(e,r)}function m(e,r){return t.referencesFunction(e,r)}function x(e,r){return void 0===r&&(r=!1),c.extractFieldLiterals(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.compileScript=o,r.constructFeature=p,r.parseScript=a,r.validateScript=f,r.scriptCheck=s,r.parseAndExecuteScript=l,r.executeScript=d,r.referencesMember=S,r.referencesFunction=m,r.extractFieldLiterals=x});
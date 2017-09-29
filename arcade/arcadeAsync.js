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

define(["require","exports","./arcadeAsyncRuntime","./parser","./Feature"],function(e,r,t,n,c){function u(e,r){var n=function(r,n){return t.executeScript(e,r,n)};return n}function i(e){t.extend(e)}function f(e){return c.fromFeature(e)}function o(e){return n.parseScript(e)}function p(e,r){return n.validateScript(e,r,"full")}function a(e,r,t){return n.scriptCheck(e,r,t,"full")}function s(e,r,c){return t.executeScript(n.parseScript(e),r,c)}function l(e,r,n){return t.executeScript(e,r,n)}function d(e,r){return t.referencesMember(e,r)}function S(e,r){return t.referencesFunction(e,r)}function x(e,r){return void 0===r&&(r=!1),n.extractFieldLiterals(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.compileScript=u,r.extend=i,r.constructFeature=f,r.parseScript=o,r.validateScript=p,r.scriptCheck=a,r.parseAndExecuteScript=s,r.executeScript=l,r.referencesMember=d,r.referencesFunction=S,r.extractFieldLiterals=x});
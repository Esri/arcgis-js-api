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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports","./arcadeAsyncRuntime","./parser"],function(e,r,t,n){function c(e,r){return function(r,n){return t.executeScript(e,r,n)}}function i(e){t.extend(e)}function u(e){return n.parseScript(e)}function p(e,r){return n.validateScript(e,r,"full")}function f(e,r,t){return n.scriptCheck(e,r,t,"full")}function o(e,r,c){return t.executeScript(n.parseScript(e),r,c)}function a(e,r,n){return t.executeScript(e,r,n)}function s(e,r){return t.referencesMember(e,r)}function l(e,r){return t.referencesFunction(e,r)}function d(e,r){return void 0===r&&(r=!1),n.extractFieldLiterals(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.compileScript=c,r.extend=i,r.parseScript=u,r.validateScript=p,r.scriptCheck=f,r.parseAndExecuteScript=o,r.executeScript=a,r.referencesMember=s,r.referencesFunction=l,r.extractFieldLiterals=d});
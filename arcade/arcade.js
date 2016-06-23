// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["require","exports","./arcadeRuntime","./parser","./Feature"],function(e,r,t,n,c){function i(e){return c.fromFeature(e)}function u(e){return n.parseScript(e)}function a(e,r){return n.validateScript(e,r,"simple")}function p(e,r,t){return n.scriptCheck(e,r,t,"full")}function f(e,r,c){return t.executeScript(n.parseScript(e),r,c)}function o(e,r,n){return t.executeScript(e,r,n)}function s(e,r){return t.referencesMember(e,r)}function l(e,r){return t.referencesFunction(e,r)}function S(e,r){return void 0===r&&(r=!1),n.extractFieldLiterals(e,r)}r.constructFeature=i,r.parseScript=u,r.validateScript=a,r.scriptCheck=p,r.parseAndExecuteScript=f,r.executeScript=o,r.referencesMember=s,r.referencesFunction=l,r.extractFieldLiterals=S});
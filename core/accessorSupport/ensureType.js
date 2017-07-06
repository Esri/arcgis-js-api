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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/has"],function(n,e,r){function t(n,e){return e.isInstanceOf?e.isInstanceOf(n):e instanceof n}function u(n){return null==n?n:new Date(n)}function s(n){return n===!0||n===!1?n:!!n}function o(n){return null==n?n:n.toString()}function a(n){return null==n?n:parseFloat(n)}function i(n){return n&&n.constructor&&void 0!==n.constructor._meta}function l(n,e){return null!=e&&n&&!t(n,e)}function c(n,e){return 1===arguments.length?c.bind(null,n):(l(n,e)&&(d&&i(e)?console.warn("Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+(n.prototype&&n.prototype.declaredClass||"unknown")+"'"):e=new n(e)),e)}function f(n,e){return 1===arguments.length?f.bind(null,n):e?Array.isArray(e)?e.map(c.bind(null,n)):[c(n,e)]:e}Object.defineProperty(e,"__esModule",{value:!0});var d=r("dojo-debug-messages");e.isInstanceOf=t,e.ensureDate=u,e.ensureBoolean=s,e.ensureString=o,e.ensureNumber=a,e.isClassedType=i,e.requiresType=l,e.ensureType=c,e.ensureArray=f,e["default"]=c});
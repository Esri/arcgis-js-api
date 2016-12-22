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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has"],function(n,e,r){function t(n,e){return e.isInstanceOf?e.isInstanceOf(n):e instanceof n}function u(n){return null==n?n:new Date(n)}function s(n){return n===!0||n===!1?n:!!n}function o(n){return null==n?n:n.toString()}function a(n){return null==n?n:parseFloat(n)}function i(n,e){return 1===arguments.length?i.bind(null,n):(e&&n&&!t(n,e)&&(c&&e.constructor&&void 0!==e.constructor._meta?console.warn("Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+(n.prototype&&n.prototype.declaredClass||"unknown")+"'"):e=new n(e)),e)}function l(n,e){return 1===arguments.length?l.bind(null,n):e?Array.isArray(e)?e.map(i.bind(null,n)):[i(n,e)]:e}var c=r("dojo-debug-messages");e.isInstanceOf=t,e.ensureDate=u,e.ensureBoolean=s,e.ensureString=o,e.ensureNumber=a,e.ensureType=i,e.ensureArray=l,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i});
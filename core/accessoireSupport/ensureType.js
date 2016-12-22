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

define(["dojo/has"],function(n){var o=n("dojo-debug-messages");return function(n,s){return!n||!s||n instanceof s||(n.constructor&&void 0!==n.constructor._meta?o&&console.warn("Assigning an instance of '"+(n.declaredClass||"unknown")+"' which is not a subclass of '"+(s.prototype&&s.prototype.declaredClass||"unknown")+"'"):n=new s(n)),n}});
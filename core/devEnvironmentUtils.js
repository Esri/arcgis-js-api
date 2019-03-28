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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(c,t){function a(c){return c=c||window.location.hostname,u.some(function(t){return null!=c.match(t)})}function e(c,t){return c?(t=t||window.location.hostname,null!=t.match(n)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(m)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)?c.replace("static.arcgis.com","staticqa.arcgis.com"):null!=t.match(l)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c):c}function i(c){return c=c||window.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(u).some(function(t){return null!=c.match(t)})}Object.defineProperty(t,"__esModule",{value:!0}),t.isDevEnvironment=a,t.adjustStaticAGOUrl=e,t.isTelemetryDevEnvironment=i;var o=/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,s=/^jsapps.esri.com$/,m=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,u=[o,n,r,s,m,l]});
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./global"],function(c,t,a){function e(c){return c=c||a.location.hostname,g.some(function(t){return null!=c.match(t)})}function r(c,t){return c?(t=t||a.location.hostname,null!=t.match(n)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(l)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):null!=t.match(u)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c):c}function i(c){return c=c||a.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(g).some(function(t){return null!=c.match(t)})}Object.defineProperty(t,"__esModule",{value:!0}),t.isDevEnvironment=e,t.adjustStaticAGOUrl=r,t.isTelemetryDevEnvironment=i;var o=/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,m=/^jsapps.esri.com$/,l=/^[\w-]*\.mapsdevext.arcgis.com$/,u=/^[\w-]*\.mapsqa.arcgis.com$/,g=[o,n,s,m,l,u]});
// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./global"],(function(c,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.isDevEnvironment=function(c){return c=c||a.location.hostname,n.some((function(t){return null!=c.match(t)}))},t.adjustStaticAGOUrl=function(c,t){return c?null!=(t=t||a.location.hostname).match(e)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)?c.replace("static.arcgis.com","staticqa.arcgis.com"):null!=t.match(o)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c},t.isTelemetryDevEnvironment=function(c){return c=c||a.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(n).some((function(t){return null!=c.match(t)}))};var e=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,i=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,e,r,/^jsapps.esri.com$/,i,o]}));
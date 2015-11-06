// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["./SpatialReference","./ImageSpatialReference","./kernel","./sniff","dojo/_base/lang"],function(e,n,i,r,a){function t(e){var n=!1;return e&&(e.ics||e.icsid)&&(n=!0),n}function c(i){var r=null;return i&&(r=t(i)?new n(i):new e(i)),r}var f={isICS:t,createSpatialReference:c};return r("extend-esri")&&a.mixin(i,f),f});
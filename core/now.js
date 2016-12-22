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

define(["require","exports","./global"],function(n,r,t){var o=function(){var n=t.performance||{};if(n){if(n.now)return function(){return n.now()};if(n.webkitNow)return function(){return n.webkitNow()};if(n.mozNow)return function(){return n.mozNow()};if(n.msNow)return function(){return n.msNow()};if(n.oNow)return function(){return n.oNow()}}var r;return r=n.timing&&n.timing.navigationStart?n.timing.navigationStart:Date.now(),function(){return Date.now()-r}}();return o});
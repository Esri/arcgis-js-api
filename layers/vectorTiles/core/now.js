// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","./global"],(function(n,t,r){return function(){var n,t=r.performance||{};if(t){if(t.now)return function(){return t.now()};if(t.webkitNow)return function(){return t.webkitNow()};if(t.mozNow)return function(){return t.mozNow()};if(t.msNow)return function(){return t.msNow()};if(t.oNow)return function(){return t.oNow()}}return n=t.timing&&t.timing.navigationStart?t.timing.navigationStart:Date.now(),function(){return Date.now()-n}}()}));
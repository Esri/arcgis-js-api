// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){function e(e){var n,r=e.length;for(n=0;n<r;n++)e[n]()}var n,r={LOW:1,HIGH:2},t={};t[r.LOW]=[],t[r.HIGH]=[];var u=function(){clearTimeout(n),n=null;var u=t[r.HIGH];t[r.HIGH]=[],e(u),u=t[r.LOW],t[r.LOW]=[],e(u)};return{priority:r,callbackQueue:t,setTimeout:function(e,r){var i=[r,t[r].push(e)-1];return n||(n=setTimeout(u,0)),i},clearTimeout:function(e){if(e){var n=e[0],r=e[1];t[n].splice(r,1)}}}});
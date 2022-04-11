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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define([],(function(){var e,n={LOW:1,HIGH:2},r={};function t(e){var n,r=e.length;for(n=0;n<r;n++)e[n]()}r[n.LOW]=[],r[n.HIGH]=[];var u=function(){clearTimeout(e),e=null;var u=r[n.HIGH];r[n.HIGH]=[],t(u),u=r[n.LOW],r[n.LOW]=[],t(u)};return{priority:n,callbackQueue:r,setTimeout:function(n,t){var i=[t,r[t].push(n)-1];return e||(e=setTimeout(u,0)),i},clearTimeout:function(e){if(e){var n=e[0],t=e[1];r[n].splice(t,1)}}}}));
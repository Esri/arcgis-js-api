// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define([],(function(){return{_ommitableValues:{opacity:1,"stroke-opacity":1,"fill-opacity":1,rx:0,ry:0},buildElement:function(i,t,a){var r="<"+i;for(var e in t){var l=t[e],o=this._ommitableValues[e];if(void 0===o||l!==o){if("clipParams"===e){if(!l)continue;e="clip-path",l="url(#"+l.clipId+")"}void 0!==l&&(r+=" "+e+'="'+l+'"')}}return r+=a?">"+a+"</"+i+">":"/>"}}}));
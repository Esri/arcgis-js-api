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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define([],function(){return{_ommitableValues:{opacity:1,"stroke-opacity":1,"fill-opacity":1,rx:0,ry:0},CLEAN_UP_STYLE_RE:/font-weight:normal;|font-style:normal;|text-align:start;|text-align:left;|text-align:right;|white-space:.*?;|white-space:.*?;|word-wrap:.*?;|word-break:.*?;|overflow-wrap:.*?;|text-decoration:none.*?;/g,buildElement:function(t,i,e){var a=[t];for(var r in i){var o=i[r],l=this._ommitableValues[r];if(void 0===l||o!==l){if("style"===r&&o&&(o=o.replace(this.CLEAN_UP_STYLE_RE,"")),"clipParams"===r){if(!o)continue;r="clip-path",o="url(#"+o.clipId+")"}void 0!==o&&a.push(r+'="'+o+'"')}}var n="<"+a.join(" ");return n+=e?">"+e+"</"+t+">":"/>"}}});
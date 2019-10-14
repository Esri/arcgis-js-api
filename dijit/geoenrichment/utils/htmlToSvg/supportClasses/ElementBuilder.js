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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define([],function(){return{_ommitableValues:{opacity:1,"stroke-opacity":1,"fill-opacity":1,rx:0,ry:0},CLEAN_UP_STYLE_RE:/font-weight:normal;|font-style:normal;|text-align:start;|text-align:left;|text-align:right;|white-space:normal;|white-space:pre-wrap;|word-wrap:normal;|word-break:normal;|text-decoration:none;/g,buildElement:function(t,i,a){var e=[t];for(var r in i){var n=i[r],o=this._ommitableValues[r];if(void 0===o||n!==o){if("style"===r&&n&&(n=n.replace(this.CLEAN_UP_STYLE_RE,"")),"clipParams"===r){if(!n)continue;r="clip-path",n="url(#"+n.clipId+")"}void 0!==n&&e.push(r+'="'+n+'"')}}var l="<"+e.join(" ");return l+=a?">"+a+"</"+t+">":"/>"}}});
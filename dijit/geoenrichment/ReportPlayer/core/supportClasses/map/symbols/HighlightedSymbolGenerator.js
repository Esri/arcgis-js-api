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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/Color","dojo/Deferred","dojo/when","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/renderers/jsonUtils","esri/dijit/geoenrichment/utils/ColorUtil"],function(o,e,r,i,l,n,t,s,h){var g={};return g.getHighlightSymbol=function(e){function l(r,l){var t;t=l?s.fromJson(o.clone(l)).getSymbol(r):r.symbol||h.renderer&&h.renderer.getSymbol(r),i(n(t.toJson())||{symbol:e.defaultHighlightSymbol},a.resolve)}function n(o){switch(o.type){case"esriSMS":return g._highlightSMS(o);case"esriPMS":return g._highlightPMS(o);case"esriSFS":return g._highlightSFS(o,e.outlineOnly)}}var t=e.graphic,h=e.graphicsLayer,c=e.rendererJson,a=new r;if(t)l(t);else if(h&&!c)if(h.graphics.length)l(h.graphics[0]);else var f=h.on("graphic-add",function(){f.remove(),l(h.graphics[0])});else if(c)if("uniqueValue"===c.type)if(h.graphics.length)l(h.graphics[0],c);else var f=h.on("graphic-add",function(){f.remove(),l(h.graphics[0],c)});else{var m=o.clone(c.symbol);i(n(m)||{symbol:e.defaultHighlightSymbol},a.resolve)}return a.promise},g._highlightSMS=function(o){if(o.size*=1.1,o.color){var r=h.getHighlightColor(new e(o.color.slice(0,3)));o.color[0]=r.r,o.color[1]=r.g,o.color[2]=r.b}return{symbol:t.fromJson(o)}},g._highlightPMS=function(o){o.width*=1.1,o.height*=1.1,o.xoffset*=1.1,o.yoffset*=1.1;var r=new l(l.STYLE_SQUARE,Math.max(o.width,o.height)/.75,new n(n.STYLE_SOLID,new e([255,255,0,.7]),2),new e([0,0,0,0]));return{symbol:t.fromJson(o),frameSymbol:r}},g._highlightSFS=function(o,r){if(o.color&&!r){var i=h.getHighlightColor(new e(o.color.slice(0,3)));o.color[0]=i.r,o.color[1]=i.g,o.color[2]=i.b}if(o.outline&&o.outline.color){var l=h.getHighlightColor(new e(o.outline.color.slice(0,3)));o.outline.color[0]=l.r,o.outline.color[1]=l.g,o.outline.color[2]=l.b}return{symbol:t.fromJson(o)}},g});
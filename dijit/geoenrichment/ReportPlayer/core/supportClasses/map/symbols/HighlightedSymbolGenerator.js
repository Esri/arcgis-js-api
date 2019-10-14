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

define(["dojo/_base/lang","dojo/_base/Color","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/renderers/jsonUtils","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,o,r,i,l,n,t,s,h){var g={};return g.getHighlightSymbol=function(o){function l(r,l){var t;t=l?s.fromJson(e.clone(l)).getSymbol(r):r.symbol||h.renderer&&h.renderer.getSymbol(r),i(n(t.toJson())||{symbol:o.defaultHighlightSymbol},a.resolve)}function n(e){switch(e.type){case"esriSMS":return g._highlightSMS(e);case"esriPMS":return g._highlightPMS(e);case"esriSFS":return g._highlightSFS(e,o.outlineOnly)}}var t=o.graphic,h=o.graphicsLayer,c=o.rendererJson,a=new r;if(t)l(t);else if(h&&!c)if(h.graphics.length)l(h.graphics[0]);else var m=h.on("graphic-add",function(){m.remove(),l(h.graphics[0])});else if(c)if("uniqueValue"===c.type)if(h.graphics.length)l(h.graphics[0],c);else var m=h.on("graphic-add",function(){m.remove(),l(h.graphics[0],c)});else{var f=e.clone(c.symbol);i(n(f)||{symbol:o.defaultHighlightSymbol},a.resolve)}return a.promise},g._highlightSMS=function(e){if(e.size*=1.1,e.color){var r=h.getHighlightColor(new o(e.color.slice(0,3)));e.color[0]=r.r,e.color[1]=r.g,e.color[2]=r.b}return{symbol:t.fromJson(e)}},g._highlightPMS=function(e){e.width*=1.1,e.height*=1.1,e.xoffset*=1.1,e.yoffset*=1.1;var r=new l(l.STYLE_SQUARE,Math.max(e.width,e.height)/.75,new n(n.STYLE_SOLID,new o([255,255,0,.7]),2),new o([0,0,0,0]));return{symbol:t.fromJson(e),frameSymbol:r}},g._highlightSFS=function(e,r){if(e.color&&!r){var i=h.getHighlightColor(new o(e.color.slice(0,3)));e.color[0]=i.r,e.color[1]=i.g,e.color[2]=i.b}if(e.outline&&e.outline.color){var l=h.getHighlightColor(new o(e.outline.color.slice(0,3)));e.outline.color[0]=l.r,e.outline.color[1]=l.g,e.outline.color[2]=l.b}return{symbol:t.fromJson(e)}},g});
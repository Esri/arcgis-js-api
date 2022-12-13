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

define(["dojo/_base/lang","dojo/_base/Color","esri/dijit/geoenrichment/Deferred","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/renderers/jsonUtils","esri/renderers/ClassBreaksRenderer","esri/renderers/UniqueValueRenderer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/SymbolUtil"],(function(e,o,r,i,l,s,t,n,a,g,h){var c={};return c.getHighlightSymbol=function(o){var i=o.graphic,l=o.graphicsLayer,s=o.rendererJson,g=new r;function f(r,i){var s,c=m((i?(s=t.fromJson(e.clone(i))).getSymbol(r):r.symbol?r.symbol:(s=l.renderer)&&s.getSymbol(r)).toJson())||{symbol:o.defaultHighlightSymbol};(s instanceof a||s instanceof n)&&(c.getSymbol=function(e){var o=s.getSymbol(e);return s.getVisualVariableValues&&(o=h.prepareGraphicSymbol(o,s.getVisualVariableValues(e)).symbol),m(o.toJson()).symbol}),g.resolve(c)}function m(e){switch(e.type){case"esriSMS":return c._highlightSMS(e);case"esriPMS":return c._highlightPMS(e);case"esriSFS":return c._highlightSFS(e,o.outlineOnly)}}if(i)f(i);else if(l&&!s)if(l.graphics.length)f(l.graphics[0]);else var u=l.on("graphic-add",(function(){u.remove(),f(l.graphics[0])}));else if(s)if("uniqueValue"===s.type||"classBreaks"===s.type)if(l.graphics.length)f(l.graphics[0],s);else u=l.on("graphic-add",(function(){u.remove(),f(l.graphics[0],s)}));else if("heatmap"===s.type)g.resolve(null);else{var y=e.clone(s.symbol);g.resolve(y&&m(y)||{symbol:o.defaultHighlightSymbol})}return g.promise},c._highlightSMS=function(e){if(e.size*=1.1,e.color){var r=g.getHighlightColor(new o(e.color.slice(0,3)));e.color[0]=r.r,e.color[1]=r.g,e.color[2]=r.b}return{symbol:s.fromJson(e)}},c._highlightPMS=function(e){e.width*=1.1,e.height*=1.1,e.xoffset*=1.1,e.yoffset*=1.1;var r=new i(i.STYLE_SQUARE,Math.max(e.width,e.height)/.75,new l(l.STYLE_SOLID,new o([255,255,0,.7]),2),new o([0,0,0,0]));return r.setOffset(e.xoffset/.75||0,e.yoffset/.75||0),{symbol:s.fromJson(e),frameSymbol:r}},c._highlightSFS=function(e,r){if(e.color&&!r){var i=g.getHighlightColor(new o(e.color.slice(0,3)));e.color[0]=i.r,e.color[1]=i.g,e.color[2]=i.b}if(e.outline&&e.outline.color){var l=g.getHighlightColor(new o(e.outline.color.slice(0,3)));e.outline.color[0]=l.r,e.outline.color[1]=l.g,e.outline.color[2]=l.b}return{symbol:s.fromJson(e)}},c}));
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

define(["../GridLayoutCalculatorQueryUtil"],(function(e){var t={getDataHeight:function(e,i,s){return e.looseResize?t.getDataHeightOwn(e,i,s)||i.style.height||0:i.style.height||0},getDataHeightOwn:function(e,t,i){return e.looseResize?(t.style.fields=t.style.fields||{},(t.style.fields[i]=t.style.fields[i]||{}).height):void 0},setDataHeight:function(t,i,s,l,n){if(t.looseResize){(n&&e.getColumnSpannedFields(t,i,s)||[s]).forEach((function(e){i.style.fields=i.style.fields||{},(i.style.fields[e]=i.style.fields[e]||{}).height=l}))}else i.style.height=l},calcDataHeight:function(e,i,s,l){var n=0,a=i.rowSpans&&i.rowSpans[s];if(a>1)for(var h=i.index;h<i.index+a;h++)h!==l&&(n+=t.getDataHeight(e,e.rows[h],s));else n=t.getDataHeight(e,i,s);return n},recalcGridHeight:function(e){e._height=0;var i=e.columns[0].field;return e.rows.forEach((function(s){e._height+=t.getDataHeight(e,s,i)})),e._height}};return t}));
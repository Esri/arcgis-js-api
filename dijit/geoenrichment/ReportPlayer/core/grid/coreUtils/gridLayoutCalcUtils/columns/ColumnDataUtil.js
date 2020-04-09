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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../GridLayoutCalculatorQueryUtil"],(function(e){var t={getFieldWidth:function(i,l,d){var n="string"==typeof d?e.fieldToColumn(i,d):d,o=n?n.field:"string"==typeof d?d:null;return i.looseResize?t.getFieldWidthOwn(i,l,o)||n&&n.style.width||0:n&&n.style.width||0},getFieldWidthOwn:function(e,t,i){return e.looseResize?(t.style.fields=t.style.fields||{},(t.style.fields[i]=t.style.fields[i]||{}).width):void 0},setFieldWidth:function(t,i,l,d,n){var o="string"==typeof l?e.fieldToColumn(t,l):l,s=o?o.field:"string"==typeof l?l:null;if(t.looseResize){(n&&e.getRowSpannedData(t,i,s)||[i]).forEach((function(e){e.style.fields=e.style.fields||{},(e.style.fields[s]=e.style.fields[s]||{}).width=d}))}else o&&(o.style.width=d)},calcFieldWidth:function(i,l,d,n){var o=0;(l.columnSpans&&l.columnSpans[d])>1?e.getSpannedColumns(i,d,l.columnSpans[d]).forEach((function(e){n!==e.field&&(o+=t.getFieldWidth(i,l,e.field))})):o=t.getFieldWidth(i,l,d);return o},recalcGridWidth:function(e){e._width=0;var i=e.store.data[0];return e.columns.forEach((function(l){e._width+=t.getFieldWidth(e,i,l.field)})),e._width},getAllowedWidth:function(e){return e.fitParentWhenResized?e.getAllowedWidthFromParent():e.getAllowedWidth()}};return t}));
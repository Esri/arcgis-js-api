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

define(["../GridLayoutCalculatorQueryUtil"],function(e){var t={};return t.getFieldWidth=function(i,l,d){var n="string"==typeof d?e.fieldToColumn(i,d):d,o=n?n.field:"string"==typeof d?d:null;return i.looseResize?t.getFieldWidthOwn(i,l,o)||n&&n.style.width:n&&n.style.width},t.getFieldWidthOwn=function(e,t,i){if(e.looseResize){t.style.fields=t.style.fields||{};return(t.style.fields[i]=t.style.fields[i]||{}).width}},t.setFieldWidth=function(t,i,l,d,n){function o(e){e.style.fields=e.style.fields||{},(e.style.fields[f]=e.style.fields[f]||{}).width=d}var s="string"==typeof l?e.fieldToColumn(t,l):l,f=s?s.field:"string"==typeof l?l:null;if(t.looseResize){(n?e.getRowSpannedData(t,i,f)||[i]:[i]).forEach(o)}else s&&(s.style.width=d)},t.calcFieldWidth=function(i,l,d,n){var o=0;(l.columnSpans&&l.columnSpans[d])>1?e.getSpannedColumns(i,d,l.columnSpans[d]).forEach(function(e){n!==e.field&&(o+=t.getFieldWidth(i,l,e.field))}):o=t.getFieldWidth(i,l,d);return o},t.recalcGridWidth=function(e){e._width=0;var i=e.store.data[0];return e.columns.forEach(function(l){e._width+=t.getFieldWidth(e,i,l.field)}),e._width},t.getAllowedWidth=function(e){return e.fitParentWhenResized?e.getAllowedWidthFromParent():e.getAllowedWidth()},t});
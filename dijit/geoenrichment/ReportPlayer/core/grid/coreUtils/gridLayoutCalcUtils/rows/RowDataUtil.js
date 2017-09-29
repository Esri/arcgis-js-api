// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["../GridLayoutCalculatorQueryUtil"],function(e){var t={};return t.getDataHeight=function(e,i,a){return e.looseResize?t.getDataHeightOwn(e,i,a)||i.style.height:i.style.height},t.getDataHeightOwn=function(e,t,i){if(e.looseResize){t.style.fields=t.style.fields||{};var a=t.style.fields[i]=t.style.fields[i]||{};return a.height}},t.setDataHeight=function(t,i,a,s,l){function n(e){i.style.fields=i.style.fields||{};var t=i.style.fields[e]=i.style.fields[e]||{};t.height=s}if(t.looseResize){var r=l===!1?[a]:e.getColumnSpannedFields(t,i,a)||[a];r.forEach(n)}else i.style.height=s},t.calcDataHeight=function(e,i,a,s){var l=0,n=i.rowSpans&&i.rowSpans[a];if(n>1)for(var r=i.index;r<i.index+n;r++)r!=s&&(l+=t.getDataHeight(e,e.store.data[r],a));else l=t.getDataHeight(e,i,a);return l},t.recalcGridHeight=function(e){e._height=0;var i=e.columns[0].field;return e.store.data.forEach(function(a){e._height+=t.getDataHeight(e,a,i)}),e._height},t});
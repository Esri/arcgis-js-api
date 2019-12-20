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

define(["esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","../../supportClasses/tableJson/TableJsonUtil"],function(t,n){var e={};return e.wrapInDetailsSectionJson=function(n,e){var a=Array.isArray(n)?n:[n],i=a.some(function(t){return"table"===t.id&&t.attributes&&(t.attributes.dynamicColumns>0||t.attributes.dynamicRows>0)});return{type:e||(i?t.GROUP:t.DETAILS),stack:a}},e.getSectionJsonInfographic=function(t){var e;return t.stack&&t.stack.some(function(t){return!!(e="table"===t.id&&n.getTableJsonInfographic(t))}),e},e.getSectionJsonInfographicTable=function(t){var e;return t.stack&&t.stack.some(function(t){if("table"===t.id&&n.getTableJsonInfographic(t))return e=t,!0}),e},e.calcSectionJsonBox=function(t){function n(t){e.minX=Math.min(e.minX,t.l),e.minY=Math.min(e.minY,t.t),e.maxX=Math.max(e.maxX,t.l+t.w),e.maxY=Math.max(e.maxY,t.t+t.h)}var e={minX:1/0,minY:1/0,maxX:0,maxY:0};t.stack&&t.stack.forEach(function(t){switch(t.id){case"table":var e=0;t.data.data.forEach(function(t){e+=t.style.height}),n({l:t.style.left,t:t.style.top,w:t.style.width,h:e});break;case"img":case"map":n({l:t.style.left,t:t.style.top,w:t.style.width,h:t.style.height})}});var a=t.style||{};return{x:a.left,y:a.top,w:a.width||e.minX+e.maxX,h:a.height||e.minY+e.maxY,contentLeft:e.minX,contentTop:e.minY,contentW:e.maxX-e.minX,contentH:e.maxY-e.minY}},e});
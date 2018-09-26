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

define(["esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(t){var n={};return n.wrapInDetailsSectionJson=function(n,a){var i=Array.isArray(n)?n:[n],e=i.some(function(t){return"table"===t.id&&t.attributes&&(t.attributes.dynamicColumns>0||t.attributes.dynamicRows>0)});return{type:a||(e?t.GROUP:t.DETAILS),stack:i}},n.getSectionJsonInfographic=function(t){var a=t.stack[0];return a&&"table"===a.id&&n.getTableJsonInfographic(a)},n.tableJsonHasInfographic=function(t){return!!n.getTableJsonInfographic(t)},n.getTableJsonInfographic=function(t){var n;return t.data.data.some(function(t){if(t.fieldInfos)for(var a in t.fieldInfos){var i=t.fieldInfos[a];if(i&&i.isInfographic)return n=i.infographicJson,!0}}),n},n.getTableJsonFirstFieldInfo=function(t){return t.data.data[0].fieldInfos[t.data.columns[0].field]},n.tableJsonHasChart=function(t){return t.data.data.some(function(t){if(t.fieldInfos)for(var n in t.fieldInfos){var a=t.fieldInfos[n];if(a&&a.isChart)return!0}})},n.calcSectionJsonBox=function(t){function n(t){a.minX=Math.min(a.minX,t.l),a.minY=Math.min(a.minY,t.t),a.maxX=Math.max(a.maxX,t.l+t.w),a.maxY=Math.max(a.maxY,t.t+t.h)}var a={minX:1/0,minY:1/0,maxX:0,maxY:0};return t.stack&&t.stack.forEach(function(t){switch(t.id){case"table":var a=0;t.data.data.forEach(function(t){a+=t.style.height}),n({l:t.style.left,t:t.style.spaceBefore,w:t.style.width,h:a});break;case"img":n({l:t.style.left,t:t.style.top,w:t.style.width,h:t.style.height})}}),{w:a.maxX+a.minX,h:a.maxY+a.minY,contentW:a.maxX-a.minX,contentH:a.maxY-a.minY}},n});
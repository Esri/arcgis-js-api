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

define(["esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","../../supportClasses/tableJson/TableJsonUtil"],(function(t,n){var e={wrapInDetailsSectionJson:function(n,e){var a=Array.isArray(n)?n:[n],i=a.some((function(t){return"table"===t.id&&t.attributes&&(t.attributes.dynamicColumns>0||t.attributes.dynamicRows>0)}));return{type:e||(i?t.GROUP:t.DETAILS),stack:a}},getSectionJsonInfographic:function(t){var e;return t.stack&&t.stack.some((function(t){return!!(e="table"===t.id&&n.getTableJsonInfographic(t))})),e},getSectionJsonInfographicTable:function(t){var e;return t.stack&&t.stack.some((function(t){if("table"===t.id&&n.getTableJsonInfographic(t))return e=t,!0})),e},calcSectionJsonBox:function(t){var n={minX:1/0,minY:1/0,maxX:0,maxY:0};function e(t){n.minX=Math.min(n.minX,t.l),n.minY=Math.min(n.minY,t.t),n.maxX=Math.max(n.maxX,t.l+t.w),n.maxY=Math.max(n.maxY,t.t+t.h)}t.stack&&t.stack.forEach((function(t){switch(t.id){case"table":var n=0;t.data.data.forEach((function(t){n+=t.style.height})),e({l:t.style.left||0,t:t.style.top||0,w:t.style.width,h:n});break;case"img":case"map":e({l:t.style.left||0,t:t.style.top||0,w:t.style.width,h:t.style.height})}}));var a=t.style||{};return{x:a.left,y:a.top,w:a.width||n.minX+n.maxX,h:a.height||n.minY+n.maxY,contentLeft:n.minX,contentTop:n.minY,contentW:n.maxX-n.minX,contentH:n.maxY-n.minY}}};return e}));
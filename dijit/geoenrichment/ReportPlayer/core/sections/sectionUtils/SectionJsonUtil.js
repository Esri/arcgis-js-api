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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(n){var t={};return t.wrapInDetailsSectionJson=function(t,e){var i=Array.isArray(t)?t:[t],a=i.some(function(n){return"table"===n.id&&n.attributes&&(n.attributes.dynamicColumns>0||n.attributes.dynamicRows>0)});return{type:e||(a?n.GROUP:n.DETAILS),stack:i}},t.getSectionJsonInfographic=function(n){var e=n.stack[0];return e&&"table"===e.id&&t.getTableJsonInfographic(e)},t.tableJsonHasInfographic=function(n){return!!t.getTableJsonInfographic(n)},t.getTableJsonInfographic=function(n){var t;return n.data.data.some(function(n){if(n.fieldInfos)for(var e in n.fieldInfos){var i=n.fieldInfos[e];if(i&&i.isInfographic)return t=i.infographicJson,!0}}),t},t.getTableJsonFirstFieldInfo=function(n){return n.data.data[0].fieldInfos[n.data.columns[0].field]},t.tableJsonHasChart=function(n){return n.data.data.some(function(n){if(n.fieldInfos)for(var t in n.fieldInfos){var e=n.fieldInfos[t];if(e&&e.isChart)return!0}})},t});
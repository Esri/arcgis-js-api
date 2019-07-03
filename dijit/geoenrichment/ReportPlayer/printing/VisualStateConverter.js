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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../PlayerViewModes","../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil"],function(e,n){var t={};return t.convertToFullPages=function(n,o){if(!n||!n.viewMode||n.viewMode===e.FULL_PAGES)return n;switch(n.viewMode){case e.PANELS_IN_STACK:case e.PANELS_IN_SLIDES:return t._toFullPages(n,o)}return null},t._toFullPages=function(t,o){return{type:"reportContainer",viewMode:e.FULL_PAGES,reportContainers:t.reportContainers&&t.reportContainers.map(function(e){if(!e||!e.sections)return null;var t={type:"reportContainerGrid",pages:o.sectionsTables.map(function(e){return{type:"table",foregroundFloatingTablesSection:{type:"section",stackElements:[]},cells:[],backgroundFloatingTablesSection:{type:"section",stackElements:[]}}})},r=0;return n.collectSectionJsons(o,{backgroundForeground:!1,processSectionJson:function(n,o){var s=e.sections[r++];if(s){var a=t.pages[o.pageIndex];a&&("foreground"===o.source?a.foregroundFloatingTablesSection.stackElements[o.floatingIndex]={type:"table",cells:[s]}:"grid"===o.source?a.cells[o.index]=s:"background"===o.source&&(a.backgroundFloatingTablesSection.stackElements[o.floatingIndex]={type:"table",cells:[s]}))}}}),t})}},t});
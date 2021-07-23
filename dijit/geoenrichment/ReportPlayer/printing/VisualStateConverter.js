// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../PlayerViewModes","../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil"],(function(e,n){var t={convertToFullPages:function(n,r){if(!n||!n.viewMode||n.viewMode===e.FULL_PAGES)return n;if(!n.reportContainers||!n.reportContainers.length)return null;switch(n.viewMode){case e.PANELS_IN_STACK:case e.PANELS_IN_SLIDES:return t._toFullPages(n,r);case e.PANELS_IN_STACK_ALL:return t._toFullPages({reportContainers:n.reportContainers[0].innerContainers},r)}return null},_toFullPages:function(t,r){return{type:"reportContainer",viewMode:e.FULL_PAGES,reportContainers:t.reportContainers.map((function(e){if(!e||!e.sections)return null;var t={type:"reportContainerGrid",pages:r.sectionsTables.map((function(e){return{type:"table",foregroundFloatingTablesSection:{type:"section",stackElements:[]},cells:[],backgroundFloatingTablesSection:{type:"section",stackElements:[]}}}))},o=0;return n.collectSectionJsons(r,{backgroundForeground:!1,processSectionJson:function(n,r){var s=e.sections[o++];if(s){var a=t.pages[r.pageIndex];a&&("foreground"===r.source?a.foregroundFloatingTablesSection.stackElements[r.floatingIndex]={type:"table",cells:[s]}:"grid"===r.source?a.cells[r.index]=s:"background"===r.source&&(a.backgroundFloatingTablesSection.stackElements[r.floatingIndex]={type:"table",cells:[s]}))}}}),t}))}}};return t}));
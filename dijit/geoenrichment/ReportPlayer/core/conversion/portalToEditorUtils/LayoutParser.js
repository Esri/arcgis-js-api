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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(e,t){function s(e){var t=e.templateJson,s=[];t.sections.forEach(function(e){function t(){n={type:e.type,stack:[]},s.push(n)}var n;t(),e.stack.forEach(function(e){if("hr"===e.id){var s=!!n.stack.length;n.stack.push(e),s&&t()}else if("table"===e.id){var r=n.stack.some(function(e){return"table"===e.id});r&&t(),n.stack.push(e)}else"pageBreak"===e.id?(n.stack.length&&t(),n.stack.push(e),t()):n.stack.push(e)})}),s=s.filter(function(e){return!!e.stack.length}),t.sections=s}var n={};return n.parseReportXML=function(t){function n(){var n=e.queryJson(i,"section",!0);n.forEach(function(e){a.sections.push(t.parsers.getParser("section").parseSection(e,t))}),s(t)}function r(){var s=e.queryJson(i,"table",!0);s.forEach(function(e){a.sectionsTables.push(t.parsers.getParser("section").parseTable(e,t))})}t.log(t.file.data);var a=t.templateJson,i=e.parseXml(t.file.data);t.parsers.getParser("document").parseDocument(i,t),t.isGraphicReport?r():n()},n});
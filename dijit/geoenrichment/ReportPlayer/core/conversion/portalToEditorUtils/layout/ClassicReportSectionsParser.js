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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(t){return{parseSectionsClassic:function(e,s){t.queryJson(e,"section",!0).forEach(function(t){s.templateJson.sections.push(s.parsers.getParser("section").parseSection(t,s,{fixTableWidthsForPage:!0}))}),this._splitSections(s)},_splitSections:function(t){var e=t.templateJson,s=[];e.sections.forEach(function(t){function e(){n={type:t.type,stack:[]},s.push(n)}var n;e(),t.stack.forEach(function(t){if("hr"===t.id){var s=!!n.stack.length;n.stack.push(t),s&&e()}else if("table"===t.id){var i=n.stack.some(function(t){return"table"===t.id});i&&e(),n.stack.push(t)}else"pageBreak"===t.id?(n.stack.length&&e(),n.stack.push(t),e()):n.stack.push(t)})}),s=s.filter(function(t){return!!t.stack.length}),e.sections=s}}});
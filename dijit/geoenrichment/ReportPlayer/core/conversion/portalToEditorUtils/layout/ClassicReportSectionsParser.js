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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(t){return{parseSectionsClassic:function(s,e){t.queryJson(s,"section",!0).forEach(function(t){e.templateJson.sections.push(e.parsers.getParser("section").parseSection(t,e))}),this._splitSections(e)},_splitSections:function(t){var s=t.templateJson,e=[];s.sections.forEach(function(t){function s(){n={type:t.type,stack:[]},e.push(n)}var n;s(),t.stack.forEach(function(t){if("hr"===t.id){var e=!!n.stack.length;n.stack.push(t),e&&s()}else if("table"===t.id){var i=n.stack.some(function(t){return"table"===t.id});i&&s(),n.stack.push(t)}else"pageBreak"===t.id?(n.stack.length&&s(),n.stack.push(t),s()):n.stack.push(t)})}),e=e.filter(function(t){return!!t.stack.length}),s.sections=e}}});
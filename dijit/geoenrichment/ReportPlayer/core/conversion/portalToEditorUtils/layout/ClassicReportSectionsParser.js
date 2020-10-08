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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(t){return{parseSectionsClassic:function(e,s){t.queryTopJson(e,"section").forEach((function(t){s.templateJson.sections.push(s.parsers.getParser("section").parseSection(t,s,{fixTableWidthsForPage:!0}))})),this._splitSections(s)},_splitSections:function(t){var e=t.templateJson,s=[];e.sections.forEach((function(t){var e;function n(){e={type:t.type,stack:[]},s.push(e)}n(),t.stack.forEach((function(t){if("hr"===t.id){var s=!!e.stack.length;e.stack.push(t),s&&n()}else if("table"===t.id){e.stack.some((function(t){return"table"===t.id}))&&n(),e.stack.push(t)}else"pageBreak"===t.id?(e.stack.length&&n(),e.stack.push(t),n()):e.stack.push(t)}))})),s=s.filter((function(t){return!!t.stack.length})),e.sections=s}}}));
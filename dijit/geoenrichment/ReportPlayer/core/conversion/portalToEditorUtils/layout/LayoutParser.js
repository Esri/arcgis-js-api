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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./GraphicReportSectionsParser","./ClassicReportSectionsParser"],(function(e,r,s){var t={parseReportXML:function(t){t.log(t.file.data);var a=e.parseXml(t.file.data);t.parsers.getParser("document").parseDocument(a,t),t.report.isGraphicReport?(t.templateJson.sectionsTables=[],r.parseSectionsGraphic(a,t)):(t.templateJson.sections=[],s.parseSectionsClassic(a,t))}};return t}));
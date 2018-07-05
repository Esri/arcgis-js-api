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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../../ConversionUtil"],function(t){var e={};return e.portalToEditor=function(e,a){return{type:e.attributes.type,scaleToFitHeight:e.attributes.scaleToFitHeight,showNumberOfLocations:e.attributes.showNumberOfLocations,calculatorName:e.tags[0].attributes.query,style:{width:t.ptToPx(e.attributes.width),height:t.ptToPx(e.attributes.height)},headerSectionJson:a.parsers.getParser("section").parseSection(e.tags[0],a),dataSectionJson:a.parsers.getParser("section").parseSection(e.tags[1],a),locatorCalculatorInfo:a.templateJson.metadata.locatorCalculatorsHash[e.tags[1].attributes.query]}},e});
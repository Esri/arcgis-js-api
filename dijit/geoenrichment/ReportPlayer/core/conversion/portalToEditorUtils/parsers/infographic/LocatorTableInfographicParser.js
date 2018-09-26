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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../../../sections/SectionTypes","../../../ConversionUtil"],function(t,e){var r={};return r.portalToEditor=function(r,a){var o,s,i;return r.tags.forEach(function(e){e.attributes.type===t.INFOGRAPHIC_HEADER?o=e:e.attributes.query&&(s?i=e:s=e)}),{type:r.attributes.type,scaleToFitHeight:r.attributes.scaleToFitHeight,showNumberOfLocations:r.attributes.showNumberOfLocations,calculatorName:s.attributes.query,style:{width:e.ptToPx(r.attributes.width),height:e.ptToPx(r.attributes.height)},titleSectionJson:o&&a.parsers.getParser("section").parseSection(o,a),headerSectionJson:a.parsers.getParser("section").parseSection(s,a),dataSectionJson:a.parsers.getParser("section").parseSection(i,a),locatorCalculatorInfo:a.templateJson.metadata.locatorCalculatorsHash[i.attributes.query]}},r});
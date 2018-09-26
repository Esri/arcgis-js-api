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

define(["../../../../sections/SectionTypes","../../../ConversionUtil"],function(t,e){var s={};return s.portalToEditor=function(s,a){var r,i,o=s.attributes.name,n=a.templateJson.metadata.comparisonCalculatorsHash[o];return s.tags.forEach(function(e){e.attributes.type===t.INFOGRAPHIC_HEADER?r=e:i=e}),{calculatorName:o,type:s.attributes.type,variablesInColumns:s.attributes.variablesInColumns,showThisAreas:s.attributes.showThisAreas,levels:n&&n.levels||[],style:{width:e.ptToPx(s.attributes.width),height:e.ptToPx(s.attributes.height)},titleSectionJson:r&&a.parsers.getParser("section").parseSection(r,a),dataSectionJson:a.parsers.getParser("section").parseSection(i,a)}},s});
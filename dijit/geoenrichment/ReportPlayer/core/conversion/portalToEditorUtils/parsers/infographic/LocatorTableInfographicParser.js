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

define(["../../../../sections/SectionTypes","../../../ConversionUtil"],function(t,e){var a={};return a.portalToEditor=function(a,r){var s,o,i;a.tags.forEach(function(e){e.attributes.type===t.INFOGRAPHIC_HEADER?s=e:e.attributes.query&&(o?i=e:o=e)});var n=r.templateJson.metadata.locatorCalculatorsHash[i.attributes.query];return n.isValid?{type:a.attributes.type,scaleToFitHeight:a.attributes.scaleToFitHeight,showNumberOfLocations:a.attributes.showNumberOfLocations,calculatorName:o.attributes.query,style:{width:e.ptToPx(a.attributes.width),height:e.ptToPx(a.attributes.height)},titleSectionJson:s&&r.parsers.getParser("section").parseSection(s,r),headerSectionJson:r.parsers.getParser("section").parseSection(o,r),dataSectionJson:r.parsers.getParser("section").parseSection(i,r),locatorCalculatorInfo:n}:null},a});
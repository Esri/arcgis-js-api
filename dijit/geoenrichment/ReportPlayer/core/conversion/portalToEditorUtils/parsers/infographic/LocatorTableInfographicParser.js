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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../../../sections/SectionTypes","../../../ConversionUtil"],function(t,e){var r={};return r.portalToEditor=function(r,s){var a,i,o,u,n;r.tags.forEach(function(e){e.attributes.type===t.INFOGRAPHIC_HEADER?a=e:e.attributes.type===t.INFOGRAPHIC_SUMMARY?u=e:e.attributes.type===t.INFOGRAPHIC_SUMMARY_FOOTER?n=e:e.attributes.query&&(i?o=e:i=e)});var c=s.templateJson.metadata.locatorCalculatorsHash[o.attributes.query];return c.isValid?{type:r.attributes.type,calculatorName:i.attributes.query,locatorCalculatorInfo:c,style:{width:e.ptToPx(r.attributes.width),height:e.ptToPx(r.attributes.height),padding:r.attributes.padding?e.ptToPx(r.attributes.padding):void 0,backgroundColor:r.attributes.backgroundColor},titleSectionJson:a&&s.parsers.getParser("section").parseSection(a,s),scaleToFitHeight:r.attributes.scaleToFitHeight,showNumberOfLocations:r.attributes.showNumberOfLocations,headerSectionJson:s.parsers.getParser("section").parseSection(i,s),dataSectionJson:s.parsers.getParser("section").parseSection(o,s),summaryFooterSectionJson:n&&s.parsers.getParser("section").parseSection(n,s),summaryFooterFields:r.attributes.summaryFooterFields&&r.attributes.summaryFooterFields.split(";"),showAsSummary:r.attributes.showAsSummary,summarizeField:r.attributes.summarizeField,summarizeByAverage:r.attributes.summarizeByAverage,summarySectionJson:u&&s.parsers.getParser("section").parseSection(u,s)}:null},r});
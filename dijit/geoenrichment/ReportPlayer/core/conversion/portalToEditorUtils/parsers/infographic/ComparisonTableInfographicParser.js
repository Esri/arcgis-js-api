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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../../../sections/SectionTypes","../../../ConversionUtil"],(function(t,e){var a={portalToEditor:function(a,s){var r,i,o=a.attributes.name,n=s.templateJson.metadata.comparisonCalculatorsHash[o];return a.tags.forEach((function(e){e.attributes.type===t.INFOGRAPHIC_HEADER?r=e:i=e})),{calculatorName:o,type:a.attributes.type,variablesInColumns:a.attributes.variablesInColumns,showThisAreas:a.attributes.showThisAreas,levels:n&&n.levels||[],style:{width:e.ptToPx(a.attributes.width),height:e.ptToPx(a.attributes.height),padding:a.attributes.padding?e.ptToPx(a.attributes.padding):void 0,backgroundColor:a.attributes.backgroundColor},titleSectionJson:r&&s.parsers.getParser("section").parseSection(r,s),dataSectionJson:s.parsers.getParser("section").parseSection(i,s)}}};return a}));
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","../../../../infographics/infographicUtils/InfographicJsonUtil","../_FieldInfoBuilder","esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(t,e,i,a,r){var o={};return o.portalToEditor=function(o,l){var n=o.attributes.name,s=l.templateJson.metadata.comparisonCalculatorsHash[n],u={type:e.fixTapestryNameToWidget(o.attributes.type),title:o.attributes.title||"",style:{width:t.ptToPx(o.attributes.width),height:t.ptToPx(o.attributes.height),backgroundColor:o.attributes.backgroundColor},showVerticalAxis:o.attributes.showVerticalAxis};if(s){s.levels&&i.setLevels(u,s.levels);var c=r.queryJson(o,"d");c.length?u.fieldInfos=c.map(function(t){return a.getCalculatorOrScriptFieldInfo(t.attributes.f,l,{format:t.attributes.m})}):u.fieldInfos=s.variableObjects.map(function(t){return a.getCalculatorOrScriptFieldInfo(t.templateName,l)}),u.calcData={calculatorName:n,variables:u.fieldInfos.map(function(t){return t.fullName})}}else u.variables=o.attributes.dataCollectionID?[o.attributes.dataCollectionID+".*"]:[o.attributes.variableID];return u},o});
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

define(["../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","../../../../infographics/utils/InfographicJsonUtil","../_FieldInfoBuilder","esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(t,e,r,i,a){var l={portalToEditor:function(l,o){var s=l.attributes.name,n=o.templateJson.metadata.comparisonCalculatorsHash[s],u={type:e.fixTapestryNameToWidget(l.attributes.type),title:l.attributes.title||"",style:{width:t.ptToPx(l.attributes.width),height:t.ptToPx(l.attributes.height),padding:l.attributes.padding?t.ptToPx(l.attributes.padding):void 0,backgroundColor:l.attributes.backgroundColor,titleStyle:l.attributes.titleStyle&&t.ptToPxObj(t.parseStyleString(l.attributes.titleStyle)),tableBackgroundColor:l.attributes.tableBackgroundColor,tableBorderColor:l.attributes.tableBorderColor,textStyle:l.attributes.textStyle&&t.ptToPxObj(t.parseStyleString(l.attributes.textStyle)),subtextStyle:l.attributes.subtextStyle&&t.ptToPxObj(t.parseStyleString(l.attributes.subtextStyle)),hyperlinkTextStyle:l.attributes.hyperlinkTextStyle&&t.ptToPxObj(t.parseStyleString(l.attributes.hyperlinkTextStyle)),detailsValueBorderColor:l.attributes.detailsValueBorderColor},showVerticalAxis:l.attributes.showVerticalAxis};if(n){n.levels&&r.setLevels(u,n.levels);var b=a.queryTopJson(l,"fields")[0],d=b&&a.queryTopJson(b,"d");if(d.length?u.fieldInfos=d.map((function(t){return i.getCalculatorOrScriptFieldInfo(t.attributes.f,o,{format:t.attributes.m})})):u.fieldInfos=n.variableObjects.map((function(t){return i.getCalculatorOrScriptFieldInfo(t.templateName,o)})),u.fieldInfos.some((function(t){return t.isMissing})))return null;u.calcData={calculatorName:s,variables:u.fieldInfos.map((function(t){return t.fullName}))}}else u.variables=l.attributes.dataCollectionID?[l.attributes.dataCollectionID+".*"]:[l.attributes.variableID];return u}};return l}));
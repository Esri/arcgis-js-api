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

define(["../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","../../../../infographics/utils/InfographicJsonUtil","../_FieldInfoBuilder","esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(e,t,l,a,r){var i={};return i.portalToEditor=function(i,o){var s=i.attributes.name,y=o.templateJson.metadata.comparisonCalculatorsHash[s],n={type:t.fixTapestryNameToWidget(i.attributes.type),title:i.attributes.title||"",style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),padding:i.attributes.padding?e.ptToPx(i.attributes.padding):void 0,backgroundColor:i.attributes.backgroundColor}};if(function(l,a){var r=function(t){return e.ptToPxObj(e.parseStyleString(t))};switch(a.type){case t.AGE_PYRAMID:a.showVerticalAxis=!!l.showVerticalAxis;break;case t.TAPESTRY:case t.PRIZM5:(i=a.style).titleStyle=l.titleStyle&&r(l.titleStyle),i.tableBackgroundColor=l.tableBackgroundColor,i.tableBorderColor=l.tableBorderColor,i.textStyle=l.textStyle&&r(l.textStyle),i.subtextStyle=l.subtextStyle&&r(l.subtextStyle),i.hyperlinkTextStyle=l.hyperlinkTextStyle&&r(l.hyperlinkTextStyle),i.detailsValueBorderColor=l.detailsValueBorderColor;break;case t.ONE_VAR:(i=a.style).titleStyle=l.titleStyle&&r(l.titleStyle),i.subtitleStyle=l.subtitleStyle&&r(l.subtitleStyle),i.valueStyle=l.valueStyle&&r(l.valueStyle),i.valueDescStyle=l.valueDescStyle&&r(l.valueDescStyle),i.tableHeaderStyle=l.tableHeaderStyle&&r(l.tableHeaderStyle),i.tableDefaultStyle=l.tableDefaultStyle&&r(l.tableDefaultStyle),i.tableThisAreaStyle=l.tableThisAreaStyle&&r(l.tableThisAreaStyle),i.tableAltStyle=l.tableAltStyle&&r(l.tableAltStyle),i.tableBorderColor=l.tableBorderColor,i.thisAreaBarColor=l.thisAreaBarColor,i.positiveBarColor=l.positiveBarColor;break;case t.RELATED_VARS:var i;(i=a.style).titleStyle=l.titleStyle&&r(l.titleStyle),i.highLabelStyle=l.highLabelStyle&&r(l.highLabelStyle),i.lowLabelStyle=l.lowLabelStyle&&r(l.lowLabelStyle),i.tableHeaderStyle=l.tableHeaderStyle&&r(l.tableHeaderStyle),i.tableDefaultStyle=l.tableDefaultStyle&&r(l.tableDefaultStyle),i.tableAltStyle=l.tableAltStyle&&r(l.tableAltStyle),i.tableBorderColor=l.tableBorderColor,i.positiveBarColor=l.positiveBarColor,i.negativeBarColor=l.negativeBarColor,i.diffPositiveColor=l.diffPositiveColor,i.diffNegativeColor=l.diffNegativeColor,i.comparisonLabelStyle=l.comparisonLabelStyle&&r(l.comparisonLabelStyle)}}(i.attributes,n),y){y.levels&&l.setLevels(n,y.levels);var b=r.queryTopJson(i,"fields")[0],u=b&&r.queryTopJson(b,"d");if(u.length?n.fieldInfos=u.map((function(e){return a.getCalculatorOrScriptFieldInfo(e.attributes.f,o,{format:e.attributes.m})})):n.fieldInfos=y.variableObjects.map((function(e){return a.getCalculatorOrScriptFieldInfo(e.templateName,o)})),n.fieldInfos.some((function(e){return e.isMissing})))return null;n.calcData={calculatorName:s,variables:n.fieldInfos.map((function(e){return e.fullName}))}}else n.variables=i.attributes.dataCollectionID?[i.attributes.dataCollectionID+".*"]:[i.attributes.variableID];return n},i}));
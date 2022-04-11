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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["../../../../sections/SectionTypes","../../../ConversionUtil","../_FieldInfoBuilder","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],(function(e,t,r,a,i,s){var o={portalToEditor:function(o,l){var n,u,m,c,p;o.tags.forEach((function(t){t.attributes.type===e.INFOGRAPHIC_HEADER?n=t:t.attributes.type===e.INFOGRAPHIC_SUMMARY||t.attributes.type===e.INFOGRAPHIC_SUMMARY2?(c=c||t,t.attributes.type=e.INFOGRAPHIC_SUMMARY):t.attributes.type===e.INFOGRAPHIC_SUMMARY_FOOTER?p=t:t.attributes.query&&(u?m=t:u=t)}));var d,b=l.templateJson.metadata.locatorCalculatorsHash[m.attributes.query];if(!b||!b.isValid)return null;var f=o.attributes.summarizeFractionField;if("string"==typeof f){var F=a.getTemplateNameParts(f);d=F.calcName&&F.calcName!==b.calculatorName?r.getCalculatorOrScriptFieldInfo(f,l):f}var y=c&&l.parsers.getParser("section").parseSection(c,l);if(y){var g=y.stack[0],I=g.rows[0].fieldInfos[g.columns[0].field].infographicJson.variableTables[0];if("LocatorSummary"!==I.variable.fieldInfo.name){var S=i.buildFormatStringFromObject(I.variable.fieldInfo);I.variable.fieldInfo=s.createFieldInfoFromSpecialFieldName("LOCATORSUMMARY",S)}}return{type:o.attributes.type,calculatorName:u.attributes.query,locatorCalculatorInfo:b,style:{width:t.ptToPx(o.attributes.width),height:t.ptToPx(o.attributes.height),padding:o.attributes.padding?t.ptToPx(o.attributes.padding):void 0,backgroundColor:o.attributes.backgroundColor},titleSectionJson:n&&l.parsers.getParser("section").parseSection(n,l),scaleToFitHeight:o.attributes.scaleToFitHeight,showNumberOfLocations:o.attributes.showNumberOfLocations,headerSectionJson:l.parsers.getParser("section").parseSection(u,l),dataSectionJson:l.parsers.getParser("section").parseSection(m,l),summaryFooterSectionJson:p&&l.parsers.getParser("section").parseSection(p,l),summaryFooterFields:o.attributes.summaryFooterFields&&o.attributes.summaryFooterFields.split(";"),showAsSummary:o.attributes.showAsSummary,summarizeField:o.attributes.summarizeField,summarizeType:o.attributes.summarizeByAverage?"average":o.attributes.summarizeType,summarizeFractionField:d,summarizeMultiplier:Number(o.attributes.summarizeMultiplier)||null,summarySectionJson:y}}};return o}));
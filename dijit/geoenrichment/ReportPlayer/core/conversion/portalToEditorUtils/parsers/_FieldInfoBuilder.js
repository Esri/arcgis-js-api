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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],function(a,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var e={};return e.getCalculatorOrScriptFieldInfo=function(e,l,i){if(!e)return null;if(l.variableProvider.isPlayerOnly&&!l.userVariableProviderToCollectOnly){var o=l.variableProvider.toCalculator(e);if(!o)return console.log("Can't create a dummy calculator for => "+e),null;i=i||{},i.calculatorName=o.variable.calculatorName;var t=a.createFieldInfoFromCalculator(o,l.variableProvider,i);return t.name=o.variable.fieldName,t.templateName=o.variable.templateName,t}var n=l.queryMetaDataFunc(e),c=e.substr(0,e.indexOf("."));if(i=i||{},i.calculatorName=c,n)return n.isScript?a.createFieldInfoFromScript(n,l.variableProvider,i):a.createFieldInfoFromCalculator(n,l.variableProvider,i);var s=a.createFieldInfoFromMissingVariable(e);if(l.variableProvider.isPlayerOnly){var o=l.variableProvider.toCalculator(e);s.alias=o&&o.variable.alias}return s.alias=s.alias?s.alias+" ("+r.missingVariable+")":r.missingVariable,s},e});
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],(function(a,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var e={getCalculatorOrScriptFieldInfo:function(e,l,i){if(!e)return null;if(l.variableProvider.isPlayerOnly&&!l.useVariableProviderToCollectOnly){if(!(s=l.variableProvider.toCalculator(e)))return console.log("Can't create a dummy calculator for => "+e),null;(i=i||{}).calculatorName=s.variable.calculatorName;var t=a.createFieldInfoFromCalculator(s,l.variableProvider,i);return t.name=s.variable.fieldName,t.templateName=s.variable.templateName,t}var o=l.queryMetaDataFunc(e),n=e.substr(0,e.indexOf("."));if((i=i||{}).calculatorName=n,o)return o.isScript?a.createFieldInfoFromScript(o,i):a.createFieldInfoFromCalculator(o,l.variableProvider,i);var c=a.createFieldInfoFromMissingVariable(e);if(l.variableProvider.isPlayerOnly){var s=l.variableProvider.toCalculator(e);c.alias=s&&s.variable.alias}return c.alias=c.alias?c.alias+" ("+r.missingVariable+")":r.missingVariable,c}};return e}));
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

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(r){var e={};return e.getCalculatorOrScriptFieldInfo=function(e,a,l){if(!e)return null;if(a.variableProvider.isDummy){var i=a.variableProvider.toCalculator(e);if(!i)return console.log("Can't create a dummy calculator for => "+e),null;var t=r.createFieldInfoFromCalculator(i,a.variableProvider,l,i.variable.calculatorName);return t.name=i.variable.fieldName,t.templateName=i.variable.templateName,t}var o=a.queryMetaDataFunc(e);if(!o)return null;var n=e.substr(0,e.indexOf("."));return o.isMissing?r.createFieldInfoFromMissingVariable(o):o.isScript?r.createFieldInfoFromScript(o,a.variableProvider,l,n):r.createFieldInfoFromCalculator(o,a.variableProvider,l,n)},e});
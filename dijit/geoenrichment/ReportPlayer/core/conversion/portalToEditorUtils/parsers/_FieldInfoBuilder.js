// COPYRIGHT © 2017 Esri
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

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e){var r={};return r.getCalculatorOrScriptFieldInfo=function(r,a,l,i){if(!r)return null;if(a.variableProvider.isDummy){var t=a.variableProvider.toCalculator(r);if(!t)return console.log("Can't create a dummy calculator for => "+r),null;var n=e.createFieldInfoFromCalculator(t,a.variableProvider,l,t.variable.calculatorName);return n.name=t.variable.fieldName,n.templateName=t.variable.templateName,n}var o=r.substr(r.indexOf(".")+1),u=a.queryMetaDataFunc(r)||a.queryMetaDataFunc(o);if(u){var c=u.isMissing?"createFieldInfoFromMissingVariable":u.isScript?"createFieldInfoFromScript":"createFieldInfoFromCalculator";return e[c](u,a.variableProvider,l,i)}return null},r});
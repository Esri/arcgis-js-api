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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./VariableScriptCollector","../../../supportClasses/templateJsonUtils/fieldInfo/FieldLibrary"],(function(e,a,r){var i={parseTradeAreaCalculators:function(i,t,l){var s=e.queryJson(i,"SpecialTradeAreaFields");t.metadata.specialTradeAreaCalculatorName=s[0]&&s[0].attributes&&s[0].attributes.Name,s.forEach((function(e){l.variableProvider.isPlayerOnly&&a.getObjects(e,!0).variableObjects.forEach((function(e){e.alias=e.alias||r.getFieldLabel(e.id),l.variableProvider.addVariable(e)}))}))}};return i}));
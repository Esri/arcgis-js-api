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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./VariableScriptCollector","../../../../_devConfig"],function(r,a,e){var t={};return t.parseDemographicCalculators=function(t,i,o){r.queryJson(t,"DataCollections").forEach(function(t){var l=r.queryJson(t,"ComparisonLevel");if(e.emulateErrors.metadataParseError)throw new Error("Error test: something crashed during the parsing of the metadata!");var n;if((o.variableProvider.isPlayerOnly||l.length)&&(n=a.getObjects(t)),l.length){var c={calculatorName:t.attributes.Name,levels:l.map(function(r){return r.attributes.Name}),variableObjects:n.variableObjects};i&&(i.metadata.comparisonCalculatorsHash[c.calculatorName]=c)}o.variableProvider.isPlayerOnly&&(n.variableObjects.forEach(function(r){o.variableProvider.addVariable(r)}),n.scriptObjects.forEach(function(r){o.variableProvider.addScriptVariable(r)}))})},t});
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./VariableScriptCollector","../../../../_devConfig"],function(a,e,r){var t={};return t.parseDataCollectionsCalculators=function(t,i,o){a.queryJson(t,"DataCollections").forEach(function(t){var l=a.queryJson(t,"ComparisonLevel");if(r.emulateErrors.metadataParseError)throw new Error("Error test: something crashed during the parsing of the metadata!");var n;if((o.variableProvider.isPlayerOnly||l.length)&&(n=e.getObjects(t)),l.length){var c={calculatorName:t.attributes.Name,levels:l.map(function(a){return a.attributes.Name}).filter(function(a){return!o.validateGeographyLevelFunc||o.validateGeographyLevelFunc(a)}),variableObjects:n.variableObjects};i&&(i.metadata.comparisonCalculatorsHash[c.calculatorName]=c)}o.variableProvider.isPlayerOnly&&(n.variableObjects.forEach(function(a){o.variableProvider.addVariable(a)}),n.scriptObjects.forEach(function(a){o.variableProvider.addScriptVariable(a)}))})},t});
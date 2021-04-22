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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./VariableScriptCollector","../../../../_devConfig"],(function(e,a,r){var t={parseDataCollectionsCalculators:function(t,i,o){e.queryJson(t,"DataCollections").forEach((function(t){var l,n=e.queryJson(t,"ComparisonLevel");if(r.emulateErrors.metadataParseError)throw new Error("Error test: something crashed during the parsing of the metadata!");if((o.variableProvider.isPlayerOnly||n.length)&&(l=a.getObjects(t)),n.length){var c={calculatorName:t.attributes.Name,levels:n.map((function(e){return e.attributes.Name})).filter((function(e){return!o.validateGeographyLevelFunc||o.validateGeographyLevelFunc(e)})),variableObjects:l.variableObjects};i&&(i.metadata.comparisonCalculatorsHash[c.calculatorName]=c)}o.variableProvider.isPlayerOnly&&(l.variableObjects.forEach((function(e){o.variableProvider.addVariable(e)})),l.scriptObjects.forEach((function(e){o.variableProvider.addScriptVariable(e)})))}))}};return t}));
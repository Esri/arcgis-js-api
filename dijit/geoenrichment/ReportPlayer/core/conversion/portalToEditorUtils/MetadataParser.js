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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./variables/VariableUtil","../../../_devConfig"],function(a,e,r){var t={},i={getObjects:function(a,e){var r=i._getVariableInfo(a,e),t=i._getScriptObjects(a);return{variables:r.variables,variableObjects:r.variableObjects,scriptObjects:t}},_getVariableInfo:function(r,t){var i=[];a.queryJson(r,t?/RawFields|Fields/:"Fields").forEach(function(e){i=i.concat(a.queryJson(e,/Field|PortalFiel/))});var n=[],o=[];return i.forEach(function(a){n.push(a.attributes.MapTo);var t=e.fieldTagToVariable(a,r.attributes.Name);t&&o.push(t)}),{variables:n,variableObjects:o}},_getScriptObjects:function(r){var t=a.queryJson(r,"CalculatedFields")[0];return(t&&a.queryJson(t,"Script")||[]).map(function(a){return e.scriptTagToVariable(a,r.attributes.Name)})}};return t.parseMetadataXML=function(e,t,n){n.log&&n.log(e.data);var o=a.parseXml(e.data);o&&o.tags&&(function(){a.queryJson(o,"SpecialTradeAreaFields").forEach(function(a){n.variableProvider.isDummy&&i.getObjects(a,!0).variableObjects.forEach(function(a){n.variableProvider.addVariable(a)})})}(),function(){a.queryJson(o,"DataCollections").forEach(function(e){var o=a.queryJson(e,"ComparisonLevel");if(r.emulateErrors.metadataParseError)throw new Error("Error test: something crashed during the parsing of the metadata!");var s;if((n.variableProvider.isDummy||o.length)&&(s=i.getObjects(e)),o.length){var l={calculatorName:e.attributes.Name,levels:o.map(function(a){return a.attributes.Name}),variableObjects:s.variableObjects};t&&(t.metadata.comparisonCalculatorsHash[l.calculatorName]=l)}n.variableProvider.isDummy&&(s.variableObjects.forEach(function(a){n.variableProvider.addVariable(a)}),s.scriptObjects.forEach(function(a){n.variableProvider.addScriptVariable(a)}))})}(),function(){a.queryJson(o,"Maps").forEach(function(e){a.queryJson(e,"Map").forEach(function(r){var i,n,o=a.queryJson(r,"Layer").filter(function(a){return!!a.attributes.PortalItemId});o.length>1&&(i=o.shift()),n=o.shift();var s={defaultBasemapId:i&&i.attributes.PortalItemId,webMapId:n&&n.attributes.PortalItemId,mapScale:Number(r.attributes.Scale)||null,fieldName:r.attributes.Name};t&&(t.metadata.mapImageInfosHash[e.attributes.Name+"."+r.attributes.Name]=s)})})}())},t});
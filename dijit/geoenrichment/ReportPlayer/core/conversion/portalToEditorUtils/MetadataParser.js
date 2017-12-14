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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./variables/VariableUtil","../../../_devConfig"],function(a,e,r){var t={},i={getObjects:function(a,e){var r=i._getVariableInfo(a,e),t=i._getScriptObjects(a);return{variables:r.variables,variableObjects:r.variableObjects,scriptObjects:t}},_getVariableInfo:function(r,t){var i=[],s=a.queryJson(r,t?/RawFields|Fields/:"Fields");s.forEach(function(e){i=i.concat(a.queryJson(e,/Field|PortalFiel/))});var n=[],o=[];return i.forEach(function(a){n.push(a.attributes.MapTo);var t=e.fieldTagToVariable(a,r.attributes.Name);t&&o.push(t)}),{variables:n,variableObjects:o}},_getScriptObjects:function(r){var t=a.queryJson(r,"CalculatedFields")[0],i=t&&a.queryJson(t,"Script")||[];return i.map(function(a){return e.scriptTagToVariable(a,r.attributes.Name)})}};return t.parseMetadataXML=function(e,t,s){function n(){var e=a.queryJson(u,"SpecialTradeAreaFields");e.forEach(function(a){if(s.variableProvider.isDummy){var e=i.getObjects(a,!0);e.variableObjects.forEach(function(a){s.variableProvider.addVariable(a)})}})}function o(){var e=a.queryJson(u,"DataCollections");e.forEach(function(e){var n=a.queryJson(e,"ComparisonLevel");if(r.emulateErrors.metadataParseError)throw new Error("Error test: something crashed during the parsing of the metadata!");var o;if((s.variableProvider.isDummy||n.length)&&(o=i.getObjects(e)),n.length){var l={variables:o.variables,levels:n.map(function(a){return a.attributes.Name}),variableObjects:o.variableObjects};t&&(t.metadata.comparisonCalculatorsHash[e.attributes.Name]=l)}s.variableProvider.isDummy&&(o.variableObjects.forEach(function(a){s.variableProvider.addVariable(a)}),o.scriptObjects.forEach(function(a){s.variableProvider.addScriptVariable(a)}))})}function l(){var e=a.queryJson(u,"Maps");e.forEach(function(e){var r=a.queryJson(e,"Map");r.forEach(function(r){var i,s,n=a.queryJson(r,"Layer").filter(function(a){return!!a.attributes.PortalItemId});n.length>1&&(i=n.shift()),s=n.shift();var o={defaultBasemapId:i&&i.attributes.PortalItemId,webMapId:s&&s.attributes.PortalItemId,mapScale:Number(r.attributes.Scale)||null,fieldName:r.attributes.Name};t&&(t.metadata.mapImageInfosHash[e.attributes.Name+"."+r.attributes.Name]=o)})})}s.log&&s.log(e.data);var u=a.parseXml(e.data);u&&u.attributes&&(n(),o(),l())},t});
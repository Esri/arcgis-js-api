// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],(function(e,a){var r={getObjects:function(e,a){var i=r._getVariableInfo(e,a),t=r._getScriptObjects(e,i.fieldNameToVariableCache);return{variables:i.variables,variableObjects:i.variableObjects,scriptObjects:t}},_getVariableInfo:function(r,i){var t=[];e.queryJson(r,i?/^(RawFields|Fields)$/:"Fields").forEach((function(a){t=t.concat(e.queryJson(a,/^(Field|PortalField)$/))}));var s=[],n=[],l={};return t.forEach((function(e){s.push(e.attributes.MapTo);var i=a.fieldTagToVariable(e,r.attributes.Name);i&&(l[i.fieldName]=i,n.push(i))})),{variables:s,variableObjects:n,fieldNameToVariableCache:l}},_getScriptObjects:function(r,i){var t=e.queryJson(r,"Scripts"===r.name?"Fields":"CalculatedFields")[0],s=t&&e.queryJson(t,"Script")||[];return"Scripts"===r.name&&(s=s.filter((function(e){return!("STORE_ID"===e.attributes.Name||"AREA_ID"===e.attributes.Name)}))),s.map((function(e){var t=a.scriptTagToVariable(e,r.attributes.Name);return t.usedFields&&(t.usedMapTos=[],t.usedFields.forEach((function(e){var a=i[e];a?a.usedMapTos?t.usedMapTos=t.usedMapTos.concat(a.usedMapTos):t.usedMapTos.push(a.fullName):console.log("Error parsing used fields for "+e)})),i[t.fieldName]=t),t}))}};return r}));
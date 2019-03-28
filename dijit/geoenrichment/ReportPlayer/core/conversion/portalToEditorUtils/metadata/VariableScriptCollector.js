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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(e,a){var r={getObjects:function(e,a){var i=r._getVariableInfo(e,a),s=r._getScriptObjects(e,i.fieldNameToVariableCache);return{variables:i.variables,variableObjects:i.variableObjects,scriptObjects:s}},_getVariableInfo:function(r,i){var s=[];e.queryJson(r,i?/^(RawFields|Fields)$/:"Fields").forEach(function(a){s=s.concat(e.queryJson(a,/^(Field|PortalField)$/))});var t=[],o=[],l={};return s.forEach(function(e){t.push(e.attributes.MapTo);var i=a.fieldTagToVariable(e,r.attributes.Name);i&&(l[i.fieldName]=i,o.push(i))}),{variables:t,variableObjects:o,fieldNameToVariableCache:l}},_getScriptObjects:function(r,i){var s=e.queryJson(r,"CalculatedFields")[0];return(s&&e.queryJson(s,"Script")||[]).map(function(e){var s=a.scriptTagToVariable(e,r.attributes.Name);return s.usedFields&&(s.usedMapTos=[],s.usedFields.forEach(function(e){var a=i[e];if(!a)return void console.log("Error parsing used fields for "+e);a.usedMapTos?s.usedMapTos=s.usedMapTos.concat(a.usedMapTos):s.usedMapTos.push(a.fullName)}),i[s.fieldName]=s),s})}};return r});
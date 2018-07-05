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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(e,r){var a={getObjects:function(e,r){var t=a._getVariableInfo(e,r),i=a._getScriptObjects(e);return{variables:t.variables,variableObjects:t.variableObjects,scriptObjects:i}},_getVariableInfo:function(a,t){var i=[];e.queryJson(a,t?/^(RawFields|Fields)$/:"Fields").forEach(function(r){i=i.concat(e.queryJson(r,/^(Field|PortalField)$/))});var n=[],s=[];return i.forEach(function(e){n.push(e.attributes.MapTo);var t=r.fieldTagToVariable(e,a.attributes.Name);t&&s.push(t)}),{variables:n,variableObjects:s}},_getScriptObjects:function(a){var t=e.queryJson(a,"CalculatedFields")[0];return(t&&e.queryJson(t,"Script")||[]).map(function(e){return r.scriptTagToVariable(e,a.attributes.Name)})}};return a});
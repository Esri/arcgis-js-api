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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(a,t){var e={};return e.parseLocatorCalculators=function(e,r,i){a.queryJson(e,"Locator").forEach(function(e){var o=[];a.queryJson(e,/^(PointFields|Fields)$/).forEach(function(t){o=o.concat(a.queryJson(t,/^(Field|Direction|Distance)$/))});var n=[];o.forEach(function(a){"Direction"===a.name?a.attributes.MapTo="DIRECTION":"Distance"===a.name&&(a.attributes.MapTo="DISTANCE");var r=t.fieldTagToVariable(a,e.attributes.Name);r&&n.push(r)});var l={calculatorName:e.attributes.Name,variableObjects:n,layerID:null,layerUrl:null,layerName:e.attributes.LayerName};e.attributes.Points&&0===e.attributes.Points.indexOf("std:")?l.layerID=e.attributes.Points.replace("std:",""):l.layerUrl=e.attributes.Layer,r.metadata.locatorCalculatorsHash[e.attributes.Name]=l,i.variableProvider.isPlayerOnly&&n.forEach(function(a){i.variableProvider.addVariable(a)})})},e});
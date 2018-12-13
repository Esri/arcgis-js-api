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

define(["dojo/promise/all","dojo/when","esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],function(a,r,t,e){var i={};return i.parseLocatorCalculators=function(i,o,l){var n=t.queryJson(i,"Locator");return a(n.map(function(a){var i=[];t.queryJson(a,/^(PointFields|Fields)$/).forEach(function(a){i=i.concat(t.queryJson(a,/^(Field|Direction|Distance)$/))});var n=[];i.forEach(function(r){"Direction"===r.name?r.attributes.MapTo="DIRECTION":"Distance"===r.name&&(r.attributes.MapTo="DISTANCE");var t=e.fieldTagToVariable(r,a.attributes.Name);t&&n.push(t)});var s={calculatorName:a.attributes.Name,variableObjects:n,layerID:null,layerUrl:null,layerName:a.attributes.LayerName};return a.attributes.Points&&0===a.attributes.Points.indexOf("std:")?s.layerID=a.attributes.Points.replace("std:",""):s.layerUrl=a.attributes.Layer,o.metadata.locatorCalculatorsHash[a.attributes.Name]=s,l.variableProvider.isPlayerOnly&&n.forEach(function(a){l.variableProvider.addVariable(a)}),r(!l.validateLocatorCalculator||l.validateLocatorCalculator(s.layerID,s.layerUrl),function(a){s.isValid=a})}))},i});
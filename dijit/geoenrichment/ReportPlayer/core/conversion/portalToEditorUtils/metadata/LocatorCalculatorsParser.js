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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/JsonXmlConverter","../variables/VariableUtil"],(function(a,e,r,t){var i={parseLocatorCalculators:function(i,l,o){var n=r.queryJson(i,"Locator");return a(n.map((function(a){var i=[];r.queryJson(a,/^(PointFields|Fields)$/).forEach((function(a){i=i.concat(r.queryJson(a,/^(Field|Direction|Distance)$/))}));var n=[];i.forEach((function(e){"Direction"===e.name?e.attributes.MapTo="DIRECTION":"Distance"===e.name&&(e.attributes.MapTo="DISTANCE");var r=t.fieldTagToVariable(e,a.attributes.Name);r&&n.push(r)}));var s={calculatorName:a.attributes.Name,variableObjects:n,layerID:null,layerUrl:null,layerName:a.attributes.LayerName};return a.attributes.Points&&0===a.attributes.Points.indexOf("std:")?s.layerID=a.attributes.Points.replace("std:",""):s.layerUrl=a.attributes.Layer,l.metadata.locatorCalculatorsHash[a.attributes.Name]=s,o.variableProvider.isPlayerOnly&&n.forEach((function(a){o.variableProvider.addVariable(a)})),e(!o.validateLocatorCalculator||o.validateLocatorCalculator(s.layerID,s.layerUrl),(function(a){s.isValid=a}))})))}};return i}));
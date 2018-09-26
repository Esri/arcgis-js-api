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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser"],function(e,a){var r={};return r.parseMapCalculators=function(r,t){e.queryJson(r,"Maps").forEach(function(r){e.queryJson(r,"Map").forEach(function(n){var s,o,u=e.queryJson(n,/^(|Layer|LocatorResultsLayer|ComparisonResultsLayer)$/),i=u.filter(function(e){return!!e.attributes.PortalItemId}),l=u.filter(function(e){return!!e.attributes.ServiceUrl||"LocatorResultsLayer"===e.name||"ComparisonResultsLayer"===e.name});i.length>1&&(s=i.shift()),o=i.shift();var m={fieldName:n.attributes.Name,defaultBasemapId:s&&s.attributes.PortalItemId,webMapId:o&&o.attributes.PortalItemId,additionalLayerInfos:l.length?l.map(function(e){if(e.attributes.ServiceUrl)return{url:e.attributes.ServiceUrl};if("LocatorResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0];return{isLocatorLayer:!0,layerName:e.attributes.LayerName,calculatorName:e.attributes.CalculatorName,calculatorInfo:t.metadata.locatorCalculatorsHash[e.attributes.CalculatorName],rendererJson:r&&a.parseRendererJson(r)}}if("ComparisonResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0];return{isComparisonLayer:!0,calculatorName:e.attributes.CalculatorName,rendererJson:r&&a.parseRendererJson(r)}}}):null,mapScale:Number(n.attributes.Scale)||null};t&&(t.metadata.mapImageInfosHash[r.attributes.Name+"."+n.attributes.Name]=m)})})},r});
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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser"],function(t,e){var a={};return a.parseMapCalculators=function(a,r){t.queryJson(a,"Maps").forEach(function(a){t.queryJson(a,"Map").forEach(function(n){var u,o,s=t.queryJson(n,/^(|Layer|LocatorResultsLayer)$/),i=s.filter(function(t){return!!t.attributes.PortalItemId}),l=s.filter(function(t){return!!t.attributes.ServiceUrl||"LocatorResultsLayer"===t.name});i.length>1&&(u=i.shift()),o=i.shift();var c={fieldName:n.attributes.Name,defaultBasemapId:u&&u.attributes.PortalItemId,webMapId:o&&o.attributes.PortalItemId,additionalLayerInfos:l.length?l.map(function(t){if(t.attributes.ServiceUrl)return{url:t.attributes.ServiceUrl};var a=t.tags&&t.tags.filter(function(t){return"Renderer"===t.name})[0];return{isLocatorLayer:!0,calculatorName:t.attributes.CalculatorName,calculatorInfo:r.metadata.locatorCalculatorsHash[t.attributes.CalculatorName],rendererJson:a&&e.parseRendererJson(a)}}):null,mapScale:Number(n.attributes.Scale)||null};r&&(r.metadata.mapImageInfosHash[a.attributes.Name+"."+n.attributes.Name]=c)})})},a});
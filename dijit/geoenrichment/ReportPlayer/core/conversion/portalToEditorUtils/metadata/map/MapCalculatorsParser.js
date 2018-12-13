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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser","esri/dijit/geoenrichment/utils/ImageUtil"],function(e,t,a){var r={};return r.parseMapCalculators=function(r,s,n){e.queryJson(r,"Maps").forEach(function(r){e.queryJson(r,"Map").forEach(function(i){var u,o,l=e.queryJson(i,/^(|Layer|LocatorResultsLayer|ComparisonResultsLayer)$/),m=l.filter(function(e){return!!e.attributes.PortalItemId}),f=l.filter(function(e){return!!e.attributes.ServiceUrl||"LocatorResultsLayer"===e.name||"ComparisonResultsLayer"===e.name});m.length>1&&(u=m.shift()),o=m.shift();var c=[];f.forEach(function(e){if(e.attributes.ServiceUrl)c.push({url:e.attributes.ServiceUrl});else if("LocatorResultsLayer"===e.name){var a=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],r=s.metadata.locatorCalculatorsHash[e.attributes.CalculatorName];r.isValid&&c.push({isLocatorLayer:!0,layerName:e.attributes.LayerName,calculatorName:e.attributes.CalculatorName,calculatorInfo:r,rendererJson:a&&t.parseRendererJson(a)})}else if("ComparisonResultsLayer"===e.name){var a=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],n=a&&t.parseRendererJson(a);n&&"esriTS"===n.uniqueValueInfos[0].symbol.type?c[c.length-1].labelRendererJson=n:c.push({isComparisonLayer:!0,calculatorName:e.attributes.CalculatorName,rendererJson:n,labelRendererJson:null})}});var b,d=e.queryJson(i,"SiteLayer")[0];if(d){var y=e.queryJson(d,"Symbol")[0];if(y&&"Image"===y.attributes.Type){var p=n.getImageData(y.attributes.Name);p&&(b={type:"esriPMS",contentType:a.getContentType(p),imageData:a.base64DataFromDataURL(p),width:Number(y.attributes.Width),height:Number(y.attributes.Height),angle:Number(y.attributes.Angle)||0,xoffset:Number(y.attributes.XOffset)||0,yoffset:Number(y.attributes.YOffset)||0})}}var g={fieldName:i.attributes.Name,defaultBasemapId:u&&u.attributes.PortalItemId,webMapId:o&&o.attributes.PortalItemId,additionalLayerInfos:c.length&&c,pinSymbolJson:b,mapScale:Number(i.attributes.Scale)||null};s&&(s.metadata.mapImageInfosHash[r.attributes.Name+"."+i.attributes.Name]=g)})})},r});
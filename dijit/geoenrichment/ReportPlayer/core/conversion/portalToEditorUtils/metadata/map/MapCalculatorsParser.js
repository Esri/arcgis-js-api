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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser","esri/dijit/geoenrichment/utils/ImageUtil"],function(e,t,r){var a={};return MapTagsUtil={tagToColor:function(e){if(!e)return null;var t=e.attributes;return[Number(t.Red),Number(t.Green),Number(t.Blue),void 0===t.Transparency?255:255*(1-Number(t.Transparency)/100)]}},a.parseMapCalculators=function(a,s,i){e.queryJson(a,"Maps").forEach(function(a){e.queryJson(a,"Map").forEach(function(u){var o,n,l=e.queryJson(u,/^(|Layer|LocatorResultsLayer|ComparisonResultsLayer)$/),m=l.filter(function(e){return!!e.attributes.PortalItemId}),b=l.filter(function(e){return!!e.attributes.ServiceUrl||"LocatorResultsLayer"===e.name||"ComparisonResultsLayer"===e.name});m.length>1&&(o=m.shift()),n=m.shift();var f=[];b.forEach(function(e){if(e.attributes.ServiceUrl)f.push({url:e.attributes.ServiceUrl});else if("LocatorResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],a=s.metadata.locatorCalculatorsHash[e.attributes.CalculatorName];a.isValid&&f.push({isLocatorLayer:!0,layerName:e.attributes.LayerName,calculatorName:e.attributes.CalculatorName,calculatorInfo:a,rendererJson:r&&t.parseRendererJson(r)})}else if("ComparisonResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],i=r&&t.parseRendererJson(r);i&&"esriTS"===i.uniqueValueInfos[0].symbol.type?f[f.length-1].labelRendererJson=i:f.push({isComparisonLayer:!0,calculatorName:e.attributes.CalculatorName,rendererJson:i,labelRendererJson:null})}});var c,y=e.queryJson(u,"SiteLayer")[0];if(y){var d=e.queryJson(y,"Symbol")[0];if(d&&"Image"===d.attributes.Type){var p=i.getImageData(d.attributes.Name);p&&(c={type:"esriPMS",contentType:r.getContentType(p),imageData:r.base64DataFromDataURL(p),url:d.attributes.Url,width:Number(d.attributes.Width),height:Number(d.attributes.Height),angle:Number(d.attributes.Angle)||0,xoffset:Number(d.attributes.XOffset)||0,yoffset:Number(d.attributes.YOffset)||0})}else if(d&&"Marker"===d.attributes.Type){var g=e.queryJson(d,"Fill")[0],N=e.queryJson(g,"Color")[0],h=e.queryJson(d,"Outline")[0],S=e.queryJson(h,"Color")[0];c={type:"esriSMS",style:"esriSMS"+(d.attributes.Style||"Circle"),size:Number(d.attributes.Size),angle:Number(d.attributes.Angle)||0,xoffset:Number(d.attributes.XOffset)||0,yoffset:Number(d.attributes.YOffset)||0,color:MapTagsUtil.tagToColor(N),outline:h&&{type:"esriSLS",color:MapTagsUtil.tagToColor(S),style:"esriSLS"+(h.attributes.Style||"Solid"),width:void 0===h.attributes.Width?1:Number(h.attributes.Width)}}}}var L={fieldName:u.attributes.Name,defaultBasemapId:o&&o.attributes.PortalItemId,webMapId:n&&n.attributes.PortalItemId,additionalLayerInfos:f.length&&f,pinSymbolJson:c,mapScale:Number(u.attributes.Scale)||null};s&&(s.metadata.mapImageInfosHash[a.attributes.Name+"."+u.attributes.Name]=L)})})},a});
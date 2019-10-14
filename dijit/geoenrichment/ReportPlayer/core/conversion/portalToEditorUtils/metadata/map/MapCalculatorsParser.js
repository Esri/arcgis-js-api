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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","./MetadataToRendererParser","esri/dijit/geoenrichment/utils/ImageUtil"],function(e,t,r){var a={},s={tagToColor:function(e){if(!e)return null;var t=e.attributes;return[Number(t.Red),Number(t.Green),Number(t.Blue),void 0===t.Transparency?255:255*(1-Number(t.Transparency)/100)]}};return a.parseMapCalculators=function(a,i,u){e.queryJson(a,"Maps").forEach(function(a){e.queryJson(a,"Map").forEach(function(o){var n,l,m=e.queryJson(o,/^(|Layer|LocatorResultsLayer|ComparisonResultsLayer)$/),b=m.filter(function(e){return!!e.attributes.PortalItemId}),f=m.filter(function(e){return!!e.attributes.ServiceUrl||"LocatorResultsLayer"===e.name||"ComparisonResultsLayer"===e.name});b.length>1&&(n=b.shift()),l=b.shift();var c=[];f.forEach(function(e){if(e.attributes.ServiceUrl)c.push({url:e.attributes.ServiceUrl});else if("LocatorResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],a=i.metadata.locatorCalculatorsHash[e.attributes.CalculatorName];a.isValid&&c.push({isLocatorLayer:!0,layerName:e.attributes.LayerName,calculatorName:e.attributes.CalculatorName,calculatorInfo:a,rendererJson:r&&t.parseRendererJson(r)})}else if("ComparisonResultsLayer"===e.name){var r=e.tags&&e.tags.filter(function(e){return"Renderer"===e.name})[0],s=r&&t.parseRendererJson(r);s&&"esriTS"===s.uniqueValueInfos[0].symbol.type?c[c.length-1].labelRendererJson=s:c.push({isComparisonLayer:!0,calculatorName:e.attributes.CalculatorName,rendererJson:s,labelRendererJson:null})}});var y,d=e.queryJson(o,"SiteLayer")[0];if(d){var p=e.queryJson(d,"Symbol")[0];if(p&&"Image"===p.attributes.Type){var N=u.getImageData(p.attributes.Name);N&&(y={type:"esriPMS",contentType:r.getContentType(N),imageData:r.base64DataFromDataURL(N),url:p.attributes.Url,width:Number(p.attributes.Width),height:Number(p.attributes.Height),angle:Number(p.attributes.Angle)||0,xoffset:Number(p.attributes.XOffset)||0,yoffset:Number(p.attributes.YOffset)||0})}else if(p&&"Marker"===p.attributes.Type){var g=e.queryJson(p,"Fill")[0],h=g&&e.queryJson(g,"Color")[0],S=e.queryJson(p,"Outline")[0],L=S&&e.queryJson(S,"Color")[0];y={type:"esriSMS",style:"esriSMS"+(p.attributes.Style||"Circle"),size:Number(p.attributes.Size),angle:Number(p.attributes.Angle)||0,xoffset:Number(p.attributes.XOffset)||0,yoffset:Number(p.attributes.YOffset)||0,color:s.tagToColor(h),outline:S&&{type:"esriSLS",color:s.tagToColor(L),style:"esriSLS"+(S.attributes.Style||"Solid"),width:void 0===S.attributes.Width?1:Number(S.attributes.Width)}}}}var v={fieldName:o.attributes.Name,defaultBasemapId:n&&n.attributes.PortalItemId,webMapId:l&&l.attributes.PortalItemId,additionalLayerInfos:c.length&&c,pinSymbolJson:y,mapScale:Number(o.attributes.Scale)||null};i&&(i.metadata.mapImageInfosHash[a.attributes.Name+"."+o.attributes.Name]=v)})})},a});
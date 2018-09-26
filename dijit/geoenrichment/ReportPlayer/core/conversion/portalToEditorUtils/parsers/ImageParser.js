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

define(["../../ConversionUtil","./AlignParser"],function(e,a){var t={getElement:function(t,o){var i=t.attributes,l="mapImage"===t.name,n=l?null:o.processFileName(i.src),s={id:"img",fileName:n,isMapImage:l,circularMask:i.circularMask,scaleToCover:i.scaleToCover,style:{top:e.ptToPx(i.top)||0,left:e.ptToPx(i.left)||0,width:e.ptToPx(i.width),height:e.ptToPx(i.height),angle:Number(i.angle)||0,opacity:Math.min(1,Number(0===i.opacity?0:i.opacity||1))},isLogoPlaceholder:i.isLogoPlaceholder,dynamicBehavior:i.dynamicBehavior};if(l){var r=o.templateJson.metadata.mapImageInfosHash[i.name];s.webMapId=r?r.webMapId:i.webMapId,s.defaultBasemapId=r?r.defaultBasemapId:i.defaultBasemapId,s.mapScale=r?r.mapScale:null,s.calculatorFieldName=r&&r.fieldName,s.additionalLayerInfos=r&&r.additionalLayerInfos,s.showMapLegend=i.showMapLegend}return a.parseAlign(i,s.style),o.revisionVersion<1&&(s.style.angle=e.ptToPx(s.style.angle),s.style.opacity=Math.min(1,e.ptToPx(s.style.opacity))),n&&o.putImageData(n,i.data),o.postProcessImageJson&&o.postProcessImageJson(t,s),s},parseMapImageDField:function(e,a){return t.getElement({name:"mapImage",attributes:{name:e}},a)}};return t});
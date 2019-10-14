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

define(["../../ConversionUtil","./AlignParser"],function(e,a){var t={getElement:function(t,n){var o=t.attributes,p={id:"map",isMap:!0,style:{top:e.ptToPx(o.top)||0,left:e.ptToPx(o.left)||0,width:e.ptToPx(o.width),height:e.ptToPx(o.height)}},s=n.templateJson.metadata.mapImageInfosHash[o.name];return p.webMapId=s?s.webMapId:o.webMapId,p.defaultBasemapId=s?s.defaultBasemapId:o.defaultBasemapId,p.mapScale=s?s.mapScale:null,p.calculatorFieldName=s&&s.fieldName,p.additionalLayerInfos=s&&s.additionalLayerInfos,p.pinSymbolJson=s&&s.pinSymbolJson,p.showMapLegend=o.showMapLegend,a.parseAlign(o,p.style),n.postProcessMapJson&&n.postProcessMapJson(t,p),p},parseMapImageDField:function(e,a){return t.getElement({name:"mapImage",attributes:{name:e}},a)}};return t});
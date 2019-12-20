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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../../ConversionUtil","./AlignParser"],function(a,e){var t={getElement:function(t,n){var o=t.attributes,s={id:"map",isMap:!0,style:{top:a.ptToPx(o.top)||0,left:a.ptToPx(o.left)||0,width:a.ptToPx(o.width),height:a.ptToPx(o.height)}},p=n.templateJson.metadata.mapImageInfosHash[o.name];return s.webMapId=p?p.webMapId:o.webMapId,s.defaultBasemapId=p?p.defaultBasemapId:o.defaultBasemapId,s.mapScale=p?p.mapScale:null,s.calculatorFieldName=p&&p.fieldName,s.additionalLayerInfos=p&&p.additionalLayerInfos,s.pinSymbolJson=p&&p.pinSymbolJson,s.areaSymbolJsons=p&&p.areaSymbolJsons,s.areaSymbolRamp=p&&p.areaSymbolRamp,s.showMapLegend=o.showMapLegend,e.parseAlign(o,s.style),n.postProcessMapJson&&n.postProcessMapJson(t,s),s},parseMapImageDField:function(a,e){return t.getElement({name:"mapImage",attributes:{name:a}},e)}};return t});
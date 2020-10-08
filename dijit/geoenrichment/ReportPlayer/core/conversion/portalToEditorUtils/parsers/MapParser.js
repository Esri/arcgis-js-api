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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../../ConversionUtil","./AlignParser"],(function(a,e){var t={getElement:function(t,n){var s=t.attributes,o=n.templateJson.metadata.mapImageInfosHash[s.name],p={id:"map",isMap:!0,style:{top:a.ptToPx(s.top)||0,left:a.ptToPx(s.left)||0,width:a.ptToPx(s.width||o&&o.width||0),height:a.ptToPx(s.height||o&&o.height||0)}};return o||s.webMapId||s.defaultBasemapId||(p.isMissing=!0),p.webMapId=o?o.webMapId:s.webMapId,p.defaultBasemapId=o?o.defaultBasemapId:s.defaultBasemapId,p.mapScale=o?o.mapScale:null,p.calculatorFieldName=o&&o.fieldName,p.additionalLayerInfos=o&&o.additionalLayerInfos,p.pinSymbolJson=o&&o.pinSymbolJson,p.areaSymbolJsons=o&&o.areaSymbolJsons,p.areaSymbolRamp=o&&o.areaSymbolRamp,p.showMapLegend=s.showMapLegend,e.parseAlign(s,p.style),n.postProcessMapJson&&n.postProcessMapJson(t,p),p},parseMapImageDField:function(a,e){return t.getElement({name:"mapImage",attributes:{name:a}},e)}};return t}));
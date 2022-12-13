// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["../../ConversionUtil","./AlignParser"],(function(a,e){var t={getElement:function(t,s){var n=t.attributes,p=s.templateJson.metadata.mapImageInfosHash[n.name],o={id:"map",style:{top:a.ptToPx(n.top)||0,left:a.ptToPx(n.left)||0,width:a.ptToPx(n.width||p&&p.width||0),height:a.ptToPx(n.height||p&&p.height||0)}};return p||n.webMapId||n.defaultBasemapId||(o.isMissing=!0),o.defaultBasemapId=p?p.defaultBasemapId:n.defaultBasemapId,o.defaultBasemapName=p&&p.defaultBasemapName,o.webMapId=p?p.webMapId:n.webMapId,o.webMapName=p&&p.webMapName,o.mapScale=p?p.mapScale:null,o.calculatorFieldName=p&&p.fieldName,o.additionalLayerInfos=p&&p.additionalLayerInfos,o.pinSymbolJson=p&&p.pinSymbolJson,o.areaSymbolJsons=p&&p.areaSymbolJsons,o.areaSymbolRamp=p&&p.areaSymbolRamp,o.showMapLegend=n.showMapLegend,e.parseAlign(n,o.style),s.postProcessMapJson&&s.postProcessMapJson(t,o),o},parseMapImageDField:function(a,e){return t.getElement({name:"mapImage",attributes:{name:a}},e)}};return t}));
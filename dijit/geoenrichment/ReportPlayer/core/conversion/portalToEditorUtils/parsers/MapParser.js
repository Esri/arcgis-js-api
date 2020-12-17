// COPYRIGHT © 2020 Esri
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

define(["../../ConversionUtil","./AlignParser"],(function(a,e){var t={getElement:function(t,s){var p=t.attributes,n=s.templateJson.metadata.mapImageInfosHash[p.name],o={id:"map",isMap:!0,style:{top:a.ptToPx(p.top)||0,left:a.ptToPx(p.left)||0,width:a.ptToPx(p.width||n&&n.width||0),height:a.ptToPx(p.height||n&&n.height||0)}};return n||p.webMapId||p.defaultBasemapId||(o.isMissing=!0),o.defaultBasemapId=n?n.defaultBasemapId:p.defaultBasemapId,o.defaultBasemapName=n&&n.defaultBasemapName,o.webMapId=n?n.webMapId:p.webMapId,o.webMapName=n&&n.webMapName,o.mapScale=n?n.mapScale:null,o.calculatorFieldName=n&&n.fieldName,o.additionalLayerInfos=n&&n.additionalLayerInfos,o.pinSymbolJson=n&&n.pinSymbolJson,o.areaSymbolJsons=n&&n.areaSymbolJsons,o.areaSymbolRamp=n&&n.areaSymbolRamp,o.showMapLegend=p.showMapLegend,e.parseAlign(p,o.style),s.postProcessMapJson&&s.postProcessMapJson(t,o),o},parseMapImageDField:function(a,e){return t.getElement({name:"mapImage",attributes:{name:a}},e)}};return t}));
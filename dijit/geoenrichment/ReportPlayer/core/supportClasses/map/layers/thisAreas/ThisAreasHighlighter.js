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

define(["../../symbols/HighlightedSymbolGenerator"],function(e){var r={};return r.registerThisLayersForHighlighing=function(e){e.thisAreasHighlightController&&e.thisAreaLayers.forEach(function(i,t){var a=e.thisAreaLayerIndexToAreaIndex[t];r._registerLayer(i,"thisAreaLayer"+a,e.map,e.thisAreasHighlightController,e,a)})},r._registerLayer=function(r,i,t,a,n,h){e.getHighlightSymbol({graphicsLayer:r}).then(function(e){var s=e.symbol;a.setThisAreaLayer(n.calculatorFieldName+";"+i,r,t,{thisAreaIndex:h,getGraphicForAreaIndexFunc:function(e){if(e===h)return r.graphics[0]},setGraphicHighlightedFunc:function(e,r){e.setSymbol(r?s:null)}})})},r});
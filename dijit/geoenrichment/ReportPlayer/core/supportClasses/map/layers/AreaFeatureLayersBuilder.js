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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/Color","esri/graphic","esri/layers/GraphicsLayer","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/renderers/SimpleRenderer","./LocatorPointsBuilder","./LayerInfoTemplateProvider"],function(e,r,n,t,o,i,a,l,y){var s={};return s.addAreaFeatures=function(e,t){function o(t){var o=new n;return o.name=e.areaName,t.forEach(function(e){var n=e.getLayer(),t=new r(e.geometry,s._getSymbolForGraphic(e),e.attributes);t.setInfoTemplate(n&&n.infoTemplate||e.infoTemplate),o.add(t),o.setRenderer(new a(t.symbol))}),o}var i=e.features.filter(function(e){return"polygon"===e.geometry.type}),l=e.features.filter(function(e){return"point"===e.geometry.type});i.length&&t.registerLayerInfo({layer:o(i),type:t.AREA_FEATURE_POLYGONS}),l.length&&t.registerLayerInfo({layer:o(l),type:t.AREA_FEATURE_POINTS})},s._getSymbolForGraphic=function(r){var n=r.getLayer();return n&&n.renderer&&n.renderer.getSymbol(r)||r.symbol||("point"===r.geometry.type?function(){return new t(t.STYLE_CIRCLE,20,new i(i.STYLE_SOLID,new e([255,255,255,.7]),2),new e([255,0,0,.7]))}():function(){var r=new o;return r.setOutline(new i(i.STYLE_SOLID,new e([255,0,0,1]),2)),r.setColor(new e([100,100,100,.25])),r}())},s});
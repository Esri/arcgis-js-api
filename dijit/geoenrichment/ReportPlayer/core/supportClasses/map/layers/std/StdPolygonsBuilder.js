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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./DefaultSymbolRenderer","./LoadedFeaturesSyncronizer","../../symbols/HighlightedSymbolGenerator","esri/dijit/geoenrichment/utils/SymbolUtil"],(function(e,t,r,n){var o={addStdPolygons:function(e,r){e.stdPolygonsControllers&&e.stdPolygonsControllers.forEach((function(n){var l=new t({controller:n,layerSorter:r,map:e.map,countryID:e.countryID,hierarchy:e.hierarchy,calculatorFieldName:e.calculatorFieldName,onLayerCreated:function(t,r){o._registerLayer(t,r,e.map,n,e)}}),a=[];a.push(n.setShownFeaturesChangedListener((function(){l.syncWithShownFeatures()}))),a.push(n.setLoadAllFeaturesListener((function(){return l.loadAllFeatures()}))),l.syncWithShownFeatures();var i=e.map.on("before-unload",(function(){i.remove(),a.forEach((function(e){e.remove()})),a.length=0,l.destroy(),l=null}))}))},_registerLayer:function(t,o,l,a,i){var u=a.getRendererJson(i.calculatorFieldName);r.getHighlightSymbol({graphicsLayer:t,rendererJson:u,defaultHighlightSymbol:e.getDefaultStdSymbolHighlighted()}).then((function(e){var r=e.symbol;n.simpleFillSymbolToPictureFillSymbol(r).then((function(e){a.setStdPolygonsLayer(i.calculatorFieldName+";"+o,t,l,{getGraphicForAttributesFunc:function(e){return e&&"object"==typeof e&&t.graphics.filter((function(t){return t.attributes.StdGeographyLevel===e.StdGeographyLevel&&t.attributes.StdGeographyID===e.StdGeographyID}))[0]},setGraphicHighlightedFunc:function(t,n){t.setSymbol(n?e||r:null)}})}))}))},getDefaultStdRenderer:function(){return e.getDefaultStdRenderer()}};return o}));

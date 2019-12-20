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

define(["esri/layers/GraphicsLayer","./locator/LocatorPointsBuilder","./std/StdPolygonsBuilder","./thisAreas/AreaFeatureLayersBuilder","./thisAreas/ThisAreasHighlighter","./LayersSorter"],function(a,e,r,o,t,l){var s={};return s.addLayersToMap=function(s,n){var i=new l(s),d=new a;d.id="popupLayer",s.addLayer(d);var y=o.addAreaFeatures({features:n.features,featureIndexToAreaIndexMap:n.featureIndexToAreaIndexMap,analysisAreas:n.analysisAreas,map:s,pinSymbolJson:n.pinSymbolJson,areaSymbolJsons:n.areaSymbolJsons,areaSymbolRamp:n.areaSymbolRamp,attachmentsStore:n.attachmentsStore},i);t.registerThisLayersForHighlighing({thisAreasHighlightController:n.thisAreasHighlightController,calculatorFieldName:n.calculatorFieldName,thisAreaLayers:y.polygonLayers,thisAreaLayerIndexToAreaIndex:y.polygonLayerIndexToAreaIndex,map:s}),r.addStdPolygons({stdPolygonsControllers:n.stdPolygonsControllers,geClient:n.geClient,countryID:n.countryID,hierarchy:n.hierarchy,calculatorFieldName:n.calculatorFieldName,map:s},i),e.addLocatorPoints({locatorPointsControllers:n.locatorPointsControllers,geClient:n.geClient,countryID:n.countryID,calculatorFieldName:n.calculatorFieldName,map:s},i),i.addFromAdditionalLayerInfos(n.additionalLayerInfos),i.sortLayers()},s});
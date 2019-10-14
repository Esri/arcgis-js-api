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

define(["esri/layers/GraphicsLayer","./locator/LocatorPointsBuilder","./std/StdPolygonsBuilder","./thisAreas/AreaFeatureLayersBuilder","./thisAreas/ThisAreasHighlighter","./LayersSorter"],function(e,a,r,o,t,l){var s={};return s.addLayersToMap=function(s,i){var n=new l(s),d=new e;d.id="popupLayer",s.addLayer(d);var y=o.addAreaFeatures({features:i.features,featureIndexToAreaIndexMap:i.featureIndexToAreaIndexMap,analysisAreas:i.analysisAreas,map:s,attachmentsStore:i.attachmentsStore},n);t.registerThisLayersForHighlighing({thisAreasHighlightController:i.thisAreasHighlightController,calculatorFieldName:i.calculatorFieldName,thisAreaLayers:y.polygonLayers,thisAreaLayerIndexToAreaIndex:y.polygonLayerIndexToAreaIndex,map:s}),r.addStdPolygons({stdPolygonsControllers:i.stdPolygonsControllers,geClient:i.geClient,countryID:i.countryID,hierarchy:i.hierarchy,calculatorFieldName:i.calculatorFieldName,map:s},n),a.addLocatorPoints({locatorPointsControllers:i.locatorPointsControllers,geClient:i.geClient,countryID:i.countryID,calculatorFieldName:i.calculatorFieldName,map:s},n),n.addFromAdditionalLayerInfos(i.additionalLayerInfos),n.sortLayers()},s});
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

define(["esri/layers/GraphicsLayer","./LocatorPointsBuilder","./LayerInfoTemplateProvider","./AreaFeatureLayersBuilder","./LayersSorter"],function(a,e,r,o,t){var d={};return d.addLayersToMap=function(r,d){var i=new t(r),n=new a;n.id="popupLayer",r.addLayer(n),o.addAreaFeatures({areaName:d.areaName,features:d.features},i),e.addLocatorPoints({features:d.features,locatorPointsControllers:d.locatorPointsControllers,fieldData:d.fieldData,geClient:d.geClient,countryID:d.countryID,calculatorFieldName:d.calculatorFieldName,map:r},i),i.addFromAdditionalLayerInfos(d.additionalLayerInfos),i.sortLayers()},d});
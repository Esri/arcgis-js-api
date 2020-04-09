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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/graphic","esri/dijit/geoenrichment/utils/CoordinateUtil"],(function(e,a,t,r,i,n){return a(null,{_initBuilderPromise:null,_mapBuilder:null,_initMapBuilder:function(){var a=this;if(this._initBuilderPromise)return this._initBuilderPromise;var r=new t;return e(["../core/supportClasses/map/MapBuilder"],(function(e){a._mapBuilder=new e({renderMapsFromCalculators:a.isPlayerOnServer,getPlayerZoomScale:function(e){var t=a.getCurrentReportContainer();return t&&t.getPanelZoomScale?t.getPanelZoomScale(e):t&&t.getZoomInfo&&t.getZoomInfo().scale}}),r.resolve()})),this._initBuilderPromise=r.promise},collectMaps:function(e){return this._mapBuilder?e&&e.allAreas?this._mapBuilder.collectAllAreasMaps():this._mapBuilder.collectAreaMaps(this.getCurrentAnalysisAreaIndex()):[]},_resetMapBuilder:function(){this._mapBuilder&&this._mapBuilder.reset()},_createMap:function(e,a){var t,o={},s=(a=a||{}).areaIndex||0,l=this._reportData;if(this.isPlayerOnServer&&(l.analysisAreas.forEach((function(e){!e.location&&e.feature.attributes&&e.feature.attributes.STORE_LAT&&e.feature.attributes.STORE_LONG&&(e.location=(e.feature.attributes,new i({geometry:{x:e.feature.attributes.STORE_LONG,y:e.feature.attributes.STORE_LAT,spatialReference:{wkid:n.WGS_84_WKID}}})))})),l.combinedAreasInfo.groups&&l.combinedAreasInfo.groups.forEach((function(e){var a=l.analysisAreas[e.indexes[0]];!e.location&&a.location&&(e.location=new i({geometry:a.location.geometry.toJson()}))}))),l.isMultiFeature){t=[];var u=l.reverseAnalysisAreasOnMap?l.analysisAreas.slice().reverse():l.analysisAreas;u.forEach((function(e,a){var r=l.reverseAnalysisAreasOnMap?u.length-a-1:a;o[t.length]=r,t.push(e.feature);var i=l.combinedAreasInfo.groups;i&&i.length&&i.some((function(e){return-1!==e.indexes.indexOf(r)}))||(e.location&&(o[t.length]=r,t.push(e.location)),e.additionalFeatures&&e.additionalFeatures.forEach((function(e){o[t.length]=r,t.push(e)})))})),l.combinedAreasInfo.groups&&l.combinedAreasInfo.groups.forEach((function(e){e.location&&(o[t.length]=e.indexes[0],t.push(e.location),e.location.locationName=e.locationName),e.additionalFeatures&&e.additionalFeatures.forEach((function(a){o[t.length]=e.indexes[0],t.push(a)}))}))}else{var c=l.analysisAreas[s];t=[c.feature],c.location&&t.push(c.location),c.additionalFeatures&&(t=t.concat(c.additionalFeatures)),t.forEach((function(e,a){o[a]=s}))}return r(this._initMapBuilder(),function(){this._mapBuilder.setArcgisUrl(l.config.portalUrl),this._mapBuilder.setFallbackMapImageInfos(l.mapImageInfos);return this._mapBuilder.createMap(e,{features:t,featureIndexToAreaIndexMap:o,analysisAreas:l.analysisAreas,areaIndex:s,defaultBasemapId:this._getDefaultBasemapId()||a.defaultBasemapId,webMapId:a.webMapId,additionalLayerInfos:a.additionalLayerInfos,calculatorFieldName:a.calculatorFieldName,pinSymbolJson:a.pinSymbolJson,areaSymbolJsons:a.areaSymbolJsons,areaSymbolRamp:a.areaSymbolRamp,locatorPointsControllers:a.locatorPointsControllers,stdPolygonsControllers:a.stdPolygonsControllers,thisAreasHighlightController:a.thisAreasHighlightController,legendController:a.legendController,fieldData:this._viewModel.dynamicReportInfo.fieldData,geClient:this._viewModel.dynamicReportInfo.geClient,countryID:this._viewModel.dynamicReportInfo.countryID,hierarchy:this._viewModel.dynamicReportInfo.hierarchy,waitForLoad:a.waitForLoad,extent:a.extent,attachmentsStore:this._viewModel.dynamicReportInfo.attachmentsStore,onPanContainer:function(e,a){}})}.bind(this))},_getDefaultBasemapId:function(){return null}})}));
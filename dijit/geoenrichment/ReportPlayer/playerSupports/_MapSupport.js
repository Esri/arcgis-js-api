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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],function(e,t,a,r){return t(null,{_initBuilderPromise:null,_mapBuilder:null,_initMapBuilder:function(){var t=this;if(this._initBuilderPromise)return this._initBuilderPromise;var r=new a;return e(["../core/supportClasses/map/MapBuilder"],function(e){t._mapBuilder=new e({renderMapsFromCalculators:t.renderMapsFromCalculators,getPlayerZoomScale:function(e){var a=t.getCurrentReportContainer();return a&&a.getPanelZoomScale?a.getPanelZoomScale(e):a&&a.getZoomInfo&&a.getZoomInfo().scale}}),r.resolve()}),this._initBuilderPromise=r.promise},collectMaps:function(e){return this._mapBuilder?e&&e.allAreas?this._mapBuilder.collectAllAreasMaps():this._mapBuilder.collectAreaMaps(this.getCurrentAnalysisAreaIndex()):[]},_resetMapBuilder:function(){this._mapBuilder&&this._mapBuilder.reset()},_createMap:function(e,t){t=t||{};var a,i={},n=this.getCurrentAnalysisAreaIndex();if(this._reportData.isMultiFeature){a=[];var o=this._reportData.reverseAnalysisAreasOnMap?this._reportData.analysisAreas.slice().reverse():this._reportData.analysisAreas;o.forEach(function(e,t){var r=this._reportData.reverseAnalysisAreasOnMap?o.length-t-1:t;i[a.length]=r,a.push(e.feature);var n=this._reportData.combinedAreasInfo.groups;n&&n.length&&n.some(function(e){return-1!==e.indexes.indexOf(r)})||(e.location&&(i[a.length]=r,a.push(e.location)),e.additionalFeatures&&e.additionalFeatures.forEach(function(e){i[a.length]=r,a.push(e)}))},this),this._reportData.combinedAreasInfo.groups&&this._reportData.combinedAreasInfo.groups.forEach(function(e){e.location&&(i[a.length]=e.indexes[0],a.push(e.location)),e.additionalFeatures&&e.additionalFeatures.forEach(function(t){i[a.length]=e.indexes[0],a.push(t)})})}else{var s=this._reportData.analysisAreas[n];a=[s.feature],s.location&&a.push(s.location),s.additionalFeatures&&(a=a.concat(s.additionalFeatures)),a.forEach(function(e,t){i[t]=n},this)}return r(this._initMapBuilder(),function(){this._mapBuilder.setArcgisUrl(this._reportData.config.portalUrl),this._mapBuilder.setFallbackMapImageInfos(this._reportData.mapImageInfos);return this._mapBuilder.createMap(e,{features:a,featureIndexToAreaIndexMap:i,analysisAreas:this._reportData.analysisAreas,areaIndex:n,defaultBasemapId:this._getDefaultBasemapId()||t.defaultBasemapId,webMapId:t.webMapId,additionalLayerInfos:t.additionalLayerInfos,calculatorFieldName:t.calculatorFieldName,locatorPointsControllers:t.locatorPointsControllers,stdPolygonsControllers:t.stdPolygonsControllers,thisAreasHighlightController:t.thisAreasHighlightController,legendController:t.legendController,fieldData:this._viewModel.dynamicReportInfo.fieldData,geClient:this._viewModel.dynamicReportInfo.geClient,countryID:this._viewModel.dynamicReportInfo.countryID,hierarchy:this._viewModel.dynamicReportInfo.hierarchy,waitForLoad:t.waitForLoad,extent:t.extent,attachmentsStore:this._viewModel.dynamicReportInfo.attachmentsStore,onPanContainer:function(e,t){}})}.bind(this))},_getDefaultBasemapId:function(){return null}})});
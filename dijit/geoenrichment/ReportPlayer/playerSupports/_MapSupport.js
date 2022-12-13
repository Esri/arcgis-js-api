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

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,a,t,r){return a(null,{_initBuilderPromise:null,_mapBuilder:null,_initMapBuilder:function(){var a=this;if(this._initBuilderPromise)return this._initBuilderPromise;var r=new t;return e([a.isPlayerOnServer?"../core/supportClasses/map/ServerMapBuilder":"../core/supportClasses/map/MapBuilder"],(function(e){a._mapBuilder=new e({getPlayerZoomScale:function(e){var t=a.getCurrentReportContainer();return t&&t.getPanelZoomScale?t.getPanelZoomScale(e):t&&t.getZoomInfo&&t.getZoomInfo().scale}}),r.resolve()})),this._initBuilderPromise=r.promise},collectMaps:function(e){return this._mapBuilder?e&&e.allAreas?this._mapBuilder.collectAllAreasMaps():this._mapBuilder.collectAreaMaps(this.getCurrentAnalysisAreaIndex()):[]},_resetMapBuilder:function(){this._mapBuilder&&this._mapBuilder.reset()},_createMap:function(e,a){return a=a||{},r(this._initMapBuilder(),function(){return this._mapBuilder.setFallbackMapImageInfos(this._reportData.mapImageInfos),this._mapBuilder.createMap(e,{reportData:this._reportData,areaIndex:a.areaIndex,defaultBasemapId:this._getDefaultBasemapId()||a.defaultBasemapId,defaultBasemapName:a.defaultBasemapName,webMapId:a.webMapId,webMapName:a.webMapName,additionalLayerInfos:a.additionalLayerInfos,calculatorFieldName:a.calculatorFieldName,pinSymbolJson:a.pinSymbolJson,areaSymbolJsons:a.areaSymbolJsons,areaSymbolRamp:a.areaSymbolRamp,locatorPointsControllers:a.locatorPointsControllers,stdPolygonsControllers:a.stdPolygonsControllers,thisAreasHighlightController:a.thisAreasHighlightController,legendController:a.legendController,fieldData:this._viewModel.dynamicReportInfo.fieldData,geClient:this._viewModel.dynamicReportInfo.geClient,countryID:this._viewModel.dynamicReportInfo.countryID,hierarchy:this._viewModel.dynamicReportInfo.hierarchy,waitForLoad:a.waitForLoad,extent:a.extent,attachmentsStore:this._viewModel.dynamicReportInfo.attachmentsStore,onPanContainer:function(e,a){}})}.bind(this))},_getDefaultBasemapId:function(){return null}})}));
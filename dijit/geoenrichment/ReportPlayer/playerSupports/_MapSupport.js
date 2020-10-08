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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,t,r,a){return t(null,{_initBuilderPromise:null,_mapBuilder:null,_initMapBuilder:function(){var t=this;if(this._initBuilderPromise)return this._initBuilderPromise;var a=new r;return e([t.isPlayerOnServer?"../core/supportClasses/map/ServerMapBuilder":"../core/supportClasses/map/MapBuilder"],(function(e){t._mapBuilder=new e({getPlayerZoomScale:function(e){var r=t.getCurrentReportContainer();return r&&r.getPanelZoomScale?r.getPanelZoomScale(e):r&&r.getZoomInfo&&r.getZoomInfo().scale}}),a.resolve()})),this._initBuilderPromise=a.promise},collectMaps:function(e){return this._mapBuilder?e&&e.allAreas?this._mapBuilder.collectAllAreasMaps():this._mapBuilder.collectAreaMaps(this.getCurrentAnalysisAreaIndex()):[]},_resetMapBuilder:function(){this._mapBuilder&&this._mapBuilder.reset()},_createMap:function(e,t){return t=t||{},a(this._initMapBuilder(),function(){return this._mapBuilder.setFallbackMapImageInfos(this._reportData.mapImageInfos),this._mapBuilder.createMap(e,{reportData:this._reportData,areaIndex:t.areaIndex,defaultBasemapId:this._getDefaultBasemapId()||t.defaultBasemapId,webMapId:t.webMapId,additionalLayerInfos:t.additionalLayerInfos,calculatorFieldName:t.calculatorFieldName,pinSymbolJson:t.pinSymbolJson,areaSymbolJsons:t.areaSymbolJsons,areaSymbolRamp:t.areaSymbolRamp,locatorPointsControllers:t.locatorPointsControllers,stdPolygonsControllers:t.stdPolygonsControllers,thisAreasHighlightController:t.thisAreasHighlightController,legendController:t.legendController,fieldData:this._viewModel.dynamicReportInfo.fieldData,geClient:this._viewModel.dynamicReportInfo.geClient,countryID:this._viewModel.dynamicReportInfo.countryID,hierarchy:this._viewModel.dynamicReportInfo.hierarchy,waitForLoad:t.waitForLoad,extent:t.extent,attachmentsStore:this._viewModel.dynamicReportInfo.attachmentsStore,onPanContainer:function(e,t){}})}.bind(this))},_getDefaultBasemapId:function(){return null}})}));
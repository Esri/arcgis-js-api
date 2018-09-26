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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-construct","../../supportClasses/map/legend/LegendController","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,n,o,i,s){return e(null,{_isPlacingMapFlag:!1,_placeMapPromise:null,_currentMap:null,_locatorPointsControllers:null,_stdPolygonsControllers:null,_placeMap:function(){return this._placeMapPromise=i.invoke(this,"_doPlaceMap")},_doPlaceMap:function(){function e(){a._currentMap&&a._currentMap.destroy(),a._currentMap=null}function i(){s.removeProgress(a.content),a._finalizePlaceMap()}function r(){i(),a._showErrorMessage(!0),a.onMapLoadError()}var a=this;return this._showErrorMessage(!1),this._isPlacingMapFlag&&this._finalizePlaceMap(),n.empty(this.content),e(),s.showProgress(this.content),this.onContentLoadingStart(),this._isPlacingMapFlag=!0,this._legendController=new o,this._additionalLayerInfos&&this.viewModel.dynamicReportInfo&&!this._locatorPointsControllers&&(this._locatorPointsControllers=[],this._additionalLayerInfos.forEach(function(e,t){if(e.index=t,e.isLocatorLayer){var n=this.viewModel.getLocatorPointsController(e.calculatorInfo,this.currentFeatureIndex);e.layerName&&n.setLayerName(this._calculatorFieldName,e.layerName),n.setRendererJson(this._calculatorFieldName,e.rendererJson),n.setLayerIndex(this._calculatorFieldName,t),this.own(n),this._locatorPointsControllers.push(n)}},this),this._stdPolygonsControllers=[],this._additionalLayerInfos.forEach(function(e,t){if(e.index=t,e.isComparisonLayer){var n=this.viewModel.getStdPolygonsController(e.calculatorName);n.setRendererJson(this._calculatorFieldName,e.rendererJson),n.setLayerIndex(this._calculatorFieldName,t),this.own(n),this._stdPolygonsControllers.push(n)}},this)),t(this._createMapFunc(this.content,{defaultBasemapId:this._defaultBasemapId,webMapId:this._webMapId,additionalLayerInfos:this._additionalLayerInfos&&this._additionalLayerInfos.filter(function(e){return!!e.url}),locatorPointsControllers:this._locatorPointsControllers,stdPolygonsControllers:this._stdPolygonsControllers,thisAreasHighlightController:this.viewModel.getThisAreasHighlightController(),legendController:this._legendController,waitForLoad:!0,extent:this._mapExtentPending,calculatorFieldName:this._calculatorFieldName}),function(t){a.showMapLegend&&a._legendController.setLegendVisible(!0),a._locatorPointsControllers&&a._locatorPointsControllers.forEach(function(e){e.setMapInfo(a._calculatorFieldName,t)}),a._stdPolygonsControllers&&a._stdPolygonsControllers.forEach(function(e){e.setMapInfo(a._calculatorFieldName,t)});var n=t&&t.map;return e(),!a.domNode&&n?void n.destroy():(a._currentMap=n,n?(a.own(n),void i()):void r())},r)},_finalizePlaceMap:function(){this._isPlacingMapFlag&&(this._isPlacingMapFlag=!1,this.onContentLoadingEnd())},getLoadMapPromise:function(){return this._placeMapPromise},isLegendVisible:function(){return this.showMapLegend},setLegendVisible:function(e){this.showMapLegend=e,this._legendController.setLegendVisible(e)},_mapExtentPending:null,getVisualState:function(){return{mapExtent:this._currentMap&&this._currentMap.extent,showLegend:this.isLegendVisible()}},setVisualState:function(e){this._mapExtentPending=null,e&&(e.mapExtent&&(this._currentMap&&this._currentMap.setExtent?this._currentMap.setExtent(e.mapExtent):this._mapExtentPending=e.mapExtent),void 0!==e.showLegend&&this.setLegendVisible(e.showLegend))},destroy:function(){this._finalizePlaceMap(),this.inherited(arguments)}})});
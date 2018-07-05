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

define(["dojo/_base/declare","dojo/when","dojo/dom-construct","../../supportClasses/map/legend/LegendController","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],function(t,e,n,i,o,s){return t(null,{_isPlacingMapFlag:!1,_currentMap:null,_locatorPointsControllers:null,_placeMap:function(){return o.invoke(this,"_doPlaceMap")},_doPlaceMap:function(){function t(){r._currentMap&&r._currentMap.destroy(),r._currentMap=null}function o(){s.removeProgress(r.content),r._finalizePlaceMap()}function a(){o(),r._showErrorMessage(!0),r.onMapLoadError()}var r=this;return this._showErrorMessage(!1),this._isPlacingMapFlag&&this._finalizePlaceMap(),n.empty(this.content),t(),s.showProgress(this.content),this.onContentLoadingStart(),this._isPlacingMapFlag=!0,this._legendController=new i,this._legendController.showLegend=this._showLegend,this._additionalLayerInfos&&this.viewModel.dynamicReportInfo&&!this._locatorPointsControllers&&(this._locatorPointsControllers=[],this._additionalLayerInfos.forEach(function(t,e){if(t.index=e,t.isLocatorLayer){var n=this.viewModel.getLocatorPointsController(t.calculatorInfo);n.setRendererJson(this._calculatorFieldName,t.rendererJson),n.setLayerIndex(this._calculatorFieldName,e),this.own(n),this._locatorPointsControllers.push(n)}},this)),e(this._createMapFunc(this.content,{defaultBasemapId:this._defaultBasemapId,webMapId:this._webMapId,additionalLayerInfos:this._additionalLayerInfos&&this._additionalLayerInfos.filter(function(t){return!!t.url}),locatorPointsControllers:this._locatorPointsControllers,legendController:this._legendController,waitForLoad:!0,extent:this._mapExtentPending,calculatorFieldName:this._calculatorFieldName}),function(e){r._locatorPointsControllers&&r._locatorPointsControllers.forEach(function(t){t.setMapInfo(r._calculatorFieldName,e)});var n=e&&e.map;return t(),!r.domNode&&n?void n.destroy():(r._currentMap=n,n?(r.own(n),void o()):void a())},a)},_finalizePlaceMap:function(){this._isPlacingMapFlag&&(this._isPlacingMapFlag=!1,this.onContentLoadingEnd())},isLegendVisible:function(){return this._showLegend},setLegendVisible:function(t){this._showLegend=t,this._legendController.setLegendVisible(t)},_mapExtentPending:null,getVisualState:function(){return{mapExtent:this._currentMap&&this._currentMap.extent,showLegend:this.isLegendVisible()}},setVisualState:function(t){this._mapExtentPending=null,t&&(t.mapExtent&&(this._currentMap&&this._currentMap.setExtent?this._currentMap.setExtent(t.mapExtent):this._mapExtentPending=t.mapExtent),void 0!==t.showLegend&&this.setLegendVisible(t.showLegend))},destroy:function(){this._finalizePlaceMap(),this.inherited(arguments)}})});
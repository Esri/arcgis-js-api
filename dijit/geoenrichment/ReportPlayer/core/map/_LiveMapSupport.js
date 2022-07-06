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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","dojo/string","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/query","esri/geometry/Extent","../supportClasses/map/legend/LegendController","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../reportContainerGrid/utils/PageQueryUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,n,o,r,a,s,l,d,c,h,u,m,p,_){return _=_.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{_isPlacingMapFlag:!1,_placeMapPromise:null,_currentMap:null,_locatorPointsControllers:null,_stdPolygonsControllers:null,_legendController:null,_limitedPlacingInfo:null,postCreate:function(){var e=this;if(this.viewModel.dynamicReportInfo){var t=d.getParentReportPlayer(this),i=-1,n=0,o=l.calcNumberOfMaps(this.viewModel.dynamicReportInfo.templateJson,(function(t){e.json.calculatorFieldName===t.calculatorFieldName&&(i=n),n++})),r=this.viewModel.dynamicReportInfo.analysisAreas.filter((function(e){return!e.hidden})).length;(t.viewMode===m.FULL_PAGES||t.viewMode===m.PANELS_IN_STACK)&&r*o>p.maps.maxNumberOfMapsShownAtTheSameTime&&(this._limitedPlacingInfo={numMapsPerArea:o,numVisibleAreas:r,currentIndex:i})}this.inherited(arguments)},getCurrentMap:function(){return this._currentMap},getRenderPromise:function(){return this._placeMapPromise},_placeMap:function(){if(this._limitedPlacingInfo){var e=0;if(this.viewModel.dynamicReportInfo.analysisAreas.some((function(t,i){if(this.currentFeatureIndex===i)return!0;!t.hidden&&e++}),this),1===this._limitedPlacingInfo.numVisibleAreas){if(this._limitedPlacingInfo.currentIndex>=p.maps.maxNumberOfMapsShownAtTheSameTime)return this._showLimitMessage(),null}else if((e+1)*this._limitedPlacingInfo.numMapsPerArea>p.maps.maxNumberOfMapsShownAtTheSameTime)return this._showLimitMessage(),null}return this._placeMapPromise=h.invoke(this,"_doPlaceMap")},_doPlaceMap:function(){var e=this;function t(){u.removeProgress(e.content),e._finalizePlaceMap()}function i(){t(),e._showErrorMessage(!0),e.onMapLoadError()}return this._showErrorMessage(!1),this._isPlacingMapFlag&&this._finalizePlaceMap(),this.content.innerHTML="",this._destroyMap(),u.showProgress(this.content),this._isPlacingMapFlag=!0,this._legendController=new s,this._legendController.addCallback((function(t){e.showMapLegend=t,e.onLegendVisibilityChanged()}),"mapContainer"),this.viewModel.dynamicReportInfo&&this.own(this.viewModel.registerLegendController(this._legendController,this._calculatorFieldName,this.currentFeatureIndex)),this._additionalLayerInfos&&this.viewModel.dynamicReportInfo&&!this._locatorPointsControllers&&(this._locatorPointsControllers=[],this._additionalLayerInfos.forEach((function(e,t){if(e.index=t,e.isLocatorLayer){var i=this.viewModel.getLocatorPointsController(e.calculatorInfo,this.currentFeatureIndex);e.layerName&&i.setLayerName(this._calculatorFieldName,e.layerName),i.setRendererJson(this._calculatorFieldName,e.rendererJson),i.setLayerIndex(this._calculatorFieldName,t),this.own(i),this._locatorPointsControllers.push(i)}}),this),this._stdPolygonsControllers=[],this._additionalLayerInfos.forEach((function(t,i){if(t.index=i,t.isComparisonLayer){var n=function(n){var o=e.viewModel.getStdPolygonsController(t.calculatorName,n);o.setRendererJson(e._calculatorFieldName,t.rendererJson),t.labelRendererJson&&o.setLabelRendererJson(e._calculatorFieldName,t.labelRendererJson),o.setLayerIndex(e._calculatorFieldName,i),e.own(o),e._stdPolygonsControllers.push(o)};this.viewModel.dynamicReportInfo.isMultiFeature?this.viewModel.dynamicReportInfo.analysisAreas.forEach((function(e,t){n(t)})):n(this.currentFeatureIndex)}}),this)),n(this._createMapFunc(this.content,{areaIndex:this.currentFeatureIndex,defaultBasemapId:this._defaultBasemapId,defaultBasemapName:this._defaultBasemapName,webMapId:this._webMapId,webMapName:this._webMapName,additionalLayerInfos:this._additionalLayerInfos&&this._additionalLayerInfos.filter((function(e){return!!e.url})),locatorPointsControllers:this._locatorPointsControllers,stdPolygonsControllers:this._stdPolygonsControllers,thisAreasHighlightController:this.viewModel.getThisAreasHighlightController(),legendController:this._legendController,waitForLoad:!0,extent:this._mapExtentPending,pinSymbolJson:this._pinSymbolJson,areaSymbolJsons:this._areaSymbolJsons,areaSymbolRamp:this._areaSymbolRamp,calculatorFieldName:this._calculatorFieldName}),(function(n){e.showMapLegend&&e._legendController.setLegendVisible(!0),e._locatorPointsControllers&&e._locatorPointsControllers.forEach((function(t){t.setMapInfo(e._calculatorFieldName,n)})),e._stdPolygonsControllers&&e._stdPolygonsControllers.forEach((function(t){t.setMapInfo(e._calculatorFieldName,n)}));var o=n&&n.map;if(e._destroyMap(),e.domNode||!o){e._currentMap=o,e._syncWithPanelScale();for(var a=r("svg",e.domNode),s=0;s<a.length;s++)a[s].style.willChange="auto";o?(e.own(o),t()):i()}else o.destroy()}),i)},_finalizePlaceMap:function(){this._isPlacingMapFlag&&(this._isPlacingMapFlag=!1)},_showLimitMessage:function(){if(this.domNode){var e=o.create("div",{class:"esriGEReportPlayerPanelErrorMessage",innerHTML:1===this._limitedPlacingInfo.numVisibleAreas?i.substitute(_.mapLimitErrorSingle,[p.maps.maxNumberOfMapsShownAtTheSameTime]):_.mapLimitErrorMulti},this.domNode);e.style.color=this.viewModel.getDocumentDefaultStyles().color,e.style.paddingTop=this.getHeight()/2-20+"px",c.hide(this.contentBlock)}},isLegendVisible:function(){return this.showMapLegend},setLegendVisible:function(e,t){return this.showMapLegend=e,this._legendController&&this._legendController.setLegendVisible(e,t)},_mapExtentPending:null,getVisualState:function(){return{type:"map",mapExtent:this._currentMap&&this._currentMap.extent&&this._currentMap.extent.toJson(),showLegend:this.isLegendVisible()}},setVisualState:function(e){var t=this;if(this._mapExtentPending=null,e)return n(this.getRenderPromise(),(function(){return e.mapExtent&&(t._currentMap&&t._currentMap.setExtent?t._currentMap.setExtent(new a(e.mapExtent)):t._mapExtentPending=e.mapExtent),t._syncWithPanelScale(),n(t._currentMap&&t._currentMap._extentDfd&&t._currentMap._extentDfd.promise,(function(){if(void 0!==e.showLegend)return t.setLegendVisible(e.showLegend)}))}))},notifyShown:function(){},_panelScale:null,_toolbarCreateH:null,notifyPanelScaleChanged:function(e){this._panelScale=e,this._syncWithPanelScale()},_syncWithPanelScale:function(){if(this._currentMap){for(var e,i=this.parentWidget;i&&!i.isSection;)(i=i.parentWidget)&&i.isSection&&(e=i);var n=e&&r(".sectionDynamicSettings_toolbar",e.domNode)[0],a=n?1:1/this._panelScale,s=32*a+8;this._toolbarCreateH&&this._toolbarCreateH.remove(),e&&!n&&(this._toolbarCreateH=t.after(e,"onDynamicSettingsButtonsCreated",this._syncWithPanelScale.bind(this))),[".esriSimpleSliderTR",".HomeButton",".mapNavigationLockButton"].forEach((function(t){var i=r(t,e&&e.domNode||this.domNode)[0];if(i){n&&i.parentNode!==n&&o.place(i,n),".mapNavigationLockButton"===t&&this._currentMap.root.clientHeight-(s+i.clientHeight*a)>50&&(s+=20);var l=".esriSimpleSliderTR"===t?2:0;n&&(i.style.right="0px"),i.style.top=s+"px",i.style.transformOrigin="100% 0%",i.style.transform="scale("+a+")",i.style["webkit-transform"]="scale("+a+")",s+=(i.clientHeight+l)*a+5}}),this)}},onLegendVisibilityChanged:function(){},destroy:function(){this._finalizePlaceMap(),this._destroyMap(),this.inherited(arguments)},_destroyMap:function(){this._currentMap&&(this._currentMap.destroy(),this._currentMap=null)}})}));
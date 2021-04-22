// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi","../../_devConfig"],(function(t,e,i,s,a,o,n){return o=o.geoenrichment.dijit.ReportPlayer.ReportPlayer,t(null,{isMap:!0,viewModel:null,theme:null,currentFeatureIndex:null,mapJson:null,showError:!0,parentWidget:null,_createMapFunc:null,_defaultBasemapId:null,_defaultBasemapName:null,_webMapId:null,_webMapName:null,_thumbnailUrl:null,_calculatorFieldName:null,_additionalLayerInfos:null,_pinSymbolJson:null,_areaSymbolJsons:null,_areaSymbolRamp:null,showMapLegend:!1,postCreate:function(){this._configurePropertiesFromImageJson(),this._createMapFunc=this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.createMapFunc,this.content=s.create("div",{class:"mapContainer_content"}),this.inherited(arguments),i.add(this.domNode,"esriGEMapContainer"),this.setPosition(this.mapJson.style.left||0,this.mapJson.style.top||0)},_configurePropertiesFromImageJson:function(){this.fieldStyle=this.fieldStyle||{},this.fieldStyle.width=this.mapJson.style.width,this.fieldStyle.height=this.mapJson.style.height,this._calculatorFieldName=this.mapJson.calculatorFieldName,this._defaultBasemapId=this.mapJson.defaultBasemapId,this._defaultBasemapName=this.mapJson.defaultBasemapName,this._webMapId=this.mapJson.webMapId,this._webMapName=this.mapJson.webMapName,this._thumbnailUrl=this.mapJson.thumbnailUrl,this._additionalLayerInfos=this.mapJson.additionalLayerInfos,this._pinSymbolJson=this.mapJson.pinSymbolJson,this._areaSymbolJsons=this.mapJson.areaSymbolJsons,this._areaSymbolRamp=this.mapJson.areaSymbolRamp,this.showMapLegend=this.mapJson.showMapLegend},_showErrorMessage:function(t){this.showError&&this.domNode&&(n.emulateErrors.contentErrors&&(t=!0),t&&!this.errorMessageDiv&&(this.errorMessageDiv=s.create("div",{class:"esriGEReportPlayerPanelErrorMessage",innerHTML:o.mapLoadError},this.domNode),this.errorMessageDiv.style.paddingTop=this.getHeight()/2-20+"px"),a[t?"show":"hide"](this.errorMessageDiv),a[t?"hide":"show"](this.contentBlock))},resize:function(t){if(!this.domNode)return null;var e=!this.getCurrentMap||this.getCurrentMap()||this.getRenderPromise();return!t||this.getCurrentMap&&e&&t.w===this.getWidth()&&t.h===this.getHeight()||(this.setWidth(t.w),this.setHeight(t.h),this.content.style.width=this.getWidth()+"px",this.content.style.height=this.getHeight()+"px",!this._createMapFunc)?void 0:this._placeMap()},scaleProportionallyWithinParent:function(t){if(!this.domNode)return null;this.resize({w:this.getWidth()*t.xScale,h:this.getHeight()*t.yScale}),this.setPosition(this._left*t.xScale,this._top*t.yScale)},getImageBox:function(){return{w:this.getWidth(),h:this.getHeight(),l:this._left,t:this._top}},_left:0,_top:0,getLeft:function(){return this._left},getTop:function(){return this._top},setPosition:function(t,e){void 0!==t&&(this._left=t||0,this.domNode.style.left=this._left+"px"),void 0!==e&&(this._top=e||0,this.domNode.style.top=this._top+"px")},isInitialized:function(){return!0},onMapLoadError:function(){},toJson:function(){var t=this.getImageBox(!0);return{id:"map",isMap:!0,defaultBasemapId:this._defaultBasemapId,defaultBasemapName:this._defaultBasemapName,webMapId:this._webMapId,webMapName:this._webMapName,additionalLayerInfos:this._additionalLayerInfos&&e.clone(this._additionalLayerInfos),pinSymbolJson:this._pinSymbolJson&&e.clone(this._pinSymbolJson),areaSymbolJsons:this._areaSymbolJsons&&e.clone(this._areaSymbolJsons),areaSymbolRamp:this._areaSymbolRamp&&e.clone(this._areaSymbolRamp),showMapLegend:this.showMapLegend,calculatorFieldName:this._calculatorFieldName,thumbnailUrl:this._thumbnailUrl,style:{left:this._left,top:this._top,width:t.w,height:t.h}}}})}));
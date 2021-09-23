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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi","../../_devConfig"],(function(e,t,i,s,o,a,n){return a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{isMap:!0,viewModel:null,theme:null,currentFeatureIndex:null,json:null,showError:!0,parentWidget:null,_createMapFunc:null,_defaultBasemapId:null,_defaultBasemapName:null,_webMapId:null,_webMapName:null,_thumbnailUrl:null,_calculatorFieldName:null,_additionalLayerInfos:null,_pinSymbolJson:null,_areaSymbolJsons:null,_areaSymbolRamp:null,showMapLegend:!1,postCreate:function(){this._configurePropertiesFromImageJson(),this._createMapFunc=this.viewModel.dynamicReportInfo&&this.viewModel.dynamicReportInfo.createMapFunc,this.content=s.create("div",{class:"mapContainer_content"}),this.inherited(arguments),i.add(this.domNode,"esriGEMapContainer"),this.setPosition(this.json.style.left||0,this.json.style.top||0)},_configurePropertiesFromImageJson:function(){this.fieldStyle=this.fieldStyle||{},this.fieldStyle.width=this.json.style.width,this.fieldStyle.height=this.json.style.height,this._calculatorFieldName=this.json.calculatorFieldName,this._defaultBasemapId=this.json.defaultBasemapId,this._defaultBasemapName=this.json.defaultBasemapName,this._webMapId=this.json.webMapId,this._webMapName=this.json.webMapName,this._thumbnailUrl=this.json.thumbnailUrl,this._additionalLayerInfos=this.json.additionalLayerInfos,this._pinSymbolJson=this.json.pinSymbolJson,this._areaSymbolJsons=this.json.areaSymbolJsons,this._areaSymbolRamp=this.json.areaSymbolRamp,this.showMapLegend=this.json.showMapLegend},_showErrorMessage:function(e){this.showError&&this.domNode&&(n.emulateErrors.contentErrors&&(e=!0),e&&!this.errorMessageDiv&&(this.errorMessageDiv=s.create("div",{class:"esriGEReportPlayerPanelErrorMessage",innerHTML:a.mapLoadError},this.domNode),this.errorMessageDiv.style.paddingTop=this.getHeight()/2-20+"px"),o[e?"show":"hide"](this.errorMessageDiv),o[e?"hide":"show"](this.contentBlock))},resize:function(e){if(!this.domNode)return null;var t=!this.getCurrentMap||this.getCurrentMap()||this.getRenderPromise();return!e||this.getCurrentMap&&t&&e.w===this.getWidth()&&e.h===this.getHeight()||(this.setWidth(e.w),this.setHeight(e.h),this.content.style.width=this.getWidth()+"px",this.content.style.height=this.getHeight()+"px",!this._createMapFunc)?void 0:this._placeMap()},_left:0,_top:0,getLeft:function(){return this._left},getTop:function(){return this._top},setPosition:function(e,t){void 0!==e&&(this._left=e||0,this.domNode.style.left=this._left+"px"),void 0!==t&&(this._top=t||0,this.domNode.style.top=this._top+"px")},isInitialized:function(){return!0},onMapLoadError:function(){},toJson:function(){return{id:"map",defaultBasemapId:this._defaultBasemapId,defaultBasemapName:this._defaultBasemapName,webMapId:this._webMapId,webMapName:this._webMapName,additionalLayerInfos:this._additionalLayerInfos&&t.clone(this._additionalLayerInfos),pinSymbolJson:this._pinSymbolJson&&t.clone(this._pinSymbolJson),areaSymbolJsons:this._areaSymbolJsons&&t.clone(this._areaSymbolJsons),areaSymbolRamp:this._areaSymbolRamp&&t.clone(this._areaSymbolRamp),showMapLegend:this.showMapLegend,calculatorFieldName:this._calculatorFieldName,thumbnailUrl:this._thumbnailUrl,style:{left:this._left,top:this._top,width:this.getWidth(),height:this.getHeight()}}}})}));
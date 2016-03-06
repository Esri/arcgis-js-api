// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./core/messageHandler"],function(i,e,a){return i(null,{visible:null,opacity:null,minScale:null,maxScale:null,renderer:null,_uniqueId:0,constructor:function(i,a,t){this._mapWidgetProxy=i,this._id=a,e.mixin(this,t||{})},setVisibility:function(i){this.visible=i,a._sendMessage({functionName:"setGraphicsLayerVisibility",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,visible:i}})},setOpacity:function(i){0>i&&(i=0),i>1&&(i=1),this.opacity=i,a._sendMessage({functionName:"setGraphicsLayerOpacity",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,opacity:i}})},setMinScale:function(i){this.minScale=i,a._sendMessage({functionName:"setGraphicsLayerMinScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,minScale:i}})},setMaxScale:function(i){this.maxScale=i,a._sendMessage({functionName:"setGraphicsLayerMaxScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,maxScale:i}})},setRenderer:function(i){this.renderer=i,a._sendMessage({functionName:"setGraphicsLayerRenderer",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,renderer:i?i.toJson():void 0}})},removeGraphic:function(i){if(i.attributes){var e=i.attributes.__id;e&&a._sendMessage({functionName:"removeGraphic",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphicId:e}})}},addOrUpdateGraphic:function(i){this.addOrUpdateGraphics([i])},addOrUpdateGraphics:function(i){if(Array.isArray(i)&&0!==i.length){var e=i.map(function(i){return i.attributes||(i.attributes={}),i.attributes.__id||(i.attributes.__id=++this._uniqueId),i.toJson()},this);a._sendMessage({functionName:"updateGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphics:e}})}},clear:function(){a._sendMessage({functionName:"clearGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id}})}})});
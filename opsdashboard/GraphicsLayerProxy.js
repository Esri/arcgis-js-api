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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","dojo/_base/lang","./core/messageHandler"],function(i,e,t,a,r,s,d){var n=function(){function i(i,e,t){this.visible=null,this.opacity=null,this.minScale=null,this.maxScale=null,this.renderer=null,this._uniqueId=null,this._mapWidgetProxy=null,this._id=null}return i.prototype.dojoConstructor=function(i,e,t){this._uniqueId=0,this._mapWidgetProxy=i,this._id=e,s.mixin(this,t||{})},i.prototype.setVisibility=function(i){this.visible=i,d._sendMessage({functionName:"setGraphicsLayerVisibility",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,visible:i}})},i.prototype.setOpacity=function(i){0>i&&(i=0),i>1&&(i=1),this.opacity=i,d._sendMessage({functionName:"setGraphicsLayerOpacity",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,opacity:i}})},i.prototype.setMinScale=function(i){this.minScale=i,d._sendMessage({functionName:"setGraphicsLayerMinScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,minScale:i}})},i.prototype.setMaxScale=function(i){this.maxScale=i,d._sendMessage({functionName:"setGraphicsLayerMaxScale",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,maxScale:i}})},i.prototype.setRenderer=function(i){this.renderer=i,d._sendMessage({functionName:"setGraphicsLayerRenderer",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,renderer:i?i.toJSON():void 0}})},i.prototype.removeGraphic=function(i){if(i.attributes){var e=i.attributes.__id;e&&d._sendMessage({functionName:"removeGraphic",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphicId:e}})}},i.prototype.addOrUpdateGraphic=function(i){this.addOrUpdateGraphics([i])},i.prototype.addOrUpdateGraphics=function(i){var e=this;if(Array.isArray(i)&&0!==i.length){var t=i.map(function(i){return i.attributes||(i.attributes={}),i.attributes.__id||(i.attributes.__id=++e._uniqueId),i.toJSON()});d._sendMessage({functionName:"updateGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id,graphics:t}})}},i.prototype.clear=function(){d._sendMessage({functionName:"clearGraphics",args:{mapWidgetId:this._mapWidgetProxy.id,graphicsLayerId:this._id}})},a([r.shared("esri.opsdashboard.GraphicsLayerProxy")],i.prototype,"declaredClass",void 0),i=a([r.subclass()],i)}();return n});
// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../SpatialReference","../geometry/jsonUtils","./core/messageHandler","./core/MessageReceiver","./GraphicsLayerProxy"],function(e,t,n,i,a,s,r){return e([s],{_listeningToMap:!1,id:null,name:null,spatialReference:null,_setConfig:function(e){this.inherited(arguments),this.spatialReference=new n(e.spatialReference)},_messageReceived:function(e){if(void 0!==e.args&&void 0!==e.args.mapWidgetId&&this.id===e.args.mapWidgetId)switch(e.functionName.toLowerCase()){case"extentchanged":return this._mapExtentChanged(e.args)}},_mapExtentChanged:function(e){var t=i.fromJson(e.extent);this.mapExtentChanged(t),this.emit("map-extent-change",{extent:t})},subscribeToMapEvents:function(){this._listeningToMap||(this._listeningToMap=!0,a._sendMessage({functionName:"subscribeToMapEvents",args:{mapWidgetId:this.id}}))},unsubscribeFromMapEvents:function(){this._listeningToMap&&(this._listeningToMap=!1,a._sendMessage({functionName:"unSubscribeFromMapEvents",args:{mapWidgetId:this.id}}))},mapExtentChanged:function(){},getMapExtent:function(){return a._sendMessageWithReply({functionName:"getExtent",args:{mapWidgetId:this.id}}).then(t.hitch(this,function(e){return i.fromJson(e.extent)}))},setExtent:function(e){e&&e.type&&"extent"===e.type&&a._sendMessage({functionName:"setExtent",args:{mapWidgetId:this.id,extent:e.toJson()}})},panTo:function(e){e&&e.type&&"point"===e.type&&a._sendMessage({functionName:"panTo",args:{mapWidgetId:this.id,mapPoint:e.toJson()}})},createGraphicsLayerProxy:function(e){var n={functionName:"createGraphicsLayer",args:{mapWidgetId:this.id,visible:e&&e.visible?e.visible:!0,opacity:e&&e.opacity?e.opacity:1,minScale:e&&e.minScale?e.minScale:0,maxScale:e&&e.maxScale?e.maxScale:0,renderer:e&&e.renderer?e.renderer.toJson():void 0}};return a._sendMessageWithReply(n).then(t.hitch(this,function(t){return new r(this,t.graphicsLayerId,e)}))},destroyGraphicsLayerProxy:function(e){e&&a._sendMessage({functionName:"removeGraphicsLayer",args:{mapWidgetId:this.id,graphicsLayerId:e._id}})}})});
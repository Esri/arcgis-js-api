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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","../geometry/jsonUtils","./core/messageHandler","./core/ExtensionBase"],(function(e,i,a,t,s,n){return e([n],{mapWidgetProxy:null,previousState:null,displaySize:null,availableDisplaySize:null,constructor:function(){this.displaySize={width:0,height:0}},_initializeResponseReceived:function(e){return this.inherited(arguments).then(i.hitch(this,(function(){return this.previousState=e.state||{},this.availableDisplaySize=e.availableSize||{width:0,height:0},this.getMapWidgetProxy(e.mapWidgetId).then(i.hitch(this,(function(e){this.mapWidgetProxy=e})))})))},_messageReceived:function(e){switch(e.functionName.toLowerCase()){case"drawcomplete":return this._drawComplete(e.args);case"availablesizechanged":return this._availableDisplaySizeChanged(e.args)}},activateMapDrawing:function(e){if(!this._isHostInitialized())throw new Error(this.errorMessages.hostNotReady);s._sendMessage({functionName:"activateDrawing",args:e})},deactivateMapDrawing:function(){if(!this._isHostInitialized())throw new Error(this.errorMessages.hostNotReady);s._sendMessage({functionName:"deactivateDrawing"})},_drawComplete:function(e){var i=t.fromJson(e.geometry);this.mapDrawComplete(i),this.emit("draw-complete",{geometry:i})},mapDrawComplete:function(e){},setDisplaySize:function(e){return this._isHostInitialized()?(this.displaySize=e,s._sendMessageWithReply({functionName:"setSize",args:e}).then(i.hitch(this,(function(e){this.displaySize=e})))):(new a).reject(new Error(this.errorMessages.hostNotReady))},_availableDisplaySizeChanged:function(e){this.availableDisplaySize=e.availableSize,this.availableDisplaySizeChanged(this.availableDisplaySize),this.emit("available-display-size-changed",{size:this.availableDisplaySize})},availableDisplaySizeChanged:function(e){},deactivateMapTool:function(e){if(!this._isHostInitialized())throw new Error(this.errorMessages.hostNotReady);s._sendMessage({functionName:"deactivateTool",args:{state:e}})}})}));
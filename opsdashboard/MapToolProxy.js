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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","dojo/Deferred","../geometry/support/jsonUtils","./core/errorMessages","./core/messageHandler","./core/ExtensionBase"],function(e,t,i,a,o,s,r,n,p,l){var d=function(e){function t(){e.apply(this,arguments),this.mapWidgetProxy=null,this.previousState=null,this.displaySize=null,this.availableDisplaySize=null}return i(t,e),t.prototype.dojoConstructor=function(){this.displaySize={width:0,height:0}},t.prototype._initializeResponseReceived=function(e){var t=this;return this.inherited(arguments).then(function(){return t.previousState=e.state||{},t.availableDisplaySize=e.availableSize||{width:0,height:0},t.getMapWidgetProxy(e.mapWidgetId).then(function(e){t.mapWidgetProxy=e})})},t.prototype._messageReceived=function(e){switch(e.functionName.toLowerCase()){case"drawcomplete":return this._drawComplete(e.args);case"availablesizechanged":return this._availableDisplaySizeChanged(e.args)}},t.prototype.activateMapDrawing=function(e){if(!this._isHostInitialized())throw new Error(n.hostNotReady);p._sendMessage({functionName:"activateDrawing",args:e})},t.prototype.deactivateMapDrawing=function(){if(!this._isHostInitialized())throw new Error(n.hostNotReady);p._sendMessage({functionName:"deactivateDrawing"})},t.prototype._drawComplete=function(e){var t=r.fromJSON(e.geometry);this.mapDrawComplete(t),this.emit("draw-complete",{geometry:t})},t.prototype.mapDrawComplete=function(e){},t.prototype.setDisplaySize=function(e){var t=this;return this._isHostInitialized()?(this.displaySize=e,p._sendMessageWithReply({functionName:"setSize",args:e}).then(function(e){t.displaySize=e})):(new s).reject(new Error(n.hostNotReady))},t.prototype._availableDisplaySizeChanged=function(e){this.availableDisplaySize=e.availableSize,this.availableDisplaySizeChanged(this.availableDisplaySize),this.emit("available-display-size-changed",{size:this.availableDisplaySize})},t.prototype.availableDisplaySizeChanged=function(e){},t.prototype.deactivateMapTool=function(e){if(!this._isHostInitialized())throw new Error(n.hostNotReady);p._sendMessage({functionName:"deactivateTool",args:{state:e}})},a([o.shared("esri.opsdashboard.MapToolProxy")],t.prototype,"declaredClass",void 0),t=a([o.subclass()],t)}(l);return d});
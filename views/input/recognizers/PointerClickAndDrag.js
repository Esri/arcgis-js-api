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

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,n,r){var a=function(t){function e(e,i){void 0===e&&(e=300),void 0===i&&(i=1.5),t.call(this,"recognizers.PointerClickAndDrag",!1),this.maximumClickDelay=e,this.movementUntilDrag=i,this._pointerState=new Map,this._pointerDrag=this.registerOutgoing("pointer-drag"),this._pointerClick=this.registerOutgoing("pointer-click"),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",this._handlePointerUp.bind(this)),this._moveHandle=this.registerIncoming("pointer-move",this._handlePointerMove.bind(this)),this._moveHandle.pause()}return i(e,t),e.prototype._handlePointerDown=function(t){var e=t.data,i=e["native"].pointerId,n={startEvent:e,previousEvent:e,startTimestamp:t.timestamp,totalMovement:0,isDragging:!1,downButton:e["native"].button};this._pointerState.set(i,n),this.startCapturingPointer(e["native"]),this._moveHandle.resume()},e.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},e.prototype._handlePointerMove=function(t){var e=t.data,i=e["native"].pointerId,n=this._pointerState.get(i);n&&(n.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",n,e)):(n.totalMovement+=r.manhattanDistance(e,n.previousEvent),n.totalMovement>this.movementUntilDrag&&(n.isDragging=!0,n.previousEvent=n.startEvent,this._pointerDrag.emit(this._createPointerDragData("start",n,n.startEvent)),this._pointerDrag.emit(this._createPointerDragData("update",n,e)))),n.previousEvent=e)},e.prototype._handlePointerUp=function(t){var e=t.data,i=e["native"].pointerId,n=this._pointerState.get(i);if(n){if(n.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",n,e));else if(n.downButton===e["native"].button){var r=t.timestamp-n.startTimestamp;r<=this.maximumClickDelay&&this._pointerClick.emit(e)}this._pointerState["delete"](i),this.stopCapturingPointer(e["native"]),0===this._pointerState.size&&this._moveHandle.pause()}},e}(n.InputHandler);e.PointerClickAndDrag=a});
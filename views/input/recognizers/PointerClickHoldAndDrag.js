// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,o,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultParameters={maximumClickDelay:300,movementUntilDrag:1.5,holdDelay:500};var r=function(t){function o(i,o,n){void 0===i&&(i=e.DefaultParameters.maximumClickDelay),void 0===o&&(o=e.DefaultParameters.movementUntilDrag),void 0===n&&(n=e.DefaultParameters.holdDelay);var r=t.call(this,"recognizers.PointerClickHoldAndDrag",!1)||this;return r.maximumClickDelay=i,r.movementUntilDrag=o,r.holdDelay=n,r._pointerState=new Map,r._modifiers=new Set,r._pointerDrag=r.registerOutgoing("pointer-drag"),r._pointerClick=r.registerOutgoing("pointer-click"),r._pointerHold=r.registerOutgoing("hold"),r.registerIncoming("pointer-down",r._handlePointerDown.bind(r)),r.registerIncoming("pointer-up",r._handlePointerUpOrLost.bind(r)),r.registerIncoming("pointer-capture-lost",r._handlePointerUpOrLost.bind(r)),r._moveHandle=r.registerIncoming("pointer-move",r._handlePointerMove.bind(r)),r._moveHandle.pause(),r}return i(o,t),o.prototype.onUninstall=function(){this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)}),t.prototype.onUninstall.call(this)},o.prototype._handlePointerDown=function(t){var e=this,i=t.data,o=i["native"].pointerId,n=0;0===this._pointerState.size&&(n=setTimeout(function(){var i=e._pointerState.get(o);i&&(i.isDragging||(e._pointerHold.emit(i.previousEvent,void 0,t.modifiers),i.holdEmitted=!0),i.holdTimeout=0)},this.holdDelay)),1===this._pointerState.size&&this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)});var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,totalMovement:0,isDragging:!1,downButton:i["native"].button,holdTimeout:n};this._pointerState.set(o,r),this.startCapturingPointer(i["native"]),this._moveHandle.resume()},o.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},o.prototype._handlePointerMove=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);o&&(o.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",o,e),void 0,this._modifiers):(o.totalMovement+=n.manhattanDistance(e,o.previousEvent),o.totalMovement>this.movementUntilDrag&&(o.isDragging=!0,o.previousEvent=o.startEvent,this._modifiers=t.modifiers,0!==o.holdTimeout&&clearTimeout(o.holdTimeout),this._pointerDrag.emit(this._createPointerDragData("start",o,o.startEvent),o.startTimestamp),this._pointerDrag.emit(this._createPointerDragData("update",o,e)))),o.previousEvent=e)},o.prototype._handlePointerUpOrLost=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);if(o){if(0!==o.holdTimeout&&clearTimeout(o.holdTimeout),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,e),void 0,this._modifiers);else if(o.downButton===e["native"].button){var n=t.timestamp-o.startTimestamp;n<=this.maximumClickDelay&&!o.holdEmitted&&this._pointerClick.emit(e)}this._pointerState["delete"](i),this.stopCapturingPointer(e["native"]),0===this._pointerState.size&&this._moveHandle.pause()}},o}(o.InputHandler);e.PointerClickHoldAndDrag=r});
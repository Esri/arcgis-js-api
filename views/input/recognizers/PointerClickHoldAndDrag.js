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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,o,n){var r=function(t){function e(e,i,o){void 0===e&&(e=300),void 0===i&&(i=1.5),void 0===o&&(o=500);var n=t.call(this,"recognizers.PointerClickHoldAndDrag",!1)||this;return n.maximumClickDelay=e,n.movementUntilDrag=i,n.holdDelay=o,n._pointerState=new Map,n._modifiers=new Set,n._pointerDrag=n.registerOutgoing("pointer-drag"),n._pointerClick=n.registerOutgoing("pointer-click"),n._pointerHold=n.registerOutgoing("hold"),n.registerIncoming("pointer-down",n._handlePointerDown.bind(n)),n.registerIncoming("pointer-up",n._handlePointerUpOrLost.bind(n)),n.registerIncoming("pointer-capture-lost",n._handlePointerUpOrLost.bind(n)),n._moveHandle=n.registerIncoming("pointer-move",n._handlePointerMove.bind(n)),n._moveHandle.pause(),n}return i(e,t),e.prototype.onUninstall=function(){this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)}),t.prototype.onUninstall.call(this)},e.prototype._handlePointerDown=function(t){var e=this,i=t.data,o=i["native"].pointerId,n=0;0===this._pointerState.size&&(n=setTimeout(function(){var t=e._pointerState.get(o);t&&(t.isDragging||(e._pointerHold.emit(t.previousEvent),t.holdEmitted=!0),t.holdTimeout=0)},this.holdDelay)),1===this._pointerState.size&&this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)});var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,totalMovement:0,isDragging:!1,downButton:i["native"].button,holdTimeout:n};this._pointerState.set(o,r),this.startCapturingPointer(i["native"]),this._moveHandle.resume()},e.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},e.prototype._handlePointerMove=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);o&&(o.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",o,e),this._modifiers):(o.totalMovement+=n.manhattanDistance(e,o.previousEvent),o.totalMovement>this.movementUntilDrag&&(o.isDragging=!0,o.previousEvent=o.startEvent,this._modifiers=t.modifiers,0!==o.holdTimeout&&clearTimeout(o.holdTimeout),this._pointerDrag.emit(this._createPointerDragData("start",o,o.startEvent)),this._pointerDrag.emit(this._createPointerDragData("update",o,e)))),o.previousEvent=e)},e.prototype._handlePointerUpOrLost=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);if(o){if(0!==o.holdTimeout&&clearTimeout(o.holdTimeout),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,e),this._modifiers);else if(o.downButton===e["native"].button){var n=t.timestamp-o.startTimestamp;n<=this.maximumClickDelay&&!o.holdEmitted&&this._pointerClick.emit(e)}this._pointerState["delete"](i),this.stopCapturingPointer(e["native"]),0===this._pointerState.size&&this._moveHandle.pause()}},e}(o.InputHandler);e.PointerClickHoldAndDrag=r});
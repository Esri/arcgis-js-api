// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,o,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};var r=function(t){function o(i,o,n,r){void 0===i&&(i=e.DefaultParameters.maximumClickDelay),void 0===o&&(o=e.DefaultParameters.movementUntilMouseDrag),void 0===n&&(n=e.DefaultParameters.movementUntilTouchDrag),void 0===r&&(r=e.DefaultParameters.holdDelay);var a=t.call(this,!1)||this;return a.maximumClickDelay=i,a.movementUntilMouseDrag=o,a.movementUntilTouchDrag=n,a.holdDelay=r,a._pointerState=new Map,a._pointerDrag=a.registerOutgoing("pointer-drag"),a._immediateClick=a.registerOutgoing("immediate-click"),a._pointerHold=a.registerOutgoing("hold"),a.registerIncoming("pointer-down",a._handlePointerDown.bind(a)),a.registerIncoming("pointer-up",a._handlePointerUpOrLost.bind(a)),a.registerIncoming("pointer-capture-lost",a._handlePointerUpOrLost.bind(a)),a._moveHandle=a.registerIncoming("pointer-move",a._handlePointerMove.bind(a)),a._moveHandle.pause(),a}return i(o,t),o.prototype.onUninstall=function(){this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)}),t.prototype.onUninstall.call(this)},o.prototype._handlePointerDown=function(t){var e=this,i=t.data,o=i.native.pointerId,n=0;0===this._pointerState.size&&(n=setTimeout(function(){var i=e._pointerState.get(o);if(i){if(!i.isDragging){var n=i.previousEvent;e._pointerHold.emit(n,void 0,t.modifiers),i.holdEmitted=!0}i.holdTimeout=0}},this.holdDelay));var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,isDragging:!1,downButton:i.native.button,holdTimeout:n,modifiers:new Set};this._pointerState.set(o,r),this.startCapturingPointer(i.native),this._moveHandle.resume(),this._pointerState.size>1&&this.startDragging(t)},o.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},o.prototype._handlePointerMove=function(t){var e=t.data,i=e.native.pointerId,o=this._pointerState.get(i);if(o){if(o.isDragging)this._pointerDrag.emit(this._createPointerDragData("update",o,e),void 0,o.modifiers);else{n.euclideanDistance(e,o.startEvent)>("touch"===e.native.pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag)&&this.startDragging(t)}o.previousEvent=e}},o.prototype.startDragging=function(t){var e=this,i=t.data,o=i.native.pointerId;this._pointerState.forEach(function(n){0!==n.holdTimeout&&(clearTimeout(n.holdTimeout),n.holdTimeout=0),n.isDragging||(n.modifiers=t.modifiers,n.isDragging=!0,o===n.startEvent.native.pointerId?e._pointerDrag.emit(e._createPointerDragData("start",n,i)):e._pointerDrag.emit(e._createPointerDragData("start",n,n.previousEvent),t.timestamp))})},o.prototype._handlePointerUpOrLost=function(t){var e=t.data,i=e.native.pointerId,o=this._pointerState.get(i);if(o){if(0!==o.holdTimeout&&clearTimeout(o.holdTimeout),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,e),void 0,o.modifiers);else if(o.downButton===e.native.button){var n=t.timestamp-o.startTimestamp;n<=this.maximumClickDelay&&!o.holdEmitted&&this._immediateClick.emit(e)}this._pointerState.delete(i),this.stopCapturingPointer(e.native),0===this._pointerState.size&&this._moveHandle.pause()}},o}(o.InputHandler);e.PointerClickHoldAndDrag=r});
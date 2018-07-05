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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};var r=function(t){function n(i,n,o,r){void 0===i&&(i=e.DefaultParameters.maximumClickDelay),void 0===n&&(n=e.DefaultParameters.movementUntilMouseDrag),void 0===o&&(o=e.DefaultParameters.movementUntilTouchDrag),void 0===r&&(r=e.DefaultParameters.holdDelay);var a=t.call(this,!1)||this;return a.maximumClickDelay=i,a.movementUntilMouseDrag=n,a.movementUntilTouchDrag=o,a.holdDelay=r,a._pointerState=new Map,a._pointerDrag=a.registerOutgoing("pointer-drag"),a._immediateClick=a.registerOutgoing("immediate-click"),a._pointerHold=a.registerOutgoing("hold"),a.registerIncoming("pointer-down",a._handlePointerDown.bind(a)),a.registerIncoming("pointer-up",function(t){a._handlePointerLoss(t,"pointer-up")}),a.registerIncoming("pointer-capture-lost",function(t){a._handlePointerLoss(t,"pointer-capture-lost")}),a.registerIncoming("pointer-cancel",function(t){a._handlePointerLoss(t,"pointer-cancel")}),a._moveHandle=a.registerIncoming("pointer-move",a._handlePointerMove.bind(a)),a._moveHandle.pause(),a}return i(n,t),n.prototype.onUninstall=function(){this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)}),t.prototype.onUninstall.call(this)},n.prototype._handlePointerDown=function(t){var e=this,i=t.data,n=i.native.pointerId,o=0;0===this._pointerState.size&&(o=setTimeout(function(){var i=e._pointerState.get(n);if(i){if(!i.isDragging){var o=i.previousEvent;e._pointerHold.emit(o,void 0,t.modifiers),i.holdEmitted=!0}i.holdTimeout=0}},this.holdDelay));var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,isDragging:!1,downButton:i.native.button,holdTimeout:o,modifiers:new Set};this._pointerState.set(n,r),this.startCapturingPointer(i.native),this._moveHandle.resume(),this._pointerState.size>1&&this.startDragging(t)},n.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},n.prototype._handlePointerMove=function(t){var e=t.data,i=e.native.pointerId,n=this._pointerState.get(i);if(n){if(n.isDragging)this._pointerDrag.emit(this._createPointerDragData("update",n,e),void 0,n.modifiers);else{o.euclideanDistance(e,n.startEvent)>("touch"===e.native.pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag)&&this.startDragging(t)}n.previousEvent=e}},n.prototype.startDragging=function(t){var e=this,i=t.data,n=i.native.pointerId;this._pointerState.forEach(function(o){0!==o.holdTimeout&&(clearTimeout(o.holdTimeout),o.holdTimeout=0),o.isDragging||(o.modifiers=t.modifiers,o.isDragging=!0,n===o.startEvent.native.pointerId?e._pointerDrag.emit(e._createPointerDragData("start",o,i)):e._pointerDrag.emit(e._createPointerDragData("start",o,o.previousEvent),t.timestamp))})},n.prototype._handlePointerLoss=function(t,e){var i=t.data,n=i.native.pointerId,o=this._pointerState.get(n);if(o){if(0!==o.holdTimeout&&clearTimeout(o.holdTimeout),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,"pointer-up"===e?i:o.previousEvent),void 0,o.modifiers);else if("pointer-up"===e&&o.downButton===i.native.button){var r=t.timestamp-o.startTimestamp;r<=this.maximumClickDelay&&!o.holdEmitted&&this._immediateClick.emit(i)}this._pointerState.delete(n),this.stopCapturingPointer(i.native),0===this._pointerState.size&&this._moveHandle.pause()}},n}(n.InputHandler);e.PointerClickHoldAndDrag=r});
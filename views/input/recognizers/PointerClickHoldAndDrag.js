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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/clock","../InputHandler","./support"],function(t,e,i,n,o,r){Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};var a=function(t){function o(i,o,r,a,s){void 0===i&&(i=e.DefaultParameters.maximumClickDelay),void 0===o&&(o=e.DefaultParameters.movementUntilMouseDrag),void 0===r&&(r=e.DefaultParameters.movementUntilTouchDrag),void 0===a&&(a=e.DefaultParameters.holdDelay),void 0===s&&(s=n.default);var l=t.call(this,!1)||this;return l.maximumClickDelay=i,l.movementUntilMouseDrag=o,l.movementUntilTouchDrag=r,l.holdDelay=a,l._clock=s,l._pointerState=new Map,l._pointerDrag=l.registerOutgoing("pointer-drag"),l._immediateClick=l.registerOutgoing("immediate-click"),l._pointerHold=l.registerOutgoing("hold"),l.registerIncoming("pointer-down",l._handlePointerDown.bind(l)),l.registerIncoming("pointer-up",function(t){l._handlePointerLoss(t,"pointer-up")}),l.registerIncoming("pointer-capture-lost",function(t){l._handlePointerLoss(t,"pointer-capture-lost")}),l.registerIncoming("pointer-cancel",function(t){l._handlePointerLoss(t,"pointer-cancel")}),l._moveHandle=l.registerIncoming("pointer-move",l._handlePointerMove.bind(l)),l._moveHandle.pause(),l}return i(o,t),o.prototype.onUninstall=function(){this._pointerState.forEach(function(t){null!=t.holdTimeout&&(t.holdTimeout.remove(),t.holdTimeout=null)}),t.prototype.onUninstall.call(this)},o.prototype._handlePointerDown=function(t){var e=this,i=t.data,n=i.native.pointerId,o=null;0===this._pointerState.size&&(o=this._clock.setTimeout(function(){var i=e._pointerState.get(n);if(i){if(!i.isDragging){var o=i.previousEvent;e._pointerHold.emit(o,void 0,t.modifiers),i.holdEmitted=!0}i.holdTimeout=null}},this.holdDelay));var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,isDragging:!1,downButton:i.native.button,holdTimeout:o,modifiers:new Set};this._pointerState.set(n,r),this.startCapturingPointer(i.native),this._moveHandle.resume(),this._pointerState.size>1&&this.startDragging(t)},o.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},o.prototype._handlePointerMove=function(t){var e=t.data,i=e.native.pointerId,n=this._pointerState.get(i);if(n){if(n.isDragging)this._pointerDrag.emit(this._createPointerDragData("update",n,e),void 0,n.modifiers);else{r.euclideanDistance(e,n.startEvent)>("touch"===e.native.pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag)&&this.startDragging(t)}n.previousEvent=e}},o.prototype.startDragging=function(t){var e=this,i=t.data,n=i.native.pointerId;this._pointerState.forEach(function(o){null!=o.holdTimeout&&(o.holdTimeout.remove(),o.holdTimeout=null),o.isDragging||(o.modifiers=t.modifiers,o.isDragging=!0,n===o.startEvent.native.pointerId?e._pointerDrag.emit(e._createPointerDragData("start",o,i)):e._pointerDrag.emit(e._createPointerDragData("start",o,o.previousEvent),t.timestamp))})},o.prototype._handlePointerLoss=function(t,e){var i=t.data,n=i.native.pointerId,o=this._pointerState.get(n);if(o){if(null!=o.holdTimeout&&(o.holdTimeout.remove(),o.holdTimeout=null),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,"pointer-up"===e?i:o.previousEvent),void 0,o.modifiers);else if("pointer-up"===e&&o.downButton===i.native.button){var r=t.timestamp-o.startTimestamp;r<=this.maximumClickDelay&&!o.holdEmitted&&this._immediateClick.emit(i)}this._pointerState.delete(n),this.stopCapturingPointer(i.native),0===this._pointerState.size&&this._moveHandle.pause()}},o}(o.InputHandler);e.PointerClickHoldAndDrag=a});
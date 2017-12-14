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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,o,n){Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultParameters={maximumClickDelay:300,movementUntilMouseDrag:1.5,movementUntilTouchDrag:6,holdDelay:500};var r=function(t){function o(i,o,n,r){void 0===i&&(i=e.DefaultParameters.maximumClickDelay),void 0===o&&(o=e.DefaultParameters.movementUntilMouseDrag),void 0===n&&(n=e.DefaultParameters.movementUntilTouchDrag),void 0===r&&(r=e.DefaultParameters.holdDelay);var a=t.call(this,!1)||this;return a.maximumClickDelay=i,a.movementUntilMouseDrag=o,a.movementUntilTouchDrag=n,a.holdDelay=r,a._pointerState=new Map,a._modifiers=new Set,a._pointerDrag=a.registerOutgoing("pointer-drag"),a._pointerClick=a.registerOutgoing("pointer-click"),a._pointerHold=a.registerOutgoing("hold"),a.registerIncoming("pointer-down",a._handlePointerDown.bind(a)),a.registerIncoming("pointer-up",a._handlePointerUpOrLost.bind(a)),a.registerIncoming("pointer-capture-lost",a._handlePointerUpOrLost.bind(a)),a._moveHandle=a.registerIncoming("pointer-move",a._handlePointerMove.bind(a)),a._moveHandle.pause(),a}return i(o,t),o.prototype.onUninstall=function(){this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)}),t.prototype.onUninstall.call(this)},o.prototype._handlePointerDown=function(t){var e=this,i=t.data,o=i["native"].pointerId,n=0;0===this._pointerState.size&&(n=setTimeout(function(){var i=e._pointerState.get(o);i&&(i.isDragging||(e._pointerHold.emit(i.previousEvent,void 0,t.modifiers),i.holdEmitted=!0),i.holdTimeout=0)},this.holdDelay)),1===this._pointerState.size&&this._pointerState.forEach(function(t){0!==t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=0)});var r={startEvent:i,previousEvent:i,startTimestamp:t.timestamp,isDragging:!1,downButton:i["native"].button,holdTimeout:n};this._pointerState.set(o,r),this.startCapturingPointer(i["native"]),this._moveHandle.resume()},o.prototype._createPointerDragData=function(t,e,i){return{action:t,startEvent:e.startEvent,previousEvent:e.previousEvent,currentEvent:i}},o.prototype._handlePointerMove=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);if(o){if(o.isDragging)this._pointerDrag.emit(this._createPointerDragData("update",o,e),void 0,this._modifiers);else{var r=n.euclideanDistance(e,o.startEvent),a="touch"===e["native"].pointerType?this.movementUntilTouchDrag:this.movementUntilMouseDrag;r>a&&(o.isDragging=!0,o.previousEvent=o.startEvent,this._modifiers=t.modifiers,0!==o.holdTimeout&&clearTimeout(o.holdTimeout),this._pointerDrag.emit(this._createPointerDragData("start",o,o.startEvent),o.startTimestamp),this._pointerDrag.emit(this._createPointerDragData("update",o,e)))}o.previousEvent=e}},o.prototype._handlePointerUpOrLost=function(t){var e=t.data,i=e["native"].pointerId,o=this._pointerState.get(i);if(o){if(0!==o.holdTimeout&&clearTimeout(o.holdTimeout),o.isDragging)this._pointerDrag.emit(this._createPointerDragData("end",o,e),void 0,this._modifiers);else if(o.downButton===e["native"].button){var n=t.timestamp-o.startTimestamp;n<=this.maximumClickDelay&&!o.holdEmitted&&this._pointerClick.emit(e)}this._pointerState["delete"](i),this.stopCapturingPointer(e["native"]),0===this._pointerState.size&&this._moveHandle.pause()}},o}(o.InputHandler);e.PointerClickHoldAndDrag=r});
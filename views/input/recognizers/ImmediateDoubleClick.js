// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/clock","../InputHandler","./SingleAndDoubleClick","./support"],(function(e,t,i,o,n,a,r){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t,i,n,r,u){void 0===t&&(t=a.DefaultParameters.maximumDoubleClickDelay),void 0===i&&(i=a.DefaultParameters.maximumDoubleClickDistance),void 0===n&&(n=a.DefaultParameters.maximumDoubleTouchDelay),void 0===r&&(r=a.DefaultParameters.maximumDoubleTouchDistance),void 0===u&&(u=o.default);var l=e.call(this,!1)||this;return l.maximumDoubleClickDelay=t,l.maximumDoubleClickDistance=i,l.maximumDoubleTouchDelay=n,l.maximumDoubleTouchDistance=r,l._clock=u,l._pointerState=new Map,l._immediateDoubleClick=l.registerOutgoing("immediate-double-click"),l.registerIncoming("pointer-down",l._handlePointerDown.bind(l)),l.registerIncoming("pointer-up",(function(e){l._handlePointerLoss(e,"pointer-up")})),l.registerIncoming("pointer-capture-lost",(function(e){l._handlePointerLoss(e,"pointer-capture-lost")})),l.registerIncoming("pointer-cancel",(function(e){l._handlePointerLoss(e,"pointer-cancel")})),l}return i.__extends(t,e),t.prototype.onUninstall=function(){this._pointerState.forEach((function(e){e.immediateDoubleClick&&e.immediateDoubleClick.timeoutHandle.remove()})),e.prototype.onUninstall.call(this)},t.prototype._handlePointerDown=function(e){var t=e.data,i=this._pointerId(t);if(!this._pointerState.has(i)){var o={downButton:t.native.button,immediateDoubleClick:null};this._pointerState.set(i,o),this.startCapturingPointer(t.native)}},t.prototype._handlePointerLoss=function(e,t){var i=e.data,o=this._pointerId(i),n=this._pointerState.get(o);if(n&&"pointer-up"===t&&n.downButton===i.native.button){var a=n.immediateDoubleClick;if(a){a.timeoutHandle.remove();var u="touch"===e.data.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;r.manhattanDistance(a,e.data)>u?this._startImmediateDoubleClick(e,n):(this._immediateDoubleClick.emit(e.data,void 0,a.modifiers),this._removeState(i))}else this._startImmediateDoubleClick(e,n)}},t.prototype._startImmediateDoubleClick=function(e,t){var i=this,o="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;t.immediateDoubleClick={x:e.data.x,y:e.data.y,modifiers:e.modifiers,timeoutHandle:this._clock.setTimeout((function(){return i._removeState(e.data)}),o)}},t.prototype._pointerId=function(e){var t=e.native;return"mouse"===t.pointerType?t.pointerId+":"+t.button:""+t.pointerType},t.prototype._removeState=function(e){var t=this._pointerId(e);this._pointerState.delete(t),this.stopCapturingPointer(e.native),this.refreshHasPendingInputs()},t}(n.InputHandler);t.ImmediateDoubleClick=u}));
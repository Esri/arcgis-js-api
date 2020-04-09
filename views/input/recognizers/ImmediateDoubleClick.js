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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/clock","../InputHandler","./SingleAndDoubleClick","./support"],(function(e,t,i,o,a,n,r){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t,i,a,r,u){void 0===t&&(t=n.DefaultParameters.maximumDoubleClickDelay),void 0===i&&(i=n.DefaultParameters.maximumDoubleClickDistance),void 0===a&&(a=n.DefaultParameters.maximumDoubleTouchDelay),void 0===r&&(r=n.DefaultParameters.maximumDoubleTouchDistance),void 0===u&&(u=o.default);var l=e.call(this,!1)||this;return l.maximumDoubleClickDelay=t,l.maximumDoubleClickDistance=i,l.maximumDoubleTouchDelay=a,l.maximumDoubleTouchDistance=r,l._clock=u,l._pointerState=new Map,l._immediateDoubleClick=l.registerOutgoing("immediate-double-click"),l.registerIncoming("pointer-down",l._handlePointerDown.bind(l)),l.registerIncoming("pointer-up",(function(e){l._handlePointerLoss(e,"pointer-up")})),l.registerIncoming("pointer-capture-lost",(function(e){l._handlePointerLoss(e,"pointer-capture-lost")})),l.registerIncoming("pointer-cancel",(function(e){l._handlePointerLoss(e,"pointer-cancel")})),l}return i(t,e),t.prototype.onUninstall=function(){this._pointerState.forEach((function(e){e.immediateDoubleClick&&e.immediateDoubleClick.timeoutHandle.remove()})),e.prototype.onUninstall.call(this)},t.prototype._handlePointerDown=function(e){var t=e.data,i=t.native.pointerId;if(!this._pointerState.has(i)){var o={downButton:t.native.button,immediateDoubleClick:null};this._pointerState.set(i,o),this.startCapturingPointer(t.native)}},t.prototype._handlePointerLoss=function(e,t){var i=e.data,o=i.native.pointerId,a=this._pointerState.get(o);if(a&&"pointer-up"===t&&a.downButton===i.native.button){var n=a.immediateDoubleClick;if(n){n.timeoutHandle.remove();var u="touch"===e.data.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;r.manhattanDistance(n,e.data)>u?this._startImmediateDoubleClick(e,a):(this._immediateDoubleClick.emit(e.data,void 0,n.modifiers),this._removeState(i.native))}else this._startImmediateDoubleClick(e,a)}},t.prototype._startImmediateDoubleClick=function(e,t){var i=this,o="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;t.immediateDoubleClick={x:e.data.x,y:e.data.y,modifiers:e.modifiers,timeoutHandle:this._clock.setTimeout((function(){return i._removeState(e.data.native)}),o)}},t.prototype._removeState=function(e){this._pointerState.delete(e.pointerId),this.stopCapturingPointer(e),this.refreshHasPendingInputs()},t}(a.InputHandler);t.ImmediateDoubleClick=u}));
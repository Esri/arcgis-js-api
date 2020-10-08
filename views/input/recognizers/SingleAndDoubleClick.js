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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/clock","../../../core/MapUtils","../InputHandler","./support"],(function(e,t,i,o,n,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SingleAndDoubleClick=t.DefaultParameters=void 0,t.DefaultParameters={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};var u=function(e){function a(i,n,a,l,u){void 0===i&&(i=t.DefaultParameters.maximumDoubleClickDelay),void 0===n&&(n=t.DefaultParameters.maximumDoubleClickDistance),void 0===a&&(a=t.DefaultParameters.maximumDoubleTouchDelay),void 0===l&&(l=t.DefaultParameters.maximumDoubleTouchDistance),void 0===u&&(u=o.default);var r=e.call(this,!1)||this;return r.maximumDoubleClickDelay=i,r.maximumDoubleClickDistance=n,r.maximumDoubleTouchDelay=a,r.maximumDoubleTouchDistance=l,r._clock=u,r._pointerState=new Map,r._click=r.registerOutgoing("click"),r._doubleClick=r.registerOutgoing("double-click"),r.registerIncoming("immediate-click",r._handleImmediateClick.bind(r)),r.registerIncoming("pointer-drag",r._handlePointerDrag.bind(r)),r.registerIncoming("drag",r._handleDrag.bind(r)),r}return i.__extends(a,e),a.prototype.onUninstall=function(){this._pointerState.forEach((function(e){null!=e.doubleClickTimeout&&(e.doubleClickTimeout.remove(),e.doubleClickTimeout=null)}))},Object.defineProperty(a.prototype,"hasPendingInputs",{get:function(){return n.someMap(this._pointerState,(function(e){return null!=e.doubleClickTimeout}))},enumerable:!1,configurable:!0}),a.prototype._pointerId=function(e){var t=e.native;return"mouse"===t.pointerType?t.pointerId+":"+t.button:""+t.pointerType},a.prototype._handleImmediateClick=function(e){var t=e.data,i=this._pointerId(t),o=this._pointerState.get(i);if(o){var n="touch"===t.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;l.manhattanDistance(o.event.data,t)>n?(this._clearDoubleClickTimeout(i,!0),this._startClick(e)):(this._clearDoubleClickTimeout(i,!1),this._doubleClick.emit(o.event.data,void 0,o.event.modifiers))}else this._startClick(e)},a.prototype._startClick=function(e){var t=this,i=this._pointerId(e.data),o="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;this._pointerState.set(i,{event:e,doubleClickTimeout:this._clock.setTimeout((function(){return t._doubleClickTimeoutExceeded(i)}),o)}),this.refreshHasPendingInputs()},a.prototype._handlePointerDrag=function(e){var t=this._pointerId(e.data.currentEvent);this._clearDoubleClickTimeout(t,!0)},a.prototype._handleDrag=function(e){var t=this._pointerId(e.data.pointer);this._clearDoubleClickTimeout(t,!0)},a.prototype._clearDoubleClickTimeout=function(e,t){var i=this._pointerState.get(e);i&&(i.doubleClickTimeout.remove(),i.doubleClickTimeout=null,t&&this._doubleClickTimeoutExceeded(e),this._pointerState.delete(e),this.refreshHasPendingInputs())},a.prototype._doubleClickTimeoutExceeded=function(e){var t=this._pointerState.get(e);this._click.emit(t.event.data,void 0,t.event.modifiers),t.doubleClickTimeout=null,this._pointerState.delete(e),this.refreshHasPendingInputs()},a}(a.InputHandler);t.SingleAndDoubleClick=u}));
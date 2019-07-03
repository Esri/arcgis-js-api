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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/clock","../../../core/iteratorUtils","../InputHandler","./support"],function(e,t,i,o,n,u,l){Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultParameters={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};var a=function(e){function u(i,n,u,l,a){void 0===i&&(i=t.DefaultParameters.maximumDoubleClickDelay),void 0===n&&(n=t.DefaultParameters.maximumDoubleClickDistance),void 0===u&&(u=t.DefaultParameters.maximumDoubleTouchDelay),void 0===l&&(l=t.DefaultParameters.maximumDoubleTouchDistance),void 0===a&&(a=o.default);var r=e.call(this,!1)||this;return r.maximumDoubleClickDelay=i,r.maximumDoubleClickDistance=n,r.maximumDoubleTouchDelay=u,r.maximumDoubleTouchDistance=l,r._clock=a,r._pointerState=new Map,r._click=r.registerOutgoing("click"),r._doubleClick=r.registerOutgoing("double-click"),r.registerIncoming("immediate-click",r._handleImmediateClick.bind(r)),r.registerIncoming("pointer-drag",r._handlePointerDrag.bind(r)),r.registerIncoming("drag",r._handleDrag.bind(r)),r}return i(u,e),u.prototype.onUninstall=function(){this._pointerState.forEach(function(e){null!=e.doubleClickTimeout&&(e.doubleClickTimeout.remove(),e.doubleClickTimeout=null)})},Object.defineProperty(u.prototype,"hasPendingInputs",{get:function(){return!n.everyMap(this._pointerState,function(e){return null==e.doubleClickTimeout})},enumerable:!0,configurable:!0}),u.prototype._pointerId=function(e){var t=e.native;return"mouse"===t.pointerType?t.pointerId+":"+t.button:""+t.pointerType},u.prototype._handleImmediateClick=function(e){var t=e.data,i=this._pointerId(t),o=this._pointerState.get(i);if(o){var n="touch"===t.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;l.manhattanDistance(o.event.data,t)>n?(this._clearDoubleClickTimeout(i,!0),this._startClick(e)):(this._clearDoubleClickTimeout(i,!1),this._doubleClick.emit(t,void 0,o.event.modifiers))}else this._startClick(e)},u.prototype._startClick=function(e){var t=this,i=this._pointerId(e.data),o="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;this._pointerState.set(i,{event:e,doubleClickTimeout:this._clock.setTimeout(function(){return t._doubleClickTimeoutExceeded(i)},o)}),this.refreshHasPendingInputs()},u.prototype._handlePointerDrag=function(e){var t=this._pointerId(e.data.currentEvent);this._clearDoubleClickTimeout(t,!0)},u.prototype._handleDrag=function(e){var t=this._pointerId(e.data.pointer);this._clearDoubleClickTimeout(t,!0)},u.prototype._clearDoubleClickTimeout=function(e,t){var i=this._pointerState.get(e);i&&(i.doubleClickTimeout.remove(),i.doubleClickTimeout=null,t&&this._doubleClickTimeoutExceeded(e),this._pointerState.delete(e),this.refreshHasPendingInputs())},u.prototype._doubleClickTimeoutExceeded=function(e){var t=this._pointerState.get(e);this._click.emit(t.event.data,void 0,t.event.modifiers),t.doubleClickTimeout=null,this._pointerState.delete(e),this.refreshHasPendingInputs()},u}(u.InputHandler);t.SingleAndDoubleClick=a});
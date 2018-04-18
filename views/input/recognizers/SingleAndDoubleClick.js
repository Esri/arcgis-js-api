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

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(e,t,i,o,u){Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultParameters={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};var a=function(e){function o(i,o,u,a){void 0===i&&(i=t.DefaultParameters.maximumDoubleClickDelay),void 0===o&&(o=t.DefaultParameters.maximumDoubleClickDistance),void 0===u&&(u=t.DefaultParameters.maximumDoubleTouchDelay),void 0===a&&(a=t.DefaultParameters.maximumDoubleTouchDistance);var l=e.call(this,!1)||this;return l.maximumDoubleClickDelay=i,l.maximumDoubleClickDistance=o,l.maximumDoubleTouchDelay=u,l.maximumDoubleTouchDistance=a,l._pointerState=new Map,l._click=l.registerOutgoing("click"),l._doubleClick=l.registerOutgoing("double-click"),l.registerIncoming("immediate-click",l._handleImmediateClick.bind(l)),l}return i(o,e),o.prototype.onUninstall=function(){this._pointerState.forEach(function(e){0!==e.doubleClickTimeout&&(clearTimeout(e.doubleClickTimeout),e.doubleClickTimeout=0)})},o.prototype._pointerId=function(e){var t=e.native;return"mouse"===t.pointerType?t.pointerId+":"+t.button:""+t.pointerType},o.prototype._handleImmediateClick=function(e){var t=e.data,i=this._pointerId(t),o=this._pointerState.get(i);if(o){clearTimeout(o.doubleClickTimeout),o.doubleClickTimeout=0;var a="touch"===t.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;u.manhattanDistance(o.event.data,t)>a?(this._doubleClickTimeoutExceeded(i),this._startClick(e)):(this._doubleClick.emit(t,void 0,o.event.modifiers),this._pointerState.delete(i))}else this._startClick(e)},o.prototype._startClick=function(e){var t=this,i=this._pointerId(e.data),o="touch"===e.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay;this._pointerState.set(i,{event:e,doubleClickTimeout:setTimeout(function(){return t._doubleClickTimeoutExceeded(i)},o)})},o.prototype._doubleClickTimeoutExceeded=function(e){var t=this._pointerState.get(e);this._click.emit(t.event.data,void 0,t.event.modifiers),t.doubleClickTimeout=0,this._pointerState.delete(e)},o}(o.InputHandler);t.SingleAndDoubleClick=a});
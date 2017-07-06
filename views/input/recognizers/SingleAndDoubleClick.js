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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(e,t,i,o,n){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,i,o){void 0===t&&(t=250),void 0===i&&(i=10),void 0===o&&(o=35);var n=e.call(this,"recognizers.SingleAndDoubleClick",!1)||this;return n.maximumDoubleClickDelay=t,n.maximumDoubleClickDistance=i,n.maximumDoubleTouchDistance=o,n._pointerState=new Map,n._click=n.registerOutgoing("click"),n._doubleClick=n.registerOutgoing("double-click"),n.registerIncoming("pointer-click",n._handlePointerClick.bind(n)),n}return i(t,e),t.prototype._pointerId=function(e){var t=e["native"];return"mouse"===t.pointerType?t.pointerId+":"+t.button:""+t.pointerType},t.prototype._handlePointerClick=function(e){var t=e.data,i=this._pointerId(t),o=this._pointerState.get(i);if(o){clearTimeout(o.doubleClickTimeout),o.doubleClickTimeout=0;var l="touch"===t["native"].pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;n.manhattanDistance(o.event.data,t)>l?(this._doubleClickTimeoutExceeded(i),this._startClick(e)):(this._doubleClick.emit(t,void 0,o.event.modifiers),this._pointerState["delete"](i))}else this._startClick(e)},t.prototype._startClick=function(e){var t=this,i=this._pointerId(e.data);this._pointerState.set(i,{event:e,doubleClickTimeout:setTimeout(function(){return t._doubleClickTimeoutExceeded(i)},this.maximumDoubleClickDelay)})},t.prototype._doubleClickTimeoutExceeded=function(e){var t=this._pointerState.get(e);this._click.emit(t.event.data,void 0,t.event.modifiers),t.doubleClickTimeout=0,this._pointerState["delete"](e)},t}(o.InputHandler);t.SingleAndDoubleClick=l});
// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,o,n){var l=function(t){function e(e,i,o){void 0===e&&(e=250),void 0===i&&(i=10),void 0===o&&(o=35),t.call(this,"recognizers.SingleAndDoubleClick",!1),this.maximumDoubleClickDelay=e,this.maximumDoubleClickDistance=i,this.maximumDoubleTouchDistance=o,this._pointerState=new Map,this._click=this.registerOutgoing("click"),this._doubleClick=this.registerOutgoing("double-click"),this.registerIncoming("pointer-click",this._handlePointerClick.bind(this))}return i(e,t),e.prototype._pointerId=function(t){var e=t["native"];return"mouse"===e.pointerType?e.pointerId+":"+e.button:""+e.pointerType},e.prototype._handlePointerClick=function(t){var e=t.data,i=this._pointerId(e),o=this._pointerState.get(i);if(o){clearTimeout(o.doubleClickTimeout),o.doubleClickTimeout=0;var l="touch"===e["native"].pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;n.manhattanDistance(o.event,e)>l?(this._doubleClickTimeoutExceeded(i),this._startClick(e)):(this._doubleClick.emit(e),this._pointerState["delete"](i))}else this._startClick(e)},e.prototype._startClick=function(t){var e=this,i=this._pointerId(t);this._pointerState.set(i,{event:t,doubleClickTimeout:setTimeout(function(){return e._doubleClickTimeoutExceeded(i)},this.maximumDoubleClickDelay)})},e.prototype._doubleClickTimeoutExceeded=function(t){var e=this._pointerState.get(t);this._click.emit(e.event),e.doubleClickTimeout=0,this._pointerState["delete"](t)},e}(o.InputHandler);e.SingleAndDoubleClick=l});
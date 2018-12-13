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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Evented","../../../core/Handles","../../../core/accessorSupport/decorators","../../../geometry/ScreenPoint","./DrawAction","./input/Keys","../../input/recognizers/PointerClickHoldAndDrag"],function(e,t,o,r,n,i,s,c,d,a,p,u){var l=function(){function e(e,t,o){this.view=e,this.native=t,this.coordinates=o,this.defaultPrevented=!1,this.type="cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),v=function(){function e(e,t){this.native=e,this.coordinates=t,this.defaultPrevented=!1,this.type="draw-complete"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();return function(e){function t(t){var o=e.call(this,t)||this;return o._clickDelay=u.DefaultParameters.maximumClickDelay,o._cursorMoved=!1,o._cursorScreenPoint=null,o._pointerDownEvent=null,o._viewHandles=new s,o.coordinates=[],o.view=null,o}return o(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){this._cursorScreenPoint&&(this._set("coordinates",this.getCoordsFromScreenPoint(this._cursorScreenPoint)),this._completeDrawing())},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("click",function(t){t.stopPropagation(),e._set("coordinates",e.getCoordsFromScreenPoint(t.screenPoint)),e._drawCompleteHandler(t)}),this.view.on("pointer-down",function(t){e._pointerDownEvent=t,e._cursorMoved=!1}),this.view.on("pointer-move",function(t){e._cursorMoved=!0,e._cursorScreenPoint=new d({x:t.x,y:t.y}),e._cursorUpdateHandler(t)}),this.view.on("pointer-up",function(t){e._pointerDownEvent&&!e._cursorMoved&&t.timestamp-e._pointerDownEvent.timestamp>e._clickDelay&&(e._cursorScreenPoint=new d({x:t.x,y:t.y}),e._set("coordinates",e.getCoordsFromScreenPoint(e._cursorScreenPoint)),e._drawCompleteHandler(t))}),this.view.on("key-down",function(t){t.key===p.KEYS.drawCompleteKey&&e._cursorScreenPoint&&(e._set("coordinates",e.getCoordsFromScreenPoint(e._cursorScreenPoint)),e._drawCompleteHandler(t))})])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._updateCursor=function(e,t){this.emit("cursor-update",new l(this.view,t,e))},t.prototype._completeDrawing=function(e){this._cursorMoved=!1,this._pointerDownEvent=null;var t=new v(e,this.coordinates);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()},t.prototype._cursorUpdateHandler=function(e){this._updateCursor(this.getCoordsFromScreenPoint(this._cursorScreenPoint),e.native)},t.prototype._drawCompleteHandler=function(e){this._completeDrawing(e.native)},r([c.property({readOnly:!0})],t.prototype,"coordinates",void 0),r([c.property()],t.prototype,"view",void 0),t=r([c.subclass("esri.views.2d.draw.PointDrawAction")],t)}(c.declared(a,n,i))});
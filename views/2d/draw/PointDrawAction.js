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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../input/recognizers/PointerClickHoldAndDrag","./Keys","../../../core/Accessor","./DrawAction","../../../core/Evented","../../../core/HandleRegistry","../../../geometry/ScreenPoint"],function(e,t,n,r,o,i,s,a,c,d,u,p){var l=function(){function e(e,t,n){this.view=e,this["native"]=t,this.coordinates=n,this.defaultPrevented=!1,this.type="cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),v=function(){function e(e,t){this["native"]=e,this.coordinates=t,this.defaultPrevented=!1,this.type="draw-complete"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._clickDelay=i.DefaultParameters.maximumClickDelay,t._cursorMoved=!1,t._cursorScreenPoint=null,t._viewHandles=new u,t._pointerDownEvent=null,t.view=null,t}return n(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){this._cursorScreenPoint&&this._drawCompleteHandler(null,this.view.toMap(this._cursorScreenPoint))},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("click",function(t){return e._drawCompleteHandler(t["native"],t.mapPoint)}),this.view.on("pointer-down",function(t){e._pointerDownEvent=t,e._cursorMoved=!1}),this.view.on("pointer-move",function(t){e._cursorMoved=!0,e._cursorScreenPoint=new p({x:t.x,y:t.y}),e._cursorUpdateHandler(t["native"],e.view.toMap(e._cursorScreenPoint))}),this.view.on("pointer-up",function(t){e._pointerDownEvent&&!e._cursorMoved&&t.timestamp-e._pointerDownEvent.timestamp>e._clickDelay&&(e._cursorScreenPoint=new p({x:t.x,y:t.y}),e._drawCompleteHandler(t["native"],e.view.toMap(e._cursorScreenPoint)))}),this.view.on("key-down",function(t){t.key===s.KEYS.drawCompleteKey&&e._cursorScreenPoint&&e._drawCompleteHandler(t["native"],e.view.toMap(e._cursorScreenPoint))})])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._cursorUpdateHandler=function(e,t){var n=new l(this.view,e,[t.x,t.y]);this.emit("cursor-update",n)},t.prototype._drawCompleteHandler=function(e,t){this._cursorMoved=!1,this._pointerDownEvent=null;var n=new v(e,[t.x,t.y]);this.emit("draw-complete",n),n.defaultPrevented||this._removeViewHandles()},r([o.property()],t.prototype,"view",void 0),t=r([o.subclass("esri.views.2d.draw.PointDrawAction")],t)}(o.declared(c,a,d));return w});
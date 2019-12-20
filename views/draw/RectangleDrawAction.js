// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Handles","../../core/screenUtils","../../core/accessorSupport/decorators","./DrawAction","./input/DrawEvents","../input/InputManager"],function(e,t,i,r,n,o,s,a,c,v){Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t,i){this.view=e,this.native=t,this.vertices=i,this.defaultPrevented=!1,this.type="rectangle-cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._cursorMoved=!1,t._startPoint=null,t._viewHandles=new n,t._dragEnabled=!0,t.vertices=[],t.view=null,t}return i(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("pointer-down",function(t){e._startPoint=o.createScreenPointFromEvent(t)},v.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(t){if(e._startPoint){var i=o.createScreenPointFromEvent(t);e._cursorMoved=!0,e._cursorUpdateHandler(t.native,i)}},v.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(t){if(!e._cursorMoved){var i=t.x,r=t.y,n=e.view.toMap(o.createScreenPoint(i-48,r+48)),s=e.view.toMap(o.createScreenPoint(i+48,r-48));e._set("vertices",[[n.x,s.y],[s.x,s.y],[s.x,n.y],[n.x,n.y]])}e._drawCompleteHandler(t.native)},v.ViewEventPriorities.TOOL),this.view.on("drag",function(t){e._dragEnabled&&e._startPoint&&t.stopPropagation()},v.ViewEventPriorities.TOOL)])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._cursorUpdateHandler=function(e,t){var i=t.x,r=t.y,n=Math.min(i,this._startPoint.x),s=Math.min(r,this._startPoint.y),a=Math.abs(i-this._startPoint.x),c=Math.abs(r-this._startPoint.y);if(!a||!c)return void this._set("vertices",[]);var v=this.view.toMap(o.createScreenPoint(n,s+c)),p=this.view.toMap(o.createScreenPoint(n,s));this._set("vertices",[[v.x,p.y],[p.x,p.y],[p.x,v.y],[v.x,v.y]]);var l=new d(this.view,e,this.vertices);this.emit("cursor-update",l)},t.prototype._drawCompleteHandler=function(e){var t=new c.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()},r([s.property({readOnly:!0})],t.prototype,"vertices",void 0),r([s.property()],t.prototype,"view",void 0),t=r([s.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],t)}(s.declared(a));t.RectangleDrawAction=p});
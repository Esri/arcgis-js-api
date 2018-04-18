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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Evented","../../../core/Handles","../../../core/accessorSupport/decorators","../../../geometry/ScreenPoint","./DrawAction","./input/DrawEvents"],function(e,t,i,r,n,o,s,a,d,c,p){Object.defineProperty(t,"__esModule",{value:!0});var v=function(){function e(e,t,i){this.view=e,this.native=t,this.vertices=i,this.defaultPrevented=!1,this.type="rectangle-cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._cursorMoved=!1,t._startPoint=null,t._viewHandles=new s,t._dragEnabled=!0,t.vertices=[],t.view=null,t}return i(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("pointer-down",function(t){e._startPoint=new d({x:t.x,y:t.y})}),this.view.on("pointer-move",function(t){if(e._startPoint){var i=new d({x:t.x,y:t.y});e._cursorMoved=!0,e._cursorUpdateHandler(t.native,i)}}),this.view.on("pointer-up",function(t){if(!e._cursorMoved){var i=t.x,r=t.y,n=e.view.toMap(new d(i-48,r+48)),o=e.view.toMap(new d(i+48,r-48));e._set("vertices",[[n.x,o.y],[o.x,o.y],[o.x,n.y],[n.x,n.y]])}e._drawCompleteHandler(t.native)}),this.view.on("drag",function(t){e._dragEnabled&&e._startPoint&&t.stopPropagation()})])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._cursorUpdateHandler=function(e,t){var i=t.x,r=t.y,n=Math.min(i,this._startPoint.x),o=Math.min(r,this._startPoint.y),s=Math.abs(i-this._startPoint.x),a=Math.abs(r-this._startPoint.y);if(!s||!a)return void this._set("vertices",[]);var c=this.view.toMap(new d({x:n,y:o+a})),p=this.view.toMap(new d({x:n+s,y:o}));this._set("vertices",[[c.x,p.y],[p.x,p.y],[p.x,c.y],[c.x,c.y]]);var l=new v(this.view,e,this.vertices);this.emit("cursor-update",l)},t.prototype._drawCompleteHandler=function(e){var t=new p.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()},r([a.property({readOnly:!0})],t.prototype,"vertices",void 0),r([a.property()],t.prototype,"view",void 0),t=r([a.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],t)}(a.declared(c,n,o));t.RectangleDrawAction=l});
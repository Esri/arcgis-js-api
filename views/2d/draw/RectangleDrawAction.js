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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./input/DrawEvents","../../../core/Accessor","./DrawAction","../../../core/Evented","../../../core/HandleRegistry","../../../geometry/ScreenPoint"],function(e,t,i,r,n,o,s,a,d,p,v){var c=function(){function e(e,t,i){this.view=e,this["native"]=t,this.vertices=i,this.defaultPrevented=!1,this.type="rectangle-cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._cursorMoved=!1,t._startPoint=null,t._viewHandles=new p,t._dragEnabled=!0,t.vertices=[],t.view=null,t}return i(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("pointer-down",function(t){e._startPoint=new v({x:t.x,y:t.y})}),this.view.on("pointer-move",function(t){if(e._startPoint){var i=new v({x:t.x,y:t.y});e._cursorMoved=!0,e._cursorUpdateHandler(t["native"],i)}}),this.view.on("pointer-up",function(t){if(!e._cursorMoved){var i=t.x,r=t.y,n=e.view.toMap(new v(i-48,r+48)),o=e.view.toMap(new v(i+48,r-48));e._set("vertices",[[n.x,o.y],[o.x,o.y],[o.x,n.y],[n.x,n.y]])}e._drawCompleteHandler(t["native"])}),this.view.on("drag",function(t){e._dragEnabled&&e._startPoint&&t.stopPropagation()})])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._cursorUpdateHandler=function(e,t){var i=t.x,r=t.y,n=Math.min(i,this._startPoint.x),o=Math.min(r,this._startPoint.y),s=Math.abs(i-this._startPoint.x),a=Math.abs(r-this._startPoint.y);if(!s||!a)return void this._set("vertices",[]);var d=this.view.toMap(new v({x:n,y:o+a})),p=this.view.toMap(new v({x:n+s,y:o}));this._set("vertices",[[d.x,p.y],[p.x,p.y],[p.x,d.y],[d.x,d.y]]);var l=new c(this.view,e,this.vertices);this.emit("cursor-update",l)},t.prototype._drawCompleteHandler=function(e){var t=new o.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()},r([n.property({readOnly:!0})],t.prototype,"vertices",void 0),r([n.property()],t.prototype,"view",void 0),t=r([n.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],t)}(n.declared(a,s,d));return l});
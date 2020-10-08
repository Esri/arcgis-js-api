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

define(["require","exports","tslib","../../core/Handles","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","./DrawAction","./input/DrawEvents","../input/InputManager"],(function(e,t,i,r,n,o,s,a,c,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RectangleDrawAction=void 0;var d=function(){function e(e,t,i){this.view=e,this.native=t,this.vertices=i,this.defaultPrevented=!1,this.type="rectangle-cursor-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}(),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._cursorMoved=!1,t._startPoint=null,t._viewHandles=new r,t._dragEnabled=!0,t.vertices=[],t.view=null,t}return i.__extends(t,e),t.prototype.initialize=function(){this._addViewHandles()},t.prototype.destroy=function(){this._removeViewHandles(),this._viewHandles.destroy(),this.emit("destroy")},t.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)},t.prototype._addViewHandles=function(){var e=this;this._removeViewHandles(),this._viewHandles.add([this.view.on("pointer-down",(function(t){e._startPoint=o.createScreenPointFromEvent(t)}),v.ViewEventPriorities.TOOL),this.view.on("pointer-move",(function(t){if(e._startPoint){var i=o.createScreenPointFromEvent(t);e._cursorMoved=!0,e._cursorUpdateHandler(t.native,i)}}),v.ViewEventPriorities.TOOL),this.view.on("pointer-up",(function(t){if(!e._cursorMoved){var i=t.x,r=t.y,s=[[-48,-48],[48,-48],[48,48],[-48,48]],a=[];s.forEach((function(t){var s=e.getCoordsFromScreenPoint(o.createScreenPoint(i+t[0],r+t[1]));n.isSome(s)&&a.push(s)})),a.length===s.length?e._set("vertices",a):e._set("vertices",[])}e._drawCompleteHandler(t.native)}),v.ViewEventPriorities.TOOL),this.view.on("drag",(function(t){e._dragEnabled&&e._startPoint&&t.stopPropagation()}),v.ViewEventPriorities.TOOL)])},t.prototype._removeViewHandles=function(){this._viewHandles.removeAll()},t.prototype._cursorUpdateHandler=function(e,t){var i=t.x,r=t.y,n=Math.min(i,this._startPoint.x),s=Math.min(r,this._startPoint.y),a=Math.abs(i-this._startPoint.x),c=Math.abs(r-this._startPoint.y);if(a&&c){var v=this.view.toMap(o.createScreenPoint(n,s+c)),l=this.view.toMap(o.createScreenPoint(n,s));this._set("vertices",[[v.x,l.y],[l.x,l.y],[l.x,v.y],[v.x,v.y]]);var p=new d(this.view,e,this.vertices);this.emit("cursor-update",p)}else this._set("vertices",[])},t.prototype._drawCompleteHandler=function(e){var t=new c.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()},i.__decorate([s.property({readOnly:!0})],t.prototype,"vertices",void 0),i.__decorate([s.property()],t.prototype,"view",void 0),t=i.__decorate([s.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],t)}(a);t.RectangleDrawAction=l}));
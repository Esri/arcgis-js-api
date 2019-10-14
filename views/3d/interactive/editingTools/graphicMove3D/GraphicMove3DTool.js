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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","../../../../draw/support/drawUtils","../../../../interactive/GraphicManipulator","../../../../interactive/InteractiveToolBase"],function(e,r,t,i,o,a,n,c,p,s,h,l){Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e){this.allGraphics=e,this.type="graphic-move-start"}return e}();r.GraphicMoveStartEvent=u;var v=function(){function e(e,r,t){this.dx=e,this.dy=r,this.allGraphics=t,this.type="graphic-move"}return e}();r.GraphicMoveEvent=v;var d=function(){function e(e){this.allGraphics=e,this.type="graphic-move-stop"}return e}();r.GraphicMoveStopEvent=d;var y=function(e){function r(r){var t=e.call(this,r)||this;return t.graphics=new o,t.type="move-3d",t._handles=new n,t}return i(r,e),r.prototype.initialize=function(){var e=this;this._handles.add(this.graphics.on("change",function(){e._refreshGraphicManipulators()})),this._refreshGraphicManipulators()},r.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.graphics.removeAll(),this._set("view",null)},r.prototype.reset=function(){this.graphics.removeAll()},r.prototype._refreshGraphicManipulators=function(){var e=this;this._handles.remove("graphics"),this.manipulators.removeAll();var r=this.graphics.toArray().map(function(r){var t=new h.GraphicManipulator({graphic:r,view:e.view,selectable:!0});return e.manipulators.add(t),t}),t=0;r.forEach(function(i){i.on("drag",function(t){r.forEach(function(e){var r=c.expect(e.graphic.geometry);"mesh"!==r.type&&e!==i&&(e.graphic.geometry=s.move(r.clone(),t.dxMap,t.dyMap))}),e.emit("graphic-move",new v(t.dx,t.dy,e.graphics.toArray()))}),i.on("click",function(){return e.emit("click")});var o=i.watch("dragging",function(o){o?1===++t&&(e.emit("graphic-move-start",new u(e.graphics.toArray())),r.forEach(function(e){e!==i&&(e.interactive=!1)})):0===--t&&(e.emit("graphic-move-stop",new d(e.graphics.toArray())),r.forEach(function(e){e.interactive=!0}))},!0),a=i.watch("hovering",function(r){e.cursor=r?"move":null},!0);e._handles.add(o,"graphics"),e._handles.add(a,"graphics")})},t([p.property({constructOnly:!0,nonNullable:!0})],r.prototype,"view",void 0),t([p.property({readOnly:!0})],r.prototype,"graphics",void 0),t([p.property({value:null})],r.prototype,"cursor",void 0),t([p.property({readOnly:!0})],r.prototype,"type",void 0),r=t([p.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMove3DTool")],r)}(p.declared(a.EventedMixin(l.InteractiveToolBase)));r.GraphicMove3DTool=y});
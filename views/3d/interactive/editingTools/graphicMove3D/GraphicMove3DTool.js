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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","../../../../draw/support/drawUtils","../../../../interactive/GraphicManipulator","../../../../interactive/InteractiveToolBase"],function(r,e,t,i,o,a,n,c,p,s,h,l){Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function r(r){this.allGraphics=r,this.type="graphic-move-start"}return r}();e.GraphicMoveStartEvent=u;var v=function(){function r(r,e,t){this.dx=r,this.dy=e,this.allGraphics=t,this.type="graphic-move"}return r}();e.GraphicMoveEvent=v;var d=function(){function r(r){this.allGraphics=r,this.type="graphic-move-stop"}return r}();e.GraphicMoveStopEvent=d;var y=function(r){function e(e){var t=r.call(this,e)||this;return t.graphics=new o,t.type="move-3d",t._handles=new n,t}return i(e,r),e.prototype.initialize=function(){var r=this;this._handles.add(this.graphics.on("change",function(){r._refreshGraphicManipulators()})),this._refreshGraphicManipulators()},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.graphics.removeAll(),this._set("view",null)},e.prototype.reset=function(){this.graphics.removeAll()},e.prototype._refreshGraphicManipulators=function(){var r=this;this._handles.remove("graphics"),this.manipulators.removeAll();var e=this.graphics.toArray().map(function(e){var t=new h.GraphicManipulator({graphic:e,view:r.view,selectable:!0});return r.manipulators.add(t),t}),t=0;e.forEach(function(i){i.on("drag",function(t){e.forEach(function(r){var e=c.expect(r.graphic.geometry);if("mesh"===e.type)return!1;r!==i&&(r.graphic.geometry=s.move(e.clone(),t.dxMap,t.dyMap))}),r.emit("graphic-move",new v(t.dx,t.dy,r.graphics.toArray()))}),i.on("click",function(){return r.emit("click")});var o=i.watch("dragging",function(o){o?1===++t&&(r.emit("graphic-move-start",new u(r.graphics.toArray())),e.forEach(function(r){r!==i&&(r.interactive=!1)})):0===--t&&(r.emit("graphic-move-stop",new d(r.graphics.toArray())),e.forEach(function(r){r.interactive=!0}))},!0),a=i.watch("hovering",function(e){r.cursor=e?"move":null},!0);r._handles.add(o,"graphics"),r._handles.add(a,"graphics")})},t([p.property({constructOnly:!0,nonNullable:!0})],e.prototype,"view",void 0),t([p.property({readOnly:!0})],e.prototype,"graphics",void 0),t([p.property({value:null})],e.prototype,"cursor",void 0),t([p.property({readOnly:!0})],e.prototype,"type",void 0),e=t([p.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMove3DTool")],e)}(p.declared(l.InteractiveToolBase,a));e.GraphicMove3DTool=y});
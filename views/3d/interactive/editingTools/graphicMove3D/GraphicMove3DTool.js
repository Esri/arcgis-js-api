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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/accessorSupport/decorators","../../../../draw/support/drawUtils","../../../../interactive/GraphicManipulator","../../../../interactive/InteractiveToolBase"],function(r,e,t,o,i,a,n,c,p,s,h){Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function r(r){this.allGraphics=r,this.type="graphic-move-start"}return r}();e.GraphicMoveStartEvent=l;var u=function(){function r(r,e,t){this.dx=r,this.dy=e,this.allGraphics=t,this.type="graphic-move"}return r}();e.GraphicMoveEvent=u;var v=function(){function r(r){this.allGraphics=r,this.type="graphic-move-stop"}return r}();e.GraphicMoveStopEvent=v;var d=function(r){function e(e){var t=r.call(this,e)||this;return t.graphics=new i,t.type="move-3d",t._handles=new n,t}return o(e,r),e.prototype.initialize=function(){},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.graphics.removeAll(),this._set("view",null)},e.prototype.reset=function(){this.graphics.removeAll()},e.prototype.onAttach=function(r){var e=this;this._handles.add(this.graphics.on("change",function(){e._refreshGraphicManipulators(r)})),this._refreshGraphicManipulators(r)},e.prototype.onDetach=function(){this._handles.removeAll()},e.prototype._refreshGraphicManipulators=function(r){var e=this;this._handles.remove("graphics"),r.removeManipulators();var t=this.graphics.toArray().map(function(t){var o=new s.GraphicManipulator({graphic:t,view:e.view,selectable:!0});return r.addManipulator(o),o}),o=0;t.forEach(function(r){r.on("drag",function(o){t.forEach(function(e){if("mesh"===e.graphic.geometry.type)return!1;e!==r&&(e.graphic.geometry=p.move(e.graphic.geometry.clone(),o.dxMap,o.dyMap))}),e.emit("graphic-move",new u(o.dx,o.dy,e.graphics.toArray()))}),r.on("click",function(){return e.emit("click")});var i=r.watch("dragging",function(i){i?1===++o&&(e.emit("graphic-move-start",new l(e.graphics.toArray())),t.forEach(function(e){e!==r&&(e.interactive=!1)})):0===--o&&(e.emit("graphic-move-stop",new v(e.graphics.toArray())),t.forEach(function(r){r.interactive=!0}))},!0),a=r.watch("hovering",function(r){e.cursor=r?"move":null},!0);e._handles.add(i,"graphics"),e._handles.add(a,"graphics")})},t([c.property({constructOnly:!0,nonNullable:!0})],e.prototype,"view",void 0),t([c.property({readOnly:!0})],e.prototype,"graphics",void 0),t([c.property({value:null})],e.prototype,"cursor",void 0),t([c.property({readOnly:!0})],e.prototype,"type",void 0),e=t([c.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMove3DTool")],e)}(c.declared(h,a));e.GraphicMove3DTool=d});
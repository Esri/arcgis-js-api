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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/Collection","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","../../Manipulator3D","../../manipulatorUtils","../manipulatorUtils","./isSupportedGraphic","../../../../interactive/InteractiveToolBase","../../../../interactive/dragUtils/dragActions","../../../../interactive/dragUtils/dragHandlers"],function(e,t,r,i,a,o,n,c,s,p,l,h,u,d,v,g,f,y){Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(e){this.allGraphics=e,this.type="graphic-move-start"}return e}();t.GraphicMoveStartEvent=m;var M=function(){function e(e,t,r,i){this.dx=e,this.dy=t,this.dz=r,this.allGraphics=i,this.type="graphic-move"}return e}();t.GraphicMoveEvent=M;var w=function(){function e(e){this.allGraphics=e,this.type="graphic-move-stop"}return e}();t.GraphicMoveStopEvent=w;var G=function(e){function t(t){var r=e.call(this,t)||this;return r.graphics=new o,r.type="move-3d",r._handles=new c,r}return i(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(this.graphics.on("change",function(){e._refreshManipulators()})),this._refreshManipulators()},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.graphics.removeAll(),this._set("view",null)},t.prototype.reset=function(){},t.prototype._createDragAction=function(e){var t=this,r=f.createGraphicDragActionMany(e);return function(i){switch(i.action){case"start":t.emit("graphic-move-start",new m(e))}switch(r(i),i.action){case"start":case"update":("update"===i.action||i.deltaX||i.deltaY||i.deltaZ)&&t.emit("graphic-move",new M(i.deltaX,i.deltaY,i.deltaZ,e));break;case"end":t.emit("graphic-move-stop",new w(e))}}},t.prototype._refreshManipulators=function(){var e=this;this._handles.remove("graphics"),this.manipulators.removeAll();for(var t=this.graphics.toArray(),r=[],i=this,o=0,n=t;o<n.length;o++){var c=n[o];!function(t){if(0!==v.isSupportedGraphic(t))return"continue";var o=d.createGraphicMoveXYManipulator(i.view,t);i._handles.add(o.events.on("immediate-click",function(r){e.emit("immediate-click",a({},r,{graphic:t})),r.stopPropagation()}),"graphics"),i.manipulators.add(o),r.push(o);var n=d.createGraphicMoveZManipulator({view:i.view,graphic:t});if(s.isNone(n))return"continue";i._handles.add([p.init(t,"geometry",function(){return u.placeManipulatorAtGraphic(n,t)}),p.init(t,["visible","layer.visible"],function(){return n.visible=t.visible&&t.layer.visible})],"graphics"),i.manipulators.add(n),r.push(n)}(c)}y.createManipulatorDragHandlerOneOf(r,function(t,r){return t instanceof h.Manipulator3D?d.createGraphicMoveZScreenDragToMap(e.view,t):d.createGraphicMoveXYScreenDragToMap(e.view,t,r)},this._createDragAction(t))},r([l.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),r([l.property({readOnly:!0})],t.prototype,"graphics",void 0),r([l.property({readOnly:!0})],t.prototype,"type",void 0),t=r([l.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMove3DTool")],t)}(l.declared(n.EventedMixin(g.InteractiveToolBase)));t.GraphicMove3DTool=G});
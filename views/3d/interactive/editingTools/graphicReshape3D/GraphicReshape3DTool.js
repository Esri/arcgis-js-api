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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","./isSupportedGraphic","./ReshapeOperation","./reshapeUtils","../../../../interactive/InteractiveToolBase"],function(e,t,r,i,o,a,p,n,s,h,c,l,u,d){Object.defineProperty(t,"__esModule",{value:!0});var g=p.getLogger("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool"),y=function(e){function t(t){var r=e.call(this,t)||this;return r._handles=new a,r._reshapeOperation=null,r._internalGeometryUpdate=!1,r.type="reshape-3d",r}return i(t,e),t.prototype.destroy=function(){this._handles.removeAll(),this._set("view",null),this._set("graphic",null)},Object.defineProperty(t.prototype,"graphic",{set:function(e){if(n.isSome(e)&&!c.isSupportedGraphic(e))return void g.error("Only polyline and polygon geometries are supported");this._set("graphic",e)},enumerable:!0,configurable:!0}),t.prototype._updateGeometry=function(){n.isSome(this.graphic)&&u.isReshapeGeometry(this.graphic.geometry)?this._reshapeOperation.inputGeometry=this.graphic.geometry.clone():this._reshapeOperation.inputGeometry=null},t.prototype._updateGraphic=function(){var e=this;this._handles.remove("onGraphicGeometryChange"),this._updateGeometry();var t=this.watch("graphic.geometry",function(){!1===e._internalGeometryUpdate&&e._updateGeometry()},!0);this._handles.add(t,"onGraphicGeometryChange")},t.prototype._onReshapeGeometryChanged=function(){n.isNone(this.graphic)||(this._internalGeometryUpdate=!0,this.graphic.geometry=this._reshapeOperation.outputGeometry.clone(),this._internalGeometryUpdate=!1)},t.prototype.initialize=function(){var e=this;this._reshapeOperation=new l.ReshapeOperation({view:this.view,manipulators:this.manipulators}),this._handles.add([this._reshapeOperation.watch("cursor",function(){e.cursor=e._reshapeOperation.cursor}),this._reshapeOperation.on("reshape-operation-start",function(t){n.isNone(e.graphic)||(t.graphic=e.graphic,e.emit("reshape-start",t))}),this._reshapeOperation.on("vertex-move",function(t){e._onReshapeGeometryChanged(),n.isSome(e.graphic)&&(t.graphic=e.graphic,e.emit("vertex-move",t))}),this._reshapeOperation.on("translate",function(t){e._onReshapeGeometryChanged(),n.isSome(e.graphic)&&(t.graphic=e.graphic,e.emit("translate",t))}),this._reshapeOperation.on("vertex-add",function(t){e._onReshapeGeometryChanged(),n.isSome(e.graphic)&&(t.graphic=e.graphic,e.emit("vertex-add",t))}),this._reshapeOperation.on("vertex-remove",function(t){e._onReshapeGeometryChanged(),n.isSome(e.graphic)&&(t.graphic=e.graphic,e.emit("vertex-remove",t))}),this._reshapeOperation.on("reshape-operation-stop",function(t){n.isNone(e.graphic)||(t.graphic=e.graphic,e.emit("reshape-stop",t))}),this._reshapeOperation.on("click",function(){return e.emit("click")}),s.init(this,"graphic",function(){e._updateGraphic()},!0)])},t.prototype.handleInputEvent=function(e){"key-down"!==e.type||"Delete"!==e.key&&"Backspace"!==e.key||this._reshapeOperation.removeSelectedVertices()},t.prototype.reset=function(){this.graphic=null},r([h.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),r([h.property({value:null})],t.prototype,"graphic",null),r([h.property({readOnly:!0})],t.prototype,"type",void 0),r([h.property({value:null})],t.prototype,"cursor",void 0),t=r([h.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool")],t)}(h.declared(d.InteractiveToolBase,o));t.GraphicReshape3DTool=y});
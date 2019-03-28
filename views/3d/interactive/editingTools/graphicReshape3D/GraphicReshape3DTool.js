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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/Logger","../../../../../core/maybe","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","./isSupportedGraphic","./ReshapeOperation","./reshapeUtils","../../../../interactive/InteractiveToolBase"],function(e,t,r,o,i,p,a,n,h,s,c,l,u,d){Object.defineProperty(t,"__esModule",{value:!0});var y=a.getLogger("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool"),g=function(e){function t(t){var r=e.call(this,t)||this;return r._handles=new p,r._reshapeOperation=null,r._internalGeometryUpdate=!1,r.type="reshape-3d",r}return o(t,e),t.prototype.destroy=function(){this._handles.removeAll(),this._set("view",null),this._set("graphic",null)},Object.defineProperty(t.prototype,"graphic",{set:function(e){if(n.isSome(e)&&!c.isSupportedGraphic(e))return void y.error("Only polyline and polygon geometries are supported");this._set("graphic",e)},enumerable:!0,configurable:!0}),t.prototype._updateGeometry=function(){n.isSome(this.graphic)&&u.isReshapeGeometry(this.graphic.geometry)?this._reshapeOperation.inputGeometry=this.graphic.geometry.clone():this._reshapeOperation.inputGeometry=null},t.prototype._updateGraphic=function(e){var t=this;this._handles.remove("onGraphicGeometryChange"),this._updateGeometry();var r=this.watch("graphic.geometry",function(){!1===t._internalGeometryUpdate&&t._updateGeometry()},!0);this._handles.add(r,"onGraphicGeometryChange")},t.prototype._onReshapeGeometryChanged=function(){n.isNone(this.graphic)||(this._internalGeometryUpdate=!0,this.graphic.geometry=this._reshapeOperation.outputGeometry.clone(),this._internalGeometryUpdate=!1)},t.prototype.onAttach=function(e){var t=this;this._reshapeOperation=new l.ReshapeOperation({toolViewManager:e,view:this.view}),this._handles.add([this._reshapeOperation.watch("cursor",function(){t.cursor=t._reshapeOperation.cursor}),this._reshapeOperation.on("reshape-operation-start",function(e){n.isNone(t.graphic)||(e.graphic=t.graphic,t.emit("reshape-start",e))}),this._reshapeOperation.on("vertex-move",function(e){t._onReshapeGeometryChanged(),n.isSome(t.graphic)&&(e.graphic=t.graphic,t.emit("vertex-move",e))}),this._reshapeOperation.on("translate",function(e){t._onReshapeGeometryChanged(),n.isSome(t.graphic)&&(e.graphic=t.graphic,t.emit("translate",e))}),this._reshapeOperation.on("vertex-add",function(e){t._onReshapeGeometryChanged(),n.isSome(t.graphic)&&(e.graphic=t.graphic,t.emit("vertex-add",e))}),this._reshapeOperation.on("vertex-remove",function(e){t._onReshapeGeometryChanged(),n.isSome(t.graphic)&&(e.graphic=t.graphic,t.emit("vertex-remove",e))}),this._reshapeOperation.on("reshape-operation-stop",function(e){n.isNone(t.graphic)||(e.graphic=t.graphic,t.emit("reshape-stop",e))}),this._reshapeOperation.on("click",function(){return t.emit("click")}),h.init(this,"graphic",function(){t._updateGraphic(e)},!0)])},t.prototype.onDetach=function(){this._handles.removeAll(),this._reshapeOperation.destroy()},t.prototype.handleInputEvent=function(e){"key-down"!==e.type||"Delete"!==e.key&&"Backspace"!==e.key||this._reshapeOperation.removeSelectedVertices()},t.prototype.show=function(){},t.prototype.hide=function(){},t.prototype.reset=function(){this.graphic=null},r([s.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),r([s.property({value:null})],t.prototype,"graphic",null),r([s.property({readOnly:!0})],t.prototype,"type",void 0),r([s.property({value:null})],t.prototype,"cursor",void 0),t=r([s.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool")],t)}(s.declared(d,i));t.GraphicReshape3DTool=g});
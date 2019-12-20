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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Evented","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","./isSupportedGraphic","./ReshapeOperation","./reshapeUtils","../../../../interactive/InteractiveToolBase"],function(e,t,r,i,o,a,p,n,s,h,c,l,d){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t){var r=e.call(this,t)||this;return r._handles=new a,r._reshapeOperation=null,r._internalGeometryUpdate=!1,r.type="reshape-3d",r._emitter.target=null,r}return i(t,e),t.prototype.destroy=function(){this._handles.removeAll(),this._reshapeOperation&&(this._reshapeOperation.destroy(),this._reshapeOperation=null),this._set("view",null),this._set("graphic",null)},t.prototype._updateGeometry=function(){0===h.isSupportedGraphic(this.graphic)&&l.isReshapeGeometry(this.graphic.geometry)?this._reshapeOperation.inputGeometry=this.graphic.geometry.clone():this._reshapeOperation.inputGeometry=null},t.prototype._updateGraphic=function(){var e=this;if(this._handles.remove("onGraphicGeometryChange"),this._updateGeometry(),0===h.isSupportedGraphic(this.graphic)){var t=this.watch("graphic.geometry",function(){!1===e._internalGeometryUpdate&&e._updateGeometry()},!0);this._handles.add(t,"onGraphicGeometryChange")}},t.prototype.manipulatorSelectionChanged=function(){this._reshapeOperation&&this._reshapeOperation.manipulatorSelectionChanged()},t.prototype._onReshapeGeometryChanged=function(){p.isNone(this.graphic)||(this._internalGeometryUpdate=!0,this.graphic.geometry=this._reshapeOperation.outputGeometry.clone(),this._internalGeometryUpdate=!1)},t.prototype.initialize=function(){var e=this;this._reshapeOperation=new c.ReshapeOperation({view:this.view,graphic:this.graphic,manipulators:this.manipulators}),this._handles.add([this._reshapeOperation.on("reshape",function(t){"reshape"===t.type&&e._onReshapeGeometryChanged(),e.emit("reshape",t)}),this._reshapeOperation.on("move",function(t){"move"===t.type&&e._onReshapeGeometryChanged(),e.emit("move",t)}),this._reshapeOperation.on("vertex-add",function(t){e._onReshapeGeometryChanged(),e.emit("vertex-add",t)}),this._reshapeOperation.on("vertex-remove",function(t){e._onReshapeGeometryChanged(),e.emit("vertex-remove",t)}),this._reshapeOperation.on("immediate-click",function(){return e.emit("immediate-click")}),n.init(this,"graphic",function(){e._updateGraphic()},!0)])},t.prototype.handleInputEvent=function(e){"key-down"!==e.type||"Delete"!==e.key&&"Backspace"!==e.key||this._reshapeOperation.removeSelectedVertices()},t.prototype.reset=function(){},r([s.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),r([s.property({constructOnly:!0})],t.prototype,"graphic",void 0),r([s.property({readOnly:!0})],t.prototype,"type",void 0),t=r([s.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshape3DTool")],t)}(s.declared(o.EventedMixin(d.InteractiveToolBase)));t.GraphicReshape3DTool=u});
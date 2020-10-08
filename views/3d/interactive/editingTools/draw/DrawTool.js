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

define(["require","exports","tslib","../../../../../core/Evented","../../../../../core/maybe","../../../../../core/accessorSupport/decorators","./DrawOperation","./drawSurfaces","../../../../interactive/InteractiveToolBase"],(function(e,t,o,r,n,i,a,p,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DrawTool=void 0;var c=function(e){function t(t){var o=e.call(this,t)||this;return o.drawOperation=null,o.hasZ=!0,o.defaultZ=0,o.elevationInfo=null,o.snapToScene=null,o.mode="hybrid",o.geometryType=null,o.type="draw-3d",o}return o.__extends(t,e),t.prototype.initialize=function(){var e=this,t=n.unwrapOr(this.elevationInfo,{mode:this.hasZ?"absolute-height":"on-the-ground",offset:0});this.drawOperation=new a.DrawOperation({view:this.view,manipulators:this.manipulators,geometryType:this.geometryType,drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snappingEnabled:this.snapToScene,snappingDrawSurface:new p.SceneDrawSurface(this.view,t),hasM:!1,elevationInfo:t}),this.drawOperation.on("vertex-add",(function(t){return e.onVertexAdd(t)})),this.drawOperation.on("vertex-remove",(function(t){return e.onVertexRemove(t)})),this.drawOperation.on("vertex-update",(function(t){return e.onVertexUpdate(t)})),this.drawOperation.on("cursor-update",(function(t){return e.onCursorUpdate(t)})),this.drawOperation.on("complete",(function(t){return e.onComplete(t)}))},t.prototype.destroy=function(){this.drawOperation.destroy(),this.drawOperation=null,this._set("view",null)},t.prototype.onInputEvent=function(e){this.drawOperation.onInputEvent(e)},Object.defineProperty(t.prototype,"enabled",{set:function(e){this.drawOperation.interactive=e,this._set("enabled",e)},enumerable:!1,configurable:!0}),t.prototype.reset=function(){},Object.defineProperty(t.prototype,"canRedo",{get:function(){return this.drawOperation.canRedo},enumerable:!1,configurable:!0}),t.prototype.redo=function(){this.drawOperation.redo()},Object.defineProperty(t.prototype,"canUndo",{get:function(){return this.drawOperation.canUndo},enumerable:!1,configurable:!0}),t.prototype.undo=function(){this.drawOperation.undo()},t.prototype.completeCreateOperation=function(){this.drawOperation.complete()},t.prototype.activate=function(){},t.prototype.deactivate=function(){this.drawOperation.isCompleted||this.drawOperation.cancel()},t.prototype.getVertexCoords=function(){return this.drawOperation.vertices},t.prototype.onVertexAdd=function(e){this.emit("vertex-add",e)},t.prototype.onVertexRemove=function(e){this.emit("vertex-remove",e)},t.prototype.onVertexUpdate=function(e){this.emit("vertex-update",e)},t.prototype.onCursorUpdate=function(e){this.emit("cursor-update",e)},t.prototype.onComplete=function(e){this.emit("complete",e)},o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],t.prototype,"view",void 0),o.__decorate([i.property({value:!0})],t.prototype,"enabled",null),o.__decorate([i.property({constructOnly:!0})],t.prototype,"hasZ",void 0),o.__decorate([i.property({constructOnly:!0,nonNullable:!0})],t.prototype,"defaultZ",void 0),o.__decorate([i.property({constructOnly:!0})],t.prototype,"elevationInfo",void 0),o.__decorate([i.property()],t.prototype,"snapToScene",void 0),o.__decorate([i.property({constructOnly:!0})],t.prototype,"mode",void 0),o.__decorate([i.property({constructOnly:!0})],t.prototype,"geometryType",void 0),o.__decorate([i.property({readOnly:!0})],t.prototype,"type",void 0),t=o.__decorate([i.subclass("esri.views.3d.interactive.editingTools.draw.DrawTool")],t)}(r.EventedMixin(d.InteractiveToolBase));t.DrawTool=c}));
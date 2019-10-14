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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/restHelper","../../../../../core/Handles","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","./DirectLineMeasurement3DController","./DirectLineMeasurement3DModel","./DirectLineMeasurement3DView","../../../../interactive/InteractiveToolBase","../../../../interactive/interactiveToolUtils"],function(e,t,i,o,r,n,s,a,l,d,p,u,c){return function(e){function t(t){var i=e.call(this,t)||this;return i.startManipulator=null,i.endManipulator=null,i.model=new d({sceneView:t.view}),i}return i(t,e),t.prototype.normalizeCtorArgs=function(e){e.view;return r(e,["view"])},t.prototype.initialize=function(){var e=this;this._view=new p(this.model),this._controller=new l(this.model,this._view),this._handles=new n,this._handles.add([s.init(this,"state",function(){"measured"===e.state&&c.setActive(e,!1)},!0)]);var t=this._view.createManipulators();this._controller.setup(t),this.manipulators.add(t.start),this.manipulators.add(t.end),this.startManipulator=t.start,this.endManipulator=t.end},t.prototype.destroy=function(){this._view.destroy(),this._view=null,this._controller.destroy(),this._controller=null,this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.model.isMeasuring?"measured"===this.model.state?"measured":"measuring":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{get:function(){return!this.model.active||"drawing"!==this.model.state&&"initial"!==this.model.state?null:"crosshair"},enumerable:!0,configurable:!0}),t.prototype.newMeasurement=function(){this.model.reset(),c.setActive(this,!0)},t.prototype.clearMeasurement=function(){this.model.reset(),c.setActive(this,!1)},t.prototype.activate=function(){this.model.active=!0},t.prototype.deactivate=function(){this.model.active=!1,"measured"!==this.model.state&&this.model.reset()},t.prototype.onDetach=function(){this.model.reset()},t.prototype.onShow=function(){this._view.show(),this._updateManipulatorVisibility()},t.prototype.onHide=function(){this._view.hide()},t.prototype.onInputEvent=function(e){this._controller.handleInputEvent(e,{start:this.startManipulator,end:this.endManipulator}),this._updateManipulatorVisibility()},t.prototype._updateManipulatorVisibility=function(){this.startManipulator.visible=null!=this.model.startPoint,this.endManipulator.visible=null!=this.model.endPoint},o([a.property({dependsOn:["model.isMeasuring","model.state"],readOnly:!0})],t.prototype,"state",null),o([a.property({dependsOn:["view.type"],readOnly:!0})],t.prototype,"isSupported",null),o([a.property({dependsOn:["model.active","model.state"],readOnly:!0})],t.prototype,"cursor",null),o([a.property({constructOnly:!0})],t.prototype,"model",void 0),o([a.aliasOf("model.sceneView")],t.prototype,"view",void 0),o([a.aliasOf("model.mode")],t.prototype,"mode",void 0),o([a.aliasOf("model.unit")],t.prototype,"unit",void 0),o([a.aliasOf("model.directDistance")],t.prototype,"directDistance",void 0),o([a.aliasOf("model.validMeasurement")],t.prototype,"validMeasurement",void 0),o([a.aliasOf("model.horizontalDistance")],t.prototype,"horizontalDistance",void 0),o([a.aliasOf("model.verticalDistance")],t.prototype,"verticalDistance",void 0),o([a.aliasOf("model.geodesicDistance")],t.prototype,"geodesicDistance",void 0),o([a.aliasOf("model.geodesicAngle")],t.prototype,"geodesicAngle",void 0),o([a.aliasOf("model.triangleView")],t.prototype,"triangleView",void 0),t=o([a.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],t)}(a.declared(u.InteractiveToolBase))});
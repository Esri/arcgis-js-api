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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/restHelper","../../../../../core/Handles","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","./AreaMeasurement3DController","./AreaMeasurement3DModel","./AreaMeasurement3DView","../../../../interactive/InteractiveToolBase"],function(e,t,o,r,i,a,n,s,l,p,d,c){return function(e){function t(t){var o=e.call(this,t)||this;return o._handles=new a,o.deferCreation=!0,o.model=new p({sceneView:t.view}),o}return o(t,e),t.prototype.normalizeCtorArgs=function(e){e.view;return i(e,["view"])},t.prototype.initialize=function(){var e=this;this._view=new d(this.model,this.manipulators),this._controller=new l(this.model,this._view,this.manipulators),this._handles.add(n.init(this,"state",function(t){switch(t){case"measured":return e.complete();case"ready":return;default:return e.create()}},!0))},t.prototype.destroy=function(){this.detach(),this._view.destroy(),this._view=null,this._controller.destroy(),this._controller=null,this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.model.isMeasuring?"measured"===this.model.state?"measured":"measuring":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSupported",{get:function(){return"3d"===this.get("view.type")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{get:function(){return!this.model.active||"initial"!==this.model.state&&"drawing"!==this.model.state?null:"crosshair"},enumerable:!0,configurable:!0}),t.prototype.activate=function(){this.model.active=!0},t.prototype.deactivate=function(){this.model.active=!1},t.prototype.onShow=function(){this._view.show()},t.prototype.onHide=function(){this._view.hide()},t.prototype.onDetach=function(){this.model.reset()},t.prototype.onInputEvent=function(e){this._controller.handleInputEvent(e)},r([s.property({dependsOn:["model.isMeasuring","model.state"],readOnly:!0})],t.prototype,"state",null),r([s.property({dependsOn:["view.type"],readOnly:!0})],t.prototype,"isSupported",null),r([s.property({dependsOn:["model.active","state"],readOnly:!0})],t.prototype,"cursor",null),r([s.property({constructOnly:!0})],t.prototype,"model",void 0),r([s.aliasOf("model.sceneView")],t.prototype,"view",void 0),r([s.aliasOf("model.mode")],t.prototype,"mode",void 0),r([s.aliasOf("model.unit")],t.prototype,"unit",void 0),r([s.aliasOf("model.areaLabel")],t.prototype,"areaLabel",void 0),r([s.aliasOf("model.area")],t.prototype,"area",void 0),r([s.aliasOf("model.geodesicArea")],t.prototype,"geodesicArea",void 0),r([s.aliasOf("model.pathLengthLabel")],t.prototype,"pathLengthLabel",void 0),r([s.aliasOf("model.pathLength")],t.prototype,"pathLength",void 0),r([s.aliasOf("model.geodesicPathLength")],t.prototype,"geodesicPathLength",void 0),r([s.aliasOf("model.perimeterLengthLabel")],t.prototype,"perimeterLengthLabel",void 0),r([s.aliasOf("model.perimeterLength")],t.prototype,"perimeterLength",void 0),r([s.aliasOf("model.geodesicPerimeterLength")],t.prototype,"geodesicPerimeterLength",void 0),r([s.aliasOf("model.validMeasurement")],t.prototype,"validMeasurement",void 0),r([s.aliasOf("model.viewData")],t.prototype,"viewData",void 0),t=r([s.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],t)}(s.declared(c.InteractiveToolBase))});
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/accessorSupport/decorators","../../InteractiveTool","./AreaMeasurement3DController","./AreaMeasurement3DModel","./AreaMeasurement3DView"],function(e,t,o,i,r,a,s,l,p){return function(e){function t(t){var o=e.call(this,t)||this,i=new l({sceneView:t.view});return o._set("model",i),o}return o(t,e),t.prototype.initialize=function(){this._view=new p(this.model,this.view),this._controller=new s(this.model,this._view)},t.prototype.destroy=function(){this.stop()},t.prototype.activate=function(){this._controller.activate(this.view),this._view.show()},t.prototype.deactivate=function(){this._controller.deactivate(),this._view.hide()},t.prototype.reset=function(){this.model.reset()},t.prototype.clearMeasurement=function(){this.model.clearMeasurement()},i([r.property({readOnly:!0})],t.prototype,"model",void 0),i([r.aliasOf("model.mode")],t.prototype,"mode",void 0),i([r.aliasOf("model.unit")],t.prototype,"unit",void 0),i([r.aliasOf("model.areaLabel")],t.prototype,"areaLabel",void 0),i([r.aliasOf("model.area")],t.prototype,"area",void 0),i([r.aliasOf("model.geodesicArea")],t.prototype,"geodesicArea",void 0),i([r.aliasOf("model.pathLengthLabel")],t.prototype,"pathLengthLabel",void 0),i([r.aliasOf("model.pathLength")],t.prototype,"pathLength",void 0),i([r.aliasOf("model.geodesicPathLength")],t.prototype,"geodesicPathLength",void 0),i([r.aliasOf("model.perimeterLengthLabel")],t.prototype,"perimeterLengthLabel",void 0),i([r.aliasOf("model.perimeterLength")],t.prototype,"perimeterLength",void 0),i([r.aliasOf("model.geodesicPerimeterLength")],t.prototype,"geodesicPerimeterLength",void 0),i([r.aliasOf("model.isMeasuring")],t.prototype,"isMeasuring",void 0),i([r.aliasOf("model.validMeasurement")],t.prototype,"validMeasurement",void 0),i([r.aliasOf("model.viewData")],t.prototype,"viewData",void 0),t=i([r.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],t)}(r.declared(a))});
// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/accessorSupport/decorators","../../InteractiveTool","./PointToPointMeasurementModel","./PointToPointMeasurementView","./PointToPointMeasurementController","./PointToPointMeasurementInputHandler"],function(e,t,o,i,n,r,s,a,l,d){var p=function(e){function t(t){var o=e.call(this,t)||this,i=new s({sceneView:t.view});return o._set("model",i),o}return o(t,e),t.prototype.initialize=function(){this._view=new a(this.model,this.view),this._controller=new l(this.model,this._view)},t.prototype.destroy=function(){this.stop()},t.prototype.activate=function(e){e.installHandlers("measure-distance-tool",[new d(this,this._controller)]),this._view.show()},t.prototype.deactivate=function(e){e&&e.uninstallHandlers("measure-distance-tool"),this._view.hide()},t.prototype.reset=function(){this.model.reset()},t.prototype.clearMeasurement=function(){this.model.clearMeasurement()},i([n.property({type:s,readOnly:!0})],t.prototype,"model",void 0),i([n.aliasOf("model.mode")],t.prototype,"mode",void 0),i([n.aliasOf("model.unit")],t.prototype,"unit",void 0),i([n.aliasOf("model.directDistance")],t.prototype,"directDistance",void 0),i([n.aliasOf("model.isMeasuring")],t.prototype,"isMeasuring",void 0),i([n.aliasOf("model.validMeasurement")],t.prototype,"validMeasurement",void 0),i([n.aliasOf("model.horizontalDistance")],t.prototype,"horizontalDistance",void 0),i([n.aliasOf("model.verticalDistance")],t.prototype,"verticalDistance",void 0),i([n.aliasOf("model.geodesicDistance")],t.prototype,"geodesicDistance",void 0),i([n.aliasOf("model.geodesicAngle")],t.prototype,"geodesicAngle",void 0),i([n.aliasOf("model.triangleView")],t.prototype,"triangleView",void 0),t=i([n.subclass("esri.views.3d.interactive.measurementTools.pointToPoint.PointToPointMeasurementTool")],t)}(n.declared(r));return p});
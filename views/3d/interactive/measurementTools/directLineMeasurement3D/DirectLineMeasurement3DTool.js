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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/accessorSupport/decorators","../../InteractiveTool","./DirectLineMeasurement3DController","./DirectLineMeasurement3DModel","./DirectLineMeasurement3DView"],function(e,t,i,o,r,s,a,n,l){return function(e){function t(t){var i=e.call(this,t)||this,o=new n({sceneView:t.view});return i._set("model",o),i}return i(t,e),t.prototype.initialize=function(){this._view=new l(this.model,this.view),this._controller=new a(this.model,this._view)},t.prototype.destroy=function(){this.stop()},t.prototype.activate=function(){this._controller.activate(this.view),this._view.show()},t.prototype.deactivate=function(){this._controller.deactivate(),this._view.hide()},t.prototype.reset=function(){this.model.reset()},t.prototype.clearMeasurement=function(){this.model.clearMeasurement()},o([r.property({readOnly:!0})],t.prototype,"model",void 0),o([r.aliasOf("model.mode")],t.prototype,"mode",void 0),o([r.aliasOf("model.unit")],t.prototype,"unit",void 0),o([r.aliasOf("model.directDistance")],t.prototype,"directDistance",void 0),o([r.aliasOf("model.isMeasuring")],t.prototype,"isMeasuring",void 0),o([r.aliasOf("model.validMeasurement")],t.prototype,"validMeasurement",void 0),o([r.aliasOf("model.horizontalDistance")],t.prototype,"horizontalDistance",void 0),o([r.aliasOf("model.verticalDistance")],t.prototype,"verticalDistance",void 0),o([r.aliasOf("model.geodesicDistance")],t.prototype,"geodesicDistance",void 0),o([r.aliasOf("model.geodesicAngle")],t.prototype,"geodesicAngle",void 0),o([r.aliasOf("model.triangleView")],t.prototype,"triangleView",void 0),t=o([r.subclass("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],t)}(r.declared(s))});
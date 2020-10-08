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

define(["require","exports","tslib","../../core/Handles","../../core/Logger","../../core/promiseUtils","../../core/unitUtils","../../core/watchUtils","../../core/accessorSupport/decorators","./DistanceMeasurement2DTool","../support/commonProperties","../support/InteractiveToolViewModel"],(function(e,t,r,o,i,n,s,a,l,p,u,d){"use strict";var c={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,1],pathSecondaryColor:[255,255,255,1]},h=i.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");return function(e){function t(t){var r=e.call(this,t)||this;return r.supportedViewType="2d",r._handles=new o,r.geodesicDistanceThreshold=1e5,r.measurement=null,r.measurementLabel=null,r.palette=c,r.tool=null,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([a.init(this,["unit","palette","geodesicDistanceThreshold"],(function(t,r,o){e.tool&&(e.tool[o]=t)}))])},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},Object.defineProperty(t.prototype,"state",{get:function(){var e;return this.isDisabled?"disabled":p.isSupported(null===(e=this.view)||void 0===e?void 0:e.spatialReference)?this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready":"disabled"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unitOptions",{get:function(){return s.measurementLengthUnits},set:function(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")},enumerable:!1,configurable:!0}),t.prototype.start=function(){return this.createTool()},t.prototype.clear=function(){this.removeTool()},t.prototype.newMeasurement=function(){n.ignoreAbortErrors(this.start())},t.prototype.clearMeasurement=function(){this.clear()},t.prototype.createToolParams=function(){var e=this;return{toolConstructor:p.default,constructorArguments:function(){return{geodesicDistanceThreshold:e.geodesicDistanceThreshold,palette:e.palette,unit:e.unit}}}},t.prototype.logUnsupportedError=function(){h.error("DistanceMeasurement2D widget is not implemented for SceneView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];h.error.apply(h,e)},t.prototype._validateUnit=function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},t.prototype._validateUnits=function(e){void 0===e&&(e=[]);var t=e.filter((function(e){return-1!==s.measurementLengthUnits.indexOf(e)}));return 0===t.length?s.measurementLengthUnits.slice():t},r.__decorate([l.property(u.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),r.__decorate([l.property({type:Number})],t.prototype,"geodesicDistanceThreshold",void 0),r.__decorate([l.property({readOnly:!0,aliasOf:"tool.measurement"})],t.prototype,"measurement",void 0),r.__decorate([l.property({readOnly:!0,aliasOf:"tool.measurementLabel"})],t.prototype,"measurementLabel",void 0),r.__decorate([l.property()],t.prototype,"palette",void 0),r.__decorate([l.property({dependsOn:["isDisabled","measurement","tool.active","view.spatialReference"],readOnly:!0})],t.prototype,"state",null),r.__decorate([l.property({constructOnly:!0,readOnly:!0})],t.prototype,"tool",void 0),r.__decorate([l.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],t.prototype,"unit",null),r.__decorate([l.property({type:[String]})],t.prototype,"unitOptions",null),t=r.__decorate([l.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],t)}(d.InteractiveToolViewModel)}));
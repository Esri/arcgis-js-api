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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Logger","../../core/promiseUtils","../../core/unitFormatUtils","../../core/unitUtils","../../core/unitUtils","../../core/accessorSupport/decorators","./DistanceMeasurement2DTool","../support/commonProperties","../support/InteractiveToolViewModel"],(function(e,t,r,n,o,i,s,a,u,p,l,c,d){var m={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,1],pathSecondaryColor:[255,255,255,1]},h=o.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");return function(e){function t(t){var r=e.call(this,t)||this;return r.supportedViewType="2d",r.geodesicDistanceThreshold=1e5,r.measurement=null,r.palette=m,r.tool=null,r}return r(t,e),Object.defineProperty(t.prototype,"measurementLabel",{get:function(){if(!this.measurement)return null;switch(this.unit){case"metric":return s.formatMetricLength(this.measurement.length,"meters");case"imperial":return s.formatImperialLength(this.measurement.length,"meters");default:var e=a.convertUnit(this.measurement.length,"meters",this.unit);return s.formatDecimal(e,this.unit)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.isDisabled?"disabled":l.isProjectionEngineRequired(this.view)&&!l.isProjectionEngineSupported()?"disabled":this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unitOptions",{get:function(){return u.measurementLengthUnits},set:function(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")},enumerable:!0,configurable:!0}),t.prototype.newMeasurement=function(){i.ignoreAbortErrors(this.createTool())},t.prototype.clearMeasurement=function(){this.removeTool()},t.prototype.createToolParams=function(){return{toolConstructor:l,constructorArguments:{viewModel:this}}},t.prototype.logUnsupportedError=function(){h.error("DistanceMeasurement2D widget is not implemented for SceneView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];h.error.apply(h,e)},t.prototype._validateUnit=function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},t.prototype._validateUnits=function(e){void 0===e&&(e=[]);var t=e.filter((function(e){return-1!==u.measurementLengthUnits.indexOf(e)}));return 0===t.length?u.measurementLengthUnits.slice():t},n([p.property(c.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),n([p.property({type:Number})],t.prototype,"geodesicDistanceThreshold",void 0),n([p.property()],t.prototype,"measurement",void 0),n([p.property({dependsOn:["measurement","unit","geodesicDistanceThreshold"],readOnly:!0})],t.prototype,"measurementLabel",null),n([p.property()],t.prototype,"palette",void 0),n([p.property({dependsOn:["isDisabled","measurement","tool.active","view.spatialReference"],readOnly:!0})],t.prototype,"state",null),n([p.property({constructOnly:!0,readOnly:!0})],t.prototype,"tool",void 0),n([p.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],t.prototype,"unit",null),n([p.property({type:[String]})],t.prototype,"unitOptions",null),t=n([p.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],t)}(p.declared(d.InteractiveToolViewModel))}));
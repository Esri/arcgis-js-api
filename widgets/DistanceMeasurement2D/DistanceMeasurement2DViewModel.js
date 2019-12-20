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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Logger","../../core/unitFormatUtils","../../core/unitUtils","../../core/unitUtils","../../core/accessorSupport/decorators","./DistanceMeasurement2DTool","../support/commonProperties","../support/InteractiveToolViewModel"],function(e,t,r,n,i,o,s,a,u,p,l,d){var c={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,1],pathSecondaryColor:[255,255,255,1]},m=i.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");return function(e){function t(t){var r=e.call(this,t)||this;return r.supportedViewType="2d",r.geodesicDistanceThreshold=1e5,r.measurement=null,r.palette=c,r.tool=null,r}return r(t,e),Object.defineProperty(t.prototype,"measurementLabel",{get:function(){if(!this.measurement)return null;switch(this.unit){case"metric":return o.formatMetricLength(this.measurement.length,"meters");case"imperial":return o.formatImperialLength(this.measurement.length,"meters");default:var e=s.convertUnit(this.measurement.length,"meters",this.unit);return o.formatDecimal(e,this.unit)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.isDisabled?"disabled":p.isProjectionEngineRequired(this.view)&&!p.isProjectionEngineSupported()?"disabled":this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){if(void 0===e)return void this._clearOverride("unit");this._override("unit",this._validateUnit(e))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unitOptions",{get:function(){return a.measurementLengthUnits},set:function(e){if(void 0===e)return void this._clearOverride("unitOptions");this._override("unitOptions",this._validateUnits(e))},enumerable:!0,configurable:!0}),t.prototype.newMeasurement=function(){this.createTool()},t.prototype.clearMeasurement=function(){this.removeTool()},t.prototype.createToolParams=function(){return{toolConstructor:p,constructorArguments:{viewModel:this}}},t.prototype.logUnsupportedError=function(){m.error("DistanceMeasurement2D widget is not implemented for SceneView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];m.error.apply(m,e)},t.prototype._validateUnit=function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},t.prototype._validateUnits=function(e){void 0===e&&(e=[]);var t=e.filter(function(e){return-1!==a.measurementLengthUnits.indexOf(e)});return 0===t.length?a.measurementLengthUnits.slice():t},n([u.property(l.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),n([u.property({type:Number})],t.prototype,"geodesicDistanceThreshold",void 0),n([u.property()],t.prototype,"measurement",void 0),n([u.property({dependsOn:["measurement","unit","geodesicDistanceThreshold"],readOnly:!0})],t.prototype,"measurementLabel",null),n([u.property()],t.prototype,"palette",void 0),n([u.property({dependsOn:["isDisabled","measurement","tool.active","view.spatialReference"],readOnly:!0})],t.prototype,"state",null),n([u.property({constructOnly:!0,readOnly:!0})],t.prototype,"tool",void 0),n([u.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],t.prototype,"unit",null),n([u.property({type:[String]})],t.prototype,"unitOptions",null),t=n([u.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],t)}(u.declared(d.InteractiveToolViewModel))});
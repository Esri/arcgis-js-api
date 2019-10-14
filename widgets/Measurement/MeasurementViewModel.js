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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/unitUtils","../../core/accessorSupport/decorators","../support/commonProperties"],function(e,t,r,i,o,n,a,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.activeTool=null,r.activeViewModel=null,r.view=null,r}return r(t,e),Object.defineProperty(t.prototype,"areaUnit",{get:function(){return this.defaultUnit},set:function(e){if(void 0===e)return void this._clearOverride("areaUnit");this._override("areaUnit",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"linearUnit",{get:function(){return this.defaultUnit},set:function(e){if(void 0===e)return void this._clearOverride("linearUnit");this._override("linearUnit",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.activeViewModel;return e?e.state:"disabled"},enumerable:!0,configurable:!0}),i([a.property({type:["area","distance","direct-line"]})],t.prototype,"activeTool",void 0),i([a.property()],t.prototype,"activeViewModel",void 0),i([a.property({type:n.measurementAreaUnits,dependsOn:["defaultUnit"]})],t.prototype,"areaUnit",null),i([a.property(p.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),i([a.property({type:n.measurementLengthUnits,dependsOn:["defaultUnit"]})],t.prototype,"linearUnit",null),i([a.property({dependsOn:["activeViewModel","activeViewModel.state"],readOnly:!0})],t.prototype,"state",null),i([a.property()],t.prototype,"view",void 0),t=i([a.subclass("esri.widgets.Measurement.MeasurementViewModel")],t)}(a.declared(o))});
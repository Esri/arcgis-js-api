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

define(["require","exports","tslib","../../core/Accessor","../../core/unitUtils","../../core/accessorSupport/decorators","../support/commonProperties"],(function(e,t,r,i,o,n,a){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.activeTool=null,r.activeViewModel=null,r.view=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"areaUnit",{get:function(){return this.defaultUnit},set:function(e){void 0!==e?this._override("areaUnit",e):this._clearOverride("areaUnit")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"linearUnit",{get:function(){return this.defaultUnit},set:function(e){void 0!==e?this._override("linearUnit",e):this._clearOverride("linearUnit")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.activeViewModel;return e?e.state:"disabled"},enumerable:!1,configurable:!0}),r.__decorate([n.property({type:["area","distance","direct-line"]})],t.prototype,"activeTool",void 0),r.__decorate([n.property()],t.prototype,"activeViewModel",void 0),r.__decorate([n.property({type:o.measurementAreaUnits,dependsOn:["defaultUnit"]})],t.prototype,"areaUnit",null),r.__decorate([n.property(a.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),r.__decorate([n.property({type:o.measurementLengthUnits,dependsOn:["defaultUnit"]})],t.prototype,"linearUnit",null),r.__decorate([n.property({dependsOn:["activeViewModel","activeViewModel.state"],readOnly:!0})],t.prototype,"state",null),r.__decorate([n.property()],t.prototype,"view",void 0),t=r.__decorate([n.subclass("esri.widgets.Measurement.MeasurementViewModel")],t)}(i)}));
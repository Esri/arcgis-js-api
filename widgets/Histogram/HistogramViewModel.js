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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/maybe","../../core/accessorSupport/decorators"],function(e,r,t,n,o,p,a){return function(e){function r(r){var t=e.call(this,r)||this;return t.average=null,t.bins=null,t.max=null,t.min=null,t}return t(r,e),Object.defineProperty(r.prototype,"binRange",{get:function(){var e=this.bins;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"labelFormatFunction",{set:function(e){this._set("labelFormatFunction",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"range",{get:function(){var e=this,r=e.max,t=e.min;return p.isSome(r)&&p.isSome(t)?r-t:0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"state",{get:function(){var e=this,r=e.bins;return e.range>0&&r&&r.length?"ready":"disabled"},enumerable:!0,configurable:!0}),n([a.property()],r.prototype,"average",void 0),n([a.property()],r.prototype,"bins",void 0),n([a.property({dependsOn:["bins"],readOnly:!0})],r.prototype,"binRange",null),n([a.property()],r.prototype,"labelFormatFunction",null),n([a.property()],r.prototype,"max",void 0),n([a.property()],r.prototype,"min",void 0),n([a.property({dependsOn:["max","min"],readOnly:!0})],r.prototype,"range",null),n([a.property({dependsOn:["max","min","bins"],readOnly:!0})],r.prototype,"state",null),r=n([a.subclass("esri.widgets.Histogram.HistogramViewModel")],r)}(a.declared(o))});
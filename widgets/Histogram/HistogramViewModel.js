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

define(["require","exports","tslib","../../core/Accessor","../../core/maybe","../../core/accessorSupport/decorators"],(function(e,t,r,o,n,a){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.average=null,r.bins=null,r.max=null,r.min=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"binRange",{get:function(){var e=this.bins;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"labelFormatFunction",{set:function(e){this._set("labelFormatFunction",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"range",{get:function(){var e=this.max,t=this.min;return n.isSome(e)&&n.isSome(t)?e-t:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this.bins;return this.range>0&&e&&e.length?"ready":"disabled"},enumerable:!1,configurable:!0}),r.__decorate([a.property()],t.prototype,"average",void 0),r.__decorate([a.property()],t.prototype,"bins",void 0),r.__decorate([a.property({dependsOn:["bins"],readOnly:!0})],t.prototype,"binRange",null),r.__decorate([a.property()],t.prototype,"labelFormatFunction",null),r.__decorate([a.property()],t.prototype,"max",void 0),r.__decorate([a.property()],t.prototype,"min",void 0),r.__decorate([a.property({dependsOn:["max","min"],readOnly:!0})],t.prototype,"range",null),r.__decorate([a.property({dependsOn:["max","min","bins"],readOnly:!0})],t.prototype,"state",null),t=r.__decorate([a.subclass("esri.widgets.Histogram.HistogramViewModel")],t)}(o)}));
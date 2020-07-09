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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,r,a,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mode="auto",t}return r.__extends(t,e),Object.defineProperty(t.prototype,"near",{get:function(){return this._get("near")},set:function(e){this._set("near",e),e>=this._get("far")&&(this.far=e+1e-9),this.mode="manual"},enumerable:!0,configurable:!0}),t.prototype.castNear=function(e){return Math.max(1e-8,e)},Object.defineProperty(t.prototype,"far",{get:function(){return this._get("far")},set:function(e){this._set("far",e),e<=this._get("near")&&(this.near=e-1e-9),this.mode="manual"},enumerable:!0,configurable:!0}),t.prototype.castFar=function(e){return Math.max(1e-8,e)},t.prototype.autoUpdate=function(e,t){"auto"===this.mode&&(this._get("near")!==e&&this._set("near",e),this._get("far")!==t&&this._set("far",t))},r.__decorate([o.property({type:Number,value:1e-8})],t.prototype,"near",null),r.__decorate([o.cast("near")],t.prototype,"castNear",null),r.__decorate([o.property({type:Number,value:1e-8})],t.prototype,"far",null),r.__decorate([o.cast("far")],t.prototype,"castFar",null),r.__decorate([o.property({type:["auto","manual"]})],t.prototype,"mode",void 0),t=r.__decorate([o.subclass("esri.views.3d.constraints.ClipDistanceConstraint")],t)}(a);t.ClipDistanceConstraint=n,t.default=n}));
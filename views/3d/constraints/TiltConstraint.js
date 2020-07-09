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

define(["require","exports","tslib","../../../core/Accessor","../../../core/mathUtils","../../../core/accessorSupport/decorators","../state/Constraints"],(function(t,e,a,o,r,n,i){Object.defineProperty(e,"__esModule",{value:!0});var s={min:r.rad2deg(i.TiltDefault.min),max:r.rad2deg(i.TiltDefault.max)},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mode="auto",e}return a.__extends(e,t),Object.defineProperty(e.prototype,"max",{get:function(){return this._get("max")},set:function(t){this._set("max",t),this.mode="manual"},enumerable:!0,configurable:!0}),e.prototype.castMax=function(t){return r.clamp(t,s.min,s.max)},e.prototype.autoUpdate=function(t){"auto"===this.mode&&this._get("max")!==t&&this._set("max",t)},a.__decorate([n.property({type:["auto","manual"]})],e.prototype,"mode",void 0),a.__decorate([n.property({type:Number,value:s.max})],e.prototype,"max",null),a.__decorate([n.cast("max")],e.prototype,"castMax",null),e=a.__decorate([n.subclass("esri.views.3d.constraints.TiltConstraint")],e)}(o);e.TiltConstraint=u,e.default=u}));
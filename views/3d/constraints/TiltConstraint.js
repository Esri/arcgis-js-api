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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","../state/Constraints","../support/mathUtils"],function(t,e,r,o,a,n,s,i){Object.defineProperty(e,"__esModule",{value:!0});var p={min:i.rad2deg(s.TiltDefault.min),max:i.rad2deg(s.TiltDefault.max)},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mode="auto",e}return r(e,t),Object.defineProperty(e.prototype,"max",{get:function(){return this._get("max")},set:function(t){this._set("max",t),this.mode="manual"},enumerable:!0,configurable:!0}),e.prototype.castMax=function(t){return i.clamp(t,p.min,p.max)},e.prototype.autoUpdate=function(t){"auto"===this.mode&&this._get("max")!==t&&this._set("max",t)},o([n.property({type:String})],e.prototype,"mode",void 0),o([n.property({type:Number,value:p.max})],e.prototype,"max",null),o([n.cast("max")],e.prototype,"castMax",null),e=o([n.subclass("esri.views.3d.constraints.TiltConstraint")],e)}(n.declared(a));e.TiltConstraint=u,e.default=u});
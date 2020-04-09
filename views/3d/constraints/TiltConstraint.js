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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/mathUtils","../../../core/accessorSupport/decorators","../state/Constraints"],(function(t,e,r,o,a,n,s,i){Object.defineProperty(e,"__esModule",{value:!0});var u={min:n.rad2deg(i.TiltDefault.min),max:n.rad2deg(i.TiltDefault.max)},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mode="auto",e}return r(e,t),Object.defineProperty(e.prototype,"max",{get:function(){return this._get("max")},set:function(t){this._set("max",t),this.mode="manual"},enumerable:!0,configurable:!0}),e.prototype.castMax=function(t){return n.clamp(t,u.min,u.max)},e.prototype.autoUpdate=function(t){"auto"===this.mode&&this._get("max")!==t&&this._set("max",t)},o([s.property({type:["auto","manual"]})],e.prototype,"mode",void 0),o([s.property({type:Number,value:u.max})],e.prototype,"max",null),o([s.cast("max")],e.prototype,"castMax",null),e=o([s.subclass("esri.views.3d.constraints.TiltConstraint")],e)}(s.declared(a));e.TiltConstraint=p,e.default=p}));
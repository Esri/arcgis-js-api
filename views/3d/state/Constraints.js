// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../core/Logger","../support/earthUtils","../support/mathUtils"],function(t,e,i,r,o,n,a,l,u){Object.defineProperty(e,"__esModule",{value:!0});var s=a.getLogger("esri.views.3d.state.Constraints"),p=function(t){function n(e){var i=t.call(this)||this;return i.collision=new d,i.distance=1/0,i.minimumPoiDistance=4,i}return i(n,t),Object.defineProperty(n.prototype,"altitude",{get:function(){return"local"===this.mode?null:this._get("altitude")||null},set:function(t){return"local"===this.mode?void s.warn("Altitude constraint is ignored in local scenes"):void this._set("altitude",t)},enumerable:!0,configurable:!0}),n.prototype.clampAltitude=function(t){return this.altitude?u.clamp(t,this.altitude.min,this.altitude.max):t},n.prototype.clampTilt=function(t,e){if(!this.tilt)return e;var i=this.tilt(t);return u.clamp(e,i.min,i.max)},n.prototype.clampDistance=function(t){return Math.min(t,this.distance)},n.prototype.createDefaultTilt=function(){return"local"===this.mode?this.createDefaultTiltLocal():this.createDefaultTiltGlobal()},n.prototype.createConstantMaxTilt=function(t){return function(i,r){return void 0===r&&(r=c),r.min=e.TiltDefault.min,r.max=t,r}},n.prototype.createDefaultTiltLocal=function(){var t=u.makePiecewiseLinearFunction([[4e3,e.TiltDefault.max],[1e4,u.deg2rad(88)],[6e6,u.deg2rad(88)]]);return function(i,r){return void 0===r&&(r=c),r.min=e.TiltDefault.min,r.max=t(i),r}},n.prototype.createDefaultTiltGlobal=function(){var t=u.makePiecewiseLinearFunction([[4e3,e.TiltDefault.max],[5e4,u.deg2rad(88)],[6e6,u.deg2rad(88)],[2e7,e.TiltDefault.min]]);return function(i,r){return void 0===r&&(r=c),r.min=e.TiltDefault.min,r.max=t(i),r}},r([o.property()],n.prototype,"altitude",null),r([o.property({readOnly:!0})],n.prototype,"collision",void 0),r([o.property()],n.prototype,"distance",void 0),r([o.property({readOnly:!0})],n.prototype,"minimumPoiDistance",void 0),r([o.property()],n.prototype,"tilt",void 0),r([o.property({constructOnly:!0})],n.prototype,"mode",void 0),n=r([o.subclass("esri.views.3d.state.Constraints")],n)}(o.declared(n));e.Constraints=p,e.AltitudeDefault={min:-l.earthRadius,max:4*l.earthRadius},e.TiltDefault={min:u.deg2rad(.5),max:u.deg2rad(179.5)};var c={min:0,max:0},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.elevationMargin=5,e}return i(e,t),r([o.property({type:Boolean})],e.prototype,"enabled",void 0),r([o.property({type:Number})],e.prototype,"elevationMargin",void 0),e=r([o.subclass("esri.views.3d.state.Constraints.CollisionConstraint")],e)}(o.declared(n));e["default"]=p});
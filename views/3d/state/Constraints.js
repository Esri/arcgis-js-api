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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Logger","../../../core/mathUtils","../../../core/mathUtils","../../../core/accessorSupport/decorators","../support/earthUtils","../support/mathUtils"],(function(t,e,i,r,o,n,a,l,u,s){Object.defineProperty(e,"__esModule",{value:!0});var c=o.getLogger("esri.views.3d.state.Constraints"),d=function(t){function r(e){var i=t.call(this,e)||this;return i.collision=new m,i.distance=1/0,i.minimumPoiDistance=4,i}return i.__extends(r,t),Object.defineProperty(r.prototype,"altitude",{get:function(){return"local"===this.mode?null:this._get("altitude")||null},set:function(t){"local"!==this.mode?this._set("altitude",t):c.warn("Altitude constraint is ignored in local scenes")},enumerable:!0,configurable:!0}),r.prototype.clampAltitude=function(t){return this.altitude?n.clamp(t,this.altitude.min,this.altitude.max):t},r.prototype.clampTilt=function(t,e){if(!this.tilt)return e;var i=this.tilt(t);return n.clamp(e,i.min,i.max)},r.prototype.clampDistance=function(t){return Math.min(t,this.distance)},r.prototype.createDefaultTilt=function(){return"local"===this.mode?this.createDefaultTiltLocal():this.createDefaultTiltGlobal()},r.prototype.createConstantMaxTilt=function(t){return function(i,r){return void 0===r&&(r=p),r.min=e.TiltDefault.min,r.max=t,r}},r.prototype.createDefaultTiltLocal=function(){var t=this.collision.enabled?s.makePiecewiseLinearFunction([[4e3,e.TiltDefault.max],[1e4,a.deg2rad(88)],[6e6,a.deg2rad(88)]]):function(){return e.TiltDefault.max};return function(i,r){return void 0===r&&(r=p),r.min=e.TiltDefault.min,r.max=t(i),r}},r.prototype.createDefaultTiltGlobal=function(){var t=this.collision.enabled?s.makePiecewiseLinearFunction([[4e3,e.TiltDefault.max],[5e4,a.deg2rad(88)],[6e6,a.deg2rad(88)],[2e7,e.TiltDefault.min]]):s.makePiecewiseLinearFunction([[3e5,e.TiltDefault.max],[3e6,a.deg2rad(88)],[6e6,a.deg2rad(88)],[2e7,e.TiltDefault.min]]);return function(i,r){return void 0===r&&(r=p),r.min=e.TiltDefault.min,r.max=t(i),r}},i.__decorate([l.property()],r.prototype,"altitude",null),i.__decorate([l.property({readOnly:!0})],r.prototype,"collision",void 0),i.__decorate([l.property()],r.prototype,"distance",void 0),i.__decorate([l.property({readOnly:!0})],r.prototype,"minimumPoiDistance",void 0),i.__decorate([l.property()],r.prototype,"tilt",void 0),i.__decorate([l.property({constructOnly:!0})],r.prototype,"mode",void 0),r=i.__decorate([l.subclass("esri.views.3d.state.Constraints")],r)}(r);e.Constraints=d,e.AltitudeDefault={min:-2e5,max:4*u.earthRadius},e.TiltDefault={min:a.deg2rad(.5),max:a.deg2rad(179.5)};var p={min:0,max:0},m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.elevationMargin=5,e}return i.__extends(e,t),i.__decorate([l.property({type:Boolean})],e.prototype,"enabled",void 0),i.__decorate([l.property({type:Number})],e.prototype,"elevationMargin",void 0),e=i.__decorate([l.subclass("esri.views.3d.state.Constraints.CollisionConstraint")],e)}(r);e.default=d}));
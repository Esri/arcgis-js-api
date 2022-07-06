/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import r from"../../../core/Accessor.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";var s;let a=s=class extends r{constructor(){super(...arguments),this.enabled=!0,this.rotationEnabled=!0}constrain(o,r){return this.enabled&&r?(this.rotationEnabled||(o.rotation=r.rotation),o):o}clone(){return new s({enabled:this.enabled,rotationEnabled:this.rotationEnabled})}};o([t()],a.prototype,"enabled",void 0),o([t()],a.prototype,"rotationEnabled",void 0),a=s=o([e("esri.views.2d.constraints.RotationConstraint")],a);const n=a;export{n as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import s from"../../core/Accessor.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{DurationMode as p}from"./DurationMode.js";let c=class extends s{constructor(){super(...arguments),this.color=new r([0,0,255,.7]),this.mode=p.Continuous}};o([t({type:r})],c.prototype,"color",void 0),o([t()],c.prototype,"mode",void 0),c=o([e("esri.widgets.ShadowCast.DurationOptions")],c);const i=c;export{i as default};

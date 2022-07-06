/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";let t=class extends r{constructor(){super(...arguments),this.alpha=0,this.position=0}};o([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"alpha",void 0),o([s({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"position",void 0),t=o([e("esri.layers.support.VoxelAlphaStop")],t);const p=t;export{p as default};

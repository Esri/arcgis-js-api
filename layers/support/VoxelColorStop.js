/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import{Integer as t}from"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";let i=class extends s{constructor(){super(...arguments),this.color=null,this.position=0}};o([e({type:r,json:{type:[t],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),o([e({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"position",void 0),i=o([p("esri.layers.support.VoxelColorStop")],i);const c=i;export{c as default};

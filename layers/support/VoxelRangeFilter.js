/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let t=class extends o{constructor(){super(...arguments),this.enabled=!1,this.range=null}};r([e({type:Boolean,json:{default:!1,write:!0}})],t.prototype,"enabled",void 0),r([e({type:[Number],json:{write:!0}})],t.prototype,"range",void 0),t=r([s("esri.layers.support.VoxelRangeFilter")],t);const p=t;export{p as default};

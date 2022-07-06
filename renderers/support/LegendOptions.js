/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";var s;let p=s=class extends o{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};r([t({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=r([e("esri.renderers.support.LegendOptions")],p);export{p as LegendOptions};

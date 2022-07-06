/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let p=class extends(o(t)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};r([e({type:String,json:{write:!0}})],p.prototype,"minLabel",void 0),r([e({type:String,json:{write:!0}})],p.prototype,"maxLabel",void 0),r([e({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=r([s("esri.renderers.support.HeatmapLegendOptions")],p);export{p as HeatmapLegendOptions};

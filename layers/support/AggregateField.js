/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"./OutStatistic.js";var i;let p=i=class extends r{constructor(){super(...arguments),this.name=null,this.outStatistic=null}clone(){return new i({name:this.name,outStatistic:this.outStatistic.clone()})}};t([o({type:String,json:{write:!0}})],p.prototype,"name",void 0),t([o({type:e,json:{write:!0}})],p.prototype,"outStatistic",void 0),p=i=t([s("esri.layers.support.AggregateField")],p);const c=p;export{c as default};

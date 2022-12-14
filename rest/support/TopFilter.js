/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends r{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};o([t({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),o([t({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),o([t({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=o([s("esri.rest.support.TopFilter")],p);const i=p;export{i as default};
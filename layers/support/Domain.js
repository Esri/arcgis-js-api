/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONMap as o}from"../../core/jsonMap.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{enumeration as t}from"../../core/accessorSupport/decorators/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";const c=new o({inherited:"inherited",codedValue:"coded-value",range:"range"});let a=class extends e{constructor(r){super(r),this.name=null,this.type=null}};r([s({type:String,json:{write:!0}})],a.prototype,"name",void 0),r([t(c)],a.prototype,"type",void 0),a=r([p("esri.layers.support.Domain")],a);const i=a;export{i as default};

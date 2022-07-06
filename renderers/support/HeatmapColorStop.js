/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import{Integer as e}from"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";var c;let i=c=class extends t{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new c({color:this.color,ratio:this.ratio})}};o([s({type:r,json:{type:[e],default:null,write:!0}})],i.prototype,"color",void 0),o([s({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=c=o([p("esri.renderers.support.HeatmapColorStop")],i);const a=i;export{a as default};

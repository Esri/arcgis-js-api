/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import{Integer as e}from"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";let c=class extends s{constructor(){super(...arguments),this.value=null,this.label=null,this.color=null}};o([t({type:Number,json:{write:!0}})],c.prototype,"value",void 0),o([t({type:String,json:{write:!0}})],c.prototype,"label",void 0),o([t({type:r,json:{type:[e],write:!0}})],c.prototype,"color",void 0),c=o([p("esri.renderers.support.ColormapInfo")],c);const l=c;export{l as default};

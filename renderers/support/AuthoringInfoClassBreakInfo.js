/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";var t;let p=t=class extends e{constructor(r){super(r),this.minValue=0,this.maxValue=0}clone(){return new t({minValue:this.minValue,maxValue:this.maxValue})}};r([o({type:Number,json:{write:!0}})],p.prototype,"minValue",void 0),r([o({type:Number,json:{write:!0}})],p.prototype,"maxValue",void 0),p=t=r([s("esri.renderer.support.AuthoringInfoClassBreakInfo")],p);export{p as AuthoringInfoClassBreakInfo};

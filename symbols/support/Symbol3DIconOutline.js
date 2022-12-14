/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{isSome as t}from"../../core/maybe.js";import{px2pt as e}from"../../core/screenUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{colorAndTransparencyProperty as i,screenSizeProperty as m}from"./materialUtils.js";var l;let a=l=class extends s{constructor(o){super(o),this.color=new r([0,0,0,1]),this.size=e(1)}clone(){const o={color:t(this.color)?this.color.clone():null,size:this.size};return new l(o)}};o([c(i)],a.prototype,"color",void 0),o([c(m)],a.prototype,"size",void 0),a=l=o([p("esri.symbols.support.Symbol3DIconOutline")],a);export{a as Symbol3DIconOutline};
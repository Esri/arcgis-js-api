/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{colorAndTransparencyProperty as c,screenSizeProperty as i}from"./materialUtils.js";var m;let l=m=class extends s{constructor(){super(...arguments),this.color=new r([0,0,0,1]),this.size=0}clone(){const o={color:t(this.color),size:this.size};return new m(o)}};o([e(c)],l.prototype,"color",void 0),o([e(i)],l.prototype,"size",void 0),l=m=o([p("esri.symbols.support.Symbol3DHalo")],l);export{l as Symbol3DHalo};

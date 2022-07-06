/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{colorAndTransparencyProperty as p}from"./materialUtils.js";let c=class extends(r(s)){constructor(o){super(o),this.color=null}};o([t(p)],c.prototype,"color",void 0),c=o([e("esri.symbols.support.Symbol3DTextBackground")],c);export{c as Symbol3DTextBackground};

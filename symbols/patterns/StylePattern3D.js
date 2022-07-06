/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import e from"./Pattern3D.js";import o from"./styles.js";var p;let c=p=class extends e{constructor(s){super(s),this.type="style",this.style="solid"}clone(){const s={style:this.style};return new p(s)}};s([t({type:["style"]})],c.prototype,"type",void 0),s([t({type:o,json:{read:!0,write:!0}})],c.prototype,"style",void 0),c=p=s([r("esri.symbols.patterns.StylePattern3D")],c);const a=c;export{a as default};

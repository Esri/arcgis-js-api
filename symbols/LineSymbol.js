/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{toPt as o}from"../core/screenUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{enumeration as e}from"../core/accessorSupport/decorators/enumeration.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import p from"./Symbol.js";let i=class extends p{constructor(r){super(r),this.type="simple-line",this.width=.75}hash(){return`${this.type}.${this.width}`}};r([e({esriSLS:"simple-line"},{readOnly:!0})],i.prototype,"type",void 0),r([s({type:Number,cast:o,json:{write:!0}})],i.prototype,"width",void 0),i=r([t("esri.symbols.LineSymbol")],i);const c=i;export{c as default};

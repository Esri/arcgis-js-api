/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";var t;let p=t=class extends o{constructor(){super(...arguments),this.url=""}destroy(){this.url=""}clone(){return new t({url:this.url})}};r([s({type:String,json:{write:{isRequired:!0}}})],p.prototype,"url",void 0),p=t=r([e("esri.webdoc.support.SlideThumbnail")],p);export{p as SlideThumbnail};

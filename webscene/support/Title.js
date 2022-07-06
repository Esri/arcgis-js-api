/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";var s;let p=s=class extends t{constructor(){super(...arguments),this.text=""}clone(){return new s({text:this.text})}};r([e({type:String,json:{write:{isRequired:!0}}})],p.prototype,"text",void 0),p=s=r([o("esri.webscene.support.Title")],p);const c=p;export{c as default};

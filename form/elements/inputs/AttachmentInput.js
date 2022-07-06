/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../../core/JSONSupport.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";var s;let p=s=class extends t{constructor(r){super(r),this.type=null}clone(){return new s({type:this.type})}};r([e({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],p.prototype,"type",void 0),p=s=r([o("esri.form.elements.inputs.AttachmentInput")],p);const c=p;export{c as default};

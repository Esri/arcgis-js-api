/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import s from"./Input.js";let e=class extends s{constructor(r){super(r),this.maxLength=null,this.minLength=0}};r([t({type:Number,json:{write:!0}})],e.prototype,"maxLength",void 0),r([t({type:Number,json:{write:!0}})],e.prototype,"minLength",void 0),e=r([o("esri.form.elements.inputs.TextInput")],e);const p=e;export{p as default};

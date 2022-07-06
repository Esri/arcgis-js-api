/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import s from"./TextInput.js";var o;let p=o=class extends s{constructor(r){super(r),this.type="text-area"}clone(){return new o({maxLength:this.maxLength,minLength:this.minLength})}};r([t({type:["text-area"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=o=r([e("esri.form.elements.inputs.TextAreaInput")],p);const a=p;export{a as default};

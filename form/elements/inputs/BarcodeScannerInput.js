/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import t from"./TextInput.js";var o;let c=o=class extends t{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new o({maxLength:this.maxLength,minLength:this.minLength})}};r([e({type:["barcode-scanner"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=o=r([s("esri.form.elements.inputs.BarcodeScannerInput")],c);const p=c;export{p as default};

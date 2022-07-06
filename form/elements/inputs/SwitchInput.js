/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./Input.js";var s;let p=s=class extends e{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new s({offValue:this.offValue,onValue:this.onValue})}};o([r({type:[String,Number],json:{write:!0}})],p.prototype,"offValue",void 0),o([r({type:[String,Number],json:{write:!0}})],p.prototype,"onValue",void 0),o([r({type:["switch"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=s=o([t("esri.form.elements.inputs.SwitchInput")],p);const i=p;export{i as default};

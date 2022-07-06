/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import o from"./ActionBase.js";var r;let e=r=class extends o{constructor(s){super(s),this.image=null,this.type="button"}clone(){return new r({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};s([t()],e.prototype,"image",void 0),e=r=s([i("esri.support.Action.ActionButton")],e);const a=e;export{a as default};

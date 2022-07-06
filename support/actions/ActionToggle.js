/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import i from"./ActionBase.js";var o;let r=o=class extends i{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1}clone(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};s([t()],r.prototype,"image",void 0),s([t()],r.prototype,"value",void 0),r=o=s([e("esri.support.Action.ActionToggle")],r);const a=r;export{a as default};

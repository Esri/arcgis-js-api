/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import o from"./Content.js";var s;let p=s=class extends o{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new s({text:this.text})}};t([r({type:String,json:{write:!0}})],p.prototype,"text",void 0),t([r({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=s=t([e("esri.popup.content.TextContent")],p);const c=p;export{c as default};

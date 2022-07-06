/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as t}from"../../core/lang.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import s from"./Content.js";var p;let c=p=class extends s{constructor(o){super(o),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new p({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?t(this.outFields):null})}};o([r()],c.prototype,"creator",void 0),o([r()],c.prototype,"destroyer",void 0),o([r()],c.prototype,"outFields",void 0),o([r({type:["custom"],readOnly:!0})],c.prototype,"type",void 0),c=p=o([e("esri.popup.content.CustomContent")],c);const i=c;export{i as default};

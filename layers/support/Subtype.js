/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";let s=class extends r{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains={},this.name=null}};o([t({type:Number,json:{write:!0}})],s.prototype,"code",void 0),o([t({type:Object,json:{write:!0}})],s.prototype,"defaultValues",void 0),o([t({type:Object,json:{write:!0}})],s.prototype,"domains",void 0),o([t({type:String,json:{write:!0}})],s.prototype,"name",void 0),s=o([e("esri.layers.support.Subtype")],s);const p=s;export{p as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";var t;let p=t=class extends o{constructor(r){super(r),this.field=null,this.order=null}clone(){return new t({field:this.field,order:this.order})}};r([e({type:String,json:{write:!0}})],p.prototype,"field",void 0),r([e({type:["asc","desc"],json:{write:!0}})],p.prototype,"order",void 0),p=t=r([s("esri.popup.support.RelatedRecordsInfoFieldOrder")],p);const c=p;export{c as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let p=class extends(r(t)){constructor(o){super(o),this.doNotLocateOnRestrictedElements=null,this.url=null}};o([e({type:Boolean,json:{write:!0}})],p.prototype,"doNotLocateOnRestrictedElements",void 0),o([e({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=o([s("esri.rest.support.NetworkUrl")],p);const c=p;export{c as default};

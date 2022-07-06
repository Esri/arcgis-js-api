/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let e=class extends t{constructor(r){super(r),this.itemId=null,this.url=null}};r([o({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),r([o({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=r([s("esri.rest.support.DataFile")],e);const p=e;export{p as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends o{constructor(r){super(r),this.linkURL=null,this.sourceURL=null}clone(){return new e({linkURL:this.linkURL,sourceURL:this.sourceURL})}};r([s({type:String,json:{write:!0}})],p.prototype,"linkURL",void 0),r([s({type:String,json:{write:!0}})],p.prototype,"sourceURL",void 0),p=e=r([t("esri.popup.content.support.ImageMediaInfoValue")],p);const c=p;export{c as default};

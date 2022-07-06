/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import t from"../webdoc/applicationProperties/Viewing.js";var i;let p=i=class extends o{constructor(r){super(r),this.viewing=null}clone(){return new i({viewing:this.viewing?this.viewing.clone():null})}};r([e({type:t,json:{write:!0}})],p.prototype,"viewing",void 0),p=i=r([s("esri.webscene.ApplicationProperties")],p);const c=p;export{c as default};

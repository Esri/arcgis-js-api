/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import c from"./Search.js";var p;let a=p=class extends o{constructor(r){super(r),this.search=null}clone(){return new p(s({search:this.search}))}};r([e({type:c,json:{write:!0}})],a.prototype,"search",void 0),a=p=r([t("esri.webdoc.applicationProperties.Viewing")],a);const i=a;export{i as default};

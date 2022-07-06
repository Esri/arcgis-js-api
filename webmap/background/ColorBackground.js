/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as e}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";var p;let a=p=class extends s{constructor(o){super(o),this.color=new r([0,0,0,1])}clone(){return new p(e({color:this.color}))}};o([t({type:r,json:{write:!0}})],a.prototype,"color",void 0),a=p=o([c("esri.webmap.background.ColorBackground")],a);const m=a;export{m as default};

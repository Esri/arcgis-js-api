/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{clone as r}from"../core/lang.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import s from"../webdoc/applicationProperties/Viewing.js";var p;let n=p=class extends e{constructor(o){super(o),this.editing=null,this.offline=null,this.viewing=null}clone(){return new p(r({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};o([i({json:{write:!0}})],n.prototype,"editing",void 0),o([i({json:{write:!0}})],n.prototype,"offline",void 0),o([i({type:s,json:{write:!0}})],n.prototype,"viewing",void 0),n=p=o([t("esri.webmap.ApplicationProperties")],n);const c=n;export{c as default};

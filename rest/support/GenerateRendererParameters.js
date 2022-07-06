/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import t from"./ClassificationDefinition.js";let i=class extends o{constructor(){super(...arguments),this.classificationDefinition=null,this.where=null}};r([s({type:t,json:{read:{source:"classificationDef"},write:{target:"classificationDef"}}})],i.prototype,"classificationDefinition",void 0),r([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=r([e("esri.rest.support.GenerateRendererParameters")],i);const c=i;export{c as default};

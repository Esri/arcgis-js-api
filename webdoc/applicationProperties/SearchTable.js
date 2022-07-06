/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import i from"./SearchTableField.js";var p;let c=p=class extends e{constructor(r){super(r),this.field=null,this.id=null}clone(){return new p(o({field:this.field,id:this.id}))}};r([s({type:i,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),r([s({type:String,json:{write:{isRequired:!0}}})],c.prototype,"id",void 0),c=p=r([t("esri.webdoc.applicationProperties.SearchTable")],c);const l=c;export{l as default};

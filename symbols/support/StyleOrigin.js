/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import t from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../portal/Portal.js";var p;let a=p=class extends t{constructor(){super(...arguments),this.portal=null}clone(){return new p({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}};r([o({type:String})],a.prototype,"name",void 0),r([o({type:String})],a.prototype,"styleUrl",void 0),r([o({type:String})],a.prototype,"styleName",void 0),r([o({type:e})],a.prototype,"portal",void 0),a=p=r([s("esri.symbols.support.StyleOrigin")],a);const l=a;export{l as default};

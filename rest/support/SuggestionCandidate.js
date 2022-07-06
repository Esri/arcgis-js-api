/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let e=class extends t{constructor(o){super(o),this.isCollection=null,this.magicKey=null,this.text=null}};o([r({type:Boolean,json:{write:!0}})],e.prototype,"isCollection",void 0),o([r({type:String,json:{write:!0}})],e.prototype,"magicKey",void 0),o([r({type:String,json:{write:!0}})],e.prototype,"text",void 0),e=o([s("esri.rest.support.SuggestionCandidate")],e);const p=e;export{p as default};

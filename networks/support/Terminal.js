/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let s=class extends e{constructor(r){super(r),this.id=null,this.name=null}};r([o({type:Number,json:{read:{source:"terminalId"},write:{target:"terminalId"}}})],s.prototype,"id",void 0),r([o({type:String,json:{read:{source:"terminalName"},write:{target:"terminalName"}}})],s.prototype,"name",void 0),r([o({type:Boolean,json:{write:!0}})],s.prototype,"isUpstreamTerminal",void 0),s=r([t("esri.networks.support.Terminal")],s);const p=s;export{p as default};

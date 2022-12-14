/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let s=class extends e{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};r([o({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),r([o({type:String,json:{write:!0}})],s.prototype,"nameField",void 0),r([o({type:String,json:{write:!0}})],s.prototype,"siteIdField",void 0),r([o({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),s=r([t("esri.layers.support.SiteLayerInfo")],s);const i=s;export{i as default};
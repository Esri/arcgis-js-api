/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let e=class extends o{constructor(r){super(r),this.layerId=null,this.subLayerIds=null,this.title=null}};r([s({json:{write:!0}})],e.prototype,"layerId",void 0),r([s({json:{write:!0}})],e.prototype,"subLayerIds",void 0),r([s({json:{write:!0}})],e.prototype,"title",void 0),e=r([t("esri.rest.support.LegendLayer")],e);const p=e;export{p as default};

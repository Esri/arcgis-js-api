/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{clone as e}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{enumeration as s}from"../../core/accessorSupport/decorators/enumeration.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import p from"./BuildingFilterMode.js";import{symbol3dEdgesProperty as i}from"../../symbols/edges/utils.js";var c;let m=c=class extends p{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new c({edges:e(this.edges)})}};r([s({wireFrame:"wire-frame"})],m.prototype,"type",void 0),r([o(i)],m.prototype,"edges",void 0),m=c=r([t("esri.layers.support.BuildingFilterModeWireFrame")],m);const a=m;export{a as default};

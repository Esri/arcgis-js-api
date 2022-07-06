/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{clone as t}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import c from"./BuildingFilterAuthoringInfo.js";import i from"./BuildingFilterAuthoringInfoBlock.js";var p;const l=r.ofType(i);let n=p=class extends c{constructor(){super(...arguments),this.type="checkbox"}clone(){return new p({filterBlocks:t(this.filterBlocks)})}};o([e({type:["checkbox"]})],n.prototype,"type",void 0),o([e({type:l,json:{write:!0}})],n.prototype,"filterBlocks",void 0),n=p=o([s("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n);const u=n;export{u as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import o from"../../core/Collection.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as s}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import i from"./BuildingFilterAuthoringInfoType.js";var c;const l=o.ofType(i);let n=c=class extends e{clone(){return new c({filterTypes:s(this.filterTypes)})}};r([t({type:l,json:{write:!0}})],n.prototype,"filterTypes",void 0),n=c=r([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n);const m=n;export{m as default};

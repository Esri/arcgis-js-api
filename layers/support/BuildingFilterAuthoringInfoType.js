/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as t}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";var p;let i=p=class extends e{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new p({filterType:this.filterType,filterValues:t(this.filterValues)})}};r([o({type:String,json:{write:!0}})],i.prototype,"filterType",void 0),r([o({type:[String],json:{write:!0}})],i.prototype,"filterValues",void 0),i=p=r([s("esri.layers.support.BuildingFilterAuthoringInfoType")],i);const l=i;export{l as default};

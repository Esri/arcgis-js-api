/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/accessorSupport/ensureType.js";import{enumeration as t}from"../core/accessorSupport/decorators/enumeration.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import p from"./PointCloudRenderer.js";var i;let c=i=class extends p{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:o(this.field)})}};r([t({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),r([e({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=r([s("esri.renderers.PointCloudRGBRenderer")],c);const n=c;export{n as default};

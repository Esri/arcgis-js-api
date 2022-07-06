/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../../core/JSONSupport.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";let t=class extends s{get affectsPixelSize(){return!1}forwardTransform(r){return r}inverseTransform(r){return r}};r([e()],t.prototype,"affectsPixelSize",null),r([e({json:{write:!0}})],t.prototype,"spatialReference",void 0),t=r([o("esri.layers.support.rasterTransforms.BaseRasterTransform")],t);const a=t;export{a as default};

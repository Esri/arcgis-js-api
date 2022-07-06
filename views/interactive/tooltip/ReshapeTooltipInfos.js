/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{zeroMeters as r}from"../../../core/quantityUtils.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import{SketchTooltipInfo as e}from"./SketchTooltipInfo.js";let p=class extends e{constructor(o){super(o),this.type="reshape-edge-offset",this.distance=r}};o([t()],p.prototype,"type",void 0),o([t()],p.prototype,"distance",void 0),p=o([s("esri.views.interactive.tooltip.ReshapeEdgeOffsetTooltipInfo")],p);export{p as ReshapeEdgeOffsetTooltipInfo};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import{LegendOptions as o}from"../../support/LegendOptions.js";var t;let p=t=class extends o{constructor(){super(...arguments),this.showLegend=null}clone(){return new t({title:this.title,showLegend:this.showLegend})}};s([e({type:Boolean,json:{write:!0}})],p.prototype,"showLegend",void 0),p=t=s([r("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],p);const i=p;export{i as default};

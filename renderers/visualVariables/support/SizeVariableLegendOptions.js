/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import o from"./VisualVariableLegendOptions.js";var t;let i=t=class extends o{constructor(){super(...arguments),this.customValues=null}clone(){return new t({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})}};s([e({type:[Number],json:{write:!0}})],i.prototype,"customValues",void 0),i=t=s([r("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],i);const a=i;export{a as default};

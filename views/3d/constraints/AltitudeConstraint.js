/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import o from"../../../core/Accessor.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import{earthAltitudeConstraint as e}from"../state/Constraints.js";let p=class extends o{constructor(){super(...arguments),this.min=e.min,this.max=e.max}};r([s({type:Number})],p.prototype,"min",void 0),r([s({type:Number})],p.prototype,"max",void 0),p=r([t("esri.views.3d.constraints.AltitudeConstraint")],p);export{p as AltitudeConstraint};

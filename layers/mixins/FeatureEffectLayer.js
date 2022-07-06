/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import s from"../support/FeatureEffect.js";const t={write:{allowNull:!0}},p=p=>{let c=class extends p{constructor(){super(...arguments),this.featureEffect=null}};return r([e({type:s,json:{origins:{"web-map":t,"portal-item":t}}})],c.prototype,"featureEffect",void 0),c=r([o("esri.layers.mixins.FeatureEffectLayer")],c),c};export{p as FeatureEffectLayer};

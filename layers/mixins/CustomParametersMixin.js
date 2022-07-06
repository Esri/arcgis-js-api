/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";const o=o=>{let t=class extends o{constructor(){super(...arguments),this.customParameters=null}};return r([s({type:Object,json:{write:{overridePolicy:r=>({enabled:!!(r&&Object.keys(r).length>0)})}}})],t.prototype,"customParameters",void 0),t=r([e("esri.layers.mixins.CustomParametersMixin")],t),t};export{o as CustomParametersMixin};

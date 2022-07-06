/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./Association.js";let p=class extends s{constructor(o){super(o),this.maxGeometryCountExceeded=!1,this.associations=[]}};o([r({type:Boolean,json:{write:!0}})],p.prototype,"maxGeometryCountExceeded",void 0),o([r({type:[e],json:{write:!0}})],p.prototype,"associations",void 0),p=o([t("esri.rest.networks.support.AssociationGeometriesResult")],p);const c=p;export{c as default};

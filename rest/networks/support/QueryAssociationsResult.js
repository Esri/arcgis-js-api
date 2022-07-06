/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import e from"./Association.js";let p=class extends o{constructor(s){super(s),this.associations=[]}};s([r({type:[e],json:{write:!0}})],p.prototype,"associations",void 0),p=s([t("esri.rest.networks.support.QueryAssociationsResult")],p);const c=p;export{c as default};

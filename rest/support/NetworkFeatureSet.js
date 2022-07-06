/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import r from"./FeatureSet.js";var s;let c=s=class extends r{constructor(e){super(e),this.doNotLocateOnRestrictedElements=null}clone(){return new s({doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements,...this.cloneProperties()})}};e([t({type:Boolean,json:{write:!0}})],c.prototype,"doNotLocateOnRestrictedElements",void 0),c=s=e([o("esri.rest.support.NetworkFeatureSet")],c);const p=c;export{p as default};

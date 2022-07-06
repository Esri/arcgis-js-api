/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import s from"../../geometry/SpatialReference.js";let p=class extends e{constructor(){super(...arguments),this.north=null,this.up=null,this.spatialReference=null}};r([o({type:Number,json:{write:!0}})],p.prototype,"north",void 0),r([o({type:Number,json:{write:!0}})],p.prototype,"up",void 0),r([o({type:s,json:{write:!0}})],p.prototype,"spatialReference",void 0),p=r([t("esri.rest.support.ImageAngleResult")],p);const i=p;export{i as default};

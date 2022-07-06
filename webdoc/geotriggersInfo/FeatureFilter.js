/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{geometryTypes as o}from"../../geometry.js";import{ClonableMixin as e}from"../../core/Clonable.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as i}from"../../geometry/support/jsonUtils.js";let c=class extends(e(t)){constructor(r){super(r),this.geometry=null,this.where=null}};r([s({types:o,json:{read:i,write:!0}})],c.prototype,"geometry",void 0),r([s({type:String,json:{write:!0}})],c.prototype,"where",void 0),c=r([p("esri.webdoc.geotriggersInfo.FeatureFilter")],c);const m=c;export{m as default};

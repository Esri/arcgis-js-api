/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let t=class extends o{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([e({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),r([e({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=r([s("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l=t;export{l as default};

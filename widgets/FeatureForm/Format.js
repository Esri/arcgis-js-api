/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{fromJSON as o}from"../../core/date.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let p=class extends t{constructor(r){super(r),this.digitSeparator=!1,this.dateFormat=null,this.places=null}};r([e()],p.prototype,"digitSeparator",void 0),r([e({json:{read:{source:"dateFormat",reader:o}}})],p.prototype,"dateFormat",void 0),r([e()],p.prototype,"places",void 0),p=r([s("esri.widgets.FeatureForm.Format")],p);const a=p;export{a as default};

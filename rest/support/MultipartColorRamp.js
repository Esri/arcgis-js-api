/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as r}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import p from"./AlgorithmicColorRamp.js";import e from"./ColorRamp.js";var c;let m=c=class extends e{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new c({colorRamps:r(this.colorRamps)})}};o([t({type:[p],json:{write:!0}})],m.prototype,"colorRamps",void 0),o([t({type:["multipart"]})],m.prototype,"type",void 0),m=c=o([s("esri.rest.support.MultipartColorRamp")],m);const a=m;export{a as default};

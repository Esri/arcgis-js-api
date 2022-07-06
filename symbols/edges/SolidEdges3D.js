/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import"../../core/Logger.js";import"../../core/accessorSupport/ensureType.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/set.js";import{enumeration as r}from"../../core/accessorSupport/decorators/enumeration.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"./Edges3D.js";var t;let p=t=class extends e{constructor(o){super(o),this.type="solid"}clone(){return new t(this.cloneProperties())}};o([r({solid:"solid"},{readOnly:!0})],p.prototype,"type",void 0),p=t=o([s("esri.symbols.support.SolidEdges3D")],p);const c=p;export{c as default};

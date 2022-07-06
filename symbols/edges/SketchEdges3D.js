/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../core/Logger.js";import"../../core/accessorSupport/ensureType.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/set.js";import{enumeration as s}from"../../core/accessorSupport/decorators/enumeration.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import o from"./Edges3D.js";var t;let c=t=class extends o{constructor(r){super(r),this.type="sketch"}clone(){return new t(this.cloneProperties())}};r([s({sketch:"sketch"},{readOnly:!0})],c.prototype,"type",void 0),c=t=r([e("esri.symbols.edges.SketchEdges3D")],c);const p=c;export{p as default};

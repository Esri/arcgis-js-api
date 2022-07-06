/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import o from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends o{constructor(){super(...arguments),this.x=0,this.y=0,this.z=0}clone(){return new e({x:this.x,y:this.y,z:this.z})}};r([s({type:Number})],p.prototype,"x",void 0),r([s({type:Number})],p.prototype,"y",void 0),r([s({type:Number})],p.prototype,"z",void 0),p=e=r([t("esri.symbols.support.Symbol3DAnchorPosition3D")],p);export{p as Symbol3DAnchorPosition3D};

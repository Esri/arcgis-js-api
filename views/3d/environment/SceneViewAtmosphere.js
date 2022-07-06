/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import e from"../../../core/Accessor.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";var t;let i=t=class extends e{set quality(r){["low","high"].includes(r)&&this._set("quality",r)}clone(){return new t({quality:this.quality})}};r([o({type:["low","high"],value:"low"})],i.prototype,"quality",null),i=t=r([s("esri.views.3d.environment.SceneViewAtmosphere")],i);export{i as SceneViewAtmosphere};

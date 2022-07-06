/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import s from"./Accessor.js";import t from"./Handles.js";import{property as r}from"./accessorSupport/decorators/property.js";import{subclass as o}from"./accessorSupport/decorators/subclass.js";import{WatchUpdatingTracking as n}from"./support/WatchUpdatingTracking.js";const a=s=>{let a=class extends s{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new t}get updatingHandles(){return this._get("updatingHandles")||new n}};return e([r({readOnly:!0})],a.prototype,"handles",null),e([r({readOnly:!0})],a.prototype,"updatingHandles",null),a=e([o("esri.core.HandleOwner")],a),a};let d=class extends(a(s)){};d=e([o("esri.core.HandleOwner")],d);export{d as HandleOwner,a as HandleOwnerMixin};

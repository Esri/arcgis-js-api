/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let s=class extends e{};o([r({type:Boolean,json:{write:!0}})],s.prototype,"timeDataCumulative",void 0),o([r({type:Number,json:{write:!0}})],s.prototype,"timeOffset",void 0),o([r({type:String,json:{write:!0}})],s.prototype,"timeOffsetUnits",void 0),o([r({type:Boolean,json:{write:!0}})],s.prototype,"useTime",void 0),s=o([t("esri.layers.support.LayerTimeOptions")],s);const p=s;export{p as default};

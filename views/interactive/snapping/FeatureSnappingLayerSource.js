/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import o from"../../../core/Accessor.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";let e=class extends o{constructor(r){super(r),this.layer=null,this.enabled=!0,this.updating=!1,this.availability=1}};r([s({constructOnly:!0})],e.prototype,"layer",void 0),r([s()],e.prototype,"enabled",void 0),r([s()],e.prototype,"updating",void 0),r([s()],e.prototype,"availability",void 0),e=r([t("esri.views.interactive.snapping.SnappingLayerSource")],e);const p=e;export{p as default};

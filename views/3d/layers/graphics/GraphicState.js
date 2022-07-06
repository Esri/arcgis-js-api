/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../../chunks/tslib.es6.js";import o from"../../../../core/Evented.js";import{property as s}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../../core/accessorSupport/decorators/subclass.js";let e=class extends o.EventedAccessor{constructor(r){super(r),this.tracking=!1,this.displaying=!1,this.isDraped=!1}};r([s({constructOnly:!0})],e.prototype,"graphic",void 0),r([s()],e.prototype,"tracking",void 0),r([s()],e.prototype,"displaying",void 0),r([s()],e.prototype,"isDraped",void 0),e=r([t("esri.views.3d.layers.graphics.GraphicState")],e);export{e as GraphicState};

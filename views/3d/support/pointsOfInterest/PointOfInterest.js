/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../../../chunks/tslib.es6.js";import o from"../../../../core/Accessor.js";import s from"../../../../core/Handles.js";import{property as t}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as e}from"../../../../core/accessorSupport/decorators/subclass.js";let c=class extends o{constructor(r){super(r),this.handles=new s}destroy(){this.handles.destroy()}};r([t({constructOnly:!0})],c.prototype,"renderCoordsHelper",void 0),r([t({constructOnly:!0})],c.prototype,"surface",void 0),r([t({constructOnly:!0})],c.prototype,"state",void 0),c=r([e("esri.views.3d.support.PointOfInterest")],c);export{c as PointOfInterest};

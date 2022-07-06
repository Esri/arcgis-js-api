/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";let s=class extends r{get canZoomIn(){return!!this.get("view.ready")}get canZoomOut(){return!!this.get("view.ready")}};o([e({readOnly:!0})],s.prototype,"canZoomIn",null),o([e({readOnly:!0})],s.prototype,"canZoomOut",null),o([e()],s.prototype,"view",void 0),s=o([t("esri.widgets.Zoom.ZoomConditions3D")],s);const c=s;export{c as default};

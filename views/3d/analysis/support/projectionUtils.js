/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as o,isSome as e,unwrapOr as r}from"../../../../core/maybe.js";import{tryProjectWithZConversion as t}from"../../../../geometry/projection.js";import{getElevationAtPoint as i}from"../../support/ElevationProvider.js";function n(n,a,p,s=!1){const c=t(n,a);return o(c)?null:(c.hasZ&&!s||!e(p)||(c.z=r(i(p,c),0)),c)}function a(o,e,r){r.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}export{n as applyProjectionAndElevationAlignment,a as logFailedGeometryProjectionError};

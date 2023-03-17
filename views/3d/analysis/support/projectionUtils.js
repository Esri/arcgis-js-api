/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/projection","../../support/ElevationProvider"],(function(e,o,t,r){"use strict";function i(e,i,n,a=!1){const l=t.tryProjectWithZConversion(e,i);return o.isNone(l)?null:(l.hasZ&&!a||!o.isSome(n)||(l.z=o.unwrapOr(r.getElevationAtPoint(n,l),0)),l)}function n(e,o,t){t.warnOnce(`Failed to project analysis geometry (id: '${e.id}'), projection from spatial reference (wkid: '${o.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}e.applyProjectionAndElevationAlignment=i,e.logFailedGeometryProjectionError=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../geometry/projection","../../support/ElevationProvider"],(function(e,o,t,i){"use strict";function r(e,r,n,a=!1){const l=t.tryProjectWithZConversion(e,r);return o.isNone(l)?null:(l.hasZ&&!a||!o.isSome(n)||(l.z=o.unwrapOr(i.getElevationAtPoint(n,l),0)),l)}function n(e,o,t){t.warnOnce(`Failed to project analysis geometry (id: '${e.id}'), projection from spatial reference (wkid: '${o.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}e.applyProjectionAndElevationAlignment=r,e.logFailedGeometryProjectionError=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

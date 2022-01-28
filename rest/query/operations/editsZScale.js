/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/unitUtils","../../../geometry/support/spatialReferenceUtils"],(function(e,n,t,i){"use strict";function s(e,n,t){if(null==e.hasM||e.hasZ)for(const i of n)for(const e of i)e.length>2&&(e[2]*=t)}function o(e,n,i){if(!e&&!n||!i)return;const s=t.getMetersPerVerticalUnitForSR(i);r(e,i,s),r(n,i,s)}function r(e,n,t){if(e)for(const i of e)f(i.geometry,n,t)}function f(e,o,r){if(n.isNone(e)||!e.spatialReference||i.equals(e.spatialReference,o))return;const f=t.getMetersPerVerticalUnitForSR(e.spatialReference)/r;if(1!==f)if("x"in e)null!=e.z&&(e.z*=f);else if("rings"in e)s(e,e.rings,f);else if("paths"in e)s(e,e.paths,f);else if("points"in e&&(null==e.hasM||e.hasZ))for(const n of e.points)n.length>2&&(n[2]*=f)}e.unapplyEditsZUnitScaling=o,Object.defineProperty(e,"__esModule",{value:!0})}));

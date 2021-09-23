/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/unitUtils","../../../geometry/support/spatialReferenceUtils"],(function(e,t,n,o){"use strict";function i(e,i,c){if(t.isNone(i)||t.isNone(c)||c.vcsWkid||o.equals(i,c))return null;const u=n.getMetersPerVerticalUnitForSR(i)/n.getMetersPerVerticalUnitForSR(c);if(1===u)return null;switch(e){case"point":case"esriGeometryPoint":return e=>r(e,u);case"polyline":case"esriGeometryPolyline":return e=>f(e,u);case"polygon":case"esriGeometryPolygon":return e=>s(e,u);case"multipoint":case"esriGeometryMultipoint":return e=>l(e,u);default:return null}}function r(e,t){e&&null!=e.z&&(e.z*=t)}function s(e,t){if(e)for(const n of e.rings)for(const e of n)e.length>2&&(e[2]*=t)}function f(e,t){if(e)for(const n of e.paths)for(const e of n)e.length>2&&(e[2]*=t)}function l(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}function c(e,t,n){if(null==e.hasM||e.hasZ)for(const o of t)for(const e of o)e.length>2&&(e[2]*=n)}function u(e,t,o){if(!e&&!t||!o)return;const i=n.getMetersPerVerticalUnitForSR(o);a(e,o,i),a(t,o,i)}function a(e,t,n){if(e)for(const o of e)p(o.geometry,t,n)}function p(e,i,r){if(t.isNone(e)||!e.spatialReference||o.equals(e.spatialReference,i))return;const s=n.getMetersPerVerticalUnitForSR(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)c(e,e.rings,s);else if("paths"in e)c(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}e.getGeometryZScaler=i,e.unapplyEditsZUnitScaling=u,Object.defineProperty(e,"__esModule",{value:!0})}));

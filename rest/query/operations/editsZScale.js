/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e}from"../../../core/maybe.js";import{getMetersPerVerticalUnitForSR as n}from"../../../core/unitUtils.js";import{equals as o}from"../../../geometry/support/spatialReferenceUtils.js";function t(e,n,o){if(null==e.hasM||e.hasZ)for(const t of n)for(const e of t)e.length>2&&(e[2]*=o)}function i(e,o,t){if(!e&&!o||!t)return;const i=n(t);s(e,t,i),s(o,t,i)}function s(e,n,o){if(e)for(const t of e)f(t.geometry,n,o)}function f(i,s,f){if(e(i)||!i.spatialReference||o(i.spatialReference,s))return;const r=n(i.spatialReference)/f;if(1!==r)if("x"in i)null!=i.z&&(i.z*=r);else if("rings"in i)t(i,i.rings,r);else if("paths"in i)t(i,i.paths,r);else if("points"in i&&(null==i.hasM||i.hasZ))for(const e of i.points)e.length>2&&(e[2]*=r)}export{i as unapplyEditsZUnitScaling};

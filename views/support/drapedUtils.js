/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import{isSome as e,isNone as t}from"../../core/maybe.js";import{getMetersPerUnitForSR as r}from"../../core/unitUtils.js";import{calculateTolerance as n}from"../../renderers/support/clickToleranceUtils.js";import i from"../../geometry/Extent.js";function a(t,n,a,o=new i){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=e(o)&&!o.equals(a.spatialReference)?r(o)/r(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if(t(o))return!1;return a(o,n(),i,s).intersects(r)}const s=new i;export{a as createQueryGeometry,o as intersectsDrapedGeometry};

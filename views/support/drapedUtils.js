/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../geometry/Extent","../../geometry","../../core/unitUtils","../../renderers/support/clickToleranceUtils"],(function(e,t,r,n,a,i){"use strict";function s(e,n,i,s=new r){let o;if("2d"===i.type)o=n*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),s=i.basemapSpatialReference;o=t.isSome(s)&&!s.equals(i.spatialReference)?a.getMetersPerUnitForSR(s)/a.getMetersPerUnitForSR(i.spatialReference):n*r}const c=e.x-o,l=e.y-o,m=e.x+o,p=e.y+o,{spatialReference:u}=i;return s.xmin=Math.min(c,m),s.ymin=Math.min(l,p),s.xmax=Math.max(c,m),s.ymax=Math.max(l,p),s.spatialReference=u,s}function o(e,r,n){const a=n.toMap(e);if(t.isNone(a))return!1;return s(a,i.calculateTolerance(),n,c).intersects(r)}const c=new r;e.createQueryGeometry=s,e.intersectsDrapedGeometry=o,Object.defineProperty(e,"__esModule",{value:!0})}));

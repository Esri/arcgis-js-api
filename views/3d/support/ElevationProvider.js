/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../layers/graphics/dehydratedFeatureUtils"],(function(e,t,r){"use strict";let a=function(e,t=null,r=0){this.array=e,this.spatialReference=t,this.offset=r};function i(e){return"array"in e}function n(e,a,n="ground"){if(r.isDehydratedPoint(a))return e.getElevation(a.x,a.y,a.z||0,a.spatialReference,n);if(i(a)){let r=a.offset;return e.getElevation(a.array[r++],a.array[r++],a.array[r]||0,t.unwrapOr(a.spatialReference,e.spatialReference),n)}return e.getElevation(a[0],a[1],a[2]||0,e.spatialReference,n)}e.SamplePosition=a,e.getElevationAtPoint=n,e.isSamplePosition=i,Object.defineProperty(e,"__esModule",{value:!0})}));

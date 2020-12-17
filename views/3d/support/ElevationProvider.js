/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../layers/graphics/dehydratedFeatures"],(function(e,t){"use strict";function r(e){return"array"in e}e.SamplePosition=function(e,t=0){this.array=e,this.offset=t},e.getElevationAtPoint=function(e,a,i="ground"){if(t.isDehydratedPoint(a))return e.getElevation(a.x,a.y,a.z||0,a.spatialReference,i);if(r(a)){let t=a.offset;return e.getElevation(a.array[t++],a.array[t++],a.array[t]||0,e.spatialReference,i)}return e.getElevation(a[0],a[1],a[2]||0,e.spatialReference,i)},e.isSamplePosition=r,Object.defineProperty(e,"__esModule",{value:!0})}));

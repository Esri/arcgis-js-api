/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrapOr as e}from"../../../core/maybe.js";import{isDehydratedPoint as r}from"../../../layers/graphics/dehydratedFeatureUtils.js";class t{constructor(e,r=null,t=0){this.array=e,this.spatialReference=r,this.offset=t}}function a(e){return"array"in e}function i(t,i,n="ground"){if(r(i))return t.getElevation(i.x,i.y,i.z||0,i.spatialReference,n);if(a(i)){let r=i.offset;return t.getElevation(i.array[r++],i.array[r++],i.array[r]||0,e(i.spatialReference,t.spatialReference),n)}return t.getElevation(i[0],i[1],i[2]||0,t.spatialReference,n)}export{t as SamplePosition,i as getElevationAtPoint,a as isSamplePosition};

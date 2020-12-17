/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e={width:600,height:400},h=1.5;t.getOptimalThumbnailSize=function(t,i){i=i||e;let{width:n,height:d}=i;const o=n/d;return o<h?d=n/h:o>h&&(n=d*h),n>t.width&&(d*=t.width/n,n=t.width),d>t.height&&(n*=t.height/d,d=t.height),{width:Math.round(n),height:Math.round(d)}},Object.defineProperty(t,"__esModule",{value:!0})}));

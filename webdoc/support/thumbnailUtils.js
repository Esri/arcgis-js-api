/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const h={width:600,height:400},i=1.5;function e(t,e){e=e||h;let{width:n,height:d}=e;const o=n/d;return o<i?d=n/i:o>i&&(n=d*i),n>t.width&&(d*=t.width/n,n=t.width),d>t.height&&(n*=t.height/d,d=t.height),{width:Math.round(n),height:Math.round(d)}}t.getOptimalThumbnailSize=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

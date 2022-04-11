/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e={width:600,height:400},i=1.5;function h(t,h){h=h||e;let{width:n,height:d}=h;const o=n/d;return o<i?d=n/i:o>i&&(n=d*i),n>t.width&&(d*=t.width/n,n=t.width),d>t.height&&(n*=t.height/d,d=t.height),{width:Math.round(n),height:Math.round(d)}}t.getOptimalThumbnailSize=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

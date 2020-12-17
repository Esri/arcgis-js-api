/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";t.roundValue=function(t,e=5){let a=Math.round(t);if(a<=1)return 1;const r=a.toString().length;for(let n=r-1>=3?3:r-1;n>=0;n--){const r=Math.pow(10,n),o=Math.floor(t/r)*r,i=Math.ceil(t/r)*r,f=Math.round((o+i)/2),u=Math.abs(t-o)/t*100,h=Math.abs(t-i)/t*100,M=Math.abs(t-f)/t*100,s=Math.min(u,h,M);if(s<=e){if(s===u){a=o;break}if(s===h){a=i;break}if(s===M){a=f;break}}}return a},Object.defineProperty(t,"__esModule",{value:!0})}));

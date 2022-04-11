/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e=5){let a=Math.round(t);if(a<=1)return 1;const r=a.toString().length;for(let n=r-1>=3?3:r-1;n>=0;n--){const r=10**n,o=Math.floor(t/r)*r,i=Math.ceil(t/r)*r,u=Math.round((o+i)/2),f=Math.abs(t-o)/t*100,l=Math.abs(t-i)/t*100,s=Math.abs(t-u)/t*100,M=Math.min(f,l,s);if(M<=e){if(M===f){a=o;break}if(M===l){a=i;break}if(M===s){a=u;break}}}return a}t.roundValue=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

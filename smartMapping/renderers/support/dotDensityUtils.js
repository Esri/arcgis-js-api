/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e=5){let r=Math.round(t);if(r<=1)return 1;const a=r.toString().length;for(let n=a-1>=3?3:a-1;n>=0;n--){const a=10**n,o=Math.floor(t/a)*a,i=Math.ceil(t/a)*a,f=Math.round((o+i)/2),u=Math.abs(t-o)/t*100,h=Math.abs(t-i)/t*100,l=Math.abs(t-f)/t*100,M=Math.min(u,h,l);if(M<=e){if(M===u){r=o;break}if(M===h){r=i;break}if(M===l){r=f;break}}}return r}t.roundValue=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

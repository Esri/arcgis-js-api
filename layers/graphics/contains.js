/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n,o){return n?o?4:3:o?3:2}function t(n,o,t,r){return e(n,o,t,r.coords[0],r.coords[1])}function r(n,t,r,i,s,u){const c=o(s,u),{coords:f,lengths:l}=i;if(!l)return!1;for(let o=0,d=0;o<l.length;o++,d+=c)if(!e(n,t,r,f[d],f[d+1]))return!1;return!0}function e(n,t,r,e,s){if(!n)return!1;const u=o(t,r),{coords:c,lengths:f}=n;let l=!1,d=0;for(const o of f)l=i(l,c,u,d,o,e,s),d+=o*u;return l}function i(n,o,t,r,e,i,s){let u=n,c=r;for(let f=r,l=r+e*t;f<l;f+=t){c=f+t,c===l&&(c=r);const n=o[f],e=o[f+1],d=o[c],g=o[c+1];(e<s&&g>=s||g<s&&e>=s)&&n+(s-e)/(g-e)*(d-n)<i&&(u=!u)}return u}n.polygonContainsCoords=e,n.polygonContainsMultipoint=r,n.polygonContainsPoint=t,Object.defineProperty(n,"__esModule",{value:!0})}));

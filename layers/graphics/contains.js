/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n,o){return n?o?4:3:o?3:2}function t(n,o,t,r){return e(n,o,t,r.coords[0],r.coords[1])}function r(n,t,r,i,u,s){const c=o(u,s),{coords:f,lengths:l}=i;if(!l)return!1;for(let o=0,d=0;o<l.length;o++,d+=c)if(!e(n,t,r,f[d],f[d+1]))return!1;return!0}function e(n,t,r,e,u){if(!n)return!1;const s=o(t,r),{coords:c,lengths:f}=n;let l=!1,d=0;for(const o of f)l=i(l,c,s,d,o,e,u),d+=o*s;return l}function i(n,o,t,r,e,i,u){let s=n,c=r;for(let f=r,l=r+e*t;f<l;f+=t){c=f+t,c===l&&(c=r);const n=o[f],e=o[f+1],d=o[c],g=o[c+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<i&&(s=!s)}return s}n.polygonContainsCoords=e,n.polygonContainsMultipoint=r,n.polygonContainsPoint=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));

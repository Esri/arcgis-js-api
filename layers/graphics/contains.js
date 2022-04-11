/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n,o){return n?o?4:3:o?3:2}function t(n,o,t,e){return r(n,o,t,e.coords[0],e.coords[1])}function e(n,t,e,i,u,s){const c=o(u,s),{coords:l,lengths:f}=i;if(!f)return!1;for(let o=0,d=0;o<f.length;o++,d+=c)if(!r(n,t,e,l[d],l[d+1]))return!1;return!0}function r(n,t,e,r,u){if(!n)return!1;const s=o(t,e),{coords:c,lengths:l}=n;let f=!1,d=0;for(const o of l)f=i(f,c,s,d,o,r,u),d+=o*s;return f}function i(n,o,t,e,r,i,u){let s=n,c=e;for(let l=e,f=e+r*t;l<f;l+=t){c=l+t,c===f&&(c=e);const n=o[l],r=o[l+1],d=o[c],g=o[c+1];(r<u&&g>=u||g<u&&r>=u)&&n+(u-r)/(g-r)*(d-n)<i&&(s=!s)}return s}n.polygonContainsCoords=r,n.polygonContainsMultipoint=e,n.polygonContainsPoint=t,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

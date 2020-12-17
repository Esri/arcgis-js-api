/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n,o){return n?o?4:3:o?3:2}function t(n,t,e,i,s){if(!n)return!1;const u=o(t,e),{coords:c,lengths:f}=n;let l=!1,d=0;for(const n of f)l=r(l,c,u,d,n,i,s),d+=n*u;return l}function r(n,o,t,r,e,i,s){let u=n,c=r;for(let n=r,f=r+e*t;n<f;n+=t){c=n+t,c===f&&(c=r);const e=o[n],l=o[n+1],d=o[c],g=o[c+1];(l<s&&g>=s||g<s&&l>=s)&&e+(s-l)/(g-l)*(d-e)<i&&(u=!u)}return u}n.polygonContainsCoords=t,n.polygonContainsMultipoint=function(n,r,e,i,s,u){const c=o(s,u),{coords:f,lengths:l}=i;if(!l)return!1;for(let o=0,i=0;o<l.length;o++,i+=c)if(!t(n,r,e,f[i],f[i+1]))return!1;return!0},n.polygonContainsPoint=function(n,o,r,e){return t(n,o,r,e.coords[0],e.coords[1])},Object.defineProperty(n,"__esModule",{value:!0})}));

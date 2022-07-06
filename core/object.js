/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as r}from"./lang.js";function n(r,n,t=!1){return i(r,n,t)}function t(r,n){if(null!=n)return n[r]||e(r.split("."),!1,n)}function o(r,n,t){const o=r.split("."),i=o.pop(),u=e(o,!0,t);u&&i&&(u[i]=n)}function e(r,n,t){let o=t;for(const e of r){if(null==o)return;if(!(e in o)){if(!n)return;o[e]={}}o=o[e]}return o}function i(n,t,o){return t?Object.keys(t).reduce(((n,e)=>{let u=n[e],c=t[e];return u===c?n:void 0===u?(n[e]=r(c),n):(Array.isArray(c)||Array.isArray(n)?(u=u?Array.isArray(u)?n[e]=u.concat():n[e]=[u]:n[e]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((r=>{u.includes(r)||u.push(r)})):n[e]=c.concat())):c&&"object"==typeof c?n[e]=i(u,c,o):n.hasOwnProperty(e)&&!t.hasOwnProperty(e)||(n[e]=c),n)}),n||{}):n}export{n as deepMerge,t as getDeepValue,o as setDeepValue};

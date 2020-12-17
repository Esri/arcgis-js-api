/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./lang"],(function(e,r){"use strict";function n(e,r,n){let t=n;for(const n of e){if(null==t)return;if(!(n in t)){if(!r)return;t[n]={}}t=t[n]}return t}function t(e,n,o){return n?Object.keys(n).reduce((function(e,i){let u=e[i],c=n[i];return u===c?e:void 0===u?(e[i]=r.clone(c),e):(Array.isArray(c)||Array.isArray(e)?(u=u?Array.isArray(u)?e[i]=u.concat():e[i]=[u]:e[i]=[],c&&(Array.isArray(c)||(c=[c]),o?c.forEach((e=>{-1===u.indexOf(e)&&u.push(e)})):e[i]=c.concat())):c&&"object"==typeof c?e[i]=t(u,c,o):e.hasOwnProperty(i)&&!n.hasOwnProperty(i)||(e[i]=c),e)}),e||{}):e}e.deepMerge=function(e,r,n=!1){return t(e,r,n)},e.getDeepValue=function(e,r){if(null!=r)return r[e]||n(e.split("."),!1,r)},e.setDeepValue=function(e,r,t){const o=e.split("."),i=o.pop(),u=n(o,!0,t);u&&i&&(u[i]=r)},Object.defineProperty(e,"__esModule",{value:!0})}));

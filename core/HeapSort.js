/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define((function(){"use strict";var o;!function(o){const t=(o,t,n,e)=>{let i=t,r=t;const c=n>>>1,f=o[i-1];for(;r<=c;){r=i<<1,r<n&&e(o[r-1],o[r])<0&&++r;const t=o[r-1];if(e(t,f)<=0)break;o[i-1]=t,i=r}o[i-1]=f},n=(o,t)=>o<t?-1:o>t?1:0;function e(o,e,i,r){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===r&&(r=n);for(let n=i>>>1;n>e;n--)t(o,n,i,r);const c=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,c,n,r)}}function*i(o,e,i,r){void 0===e&&(e=0),void 0===i&&(i=o.length),void 0===r&&(r=n);for(let n=i>>>1;n>e;n--)t(o,n,i,r),yield;const c=e+1;for(let n=i-1;n>e;n--){const i=o[e];o[e]=o[n],o[n]=i,t(o,c,n,r),yield}}o.sort=e,o.iterableSort=i}(o||(o={}));return o}));

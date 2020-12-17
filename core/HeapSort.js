/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";var t;return function(t){function o(t,o,n,i){let e=o,r=o;const c=n>>>1,f=t[e-1];for(;r<=c;){r=e<<1,r<n&&i(t[r-1],t[r])<0&&++r;const o=t[r-1];if(i(o,f)<=0)break;t[e-1]=o,e=r}t[e-1]=f}function n(t,o){return t<o?-1:t>o?1:0}t.sort=function(t,i,e,r){void 0===i&&(i=0),void 0===e&&(e=t.length),void 0===r&&(r=n);for(let n=e>>>1;n>i;n--)o(t,n,e,r);const c=i+1;for(let n=e-1;n>i;n--){const e=t[i];t[i]=t[n],t[n]=e,o(t,c,n,r)}},t.iterableSort=function*(t,i,e,r){void 0===i&&(i=0),void 0===e&&(e=t.length),void 0===r&&(r=n);for(let n=e>>>1;n>i;n--)o(t,n,e,r),yield;const c=i+1;for(let n=e-1;n>i;n--){const e=t[i];t[i]=t[n],t[n]=e,o(t,c,n,r),yield}}}(t||(t={})),t}));

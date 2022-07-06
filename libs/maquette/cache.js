/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e=()=>{let e,t;return{invalidate:()=>{t=void 0,e=void 0},result:(r,i)=>{if(e)for(let l=0;l<r.length;l++)e[l]!==r[l]&&(t=void 0);return t||(t=i(),e=r),t}}};export{e as createCache};

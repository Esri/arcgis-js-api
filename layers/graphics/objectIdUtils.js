/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const e of n){const n=e.attributes?.[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}export{n as findLastObjectIdFromFeatures,t as initialObjectId};

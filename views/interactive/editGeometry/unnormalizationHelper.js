/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getInfo as o}from"../../../geometry/support/spatialReferenceUtils.js";import{ViewingMode as r}from"../../ViewingMode.js";function e(o,r){if(!r.supported)return;let e=1/0,p=-1/0;const n=r.upperBoundX-r.lowerBoundX;o.forEach((o=>{let u=o.pos[0];for(;u<r.lowerBoundX;)u+=n;for(;u>r.upperBoundX;)u-=n;e=Math.min(e,u),p=Math.max(p,u),o.pos[0]=u}));const u=p-e;n-u<u&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=n)}))}function p(e,p){const n=o(e);return p===r.Global&&n?{supported:!0,lowerBoundX:n.valid[0],upperBoundX:n.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}export{p as getUnnormalizationInfo,e as unnormalize};

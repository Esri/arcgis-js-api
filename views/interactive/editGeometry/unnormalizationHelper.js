/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/support/spatialReferenceUtils"],(function(o,e){"use strict";function n(o,e){if(!e.supported)return;let n=1/0,r=-1/0;const t=e.upperBoundX-e.lowerBoundX;o.forEach((o=>{let u=o.pos[0];for(;u<e.lowerBoundX;)u+=t;for(;u>e.upperBoundX;)u-=t;n=Math.min(n,u),r=Math.max(r,u),o.pos[0]=u}));const u=r-n;t-u<u&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=t)}))}function r(o,n){const r=e.getInfo(o);return 1===n&&r?{supported:!0,lowerBoundX:r.valid[0],upperBoundX:r.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}o.getUnnormalizationInfo=r,o.unnormalize=n,Object.defineProperty(o,"__esModule",{value:!0})}));

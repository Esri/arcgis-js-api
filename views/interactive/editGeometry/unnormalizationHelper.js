/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/support/spatialReferenceUtils","../../ViewingMode"],(function(o,e,n){"use strict";function r(o,e){if(!e.supported)return;let n=1/0,r=-1/0;const t=e.upperBoundX-e.lowerBoundX;o.forEach((o=>{let u=o.pos[0];for(;u<e.lowerBoundX;)u+=t;for(;u>e.upperBoundX;)u-=t;n=Math.min(n,u),r=Math.max(r,u),o.pos[0]=u}));const u=r-n;t-u<u&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=t)}))}function t(o,r){const t=e.getInfo(o);return r===n.ViewingMode.Global&&t?{supported:!0,lowerBoundX:t.valid[0],upperBoundX:t.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}o.getUnnormalizationInfo=t,o.unnormalize=r,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./contains"],(function(n,o){"use strict";n.polygonIntersectsMultipoint=function(n,t,e,r,s,i){const c=(l=i,s?l?4:3:l?3:2);var l;const{coords:u,lengths:f}=r;for(let r=0,s=0;r<f.length;r++,s+=c)if(o.polygonContainsCoords(n,t,e,u[s],u[s+1]))return!0;return!1},n.polygonIntersectsPoint=function(n,t,e,r){return o.polygonContainsPoint(n,t,e,r)},Object.defineProperty(n,"__esModule",{value:!0})}));

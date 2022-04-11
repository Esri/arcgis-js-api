/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./contains"],(function(n,o){"use strict";function t(n,t,e,r){return o.polygonContainsPoint(n,t,e,r)}function e(n,t,e,i,s,u){const l=r(s,u),{coords:c,lengths:f}=i;for(let r=0,g=0;r<f.length;r++,g+=l)if(o.polygonContainsCoords(n,t,e,c[g],c[g+1]))return!0;return!1}function r(n,o){return n?o?4:3:o?3:2}n.polygonIntersectsMultipoint=e,n.polygonIntersectsPoint=t,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

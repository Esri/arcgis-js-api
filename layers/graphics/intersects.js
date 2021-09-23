/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./contains"],(function(n,t){"use strict";function o(n,o,e,r){return t.polygonContainsPoint(n,o,e,r)}function e(n,o,e,i,s,u){const c=r(s,u),{coords:l,lengths:f}=i;for(let r=0,p=0;r<f.length;r++,p+=c)if(t.polygonContainsCoords(n,o,e,l[p],l[p+1]))return!0;return!1}function r(n,t){return n?t?4:3:t?3:2}n.polygonIntersectsMultipoint=e,n.polygonIntersectsPoint=o,Object.defineProperty(n,"__esModule",{value:!0})}));

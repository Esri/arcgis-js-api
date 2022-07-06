/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{polygonContainsPoint as n,polygonContainsCoords as t}from"./contains.js";function r(t,r,o,e){return n(t,r,o,e)}function o(n,r,o,u,c,f){const i=e(c,f),{coords:s,lengths:l}=u;for(let e=0,g=0;e<l.length;e++,g+=i)if(t(n,r,o,s[g],s[g+1]))return!0;return!1}function e(n,t){return n?t?4:3:t?3:2}export{o as polygonIntersectsMultipoint,r as polygonIntersectsPoint};

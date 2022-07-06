/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"./maybe.js";function n(r,n){for(const o of r.entries())if(n(o[0]))return!0;return!1}function o(n,o){const t=new Set;return r(n)&&n.forEach((r=>t.add(r))),r(o)&&o.forEach((r=>t.add(r))),t}export{n as someSet,o as union};

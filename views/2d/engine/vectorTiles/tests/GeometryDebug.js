/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n){const o=[];for(const t of n)o.push([t.x,-t.y]);return o}n.geomToJSON=function(n,t){let e;if(t){e=[];for(const o of t)e.push(n[o])}else e=n;const s=function(n){const t=[];for(const e of n)t.push(o(e));return{rings:t}}(e);return JSON.stringify(s)},Object.defineProperty(n,"__esModule",{value:!0})}));

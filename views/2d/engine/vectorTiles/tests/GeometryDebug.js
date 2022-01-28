/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function o(n,o){let e;if(o){e=[];for(const t of o)e.push(n[t])}else e=n;const s=t(e);return JSON.stringify(s)}function t(n){const o=[];for(const t of n)o.push(e(t));return{rings:o}}function e(n){const o=[];for(const t of n)o.push([t.x,-t.y]);return o}n.geomToJSON=o,Object.defineProperty(n,"__esModule",{value:!0})}));

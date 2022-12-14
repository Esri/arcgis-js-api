/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function n(o,n){let e;if(n){e=[];for(const t of n)e.push(o[t])}else e=o;const s=t(e);return JSON.stringify(s)}function t(o){const n=[];for(const t of o)n.push(e(t));return{rings:n}}function e(o){const n=[];for(const t of o)n.push([t.x,-t.y]);return n}o.geomToJSON=n,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

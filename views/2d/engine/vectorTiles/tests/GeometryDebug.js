/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,t){let r;if(t){r=[];for(const o of t)r.push(n[o])}else r=n;const s=o(r);return JSON.stringify(s)}function o(n){const o=[];for(const r of n)o.push(t(r));return{rings:o}}function t(n){const o=[];for(const t of n)o.push([t.x,-t.y]);return o}export{n as geomToJSON};

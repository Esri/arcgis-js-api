/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,t){for(const[r,o]of n)if(t(o,r))return!0;return!1}function t(n,t){for(const[r,o]of n)if(t(o,r))return o;return null}function r(n,t,r){const o=n.get(t);if(void 0!==o)return o;const u=r();return n.set(t,u),u}function o(n){const t=n.values().next();return!0!==t.done?t.value:null}export{t as findInMap,o as first,r as getOrCreateMapValue,n as someMap};

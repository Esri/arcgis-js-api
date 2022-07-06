/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createEffectWithInitialValues as t}from"./effects.js";function n(t,n){const e=t.length>n.length?t:n;return(t.length>n.length?n:t).every(((t,n)=>t.type===e[n].type))}function e(n,e){const h=n.length>e.length?n:e,l=n.length>e.length?e:n;for(let g=l.length;g<h.length;g++)l.push(t(h[g]))}function h(t){const n=t[0];return!!n&&"type"in n}export{n as canInterpolateEffects,h as isEffectFunctions,e as normalizeEffects};

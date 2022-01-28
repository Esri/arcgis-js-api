/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./effects"],(function(e,t){"use strict";function n(e,t){const n=e.length>t.length?e:t;return(e.length>t.length?t:e).every(((e,t)=>e.type===n[t].type))}function c(e,n){const c=e.length>n.length?e:n,f=e.length>n.length?n:e;for(let l=f.length;l<c.length;l++)f.push(t.createEffectWithInitialValues(c[l]))}function f(e){const t=e[0];return!!t&&"type"in t}e.canInterpolateEffects=n,e.isEffectFunctions=f,e.normalizeEffects=c,Object.defineProperty(e,"__esModule",{value:!0})}));

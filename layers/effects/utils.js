/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./effects"],(function(e,t){"use strict";function n(e,t){const n=e.length>t.length?e:t;return(e.length>t.length?t:e).every(((e,t)=>e.type===n[t].type))}function l(e,n){const l=e.length>n.length?e:n,c=e.length>n.length?n:e;for(let f=c.length;f<l.length;f++)c.push(t.createEffectWithInitialValues(l[f]))}function c(e){const t=e[0];return!!t&&"type"in t}e.canInterpolateEffects=n,e.isEffectFunctions=c,e.normalizeEffects=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

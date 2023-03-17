/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./effects"],(function(t,e){"use strict";function n(t,e){const n=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===n[e].type))}function l(t,n){const l=t.length>n.length?t:n,c=t.length>n.length?n:t;for(let f=c.length;f<l.length;f++)c.push(e.createEffectWithInitialValues(l[f]))}function c(t){const e=t[0];return!!e&&"type"in e}t.canInterpolateEffects=n,t.isEffectFunctions=c,t.normalizeEffects=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe","../../../../chunks/vec4","../../../../chunks/vec4f64"],(function(e,n,t,o){"use strict";function c(e){return n.isNone(e)?o.ZEROS:4===e.length?e:t.set(r,e[0],e[1],e[2],1)}const r=o.create();e.ensureColor4=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

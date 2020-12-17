/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../object","./property"],(function(e,r,t){"use strict";e.reader=function(e,o,a){let c,d;return void 0===o||Array.isArray(o)?(d=e,a=o,c=[void 0]):(d=o,c=Array.isArray(e)?e:[e]),(e,o)=>{const s=e.constructor.prototype;c.forEach((c=>{const n=t.propertyJSONMeta(e,c,d);n.read&&"object"!=typeof n.read&&(n.read={}),r.setDeepValue("read.reader",s[o],n),a&&(n.read.source=(n.read.source||[]).concat(a))}))}},Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./property"],(function(r,e){"use strict";function o(r,o,t){let a,c;return void 0===o||Array.isArray(o)?(c=r,t=o,a=[void 0]):(c=o,a=Array.isArray(r)?r:[r]),(r,o)=>{const d=r.constructor.prototype;a.forEach((a=>{const n=e.propertyJSONMeta(r,a,c);n.read&&"object"==typeof n.read||(n.read={}),n.read.reader=d[o],t&&(n.read.source=(n.read.source||[]).concat(t))}))}}r.reader=o,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

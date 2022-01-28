/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./property"],(function(t,r){"use strict";function e(t,e,o){let i,n;return void 0===e?(n=t,i=[void 0]):"string"!=typeof e?(n=t,i=[void 0],o=e):(n=e,i=Array.isArray(t)?t:[t]),(t,e)=>{const c=t.constructor.prototype;for(const p of i){const i=r.propertyJSONMeta(t,p,n);i.write&&"object"==typeof i.write||(i.write={}),o&&(i.write.target=o),i.write.writer=c[e]}}}t.writer=e,Object.defineProperty(t,"__esModule",{value:!0})}));

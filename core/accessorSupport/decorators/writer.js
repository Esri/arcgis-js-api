/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./property"],(function(t,e){"use strict";function r(t,r,o){let i,n;return void 0===r?(n=t,i=[void 0]):"string"!=typeof r?(n=t,i=[void 0],o=r):(n=r,i=Array.isArray(t)?t:[t]),(t,r)=>{const s=t.constructor.prototype;for(const c of i){const i=e.propertyJSONMeta(t,c,n);i.write&&"object"==typeof i.write||(i.write={}),o&&(i.write.target=o),i.write.writer=s[r]}}}t.writer=r,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

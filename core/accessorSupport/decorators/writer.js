/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../object","./property"],(function(e,t,r){"use strict";e.writer=function(e,o,i){let p,c;return void 0===o?(c=e,p=[void 0]):"string"!=typeof o?(c=e,p=[void 0],i=o):(c=o,p=Array.isArray(e)?e:[e]),(e,o)=>{const n=e.constructor.prototype;p.forEach((p=>{const s=r.propertyJSONMeta(e,p,c);s.write&&"object"!=typeof s.write&&(s.write={}),i&&t.setDeepValue("write.target",i,s),t.setDeepValue("write.writer",n[o],s)}))}},Object.defineProperty(e,"__esModule",{value:!0})}));

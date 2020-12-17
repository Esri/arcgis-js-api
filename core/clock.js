/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./global"],(function(e,t){"use strict";function r(e){return{setTimeout:(t,r)=>{const o=e.setTimeout(t,r);return{remove:()=>e.clearTimeout(o)}}}}var o=r(t);e.default=o,e.wrap=r,Object.defineProperty(e,"__esModule",{value:!0})}));

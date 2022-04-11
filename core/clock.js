/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return{setTimeout:(t,o)=>{const r=e.setTimeout(t,o);return{remove:()=>e.clearTimeout(r)}}}}const o=t(globalThis);e.clock=o,e.wrap=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

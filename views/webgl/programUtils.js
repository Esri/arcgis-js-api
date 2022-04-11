/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){let n="";for(const o in e){const t=e[o];if("boolean"==typeof t)t&&(n+=`#define ${o}\n`);else if("number"==typeof t)n+=`#define ${o} ${t.toFixed()}\n`;else if("object"==typeof t){const e=t.options;let i=0;for(const o in e)n+=`#define ${e[o]} ${(i++).toFixed()}\n`;n+=`#define ${o} ${e[t.value]}\n`}}return n}e.glslifyDefineMap=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

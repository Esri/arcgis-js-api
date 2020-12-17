/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Program"],(function(e,n){"use strict";e.createProgram=function(e,t,o,r){o=o||{},r=r||"";const f="function"==typeof t.shaders?t.shaders(o):t.shaders;return new n(e,r+f.vertexShader,r+f.fragmentShader,t.attributes)},e.glslifyDefineMap=function(e){let n="";for(const t in e){const o=e[t];if("boolean"==typeof o)o&&(n+=`#define ${t}\n`);else if("number"==typeof o)n+=`#define ${t} ${o.toFixed()}\n`;else if("object"==typeof o){const e=o.options;let r=0;for(const t in e)n+=`#define ${e[t]} ${(r++).toFixed()}\n`;n+=`#define ${t} ${e[o.value]}\n`}}return n},Object.defineProperty(e,"__esModule",{value:!0})}));

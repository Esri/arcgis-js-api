/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./has"],(function(e,n){"use strict";const t=new Set;function r(e,r,i={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:o,see:c,warnOnce:a}=i;let d=r;n&&(d+=`\n\t🛠️ Replacement: ${n}`),o&&(d+=`\n\t⚙️ Version: ${o}`),c&&(d+=`\n\t🔗 See ${c} for more details.`),function(e,n,r=!1){r&&t.has(n)||(r&&t.add(n),e.warn(`🛑 DEPRECATED - ${n}`))}(e,d,a)}}e.deprecated=r,e.deprecatedFunction=function(e,t,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;r(e,`Function: ${(n?n+"::":"")+t+"()"}`,i)}},e.deprecatedModule=function(e,t,i={}){n("esri-deprecation-warnings")&&r(e,`Module: ${t}`,i)},e.deprecatedProperty=function(e,t,i={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=i;r(e,`Property: ${(n?n+"::":"")+t}`,i)}},Object.defineProperty(e,"__esModule",{value:!0})}));

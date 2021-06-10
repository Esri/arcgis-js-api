/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./has"],(function(e,n){"use strict";const t=new Set;function r(e,n,r=!1){r&&t.has(n)||(r&&t.add(n),e.warn(`🛑 DEPRECATED - ${n}`))}function i(e,t,r={}){n("esri-deprecation-warnings")&&a(e,`Module: ${t}`,r)}function o(e,t,r={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=r;a(e,`Function: ${(n?n+"::":"")+t+"()"}`,r)}}function c(e,t,r={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=r;a(e,`Property: ${(n?n+"::":"")+t}`,r)}}function a(e,t,i={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:o,see:c,warnOnce:a}=i;let d=t;n&&(d+=`\n\t🛠️ Replacement: ${n}`),o&&(d+=`\n\t⚙️ Version: ${o}`),c&&(d+=`\n\t🔗 See ${c} for more details.`),r(e,d,a)}}e.deprecated=a,e.deprecatedFunction=o,e.deprecatedModule=i,e.deprecatedProperty=c,Object.defineProperty(e,"__esModule",{value:!0})}));

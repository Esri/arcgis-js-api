/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./has"],(function(e,n){"use strict";const t=new Set;function r(e,n,r=!1){r&&t.has(n)||(r&&t.add(n),e.warn(`🛑 DEPRECATED - ${n}`))}function o(e,t,r={}){n("esri-deprecation-warnings")&&a(e,`Module: ${t}`,r)}function i(e,t,r={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=r;a(e,`Function: ${(n?n+"::":"")+t+"()"}`,r)}}function c(e,t,r={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=r;a(e,`Property: ${(n?n+"::":"")+t}`,r)}}function a(e,t,o={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:i,see:c,warnOnce:a}=o;let d=t;n&&(d+=`\n\t🛠️ Replacement: ${n}`),i&&(d+=`\n\t⚙️ Version: ${i}`),c&&(d+=`\n\t🔗 See ${c} for more details.`),r(e,d,a)}}e.deprecated=a,e.deprecatedFunction=i,e.deprecatedModule=o,e.deprecatedProperty=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

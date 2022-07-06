/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import n from"./has.js";const e=new Set;function i(n,i,o=!1){o&&e.has(i)||(o&&e.add(i),n.warn(`🛑 DEPRECATED - ${i}`))}function o(e,i,o={}){n("esri-deprecation-warnings")&&s(e,`Module: ${i}`,o)}function t(e,i,o={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=o;s(e,`Function: ${(n?n+"::":"")+i+"()"}`,o)}}function r(e,i,o={}){if(n("esri-deprecation-warnings")){const{moduleName:n}=o;s(e,`Property: ${(n?n+"::":"")+i}`,o)}}function s(e,o,t={}){if(n("esri-deprecation-warnings")){const{replacement:n,version:r,see:s,warnOnce:a}=t;let c=o;n&&(c+=`\n\t🛠️ Replacement: ${n}`),r&&(c+=`\n\t⚙️ Version: ${r}`),s&&(c+=`\n\t🔗 See ${s} for more details.`),i(e,c,a)}}export{s as deprecated,t as deprecatedFunction,o as deprecatedModule,r as deprecatedProperty};

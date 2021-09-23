/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/Error","../../core/maybe","../../symbols/support/symbolConversion"],(function(e,r,n,o,t){"use strict";function s(e){return o.isNone(e)||"simple"===e.type||"unique-value"===e.type||"class-breaks"===e.type||"dictionary"===e.type}function u(e){if(o.isNone(e))return null;if(!s(e))return new n("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return i(e);case"unique-value":return a(e);case"class-breaks":return c(e);case"dictionary":return null}return null}function l(e,r){if(!r)return null;let o;if(o=Array.isArray(r)?r:[r],o.length>0){const r=o.map((e=>e.details.symbol.type||e.details.symbol.declaredClass)).filter((e=>!!e));r.sort();const t=[];return r.forEach(((e,n)=>{0!==n&&e===r[n-1]||t.push(e)})),new n("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${t.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:o})}return null}function i(e){return l(e,t.to3D(e.symbol).error)}function a(e){const r=e.uniqueValueInfos.map((e=>t.to3D(e.symbol).error)).filter((e=>!!e)),n=t.to3D(e.defaultSymbol);return n.error&&r.unshift(n.error),l(e,r)}function c(e){const r=e.classBreakInfos.map((e=>t.to3D(e.symbol).error)).filter((e=>!!e)),n=t.to3D(e.defaultSymbol);return n.error&&r.unshift(n.error),l(e,r)}e.isSupportedRenderer3D=s,e.validateTo3D=u,Object.defineProperty(e,"__esModule",{value:!0})}));

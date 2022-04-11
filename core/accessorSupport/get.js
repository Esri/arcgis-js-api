/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./utils"],(function(t,e){"use strict";function r(t,r){const n="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=r.getItemAt||Array.isArray(r)){const t=parseInt(n,10);if(!isNaN(t))return Array.isArray(r)?r[t]:r.getItemAt(t)}const i=e.getProperties(r);return e.isPropertyDeclared(i,n)?i.get(n):r[n]}function n(t,e,i){if(null==t)return t;const o=r(e[i],t);return!o&&i<e.length-1?void 0:i===e.length-1?o:n(o,e,i+1)}function i(t,i,o=0){return"string"==typeof i&&-1===i.indexOf(".")?r(i,t):n(t,e.pathToArray(i),o)}function o(t,e){return i(t,e)}function u(t,e){return void 0!==i(e,t)}t.exists=u,t.get=o,t.valueOf=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

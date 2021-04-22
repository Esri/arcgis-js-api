/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(){return function(e,n){if(!e[n])throw new TypeError(`Cannot auto bind undefined function '${n}'`);return{value:r(e[n])}}}function t(e){const{type:n}=e;return e instanceof KeyboardEvent||"keyup"===n||"keydown"===n||"keypress"===n}function r(e){return function(n,...r){t(n)?"Enter"!==n.key&&" "!==n.key||(n.preventDefault(),n.stopPropagation(),n.target.click()):e.call(this,n,...r)}}e.accessibleHandler=n,Object.defineProperty(e,"__esModule",{value:!0})}));

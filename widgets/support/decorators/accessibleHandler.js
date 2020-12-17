/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.accessibleHandler=function(){return function(e,n){if(!e[n])throw new TypeError(`Cannot auto bind undefined function '${n}'`);return{value:(t=e[n],function(e,...n){!function(e){const{type:n}=e;return e instanceof KeyboardEvent||"keyup"===n||"keydown"===n||"keypress"===n}(e)?t.call(this,e,...n):"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),e.target.click())})};var t}},Object.defineProperty(e,"__esModule",{value:!0})}));

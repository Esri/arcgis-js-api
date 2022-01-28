/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../widgetUtils"],(function(e,n){"use strict";function t(){return function(e,n){if(!e[n])throw new TypeError(`Cannot auto bind undefined function '${n}'`);return{value:o(e[n])}}}function i(e){const{type:n}=e;return e instanceof KeyboardEvent||"keyup"===n||"keydown"===n||"keypress"===n}function o(e){return function(t,...o){i(t)?n.isActivationKey(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click()):e.call(this,t,...o)}}e.accessibleHandler=t,Object.defineProperty(e,"__esModule",{value:!0})}));

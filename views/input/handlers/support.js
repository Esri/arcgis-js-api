/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e){switch(e){case"primary":return"touch"===t.pointerType||0===t.button;case"secondary":return"touch"!==t.pointerType&&2===t.button;case"tertiary":return"touch"!==t.pointerType&&1===t.button}}function r(t,e){if("touch"===t.pointerType)return!1;switch(e){case"primary":return 0===t.button;case"secondary":return 2===t.button;case"tertiary":return 1===t.button}}t.eventMatchesMousePointerAction=r,t.eventMatchesPointerAction=e,Object.defineProperty(t,"__esModule",{value:!0})}));

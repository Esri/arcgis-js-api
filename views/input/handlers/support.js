/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,r){switch(r){case"primary":return"touch"===t.pointerType||0===t.button;case"secondary":return"touch"!==t.pointerType&&2===t.button;case"tertiary":return"touch"!==t.pointerType&&1===t.button}}function r(t,r){if("touch"===t.pointerType)return!1;switch(r){case"primary":return 0===t.button;case"secondary":return 2===t.button;case"tertiary":return 1===t.button}}export{r as eventMatchesMousePointerAction,t as eventMatchesPointerAction};

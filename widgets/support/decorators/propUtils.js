/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){return e.split(",").map((e=>e.trim()))}function t(e,n){return e.map((e=>r(e,n)))}function r(e,n){return 0===e.indexOf(n)?e:`${n}.${e}`}e.normalizePropNames=t,e.splitProps=n,Object.defineProperty(e,"__esModule",{value:!0})}));

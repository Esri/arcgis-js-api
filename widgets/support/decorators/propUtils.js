/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.normalizePropNames=function(e,n){return e.map((e=>function(e,n){if(0===e.indexOf(n))return e;return`${n}.${e}`}(e,n)))},e.splitProps=function(e){return e.split(",").map((e=>e.trim()))},Object.defineProperty(e,"__esModule",{value:!0})}));

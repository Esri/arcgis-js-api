/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return e.split(",").map((e=>e.trim()))}function n(e,t){return e.map((e=>r(e,t)))}function r(e,t){return 0===e.indexOf(t)?e:`${t}.${e}`}e.normalizePropNames=n,e.splitProps=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

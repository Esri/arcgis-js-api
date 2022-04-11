/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){return e&&"number"==typeof e.x&&"number"==typeof e.y}function t(e){return e&&"number"==typeof e.xmin&&"number"==typeof e.ymin&&"number"==typeof e.xmax&&"number"==typeof e.ymax}function i(e){return e?e.clone().normalize():null}function o(e){return e?e.shiftCentralMeridian():null}e.isValidExtent=t,e.isValidLocation=n,e.normalizeExtent=o,e.normalizePoint=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

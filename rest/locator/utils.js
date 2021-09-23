/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(n){return n&&"number"==typeof n.x&&"number"==typeof n.y}function t(n){return n&&"number"==typeof n.xmin&&"number"==typeof n.ymin&&"number"==typeof n.xmax&&"number"==typeof n.ymax}function r(n){return n?n.clone().normalize():null}function i(n){return n?n.shiftCentralMeridian():null}n.isValidExtent=t,n.isValidLocation=e,n.normalizeExtent=i,n.normalizePoint=r,Object.defineProperty(n,"__esModule",{value:!0})}));

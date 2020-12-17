/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";n.isValidExtent=function(n){return n&&"number"==typeof n.xmin&&"number"==typeof n.ymin&&"number"==typeof n.xmax&&"number"==typeof n.ymax},n.isValidLocation=function(n){return n&&"number"==typeof n.x&&"number"==typeof n.y},n.normalizeExtent=function(n){return n?n.shiftCentralMeridian():null},n.normalizePoint=function(n){return n?n.clone().normalize():null},Object.defineProperty(n,"__esModule",{value:!0})}));

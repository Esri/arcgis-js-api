/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.isSpatialReferenceSupported=function(e,i){return null!=e&&("2d"===i||("local"===i?!e.isGeographic:e.isWebMercator||e.isWGS84||4490===e.wkid||104971===e.wkid||104905===e.wkid||104903===e.wkid))},Object.defineProperty(e,"__esModule",{value:!0})}));

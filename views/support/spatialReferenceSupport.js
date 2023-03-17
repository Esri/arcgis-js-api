/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/SupportedGCSWkids","../ViewingMode"],(function(e,i,S){"use strict";function d(e,d){return null!=e&&(null==d||(d===S.ViewingMode.Local?!e.isGeographic||(e.isWGS84||e.wkid===i.SupportedGCSWkids.CGCS2000):e.isWebMercator||e.isWGS84||e.wkid===i.SupportedGCSWkids.CGCS2000||e.wkid===i.SupportedGCSWkids.GCSMARS2000||e.wkid===i.SupportedGCSWkids.GCSMARS2000_SPHERE||e.wkid===i.SupportedGCSWkids.GCSMOON2000))}e.isSpatialReferenceSupported=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

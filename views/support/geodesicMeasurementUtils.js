/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/geodesicUtils","../../geometry/support/spatialReferenceUtils"],(function(e,o,i){"use strict";function t(e,t,r,p,...s){return i.isGeographic(e)&&o.isSupported(e)?t.apply(void 0,s):i.isWebMercator(e)?r.apply(void 0,s):p.apply(void 0,s)}e.geodesicMeasure=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

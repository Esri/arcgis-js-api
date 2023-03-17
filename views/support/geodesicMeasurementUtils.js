/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../geometry/support/geodesicUtils","../../geometry/support/spatialReferenceUtils"],(function(e,o,t){"use strict";function i(e,i,r,p,...s){return t.isGeographic(e)&&o.isSupported(e)?i.apply(void 0,s):t.isWebMercator(e)?r.apply(void 0,s):p.apply(void 0,s)}e.geodesicMeasure=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

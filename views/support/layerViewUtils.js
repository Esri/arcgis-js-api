/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,n){"use strict";function t(e){return e&&"function"==typeof e.highlight}function c(e){return e&&"function"==typeof e.maskOccludee}function i(e,t,c){return n.isNone(e)||e>c&&(0===t||e<t)}function o(e,t){return n.isSome(e)&&e>0||n.isSome(t)&&t>0}function u(e){const n=e.effectiveScaleRange;return{minScale:n?.minScale??0,maxScale:n?.maxScale??0}}e.extractSafeScaleBounds=u,e.highlightsSupported=t,e.isScaleRangeActive=o,e.occludeesSupported=c,e.scaleBoundsPredicate=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

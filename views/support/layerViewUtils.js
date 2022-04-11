/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,n){"use strict";function t(e){return e&&"function"==typeof e.highlight}function c(e){return e&&"function"==typeof e.maskOccludee}function u(e,t,c){return n.isNone(e)||e>c&&(0===t||e<t)}function i(e,n){return e>0||n>0}function o(e){var n,t;const c=e.effectiveScaleRange;return{minScale:null!=(n=null==c?void 0:c.minScale)?n:0,maxScale:null!=(t=null==c?void 0:c.maxScale)?t:0}}e.extractSafeScaleBounds=o,e.highlightsSupported=t,e.isScaleRangeActive=i,e.occludeesSupported=c,e.scaleBoundsPredicate=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

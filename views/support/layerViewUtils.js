/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,t){"use strict";function n(e){return e&&"function"==typeof e.highlight}function c(e){return e&&"function"==typeof e.maskOccludee}function u(e,n,c){return t.isNone(e)||e>c&&(0===n||e<n)}function o(e){let{minScale:t,maxScale:n}=e;return t=t||0,n=n||0,{minScale:t,maxScale:n}}e.extractSafeScaleBounds=o,e.highlightsSupported=n,e.occludeesSupported=c,e.scaleBoundsPredicate=u,Object.defineProperty(e,"__esModule",{value:!0})}));

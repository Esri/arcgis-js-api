/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe"],(function(e,t){"use strict";e.extractSafeScaleBounds=function(e){let{minScale:t,maxScale:n}=e;return t=t||0,n=n||0,{minScale:t,maxScale:n}},e.highlightsSupported=function(e){return e&&"function"==typeof e.highlight},e.occludeesSupported=function(e){return e&&"function"==typeof e.maskOccludee},e.scaleBoundsPredicate=function(e,n,c){return t.isNone(e)||e>c&&(0===n||e<n)},Object.defineProperty(e,"__esModule",{value:!0})}));

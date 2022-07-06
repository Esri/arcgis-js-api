/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as n}from"../../core/maybe.js";function e(n){return n&&"function"==typeof n.highlight}function t(n){return n&&"function"==typeof n.maskOccludee}function c(e,t,c){return n(e)||e>c&&(0===t||e<t)}function o(n,e){return n>0||e>0}function r(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}export{r as extractSafeScaleBounds,e as highlightsSupported,o as isScaleRangeActive,t as occludeesSupported,c as scaleBoundsPredicate};

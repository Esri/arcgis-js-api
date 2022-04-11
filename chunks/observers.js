/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils"],(function(e,n){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */function t(e,t,i){const o=r(e);return n.Build.isBrowser?new o(t,i):void 0}function r(e){return"intersection"===e?window.IntersectionObserver:"mutation"===e?window.MutationObserver:window.ResizeObserver}e.createObserver=t}));

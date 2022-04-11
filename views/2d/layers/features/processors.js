/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,o){"use strict";const r=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));function t(o){return new Promise("heatmap"===o?(o,t)=>e(["./processors/HeatmapProcessor"],(e=>o(r(e))),t):(o,t)=>e(["./processors/SymbolProcessor"],(e=>o(r(e))),t))}o.loadProcessorModule=t,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports"],(function(e,o){"use strict";const r=e=>Object.freeze({__proto__:null,default:e});function s(o){return new Promise("heatmap"===o?(o,s)=>e(["./processors/HeatmapProcessor"],(e=>o(r(e))),s):(o,s)=>e(["./processors/SymbolProcessor"],(e=>o(r(e))),s))}o.loadProcessorModule=s,Object.defineProperty(o,"__esModule",{value:!0})}));

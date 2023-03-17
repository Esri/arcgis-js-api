/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/HeatmapColorStop"],(function(o,e){"use strict";function t(o){if(!o.colorStops)return[];const t=[...o.colorStops].filter((o=>o.color?.a>0));let r=t.length-1;if(t&&t[0]){const o=t[r];o&&1!==o.ratio&&(t.push(new e({ratio:1,color:o.color})),r++)}return t.map(((e,t)=>{let l="";return 0===t?l=o.legendOptions?.minLabel||"low":t===r&&(l=o.legendOptions?.maxLabel||"high"),{color:e.color,label:l,ratio:e.ratio}})).reverse()}o.getHeatmapRampStops=t,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));

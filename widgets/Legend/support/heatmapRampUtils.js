/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/HeatmapColorStop"],(function(e,o){"use strict";function t(e){if(!e.colorStops)return[];const t=[...e.colorStops].filter((e=>e.color?.a>0));let r=t.length-1;if(t&&t[0]){const e=t[r];e&&1!==e.ratio&&(t.push(new o({ratio:1,color:e.color})),r++)}return t.map(((o,t)=>{let l="";return 0===t?l=e.legendOptions?.minLabel||"low":t===r&&(l=e.legendOptions?.maxLabel||"high"),{color:o.color,label:l,ratio:o.ratio}})).reverse()}e.getHeatmapRampStops=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

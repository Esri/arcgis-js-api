/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../../../renderers/support/HeatmapColorStop.js";function r(r){if(!r.colorStops)return[];const e=[...r.colorStops].filter((o=>o.color?.a>0));let t=e.length-1;if(e&&e[0]){const r=e[t];r&&1!==r.ratio&&(e.push(new o({ratio:1,color:r.color})),t++)}return e.map(((o,e)=>{let l="";return 0===e?l=r.legendOptions?.minLabel||"low":e===t&&(l=r.legendOptions?.maxLabel||"high"),{color:o.color,label:l,ratio:o.ratio}})).reverse()}export{r as getHeatmapRampStops};

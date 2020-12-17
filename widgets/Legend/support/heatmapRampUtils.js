/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/HeatmapColorStop"],(function(e,o){"use strict";e.getHeatmapRampStops=function(e){let r=e.colorStops,t=r.length-1;if(r&&r[0]){const e=r[t];e&&1!==e.ratio&&(r=r.slice(0),r.push(new o({ratio:1,color:e.color})),t++)}return r.map(((e,o)=>{let r="";return 0===o?r="low":o===t&&(r="high"),{color:e.color,label:r,ratio:e.ratio}})).reverse()},Object.defineProperty(e,"__esModule",{value:!0})}));

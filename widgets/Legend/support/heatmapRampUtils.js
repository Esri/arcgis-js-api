/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../renderers/support/HeatmapColorStop"],(function(e,o){"use strict";function t(e){let t=e.colorStops,r=t.length-1;if(t&&t[0]){const e=t[r];e&&1!==e.ratio&&(t=t.slice(0),t.push(new o({ratio:1,color:e.color})),r++)}return t.map(((e,o)=>{let t="";return 0===o?t="low":o===r&&(t="high"),{color:e.color,label:t,ratio:e.ratio}})).reverse()}e.getHeatmapRampStops=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

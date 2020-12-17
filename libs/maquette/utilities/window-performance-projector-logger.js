/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";if(window.performance&&window.performance.measure){const r=window.performance;let n;e.windowPerformanceProjectorLogger=e=>{switch(r.mark(e),e){case"domEventProcessed":r.measure("eventHandler","domEvent","domEventProcessed");break;case"renderDone":r.measure("renderCycle","renderStart","renderDone");break;case"rendered":r.measure("render",n,"rendered");break;case"patched":r.measure("diff+patch","rendered","patched")}n=e}}else e.windowPerformanceProjectorLogger=()=>{};Object.defineProperty(e,"__esModule",{value:!0})}));

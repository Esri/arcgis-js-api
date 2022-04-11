/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";if(e.windowPerformanceProjectorLogger=void 0,window.performance&&window.performance.measure){let r,o=window.performance;e.windowPerformanceProjectorLogger=(e,n)=>{switch(o.mark(e),e){case"domEventProcessed":o.measure("eventHandler","domEvent","domEventProcessed");break;case"renderDone":o.measure("renderCycle","renderStart","renderDone");break;case"rendered":o.measure("render",r,"rendered");break;case"patched":o.measure("diff+patch","rendered","patched")}r=e}}else e.windowPerformanceProjectorLogger=()=>{};Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

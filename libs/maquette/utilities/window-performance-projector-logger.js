/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";if(window.performance&&window.performance.measure){let r,n=window.performance;e.windowPerformanceProjectorLogger=(e,d)=>{switch(n.mark(e),e){case"domEventProcessed":n.measure("eventHandler","domEvent","domEventProcessed");break;case"renderDone":n.measure("renderCycle","renderStart","renderDone");break;case"rendered":n.measure("render",r,"rendered");break;case"patched":n.measure("diff+patch","rendered","patched")}r=e}}else e.windowPerformanceProjectorLogger=()=>{};Object.defineProperty(e,"__esModule",{value:!0})}));

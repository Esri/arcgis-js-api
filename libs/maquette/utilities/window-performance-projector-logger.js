/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let e;if(window.performance&&window.performance.measure){let r,d=window.performance;e=(e,a)=>{switch(d.mark(e),e){case"domEventProcessed":d.measure("eventHandler","domEvent","domEventProcessed");break;case"renderDone":d.measure("renderCycle","renderStart","renderDone");break;case"rendered":d.measure("render",r,"rendered");break;case"patched":d.measure("diff+patch","rendered","patched")}r=e}}else e=()=>{};export{e as windowPerformanceProjectorLogger};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/promiseUtils","../WebStyleSymbol","../../chunks/symbols","./cimAnalyzer","./ExpandedCIM"],(function(e,a,n,r,t,y){"use strict";const l=async(e,a)=>new y.ExpandedCIM(await t.analyzeCIMSymbol(e.data,a),e.data,e.rendererKey),d=async(e,a,r)=>{if(!e)return null;if("cim"===e.type)return l(e,a);if("web-style"===e.type){const t=n.fromJSON(e),y={type:"cim",data:(await t.fetchCIMSymbol(r)).data,rendererKey:e.rendererKey};return l(y,a)}return e};e.expandSymbol=d,e.expandSymbols=async(e,n,r)=>a.all(e.map((e=>d(e,n,r)))),Object.defineProperty(e,"__esModule",{value:!0})}));

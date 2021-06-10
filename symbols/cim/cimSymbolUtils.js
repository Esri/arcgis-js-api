/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../WebStyleSymbol","../../symbols","./cimAnalyzer","./ExpandedCIM"],(function(e,a,n,r,t){"use strict";const y=async(e,a,n)=>Promise.all(e.map((e=>i(e,a,n)))),d=async(e,a)=>new t.ExpandedCIM(await r.analyzeCIMSymbol(e.data,a),e.data,e.rendererKey,e.maxVVSize),i=async(e,n,r)=>{if(!e)return null;if("cim"===e.type)return d(e,n);if("web-style"===e.type){const t=a.fromJSON(e),y={type:"cim",data:(await t.fetchCIMSymbol(r)).data,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return d(y,n)}return e};e.expandSymbol=i,e.expandSymbols=y,Object.defineProperty(e,"__esModule",{value:!0})}));

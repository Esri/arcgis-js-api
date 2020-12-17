/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./promiseUtils"],(function(r,e){"use strict";r.assertResult=function(r){if(!0===r.ok)return r.value;throw r.error},r.forEach=function(r,t,o){return e.eachAlways(r.map(((r,e)=>t.apply(o,[r,e]))))},r.map=function(r,t,o){return e.eachAlways(r.map(((r,e)=>t.apply(o,[r,e])))).then((r=>r.map((r=>r.value))))},r.result=function(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))},r.resultOrAbort=function(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>{e.throwIfAbortError(r);return{ok:!1,error:r}}))},Object.defineProperty(r,"__esModule",{value:!0})}));

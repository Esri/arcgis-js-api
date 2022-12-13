/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";let t=function(){function o(o){this._allocations=new Map,o?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}var t=o.prototype;return t.add=function(o){this._allocations.set(o,(new Error).stack)},t.remove=function(o){this._allocations.delete(o)},t.print=function(){if(this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const o=new Map;this._allocations.forEach((t=>{o.set(t,(o.get(t)??0)+1)})),o.forEach(((o,t)=>{const e=t.split("\n");e.shift(),e.shift(),console.log(`${o}: ${e.shift()}`),e.forEach((o=>console.log("   ",o)))}))}},o}();o.AllocationTracer=t,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class o{constructor(o){this._allocations=new Map,o?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}add(o){this._allocations.set(o,(new Error).stack)}remove(o){this._allocations.delete(o)}print(){if(this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const o=new Map;this._allocations.forEach((s=>{o.set(s,(o.get(s)??0)+1)})),o.forEach(((o,s)=>{const t=s.split("\n");t.shift(),t.shift(),console.log(`${o}: ${t.shift()}`),t.forEach((o=>console.log("   ",o)))}))}}}export{o as AllocationTracer};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(t,o){"use strict";let e=function(){function t(t){this._allocations=new Map,t?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}var e=t.prototype;return e.add=function(t){this._allocations.set(t,(new Error).stack)},e.remove=function(t){this._allocations.delete(t)},o._createClass(t,[{key:"information",get:function(){let t="";if(this._allocations.size>0){t+=`${this._allocations.size} live object allocations:\n`;const o=new Map;this._allocations.forEach((t=>{o.set(t,(o.get(t)??0)+1)})),o.forEach(((o,e)=>{const i=e.split("\n");i.shift(),i.shift(),t+=`${o}: ${i.shift()}\n`,i.forEach((o=>t+=`   ${o}\n`))}))}return t}}]),t}();t.AllocationTracer=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

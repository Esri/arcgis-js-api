/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/workers/WorkerHandle"],(function(e,r,t,n){"use strict";let o=function(e){function t(r=null){var t;return(t=e.call(this,"LercWorker","_decode",{_decode:e=>[e.buffer]},r,{strategy:"dedicated"})||this).schedule=r,t.ref=0,t}r._inheritsLoose(t,e);var n=t.prototype;return n.decode=function(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)},n.release=function(){--this.ref<=0&&(i.forEach(((e,r)=>{e===this&&i.delete(r)})),this.destroy())},t}(n.WorkerHandle);const i=new Map;function l(e=null){let r=i.get(t.unwrap(e));return r||(t.isSome(e)?(r=new o((r=>e.immediate.schedule(r))),i.set(e,r)):(r=new o,i.set(null,r))),++r.ref,r}e.acquireDecoder=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

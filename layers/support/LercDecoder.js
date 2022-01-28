/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/workers/WorkerHandle"],(function(e,r,t,n){"use strict";let o=function(e){function t(r=null){var t;return(t=e.call(this,"LercWorker","_decode",r,{strategy:"dedicated"})||this).schedule=r,t.ref=0,t}r._inheritsLoose(t,e);var n=t.prototype;return n.decode=function(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)},n.getTransferList=function(e){return[e.buffer]},n.release=function(){--this.ref<=0&&(s.forEach(((e,r)=>{e===this&&s.delete(r)})),this.destroy())},t}(n.WorkerHandle);const s=new Map;function u(e=null){let r=s.get(t.unwrap(e));return r||(t.isSome(e)?(r=new o((r=>e.schedule(r))),s.set(e,r)):(r=new o,s.set(null,r))),++r.ref,r}e.acquireDecoder=u,Object.defineProperty(e,"__esModule",{value:!0})}));

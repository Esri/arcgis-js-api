/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/workers/WorkerHandle"],(function(e,r,t){"use strict";let n=function(e){function t(r){var t;return(t=e.call(this,"LercWorker","_decode",r,{strategy:"dedicated"})||this).scheduler=r,t}r._inheritsLoose(t,e);var n=t.prototype;return n.decode=function(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)},n.getTransferList=function(e){return[e.buffer]},t}(t.WorkerHandle);const o=new Map;function s(e){let r=o.get(e);return r||(r={instance:new n(e),ref:0},o.set(e,r)),++r.ref,r.instance}function c(e){if(null==e)return;const r=e.scheduler,t=o.get(r);t&&--t.ref<=0&&(t.instance.destroy(),o.delete(r))}e.acquireDecoder=s,e.releaseDecoder=c,Object.defineProperty(e,"__esModule",{value:!0})}));

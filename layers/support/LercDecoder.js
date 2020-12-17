/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../views/3d/support/WorkerHandle"],(function(e,r,t,n){"use strict";let o=function(e){function n(r){var t;return(t=e.call(this,"LercWorker","_decode",r,{strategy:"dedicated"})||this).scheduler=r,t}r._inheritsLoose(n,e);var o=n.prototype;return o.decode=function(e,r,n){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},n):t.resolve(null)},o.getTransferList=function(e){return[e.buffer]},n}(n.WorkerHandle);const s=new Map;e.acquireDecoder=function(e){let r=s.get(e);return r||(r={instance:new o(e),ref:0},s.set(e,r)),++r.ref,r.instance},e.releaseDecoder=function(e){if(null==e)return;const r=e.scheduler,t=s.get(r);t&&--t.ref<=0&&(t.instance.destroy(),s.delete(r))},Object.defineProperty(e,"__esModule",{value:!0})}));

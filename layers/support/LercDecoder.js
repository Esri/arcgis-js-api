// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/promiseUtils","../../views/3d/support/WorkerHandle","@dojo/framework/shim/Promise"],(function(e,r,t,n,o){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(r){var t=e.call(this,"LercWorker","_decode",r,{strategy:"dedicated"})||this;return t.scheduler=r,t}return t.__extends(r,e),r.prototype.decode=function(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):n.resolve(null)},r.prototype.getTransferList=function(e){return[e.buffer]},r}(o.WorkerHandle),s=new Map;r.acquireInstance=function(e){var r=s.get(e);return r||(r={instance:new i(e),ref:0},s.set(e,r)),++r.ref,r.instance},r.releaseInstance=function(e){if(null!=e){var r=e.scheduler,t=s.get(r);t&&--t.ref<=0&&(t.instance.destroy(),s.delete(r))}}}));
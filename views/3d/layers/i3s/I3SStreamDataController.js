// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(e,t,r,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.requester=e,this.activeRequests=new Set}return Object.defineProperty(e.prototype,"busy",{get:function(){return this.requester.busy},enumerable:!0,configurable:!0}),e.prototype.request=function(e,t,n){var s=this,u=o.createAbortController();o.onAbortOrThrow(n,function(){return u.abort()}),n=r({},n,{signal:u.signal});var i=this.requester.request(e,t,n),a={response:i,abortController:u};return this.activeRequests.add(a),o.always(i,function(){return s.activeRequests.delete(a)}),i},e.prototype.cancelAll=function(){this.activeRequests.forEach(function(e){return e.abortController.abort()}),this.activeRequests.clear()},e}();t.I3SStreamDataController=n,t.default=n});
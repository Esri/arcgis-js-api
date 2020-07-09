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

define(["require","exports","tslib","../../../../core/promiseUtils"],(function(e,t,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.requester=e,this.activeRequests=new Set}return Object.defineProperty(e.prototype,"busy",{get:function(){return this.requester.busy},enumerable:!0,configurable:!0}),e.prototype.request=function(e,t,o){var s=this,i=n.createAbortController();n.onAbortOrThrow(o,(function(){return i.abort()})),o=r.__assign(r.__assign({},o),{signal:i.signal});var u=this.requester.request(e,t,o),a={response:u,abortController:i};return this.activeRequests.add(a),n.always(u,(function(){return s.activeRequests.delete(a)})),u},e.prototype.cancelAll=function(){this.activeRequests.forEach((function(e){return e.abortController.abort()})),this.activeRequests.clear()},e}();t.I3SStreamDataController=o,t.default=o}));
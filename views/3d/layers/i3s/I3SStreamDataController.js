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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/promiseUtils"],(function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I3SStreamDataController=void 0;var n=function(){function e(e){this.requester=e,this.activeRequests=new Set}return Object.defineProperty(e.prototype,"busy",{get:function(){return this.requester.busy},enumerable:!1,configurable:!0}),e.prototype.request=function(e,t,n){var a=this,l=o.createAbortController(),s=o.onAbortOrThrow(n,(function(){return l.abort()}));n=r.__assign(r.__assign({},n),{signal:l.signal});var i=this.requester.request(e,t,n),u={response:i,abortController:l,abortHandle:s};return this.activeRequests.add(u),o.always(i,(function(){var e;u.abortController=null,null===(e=u.abortHandle)||void 0===e||e.remove(),u.abortHandle=null,a.activeRequests.delete(u)})),i},e.prototype.cancelAll=function(){this.activeRequests.forEach((function(e){var t,r;null===(t=e.abortController)||void 0===t||t.abort(),e.abortController=null,null===(r=e.abortHandle)||void 0===r||r.remove()})),this.activeRequests.clear()},e}();t.I3SStreamDataController=n,t.default=n}));
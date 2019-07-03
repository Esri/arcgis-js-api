// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(e,t,r,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.requester=e,this.activeRequests=new Set}return e.prototype.request=function(e,t,n){var s=this,i=o.createAbortController();o.onAbortOrThrow(n,function(){return i.abort()}),n=r({},n,{signal:i.signal});var a=this.requester(e,t,n),u={response:a,abortController:i};return this.activeRequests.add(u),o.always(a,function(){return s.activeRequests.delete(u)}),a},e.prototype.cancelAll=function(){this.activeRequests.forEach(function(e){return e.abortController.abort()}),this.activeRequests.clear()},e}();t.I3SStreamDataController=n,t.default=n});
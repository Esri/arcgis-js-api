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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t,s){this._clientType=e,this._loader=t,this._activeRequests=null,s&&s.trackRequests&&(this._activeRequests=new Map)}return e.prototype.request=function(e,t,s){var i=this;if(void 0===s&&(s=e),this._activeRequests&&this._activeRequests.has(e))return null;var n=this._loader.request(e,t,this._clientType,s);if(this._activeRequests){this._activeRequests.set(s,n);var a=function(){return i._activeRequests.delete(s)};n.then(a,a)}return n},e.prototype.cancelRequest=function(e){this._loader.cancel(e)},e.prototype.cancelAll=function(){var e=this;this._activeRequests&&(this._activeRequests.forEach(function(t){return e._loader.cancel(t)}),this._activeRequests.clear())},e.prototype.hasPendingDownloads=function(){return this._loader.hasPendingDownloads()},e}();t.StreamDataSupplier=s,t.default=s});
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(e,t){return function(){function e(e,t,s){this._clientType=e,this._loader=t,this._activeRequests=null,s&&s.trackRequests&&(this._activeRequests=new Map)}return e.prototype.request=function(e,t){var s=this,i=this._loader.request(e,t,this._clientType);if(this._activeRequests){this._activeRequests.set(e,i);var n=function(){s._activeRequests.delete(e)};i.then(n,n)}return i},e.prototype.cancelRequest=function(e){this._loader.cancel(e)},e.prototype.cancelAll=function(){var e=this;this._activeRequests&&(this._activeRequests.forEach(function(t){e._loader.cancel(t)}),this._activeRequests.clear())},e.prototype.hasPendingDownloads=function(){return this._loader.hasPendingDownloads()},e}()});
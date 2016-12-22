// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var s=function(){function e(e,t,s){this._clientType=e,this._loader=t,this._activeRequests=null,this._addUrlToken=s&&s.addUrlToken,s&&s.trackRequests&&(this._activeRequests=new Map)}return e.prototype.request=function(e,t,s){var i=this,n=this._loader.request(e,t,this._clientType,s,this._addUrlToken);if(this._activeRequests){this._activeRequests.set(e,n);var r=function(){i._activeRequests["delete"](e)};n.then(r,r)}return n},e.prototype.isRequested=function(e){return this._loader.isRequested(e)},e.prototype.cancelRequest=function(e){this._loader.cancel(e)},e.prototype.cancelAll=function(){var e=this;this._activeRequests&&(this._activeRequests.forEach(function(t){e._loader.cancel(t)}),this._activeRequests.clear())},e}();return s});
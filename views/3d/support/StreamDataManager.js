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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/declare","./StreamDataLoader"],function(e,t){var n=e(null,{_clientType:void 0,_loader:void 0,constructor:function(e,t,n){this._clientType=e,this._loader=t,this._addUrlTokenFunction=n},request:function(e,t,n){return this._loader.request(e,t,this._clientType,n,this._addUrlTokenFunction)},isRequested:function(e){return this._loader.isRequested(e)},cancelRequest:function(e){this._loader.cancel(e)},getRequestedURLs:function(){return this._loader.getRequestedURLs(this._clientType)},cancelRequestsBulk:function(e){this._loader.cancelBulk(e,this._clientType)}});return e(null,{constructor:function(e){this._loader=new t(e)},destroy:function(){this._loader.destroy(),this._loader=null},hasPendingDownloads:function(){return this._loader.hasPendingDownloads()},makeSupplier:function(e,t){return new n(e,this._loader,t)}})});
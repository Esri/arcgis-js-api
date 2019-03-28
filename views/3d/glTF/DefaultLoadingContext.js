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

define(["require","exports","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/assignHelper","dojo/errors/CancelError","../../../request","../../../core/Error","../../../core/promiseUtils","../../../core/urlUtils"],function(t,r,e,o,n,i,a,u,s,c){Object.defineProperty(r,"__esModule",{value:!0});var p=function(){function t(t){this.streamDataSupplier=t}return t.prototype.loadJson=function(t){return e(this,void 0,void 0,function(){return o(this,function(r){return[2,this.load("json",t)]})})},t.prototype.loadBinary=function(t){return e(this,void 0,void 0,function(){return o(this,function(r){return c.isDataProtocol(t)?[2,c.dataToArrayBuffer(t)]:[2,this.load("binary",t)]})})},t.prototype.loadImage=function(t){return e(this,void 0,void 0,function(){return o(this,function(r){return[2,this.load("image",t)]})})},t.prototype.load=function(t,r){return e(this,void 0,void 0,function(){var e,n,c=this;return o(this,function(o){switch(o.label){case 0:return this.streamDataSupplier?(e=this.streamDataSupplier.request(r,t),[2,s.create(function(t,r){e.then(function(r){t(r.data)},function(t){r(t instanceof i?t:new u("","Request for resource failed: "+t))})},function(){c.streamDataSupplier.cancelRequest(e)})]):[4,a(r,f[t])];case 1:return n=o.sent(),[2,n.data]}})})},t}();r.DefaultLoadingContext=p;var f={image:{responseType:"image"},binary:{responseType:"array-buffer"},json:void 0}});
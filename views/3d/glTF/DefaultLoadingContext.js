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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/assignHelper","dojo/errors/CancelError","../../../request","../../../core/Error","../../../core/promiseUtils","../../../core/urlUtils"],function(r,t,e,o,n,i,a,u,s,c){Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function r(r){this.streamDataSupplier=r}return r.prototype.loadJson=function(r){return e(this,void 0,void 0,function(){return o(this,function(t){return[2,this.load("json",r)]})})},r.prototype.loadBinary=function(r){return e(this,void 0,void 0,function(){return o(this,function(t){return c.isDataProtocol(r)?[2,c.dataToArrayBuffer(r)]:[2,this.load("binary",r)]})})},r.prototype.loadImage=function(r){return e(this,void 0,void 0,function(){return o(this,function(t){return[2,this.load("image",r)]})})},r.prototype.load=function(r,t){return e(this,void 0,void 0,function(){var e,n,c=this;return o(this,function(o){switch(o.label){case 0:return this.streamDataSupplier?(e=this.streamDataSupplier.request(t,r),[2,s.create(function(r,t){e.then(function(t,e){r(e)},function(r){t(r instanceof i?r:new u("","Request for resource failed: "+r))})},function(){c.streamDataSupplier.cancelRequest(e)})]):[3,1];case 1:return[4,a(t,f[r])];case 2:return n=o.sent(),[2,n.data]}})})},r}();t.DefaultLoadingContext=p;var f={image:{responseType:"image"},binary:{responseType:"array-buffer"},json:void 0}});
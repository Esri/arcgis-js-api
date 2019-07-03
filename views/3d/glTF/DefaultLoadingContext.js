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

define(["require","exports","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/assignHelper","../../../request","../../../core/asyncUtils","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/urlUtils"],function(r,e,t,o,n,i,a,s,u,c,f){Object.defineProperty(e,"__esModule",{value:!0});var d=function(){function r(r){this.streamDataRequester=r}return r.prototype.loadJSON=function(r,e){return t(this,void 0,void 0,function(){return o(this,function(t){return[2,this.load("json",r,e)]})})},r.prototype.loadBinary=function(r,e){return t(this,void 0,void 0,function(){return o(this,function(t){return f.isDataProtocol(r)?(c.throwIfAborted(e),[2,f.dataToArrayBuffer(r)]):[2,this.load("binary",r,e)]})})},r.prototype.loadImage=function(r,e){return t(this,void 0,void 0,function(){return o(this,function(t){return[2,this.load("image",r,e)]})})},r.prototype.load=function(r,e,n){return t(this,void 0,void 0,function(){var t;return o(this,function(o){switch(o.label){case 0:return u.isNone(this.streamDataRequester)?[4,i(e,p[r])]:[3,2];case 1:return[2,o.sent().data];case 2:return[4,a.result(this.streamDataRequester(e,r,n))];case 3:if(t=o.sent(),!0===t.ok)return[2,t.value];throw c.throwIfAbortError(t.error),new s("","Request for resource failed: "+t.error)}})})},r}();e.DefaultLoadingContext=d;var p={image:{responseType:"image"},binary:{responseType:"array-buffer"},json:void 0}});
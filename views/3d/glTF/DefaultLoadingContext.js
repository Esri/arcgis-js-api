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

define(["require","exports","tslib","../../../request","../../../core/asyncUtils","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/urlUtils"],(function(r,e,t,o,n,i,a,s,u){Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function r(r){this.streamDataRequester=r}return r.prototype.loadJSON=function(r,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.load("json",r,e)]}))}))},r.prototype.loadBinary=function(r,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return u.isDataProtocol(r)?(s.throwIfAborted(e),[2,u.dataToArrayBuffer(r)]):[2,this.load("binary",r,e)]}))}))},r.prototype.loadImage=function(r,e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.load("image",r,e)]}))}))},r.prototype.load=function(r,e,u){return t.__awaiter(this,void 0,void 0,(function(){var c;return t.__generator(this,(function(t){switch(t.label){case 0:return a.isNone(this.streamDataRequester)?[4,o(e,{responseType:f[r]})]:[3,2];case 1:return[2,t.sent().data];case 2:return[4,n.result(this.streamDataRequester.request(e,r,u))];case 3:if(!0===(c=t.sent()).ok)return[2,c.value];throw s.throwIfAbortError(c.error),new i("","Request for resource failed: "+c.error)}}))}))},r}();e.DefaultLoadingContext=c;var f={image:"image",binary:"array-buffer",json:"json"}}));
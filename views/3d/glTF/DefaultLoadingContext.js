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

define(["require","exports","tslib","../../../request","../../../core/asyncUtils","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/urlUtils"],(function(r,t,e,o,n,i,a,s,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultLoadingContext=void 0;var c=function(){function r(r){this.streamDataRequester=r}return r.prototype.loadJSON=function(r,t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.load("json",r,t)]}))}))},r.prototype.loadBinary=function(r,t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return u.isDataProtocol(r)?(s.throwIfAborted(t),[2,u.dataToArrayBuffer(r)]):[2,this.load("binary",r,t)]}))}))},r.prototype.loadImage=function(r,t){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){return[2,this.load("image",r,t)]}))}))},r.prototype.load=function(r,t,u){return e.__awaiter(this,void 0,void 0,(function(){var c;return e.__generator(this,(function(e){switch(e.label){case 0:return a.isNone(this.streamDataRequester)?[4,o(t,{responseType:f[r]})]:[3,2];case 1:return[2,e.sent().data];case 2:return[4,n.result(this.streamDataRequester.request(t,r,u))];case 3:if(!0===(c=e.sent()).ok)return[2,c.value];throw s.throwIfAbortError(c.error),new i("","Request for resource failed: "+c.error)}}))}))},r}();t.DefaultLoadingContext=c;var f={image:"image",binary:"array-buffer",json:"json"}}));
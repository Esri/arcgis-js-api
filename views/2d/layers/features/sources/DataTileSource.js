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

define(["require","exports","tslib","../../../../../core/Evented","../../../../../core/maybe","../../../../../core/accessorSupport/diffUtils"],(function(t,e,o,r,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataTileSource=e.DataTileSubscription=void 0;var s=function(){function t(t){this._abortController=new AbortController,this.requests={pending:new Array,done:new Array},this.tile=t}return Object.defineProperty(t.prototype,"signal",{get:function(){return this._abortController.signal},enumerable:!1,configurable:!0}),t.prototype.add=function(t){this.requests.done.push(t),t.request.end&&(this.resolved=!0)},t.prototype.abort=function(){this._abortController.abort()},t}();e.DataTileSubscription=s;var u=function(){function t(t){this.events=new r,this._subscriptions=new Map,this._serviceQueryInfo={outSpatialReference:t.outSR},this._serviceInfo=t.serviceInfo,this._onRequest=t.onRequest}return t.prototype.queryLastEditDate=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(t){throw new Error("Service does not support query type")}))}))},t.prototype.query=function(t,e){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(t){throw new Error("Service does not support query")}))}))},Object.defineProperty(t.prototype,"geometryType",{get:function(){return this._serviceInfo.geometryType},enumerable:!1,configurable:!0}),t.prototype.update=function(t){i.diff(t,this._sourceQueryInfo)&&(this._sourceQueryInfo=t)},t.prototype.updateSubscriptions=function(){},t.prototype.setViewState=function(t){},t.prototype.subscribe=function(t){var e=new s(t);this._subscriptions.set(t.id,e)},t.prototype.unsubscribe=function(t){var e=this.get(t.id);n.isSome(e)&&e.abort(),this._subscriptions.delete(t.id)},t.prototype.pause=function(){},t.prototype.resume=function(){},t.prototype.get=function(t){return this._subscriptions.has(t)?this._subscriptions.get(t):null},t.prototype.enableEvent=function(t,e){},t}();e.DataTileSource=u}));
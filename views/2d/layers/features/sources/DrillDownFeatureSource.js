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

define(["require","exports","tslib","../../../../../core/has","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,r,t,i,n,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DrillDownFeatureSource=void 0;var u=i("esri-featurelayer-webgl"),s=i("esri-mobile"),a={maxDrillLevel:u&&"object"==typeof u&&null!=u.maxDrillLevel?u.maxDrillLevel:s?1:4,maxRecordCountFactor:u&&"object"==typeof u&&null!=u.maxRecordCountFactor?u.maxRecordCountFactor:s?1:3},c=function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype._fetchDataTile=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,o,u,s,c,l,d=this;return t.__generator(this,(function(f){return r=this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,o=this._subscriptions.get(e.key.id),u=o.signal,s=e.getQuantizationParameters(),c=0,(l=function(f,h){return t.__awaiter(d,void 0,void 0,(function(){var d,_,m,p,v,b,x,y;return t.__generator(this,(function(t){switch(t.label){case 0:d=this._sourceQueryInfo,_=this._createQuery(f,{maxRecordCountFactor:r?a.maxRecordCountFactor:void 0,returnExceededLimitFeatures:!1,quantizationParameters:s}),c++,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._queue.push({tile:e,query:_,signal:u,depth:h})];case 2:if(m=t.sent(),c--,n.throwIfAborted(u),!m)return[2];if(d!==this._sourceQueryInfo)return l(f,h),[2];if(m.exceededTransferLimit&&h<a.maxDrillLevel){for(p=0,v=f.createChildTiles();p<v.length;p++)b=v[p],l(b,h+1);return[2]}return x={tile:e,id:e.id,features:m,end:0===c},o.requests.done.push({query:_,request:x}),this._onRequest(x,"new"),[3,4];case 3:return y=t.sent(),n.isAbortError(y)||(i("esri-2d-debug")&&console.debug("Encountered an error while querying",y),this._onRequest({tile:e,id:e.id,features:null,end:!0},"new")),[3,4];case 4:return[2]}}))}))})(e,0),[2]}))}))},r}(o.BaseFeatureSource);r.DrillDownFeatureSource=c}));
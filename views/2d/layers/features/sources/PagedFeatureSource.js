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

define(["require","exports","tslib","../../../../../core/Error","../../../../../core/Logger","../../../../../core/promiseUtils","./BaseFeatureSource"],(function(e,r,t,u,n,i,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PagedFeatureSource=void 0;var a=n.getLogger("esri.views.2d.layers.features.sources.FeatureSource"),o=function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype._fetchDataTile=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,n,s,o,c,d,f,h,l,_,q,v,g,w=this;return t.__generator(this,(function(t){switch(t.label){case 0:r=6,n=20,s=this._subscriptions.get(e.key.id),o=!1,c=0,d=0,f=function(r,t){d--,i.throwIfAborted(s);var u=r.reader,n=r.query;if(!u.exceededTransferLimit){if(o=!0,0!==t&&!u.hasFeatures){var a={tile:e,id:e.id,features:u,end:0===d};return s.requests.done.push({request:a,query:n}),void w._onRequest(a,"new")}var c={tile:e,id:e.id,features:u,end:0===d};return s.requests.done.push({request:c,query:n}),void w._onRequest(c,"new")}var f={tile:e,id:e.id,features:u,end:o&&0===d};s.requests.done.push({request:f,query:n}),w._onRequest(f,"new")},h=0,l=0,t.label=1;case 1:if(o||!(l++<n))return[3,3];for(_=void 0,q=function(r){var t=c++;d++,_=v._fetchDataTilePage(e,t,s).then((function(e){return e&&f(e,t)})).catch((function(r){o=!0,i.isAbortError(r)||(a.error(new u("mapview-query-error","Encountered error when fetching tile",{tile:e,error:r})),w._onRequest({tile:e,id:e.id,features:null,end:o},"new"))}))},v=this,g=0;g<h+1;g++)q();return[4,_];case 2:return t.sent(),i.throwIfAborted(s),h=Math.min(h+2,r),[3,1];case 3:return[2]}}))}))},r.prototype._fetchDataTilePage=function(e,r,u){return t.__awaiter(this,void 0,void 0,(function(){var n,s,a,o,c;return t.__generator(this,(function(t){switch(t.label){case 0:8e3,n=this._sourceQueryInfo,s=this._createQuery(e,{start:8e3*r,num:8e3,maxRecordCountFactor:3,returnExceededLimitFeatures:!0,quantizationParameters:e.getQuantizationParameters()}),t.label=1;case 1:return t.trys.push([1,3,,4]),a=u.signal,[4,this._queue.push({tile:e,query:s,signal:a,depth:r})];case 2:return o=t.sent(),i.throwIfAborted(u),o?n!==this._sourceQueryInfo?[2,this._fetchDataTilePage(e,r,u)]:[2,{reader:o,query:s}]:[2,null];case 3:return c=t.sent(),i.throwIfNotAbortError(c),[2,null];case 4:return[2]}}))}))},r}(s.BaseFeatureSource);r.PagedFeatureSource=o}));
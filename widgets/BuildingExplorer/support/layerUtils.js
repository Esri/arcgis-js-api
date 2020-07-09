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

define(["require","exports","tslib","../../../core/promiseUtils"],(function(t,r,e,n){Object.defineProperty(r,"__esModule",{value:!0}),r.createLoadLayersFunction=function(){var t=this,r=n.createAbortController();return function(a){return e.__awaiter(t,void 0,void 0,(function(){var t,o;return e.__generator(this,(function(i){switch(i.label){case 0:return r.abort(),r=n.createAbortController(),t={signal:r.signal},o=a.toArray().map((function(r){return function(t,r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){switch(e.label){case 0:return[4,t.load(r)];case 1:return e.sent(),[4,t.loadAll()];case 2:return e.sent(),n.throwIfAborted(r),t.summaryStatistics?[4,t.summaryStatistics.load(r)]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}(r,t)})),[4,n.all(o)];case 1:return i.sent(),n.throwIfAborted(t),[2]}}))}))}}}));
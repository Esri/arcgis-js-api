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

define(["require","exports","tslib","../../../core/promiseUtils"],(function(t,e,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createLoadLayersFunction=void 0,e.createLoadLayersFunction=function(){var t=this,e=n.createAbortController();return function(a){return r.__awaiter(t,void 0,void 0,(function(){var t,o;return r.__generator(this,(function(i){switch(i.label){case 0:return e.abort(),e=n.createAbortController(),t={signal:e.signal},o=a.toArray().map((function(e){return function(t,e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,t.load(e)];case 1:return r.sent(),[4,t.loadAll()];case 2:return r.sent(),n.throwIfAborted(e),t.summaryStatistics?[4,t.summaryStatistics.load(e)]:[3,4];case 3:r.sent(),r.label=4;case 4:return[2]}}))}))}(e,t)})),[4,n.all(o)];case 1:return i.sent(),n.throwIfAborted(t),[2]}}))}))}}}));
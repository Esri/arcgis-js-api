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

define(["require","exports","tslib","../../symbols","../../core/promiseUtils","./cimAnalyzer","./ExpandedCIM"],(function(e,n,r,t,a,i,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.expandSymbol=n.expandSymbols=void 0,n.expandSymbols=function(e,t,i){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,a.all(e.map((function(e){return n.expandSymbol(e,t,i)})))]}))}))};var d=function(e,n){return r.__awaiter(void 0,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return t=o.ExpandedCIM.bind,[4,i.analyzeCIMSymbol(e.data,n)];case 1:return[2,new(t.apply(o.ExpandedCIM,[void 0,r.sent(),e.data,e.rendererKey]))]}}))}))};n.expandSymbol=function(e,n,a){return r.__awaiter(void 0,void 0,void 0,(function(){var i,o;return r.__generator(this,(function(r){switch(r.label){case 0:return e?"cim"===e.type?[2,d(e,n)]:"web-style"!==e.type?[3,2]:(i=t.WebStyleSymbol.fromJSON(e),o={type:"cim"},[4,i.fetchCIMSymbol(a)]):[2,null];case 1:return o.data=r.sent().data,o.rendererKey=e.rendererKey,[2,d(o,n)];case 2:return[2,e]}}))}))}}));
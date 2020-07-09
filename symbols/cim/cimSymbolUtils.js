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

define(["require","exports","tslib","../../request","../../core/Logger","../../core/promiseUtils","./cimAnalyzer"],(function(e,t,r,n,i,a,o){var u=this;Object.defineProperty(t,"__esModule",{value:!0});var s=i.getLogger("esri/symbols/support/cimSymbolUtils"),c=function(){function e(e,t){this.layers=e,this.data=t}return Object.defineProperty(e.prototype,"type",{get:function(){return"expanded-cim"},enumerable:!0,configurable:!0}),e.prototype.hash=function(){for(var e="",t=0,r=this.layers;t<r.length;t++){e+=r[t].templateHash}return e},e}();t.expandSymbols=function(e,n,i){return r.__awaiter(u,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,a.all(e.map((function(e){return t.expandSymbol(e,n,i)})))]}))}))};var l=function(e,t){return r.__awaiter(u,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return n=c.bind,[4,o.analyzeCIMSymbol(e.data,t)];case 1:return[2,new(n.apply(c,[void 0,r.sent(),e.data]))]}}))}))};function f(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,i;return r.__generator(this,(function(r){switch(r.label){case 0:return!e.data&&e.styleUrl&&e.styleName?(n=e.styleName,i=e,[4,d(n,e.styleUrl,t)]):[2,e];case 1:return i.data=r.sent(),[2,e]}}))}))}t.expandSymbol=function(e,t,n){return r.__awaiter(u,void 0,void 0,(function(){var i,a;return r.__generator(this,(function(r){switch(r.label){case 0:return e?"cim"!==e.type?[3,2]:(i=l,[4,f(e,n)]):[2,null];case 1:return[2,i.apply(void 0,[r.sent(),t])];case 2:return"web-style"!==e.type?[3,4]:(a=l,[4,e.fetchCIMSymbol(n)]);case 3:return[2,a.apply(void 0,[r.sent(),t])];case 4:return[2,e]}}))}))},t.fetchSymbol=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return e?"cim"===e.type?[2,f(e,t)]:"web-style"===e.type?[2,e.fetchCIMSymbol(t)]:[2,e]:[2,null]}))}))},t.fetchCIMData=f,t.makeSymbolRef=function(e,t){return null===e?null:"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e,primitiveOverrides:t}};var y=new Map;function d(e,i,a){return r.__awaiter(this,void 0,void 0,(function(){var o;return r.__generator(this,(function(u){if(y.has(e))return[2,y.get(e).then((function(e){return t.makeSymbolRef(e.data)}))];try{return o=n(i+"/resources/styles/cim/"+e+".json",r.__assign({responseType:"json",query:{f:"json"}},a)),y.set(e,o),[2,o.then((function(e){return t.makeSymbolRef(e.data)}))]}catch(t){return s.error("error requesting "+e+", reason is "+t.message),y.has(e)&&y.delete(e),[2,null]}return[2]}))}))}}));
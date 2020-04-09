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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/assignHelper","../../request","../../core/Logger","../../core/promiseUtils","../cim/cimAnalyzer"],(function(e,t,r,n,o,i,u,a,s){var c=this;Object.defineProperty(t,"__esModule",{value:!0});var l=u.getLogger("esri/symbols/support/cimSymbolUtils"),y=function(){function e(e,t){this.layers=e,this.data=t}return Object.defineProperty(e.prototype,"type",{get:function(){return"expanded-cim"},enumerable:!0,configurable:!0}),e.prototype.hash=function(){for(var e="",t=0,r=this.layers;t<r.length;t++){e+=r[t].templateHash}return e},e}();t.expandSymbols=function(e,o,i,u){return r(c,void 0,void 0,(function(){return n(this,(function(r){return[2,a.all(e.map((function(e){return t.expandSymbol(e,o,i,u)})))]}))}))};var f=function(e,t,o){return r(c,void 0,void 0,(function(){var r;return n(this,(function(n){switch(n.label){case 0:return r=y.bind,[4,s.analyzeCIMSymbol(e.data,t&&"dictionary"===t.type?t.fieldMap:null,o)];case 1:return[2,new(r.apply(y,[void 0,n.sent(),e.data]))]}}))}))};function p(e,t){return r(this,void 0,void 0,(function(){var r,o;return n(this,(function(n){switch(n.label){case 0:return!e.data&&e.styleUrl&&e.styleName?(r=e.styleName,o=e,[4,m(r,e.styleUrl,t)]):[2,e];case 1:return o.data=n.sent(),[2,e]}}))}))}t.expandSymbol=function(e,t,o,i){return r(c,void 0,void 0,(function(){var r,u;return n(this,(function(n){switch(n.label){case 0:return e?"cim"!==e.type?[3,2]:(r=f,[4,p(e,i)]):[2,null];case 1:return[2,r.apply(void 0,[n.sent(),t,o])];case 2:return"web-style"!==e.type?[3,4]:(u=f,[4,e.fetchCIMSymbol(i)]);case 3:return[2,u.apply(void 0,[n.sent(),t,o])];case 4:return[2,e]}}))}))},t.fetchSymbol=function(e,t){return r(this,void 0,void 0,(function(){return n(this,(function(r){return e?"cim"===e.type?[2,p(e,t)]:"web-style"===e.type?[2,e.fetchCIMSymbol(t)]:[2,e]:[2,null]}))}))},t.fetchCIMData=p,t.makeSymbolRef=function(e,t){return null===e?null:"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e,primitiveOverrides:t}};var d=new Map;function m(e,u,a){return r(this,void 0,void 0,(function(){var r;return n(this,(function(n){if(d.has(e))return[2,d.get(e).then((function(e){return t.makeSymbolRef(e.data)}))];try{return r=i(u+"/resources/styles/cim/"+e+".json",o({responseType:"json",query:{f:"json"}},a)),d.set(e,r),[2,r.then((function(e){return t.makeSymbolRef(e.data)}))]}catch(t){return l.error("error requesting "+e+", reason is "+t.message),d.has(e)&&d.delete(e),[2,null]}return[2]}))}))}}));
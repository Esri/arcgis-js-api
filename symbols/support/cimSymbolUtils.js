// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/assignHelper","../../request","../../core/asyncUtils","../../core/Logger","../../core/promiseUtils"],function(e,r,t,n,o,s,u,i,a){function l(e,r,o){return t(this,void 0,void 0,function(){var t,s,i,l;return n(this,function(n){switch(n.label){case 0:return!e.data&&e.styleUrl&&e.styleName?(t=e.styleName,Array.isArray(t)?(s=t.map(function(t){return u.safeCast(c(t,e.styleUrl,r,o))}),i=e,[4,a.all(s)]):[3,2]):[2,e];case 1:return i.data=n.sent(),[3,4];case 2:return l=e,[4,c(t,e.styleUrl,r,o)];case 3:l.data=n.sent(),n.label=4;case 4:return[2,e]}})})}function c(e,r,u,i){return t(this,void 0,void 0,function(){var t,a;return n(this,function(n){if(d.has(e))return[2,d.get(e).then(function(e){return p(e.data)})];try{return t=u(r,e),a=s(t,o({responseType:"json",query:{f:"json"}},i)),d.set(e,a),[2,a.then(function(e){return p(e.data)})]}catch(r){return y.error("error requesting "+e+", reason is "+r.message),d.has(e)&&d.delete(e),[2,null]}return[2]})})}var f=this;Object.defineProperty(r,"__esModule",{value:!0});var y=i.getLogger("esri/symbols/support/cimSymbolUtils");r.constructUrlFn=function(e,r){return e+"/resources/styles/cim/"+r+".json"},r.expandSymbols=function(e,o,s){return t(f,void 0,void 0,function(){return n(this,function(t){return[2,a.all(e.map(function(e){return r.expandSymbol(e,o,s)}))]})})},r.expandSymbol=function(e,r,o){return t(f,void 0,void 0,function(){return n(this,function(t){return e?"cim"===e.type?[2,l(e,r,o)]:"web-style"===e.type?[2,e.fetchCIMSymbol(o)]:[2,e]:[2,null]})})};var p=function(e){return null===e?null:"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}},d=new Map});
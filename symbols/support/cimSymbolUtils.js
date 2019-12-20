// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/awaiterHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/assignHelper","../../request","../../core/Logger","../../core/promiseUtils"],function(e,r,t,n,o,i,u,s){function l(e,r){return t(this,void 0,void 0,function(){var t,o;return n(this,function(n){switch(n.label){case 0:return!e.data&&e.styleUrl&&e.styleName?(t=e.styleName,o=e,[4,a(t,e.styleUrl,r)]):[2,e];case 1:return o.data=n.sent(),[2,e]}})})}function a(e,u,s){return t(this,void 0,void 0,function(){var t,l;return n(this,function(n){if(p.has(e))return[2,p.get(e).then(function(e){return r.makeSymbolRef(e.data)})];try{return t=u+"/resources/styles/cim/"+e+".json",l=i(t,o({responseType:"json",query:{f:"json"}},s)),p.set(e,l),[2,l.then(function(e){return r.makeSymbolRef(e.data)})]}catch(r){return f.error("error requesting "+e+", reason is "+r.message),p.has(e)&&p.delete(e),[2,null]}return[2]})})}var c=this;Object.defineProperty(r,"__esModule",{value:!0});var f=u.getLogger("esri/symbols/support/cimSymbolUtils");r.expandSymbols=function(e,o){return t(c,void 0,void 0,function(){return n(this,function(t){return[2,s.all(e.map(function(e){return r.expandSymbol(e,o)}))]})})},r.expandSymbol=function(e,r){return t(c,void 0,void 0,function(){return n(this,function(t){return e?"cim"===e.type?[2,l(e,r)]:"web-style"===e.type?[2,e.fetchCIMSymbol(r)]:[2,e]:[2,null]})})},r.makeSymbolRef=function(e,r){return null===e?null:"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e,primitiveOverrides:r}};var p=new Map});
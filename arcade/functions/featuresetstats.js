// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../languageUtils","./fieldStats","../polyfill/sql/WhereClause"],(function(n,t,e,r,a,u,i){"use strict";function c(n,t,c,o,l,f){return e(this,void 0,void 0,(function(){var e,c;return r(this,(function(r){switch(r.label){case 0:return 1!==o.length?[3,1]:a.isArray(o[0])?[2,u.calculateStat(n,o[0],a.defaultUndefined(o[1],-1))]:a.isImmutableArray(o[0])?[2,u.calculateStat(n,o[0].toArray(),a.defaultUndefined(o[1],-1))]:[3,8];case 1:return 2!==o.length?[3,5]:a.isArray(o[0])?[2,u.calculateStat(n,o[0],a.defaultUndefined(o[1],-1))]:a.isImmutableArray(o[0])?[2,u.calculateStat(n,o[0].toArray(),a.defaultUndefined(o[1],-1))]:a.isFeatureSet(o[0])?[4,o[0].load()]:[3,4];case 2:return e=r.sent(),[4,s(i.WhereClause.create(o[1],e.getFieldsIndex()),f,l)];case 3:return c=r.sent(),[2,o[0].calculateStatistic(n,c,a.defaultUndefined(o[2],1e3),t.abortSignal)];case 4:return[3,8];case 5:return 3!==o.length?[3,8]:a.isFeatureSet(o[0])?[4,o[0].load()]:[3,8];case 6:return e=r.sent(),[4,s(i.WhereClause.create(o[1],e.getFieldsIndex()),f,l)];case 7:return c=r.sent(),[2,o[0].calculateStatistic(n,c,a.defaultUndefined(o[2],1e3),t.abortSignal)];case 8:return[2,u.calculateStat(n,o,-1)]}}))}))}function s(n,t,a){return e(this,void 0,void 0,(function(){var e,u,i,c,s,o,l,f;return r(this,(function(r){switch(r.label){case 0:if(!((e=n.getVariables()).length>0))return[3,5];u=[],i=0,r.label=1;case 1:return i<e.length?(c={name:e[i]},o=(s=u).push,[4,t.evaluateIdentifier(a,c)]):[3,4];case 2:o.apply(s,[r.sent()]),r.label=3;case 3:return i++,[3,1];case 4:for(l={},f=0;f<e.length;f++)l[e[f]]=u[f];return n.parameters=l,[2,n];case 5:return[2,n]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("stdev",e,0,a,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("variance",e,0,a,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("mean",e,0,a,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("mean",e,0,a,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("sum",e,0,a,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("min",e,0,a,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return c("max",e,0,a,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if(a.pcCheck(e,1,1),a.isFeatureSet(e[0]))return e[0].count(n.abortSignal);if(a.isArray(e[0])||a.isString(e[0]))return e[0].length;if(a.isImmutableArray(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}}));
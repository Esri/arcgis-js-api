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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../executionError","../languageUtils","./fieldStats","../polyfill/sql/WhereClause"],(function(n,t,e,r,a,u,i,c){"use strict";function s(n,t,a,s,l,d){return e(this,void 0,void 0,(function(){var e,a;return r(this,(function(r){switch(r.label){case 0:return 1!==s.length?[3,1]:u.isArray(s[0])?[2,i.calculateStat(n,s[0],u.defaultUndefined(s[1],-1))]:u.isImmutableArray(s[0])?[2,i.calculateStat(n,s[0].toArray(),u.defaultUndefined(s[1],-1))]:[3,8];case 1:return 2!==s.length?[3,5]:u.isArray(s[0])?[2,i.calculateStat(n,s[0],u.defaultUndefined(s[1],-1))]:u.isImmutableArray(s[0])?[2,i.calculateStat(n,s[0].toArray(),u.defaultUndefined(s[1],-1))]:u.isFeatureSet(s[0])?[4,s[0].load()]:[3,4];case 2:return e=r.sent(),[4,o(c.WhereClause.create(s[1],e.getFieldsIndex()),d,l)];case 3:return a=r.sent(),[2,s[0].calculateStatistic(n,a,u.defaultUndefined(s[2],1e3),t.abortSignal)];case 4:return[3,8];case 5:return 3!==s.length?[3,8]:u.isFeatureSet(s[0])?[4,s[0].load()]:[3,8];case 6:return e=r.sent(),[4,o(c.WhereClause.create(s[1],e.getFieldsIndex()),d,l)];case 7:return a=r.sent(),[2,s[0].calculateStatistic(n,a,u.defaultUndefined(s[2],1e3),t.abortSignal)];case 8:return[2,i.calculateStat(n,s,-1)]}}))}))}function o(n,t,a){return e(this,void 0,void 0,(function(){var e,u,i,c,s,o,l,d;return r(this,(function(r){switch(r.label){case 0:if(!((e=n.getVariables()).length>0))return[3,5];u=[],i=0,r.label=1;case 1:return i<e.length?(c={name:e[i]},o=(s=u).push,[4,t.evaluateIdentifier(a,c)]):[3,4];case 2:o.apply(s,[r.sent()]),r.label=3;case 3:return i++,[3,1];case 4:for(l={},d=0;d<e.length;d++)l[e[d]]=u[d];return n.parameters=l,[2,n];case 5:return[2,n]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("stdev",e,0,a,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("variance",e,0,a,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("mean",e,0,a,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("mean",e,0,a,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("sum",e,0,a,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("min",e,0,a,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,a){return s("max",e,0,a,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,r,i){if(u.pcCheck(i,1,1,t,e),u.isFeatureSet(i[0]))return i[0].count(n.abortSignal);if(u.isArray(i[0])||u.isString(i[0]))return i[0].length;if(u.isImmutableArray(i[0]))return i[0].length();throw new a.ArcadeExecutionError(t,a.ExecutionErrorCodes.InvalidParameter,e)}))})}}));
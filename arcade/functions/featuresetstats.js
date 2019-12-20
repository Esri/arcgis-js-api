// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../languageUtils","./fieldStats","../polyfill/promiseUtils","../polyfill/sql/WhereClause"],function(n,t,e,r,u,a){"use strict";function i(n,t,i,o,s,l){if(1===o.length){if(e.isArray(o[0]))return u.resolve(r.calculateStat(n,o[0],e.defaultUndefined(o[1],-1)));if(e.isImmutableArray(o[0]))return u.resolve(r.calculateStat(n,o[0].toArray(),e.defaultUndefined(o[1],-1)))}else if(2===o.length){if(e.isArray(o[0]))return u.resolve(r.calculateStat(n,o[0],e.defaultUndefined(o[1],-1)));if(e.isImmutableArray(o[0]))return u.resolve(r.calculateStat(n,o[0].toArray(),e.defaultUndefined(o[1],-1)));if(e.isFeatureSet(o[0]))return o[0].load().then(function(r){return c(a.WhereClause.create(o[1],r.getFieldsIndex()),l,s).then(function(r){return o[0].calculateStatistic(n,r,e.defaultUndefined(o[2],1e3),t.abortSignal)})})}else if(3===o.length&&e.isFeatureSet(o[0]))return o[0].load().then(function(r){return c(a.WhereClause.create(o[1],r.getFieldsIndex()),l,s).then(function(r){return o[0].calculateStatistic(n,r,e.defaultUndefined(o[2],1e3),t.abortSignal)})});return u.resolve(r.calculateStat(n,o,-1))}function c(n,t,e){try{var r=n.getVariables();if(r.length>0){for(var a=[],i=0;i<r.length;i++){var c={name:r[i]};a.push(t.evaluateIdentifier(e,c))}return u.all(a).then(function(t){for(var e={},u=0;u<r.length;u++)e[r[u]]=t[u];return n.parameters=e,n})}return u.resolve(n)}catch(n){return u.reject(n)}}function o(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("stdev",e,r,u,t,n)})},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("variance",e,r,u,t,n)})},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("mean",e,r,u,t,n)})},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("mean",e,r,u,t,n)})},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("sum",e,r,u,t,n)})},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("min",e,r,u,t,n)})},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("max",e,r,u,t,n)})},n.functions.count=function(t,r){return n.standardFunctionAsync(t,r,function(n,t,r){if(e.pcCheck(r,1,1),e.isFeatureSet(r[0]))return r[0].count(n.abortSignal);if(e.isArray(r[0])||e.isString(r[0]))return r[0].length;if(e.isImmutableArray(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=o});
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../languageUtils","../featureset/support/WhereClause","./fieldStats","../polyfill/promiseUtils"],function(n,t,e,r,u,a){"use strict";function i(n,t,i,s,o,f){if(1===s.length){if(e.isArray(s[0]))return a.resolve(u.calculateStat(n,s[0],e.defaultUndefined(s[1],-1)));if(e.isImmutableArray(s[0]))return a.resolve(u.calculateStat(n,s[0].toArray(),e.defaultUndefined(s[1],-1)))}else if(2===s.length){if(e.isArray(s[0]))return a.resolve(u.calculateStat(n,s[0],e.defaultUndefined(s[1],-1)));if(e.isImmutableArray(s[0]))return a.resolve(u.calculateStat(n,s[0].toArray(),e.defaultUndefined(s[1],-1)));if(e.isFeatureSet(s[0]))return c(r.create(s[1]),f,o).then(function(r){return s[0]._qStat(n,r,e.defaultUndefined(s[2],1e3),t.progressTracker)})}else if(3===s.length&&e.isFeatureSet(s[0]))return c(r.create(s[1]),f,o).then(function(r){return s[0]._qStat(n,r,e.defaultUndefined(s[2],1e3),t.progressTracker)});return a.resolve(u.calculateStat(n,s,-1))}function c(n,t,e){try{var r=n.getVariables();if(r.length>0){for(var u=[],i=0;i<r.length;i++){var c={name:r[i]};u.push(t.evaluateIdentifier(e,c))}return a.all(u).then(function(t){for(var e={},u=0;u<r.length;u++)e[r[u]]=t[u];return n.setVariablesDictionary(e),n})}return a.resolve(n)}catch(n){return a.reject(n)}}function s(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("stdev",e,r,u,t,n)})},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("variance",e,r,u,t,n)})},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("mean",e,r,u,t,n)})},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("mean",e,r,u,t,n)})},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("sum",e,r,u,t,n)})},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("min",e,r,u,t,n)})},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,function(e,r,u){return i("max",e,r,u,t,n)})},n.functions.count=function(t,r){return n.standardFunctionAsync(t,r,function(n,t,r){if(e.pcCheck(r,1,1),e.isFeatureSet(r[0]))return r[0].count(n.progressTracker);if(e.isArray(r[0])||e.isString(r[0]))return r[0].length;if(e.isImmutableArray(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=s});
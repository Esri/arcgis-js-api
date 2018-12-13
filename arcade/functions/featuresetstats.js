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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","../languageUtils","../featureset/support/WhereClause","../kernel","./fieldStats"],function(e,n,r,t,a,i,c,u){function o(e,n,t,o,l,f){if(1===o.length){if(a.isArray(o[0])){var d=new r;return d.resolve(u.calculateStat(e,o[0],a.defaultUndefined(o[1],-1))),d.promise}if(a.isImmutableArray(o[0])){var v=new r;return v.resolve(u.calculateStat(e,o[0].toArray(),a.defaultUndefined(o[1],-1))),v.promise}}else if(2===o.length){if(a.isArray(o[0])){var m=new r;return m.resolve(u.calculateStat(e,o[0],a.defaultUndefined(o[1],-1))),m.promise}if(a.isImmutableArray(o[0])){var p=new r;return p.resolve(u.calculateStat(e,o[0].toArray(),a.defaultUndefined(o[1],-1))),p.promise}if(a.isFeatureSet(o[0])){var h=new r;return s(i.create(o[1]),f,l).then(c.callback(function(r){o[0]._qStat(e,r,a.defaultUndefined(o[2],1e3),n.progressTracker).then(c.callback(function(e){h.resolve(e)},h),c.errback(h))},h),c.errback(h)),h.promise}}else if(3===o.length&&a.isFeatureSet(o[0])){var y=new r;return s(i.create(o[1]),f,l).then(c.callback(function(r){o[0]._qStat(e,r,a.defaultUndefined(o[2],1e3),n.progressTracker).then(c.callback(function(e){y.resolve(e)},y),c.errback(y))},y),c.errback(y)),y.promise}var g=new r;return g.resolve(u.calculateStat(e,o,-1)),g.promise}function s(e,n,a){var i=new r;try{var u=e.getVariables();if(u.length>0){for(var o=[],s=0;s<u.length;s++){var l={name:u[s]};o.push(n.evaluateIdentifier(a,l))}t(o).then(c.callback(function(n){for(var r={},t=0;t<u.length;t++)r[u[t]]=n[t];e.setVariablesDictionary(r),i.resolve(e)},i),c.errback(i))}else i.resolve(e)}catch(e){i.reject(e)}return i.promise}function l(e){"async"===e.mode&&(e.functions.stdev=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("stdev",r,t,a,n,e)})},e.functions.variance=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("variance",r,t,a,n,e)})},e.functions.average=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("mean",r,t,a,n,e)})},e.functions.mean=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("mean",r,t,a,n,e)})},e.functions.sum=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("sum",r,t,a,n,e)})},e.functions.min=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("min",r,t,a,n,e)})},e.functions.max=function(n,r){return e.standardFunctionAsync(n,r,function(r,t,a){return o("max",r,t,a,n,e)})},e.functions.count=function(n,r){return e.standardFunctionAsync(n,r,function(e,r,t){if(a.pcCheck(t,1,1),a.isFeatureSet(t[0])){var i=t[0].count();return n.progressTracker.then(function(){n.progressTracker.isCanceled()&&!1===i.isFulfilled()&&i.cancel(new Error("Operation has been cancelled."))},function(e){n.progressTracker.isCanceled()&&!1===i.isFulfilled()&&i.cancel(new Error("Operation has been cancelled."))}),i}if(a.isArray(t[0])||a.isString(t[0]))return t[0].length;if(a.isImmutableArray(t[0]))return t[0].length();throw new Error("Invalid Parameters for Count")})})}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=l});
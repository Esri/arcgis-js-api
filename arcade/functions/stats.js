// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../languageUtils","./fieldStats"],function(n,t,r,u){function e(n,t,e,i){if(1===i.length){if(r.isArray(i[0]))return u.calculateStat(n,i[0],-1);if(r.isImmutableArray(i[0]))return u.calculateStat(n,i[0].toArray(),-1)}return u.calculateStat(n,i,-1)}function i(n,t){n.stdev=function(n,r){return t(n,r,function(n,t,r){return e("stdev",n,t,r)})},n.variance=function(n,r){return t(n,r,function(n,t,r){return e("variance",n,t,r)})},n.average=function(n,r){return t(n,r,function(n,t,r){return e("mean",n,t,r)})},n.mean=function(n,r){return t(n,r,function(n,t,r){return e("mean",n,t,r)})},n.sum=function(n,r){return t(n,r,function(n,t,r){return e("sum",n,t,r)})},n.min=function(n,r){return t(n,r,function(n,t,r){return e("min",n,t,r)})},n.max=function(n,r){return t(n,r,function(n,t,r){return e("max",n,t,r)})},n.distinct=function(n,r){return t(n,r,function(n,t,r){return e("distinct",n,t,r)})},n.count=function(n,u){return t(n,u,function(n,t,u){if(r.pcCheck(u,1,1),r.isArray(u[0])||r.isString(u[0]))return u[0].length;if(r.isImmutableArray(u[0]))return u[0].length();throw new Error("Invalid Parameters for Count")})}}t.registerFunctions=i});
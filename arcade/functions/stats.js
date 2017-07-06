// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","exports","../languageUtils","./fieldStats"],function(n,t,r,e){function u(n,t,u,i){if(1===i.length){if(r.isArray(i[0]))return e.calculateStat(n,i[0],-1);if(r.isImmutableArray(i[0]))return e.calculateStat(n,i[0].toArray(),-1)}return e.calculateStat(n,i,-1)}function i(n,t){n.stdev=function(n,r){return t(n,r,function(n,t,r){return u("stdev",n,t,r)})},n.variance=function(n,r){return t(n,r,function(n,t,r){return u("variance",n,t,r)})},n.average=function(n,r){return t(n,r,function(n,t,r){return u("mean",n,t,r)})},n.mean=function(n,r){return t(n,r,function(n,t,r){return u("mean",n,t,r)})},n.sum=function(n,r){return t(n,r,function(n,t,r){return u("sum",n,t,r)})},n.min=function(n,r){return t(n,r,function(n,t,r){return u("min",n,t,r)})},n.max=function(n,r){return t(n,r,function(n,t,r){return u("max",n,t,r)})},n.distinct=function(n,r){return t(n,r,function(n,t,r){return u("distinct",n,t,r)})},n.count=function(n,e){return t(n,e,function(n,t,e){if(r.pcCheck(e,1,1),r.isArray(e[0])||r.isString(e[0]))return e[0].length;if(r.isImmutableArray(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=i});
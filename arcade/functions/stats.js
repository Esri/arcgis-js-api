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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../executionError","../languageUtils","./fieldStats"],(function(n,t,r,e,u){"use strict";function i(n,t,r,i){if(1===i.length){if(e.isArray(i[0]))return u.calculateStat(n,i[0],-1);if(e.isImmutableArray(i[0]))return u.calculateStat(n,i[0].toArray(),-1)}return u.calculateStat(n,i,-1)}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(n,t){n.stdev=function(n,r){return t(n,r,(function(n,t,r){return i("stdev",0,0,r)}))},n.variance=function(n,r){return t(n,r,(function(n,t,r){return i("variance",0,0,r)}))},n.average=function(n,r){return t(n,r,(function(n,t,r){return i("mean",0,0,r)}))},n.mean=function(n,r){return t(n,r,(function(n,t,r){return i("mean",0,0,r)}))},n.sum=function(n,r){return t(n,r,(function(n,t,r){return i("sum",0,0,r)}))},n.min=function(n,r){return t(n,r,(function(n,t,r){return i("min",0,0,r)}))},n.max=function(n,r){return t(n,r,(function(n,t,r){return i("max",0,0,r)}))},n.distinct=function(n,r){return t(n,r,(function(n,t,r){return i("distinct",0,0,r)}))},n.count=function(n,u){return t(n,u,(function(t,i,c){if(e.pcCheck(c,1,1,n,u),e.isArray(c[0])||e.isString(c[0]))return c[0].length;if(e.isImmutableArray(c[0]))return c[0].length();throw new r.ArcadeExecutionError(n,r.ExecutionErrorCodes.InvalidParameter,u)}))}}}));
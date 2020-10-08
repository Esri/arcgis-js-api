// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./promiseUtils"],(function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.assertResult=e.result=e.map=e.forEach=void 0,e.forEach=function(r,e,n){return t.eachAlways(r.map((function(r,t){return e.apply(n,[r,t])})))},e.map=function(r,e,n){return t.eachAlways(r.map((function(r,t){return e.apply(n,[r,t])}))).then((function(r){return r.map((function(r){return r.value}))}))},e.result=function(r){return r.then((function(r){return{ok:!0,value:r}})).catch((function(r){return{ok:!1,error:r}}))},e.assertResult=function(r){if(!0===r.ok)return r.value;throw r.error}}));
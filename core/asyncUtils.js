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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./promiseUtils"],(function(n,r,e){Object.defineProperty(r,"__esModule",{value:!0}),r.forEach=function(n,r,t){return e.eachAlways(n.map((function(n,e){return r.apply(t,[n,e])})))},r.map=function(n,r,t){return e.eachAlways(n.map((function(n,e){return r.apply(t,[n,e])}))).then((function(n){return n.map((function(n){return n.value}))}))},r.result=function(n){return n.then((function(n){return{ok:!0,value:n}})).catch((function(n){return{ok:!1,error:n}}))},r.assertResult=function(n){if(!0===n.ok)return n.value;throw n.error}}));
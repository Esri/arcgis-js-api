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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(e,r,n,t,u){function o(e,r,n){return u.eachAlways(e.map(function(e,t){return r.apply(n,[e,t])}))}function a(e,r,n){return u.eachAlways(e.map(function(e,t){return r.apply(n,[e,t])})).then(function(e){return e.map(function(e){return e.value})})}function i(e){return e.then(function(e){return{ok:!0,value:e}}).catch(function(e){return{ok:!1,error:e}})}function c(e){if(!0===e.ok)return e.value;throw e.error}function f(e){return e}Object.defineProperty(r,"__esModule",{value:!0}),r.forEach=o,r.map=a,r.maybe=i,r.assertMaybe=c,r.safeCast=f});
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./tsSupport/generatorHelper","./tsSupport/awaiterHelper","./promiseUtils"],function(e,n,r,t,u){function o(e,n,o){return t(this,void 0,void 0,function(){return r(this,function(r){switch(r.label){case 0:return[4,u.eachAlways(e.map(function(e,r){return n.apply(o,[e,r])}))];case 1:return r.sent(),[2]}})})}function c(e,n,o){return t(this,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return[4,u.eachAlways(e.map(function(e,r){return n.apply(o,[e,r])}))];case 1:return t=r.sent(),[2,t.map(function(e){return e.value})]}})})}function i(e){return e.then(function(e){return{ok:!0,value:e}}).catch(function(e){return{ok:!1,error:e}})}function a(e){if(!0===e.ok)return e.value;throw e.error}function f(e){var n,r=function(e){return n=e,e},t=function(e){return n&&n.cancel(e)};return u.create(function(n,t){e(r).then(n,t)},t)}Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=o,n.map=c,n.maybe=i,n.assertMaybe=a,n.cancellable=f});
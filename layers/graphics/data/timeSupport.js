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

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getTimeExtent=function(t,e){if(!t)return null;var r=e.featureAdapter,n=t.startTimeField,u=t.endTimeField,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(n&&u)e.forEach((function(t){var e=r.getAttribute(t,n),f=r.getAttribute(t,u);null==e||isNaN(e)||(i=Math.min(i,e)),null==f||isNaN(f)||(l=Math.max(l,f))}));else{var f=n||u;e.forEach((function(t){var e=r.getAttribute(t,f);null==e||isNaN(e)||(i=Math.min(i,e),l=Math.max(l,e))}))}return{start:i,end:l}},e.getTimeOperator=function(t,e,r){if(!e||!t)return null;var n=t.startTimeField,u=t.endTimeField;if(!n&&!u)return null;var i=e.start,l=e.end;return null===i&&null===l?null:void 0===i&&void 0===l?function(){return!1}:n&&u?function(t,e,r,n,u){if(null!=n&&null!=u&&n===u){var i=n;return function(n){return i>=t.getAttribute(n,e)&&i<=t.getAttribute(n,r)}}if(null!=n&&null!=u)return function(i){return l=n,f=u,a=t.getAttribute(i,e),o=t.getAttribute(i,r),!(a>f||o<l);var l,f,a,o};if(null!=n)return function(e){return!(t.getAttribute(e,r)<n)};if(null!=u)return function(r){return!(t.getAttribute(r,e)>u)};return}(r,n,u,i,l):function(t,e,r,n){if(null!=r&&null!=n&&r===n)return function(n){return t.getAttribute(n,e)===r};if(null!=r&&null!=n)return function(u){return t.getAttribute(u,e)>=r&&t.getAttribute(u,e)<=n};if(null!=r)return function(n){return t.getAttribute(n,e)>=r};if(null!=n)return function(r){return t.getAttribute(r,e)<=n};return}(r,n||u,i,l)}}));
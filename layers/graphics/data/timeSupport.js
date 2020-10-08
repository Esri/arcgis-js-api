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

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getTimeOperator=e.getTimeExtent=void 0,e.getTimeExtent=function(t,e){if(!t)return null;var n=e.featureAdapter,r=t.startTimeField,u=t.endTimeField,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&u)e.forEach((function(t){var e=n.getAttribute(t,r),f=n.getAttribute(t,u);null==e||isNaN(e)||(i=Math.min(i,e)),null==f||isNaN(f)||(l=Math.max(l,f))}));else{var f=r||u;e.forEach((function(t){var e=n.getAttribute(t,f);null==e||isNaN(e)||(i=Math.min(i,e),l=Math.max(l,e))}))}return{start:i,end:l}},e.getTimeOperator=function(t,e,n){if(!e||!t)return null;var r=t.startTimeField,u=t.endTimeField;if(!r&&!u)return null;var i=e.start,l=e.end;return null===i&&null===l?null:void 0===i&&void 0===l?function(){return!1}:r&&u?function(t,e,n,r,u){if(null!=r&&null!=u)return function(i){var l=t.getAttribute(i,e),f=t.getAttribute(i,n);return(null==l||l<=u)&&(null==f||f>=r)};if(null!=r)return function(e){var u=t.getAttribute(e,n);return null==u||u>=r};if(null!=u)return function(n){var r=t.getAttribute(n,e);return null==r||r<=u};return}(n,r,u,i,l):function(t,e,n,r){if(null!=n&&null!=r&&n===r)return function(r){return t.getAttribute(r,e)===n};if(null!=n&&null!=r)return function(u){var i=t.getAttribute(u,e);return i>=n&&i<=r};if(null!=n)return function(r){return t.getAttribute(r,e)>=n};if(null!=r)return function(n){return t.getAttribute(n,e)<=r};return}(n,r||u,i,l)}}));
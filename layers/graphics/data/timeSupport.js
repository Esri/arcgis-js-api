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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function n(t,e,n,u){return!(n>e||u<t)}function u(t,e){if(!t)return null;var n=e.featureAdapter,u=t.startTimeField,r=t.endTimeField,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(u&&r)e.forEach(function(t){var e=n.getAttribute(t,u),a=n.getAttribute(t,r);null==e||isNaN(e)||(i=Math.min(i,e)),null==a||isNaN(a)||(l=Math.max(l,a))});else{var a=u||r;e.forEach(function(t){var e=n.getAttribute(t,a);null==e||isNaN(e)||(i=Math.min(i,e),l=Math.max(l,e))})}return{start:i,end:l}}function r(t,e,n){if(!e||!t)return null;var u=t.startTimeField,r=t.endTimeField;if(!u&&!r)return null;var a=e.start,f=e.end;return null==a&&null==f?null:u&&r?i(n,u,r,a,f):l(n,u||r,a,f)}function i(t,e,u,r,i){if(null!=r&&null!=i&&r===i){var l=r;return function(n){return l>=t.getAttribute(n,e)&&l<=t.getAttribute(n,u)}}return null!=r&&null!=i?function(l){return n(r,i,t.getAttribute(l,e),t.getAttribute(l,u))}:null!=r?function(e){return!(t.getAttribute(e,u)<r)}:null!=i?function(n){return!(t.getAttribute(n,e)>i)}:void 0}function l(t,e,n,u){return null!=n&&null!=u&&n===u?function(u){return t.getAttribute(u,e)===n}:null!=n&&null!=u?function(r){return t.getAttribute(r,e)>=n&&t.getAttribute(r,e)<=u}:null!=n?function(u){return t.getAttribute(u,e)>=n}:null!=u?function(n){return t.getAttribute(n,e)<=u}:void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.getTimeExtent=u,e.getTimeOperator=r});
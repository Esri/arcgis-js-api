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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(t,n){function u(t,n,u,r){return!(u>n||r<t)}function r(t,n){if(!t)return null;var u=t.startTimeField,r=t.endTimeField,e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&r)n.forEach(function(t){var n=t.attributes,l=u,a=n[l],f=r,o=n[f];null==a||isNaN(a)||(e=Math.min(e,a)),null==o||isNaN(o)||(i=Math.max(i,o))});else{var l=u||r;n.forEach(function(t){var n=l,u=t.attributes[n];null==u||isNaN(u)||(e=Math.min(e,u),i=Math.max(i,u))})}return{start:e,end:i}}function e(t,n){if(!n||!t)return null;var u=t.startTimeField,r=t.endTimeField;if(!u&&!r)return null;var e=n.start,a=n.end;return null==e&&null==a?null:u&&r?i(u,r,e,a):l(u||r,e,a)}function i(t,n,r,e){if(null!=r&&null!=e&&r===e){var i=r;return function(u){return i>=u.attributes[t]&&i<=u.attributes[n]}}return null!=r&&null!=e?function(i){return u(r,e,i.attributes[t],i.attributes[n])}:null!=r?function(t){return!(t.attributes[n]<r)}:null!=e?function(n){return!(n.attributes[t]>e)}:void 0}function l(t,n,u){return null!=n&&null!=u&&n===u?function(u){return u.attributes[t]===n}:null!=n&&null!=u?function(r){return r.attributes[t]>=n&&r.attributes[t]<=u}:null!=n?function(u){return u.attributes[t]>=n}:null!=u?function(n){return n.attributes[t]<=u}:void 0}Object.defineProperty(n,"__esModule",{value:!0}),n.getTimeExtent=r,n.getTimeOperator=e});
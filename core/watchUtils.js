// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(n,e,r,t){function u(n,e,r,t,u){var o=n.watch(e,function(e,u,o,c){(!t||t(e))&&r.call(n,e,u,o,c)},u),c=n.get(e);return t&&t(c)&&r.call(n,c,c,e,n),o}function o(n,e,o,c,i){function f(){l&&(l.remove(),l=null)}var l,a=!1,d=new r(f),s=new t;return s.cancel=d.cancel,s.isCanceled=d.isCanceled,s.isFulfilled=d.isFulfilled,s.isRejected=d.isRejected,s.isResolved=d.isResolved,s.then=d.then,s.remove=f,Object.freeze(s),l=u(n,e,function(e,r,t,u){a=!0,f(),o&&o.call(n,e,r,t,u),d.resolve({value:e,oldValue:r,propertyName:t,target:u})},c,i),a&&l.remove(),s}function c(n){return!!n}function i(n){return!n}function f(n){return n===!0}function l(n){return n===!1}function a(n){return void 0!==n}function d(n){return void 0===n}function s(n,e,r,t){var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e];return u.forEach(function(e){e=e.trim();var t=n.get(e);r.call(n,t,t,e,n)}),v(n,e,r,t)}function v(n,e,r,t){return n.watch(e,r,t)}function h(n,e,r,t){return o(n,e,r,null,t)}function w(n,e,r,t){return u(n,e,r,c,t)}function m(n,e,r,t){return o(n,e,r,c,t)}function O(n,e,r,t){return u(n,e,r,i,t)}function p(n,e,r,t){return o(n,e,r,i,t)}function j(n,e,r,t){return u(n,e,r,f,t)}function F(n,e,r,t){return o(n,e,r,f,t)}function R(n,e,r,t){return u(n,e,r,l,t)}function g(n,e,r,t){return o(n,e,r,l,t)}function y(n,e,r,t){return u(n,e,r,a,t)}function D(n,e,r,t){return o(n,e,r,a,t)}function N(n,e,r,t){return u(n,e,r,d,t)}function b(n,e,r,t){return o(n,e,r,d,t)}function x(n,e,r,t){var u=!1,o=n.watch(e,function(e,t,o,c){u||r.call(n,e,t,o,c)},t);return{remove:o.remove,pause:function(){u=!0},resume:function(){u=!1}}}function A(n,e,r,t,u,o,c){function i(){l&&(o&&o(f,e,n,r),l.remove(),l=null,f=null)}var f=null,l=null,a=s(n,e,function(o){i(),o&&o.on&&(f=o,l=o.on(r,t),u&&u(f,e,n,r))},c);return{remove:function(){a.remove(),i()}}}e.init=s,e.watch=v,e.once=h,e.when=w,e.whenOnce=m,e.whenNot=O,e.whenNotOnce=p,e.whenTrue=j,e.whenTrueOnce=F,e.whenFalse=R,e.whenFalseOnce=g,e.whenDefined=y,e.whenDefinedOnce=D,e.whenUndefined=N,e.whenUndefinedOnce=b,e.pausable=x,e.on=A});
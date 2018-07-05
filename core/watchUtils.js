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

define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(n,e,r,t){function u(n,e,r,t,u){var o=n.watch(e,function(e,u,o,i){t&&!t(e)||r.call(n,e,u,o,i)},u);if(Array.isArray(e))for(var i=0,c=e;i<c.length;i++){var f=c[i],l=n.get(f);t&&t(l)&&r.call(n,l,l,e,n)}else{var l=n.get(e);t&&t(l)&&r.call(n,l,l,e,n)}return o}function o(n,e,o,i,c){function f(){l&&(l.remove(),l=null)}var l,a=!1,d=new r(f),v=new t;return v.cancel=d.cancel,v.isCanceled=d.isCanceled,v.isFulfilled=d.isFulfilled,v.isRejected=d.isRejected,v.isResolved=d.isResolved,v.then=d.then,v.remove=f,Object.freeze(v),l=u(n,e,function(e,r,t,u){a=!0,f(),o&&o.call(n,e,r,t,u),d.resolve({value:e,oldValue:r,propertyName:t,target:u})},i,c),a&&l.remove(),v}function i(n){return!!n}function c(n){return!n}function f(n){return!0===n}function l(n){return!1===n}function a(n){return void 0!==n}function d(n){return void 0===n}function v(n,e,r,t){for(var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=s(n,e,r,t),i=0,c=u;i<c.length;i++){var f=c[i],l=f.trim(),a=n.get(l);r.call(n,a,a,l,n)}return o}function s(n,e,r,t){return n.watch(e,r,t)}function h(n,e,r,t){return o(n,e,r,null,t)}function w(n,e,r,t){return u(n,e,r,i,t)}function m(n,e,r,t){return o(n,e,r,i,t)}function p(n,e,r,t){return u(n,e,r,c,t)}function O(n,e,r,t){return o(n,e,r,c,t)}function g(n,e,r,t){return u(n,e,r,f,t)}function y(n,e,r,t){return o(n,e,r,f,t)}function j(n,e,r,t){return u(n,e,r,l,t)}function A(n,e,r,t){return o(n,e,r,l,t)}function F(n,e,r,t){return u(n,e,r,a,t)}function R(n,e,r,t){return o(n,e,r,a,t)}function b(n,e,r,t){return u(n,e,r,d,t)}function D(n,e,r,t){return o(n,e,r,d,t)}function N(n,e,r,t){var u=!1,o=n.watch(e,function(e,t,o,i){u||r.call(n,e,t,o,i)},t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}}function x(n,e,r,t,u,o,i){function c(e){var t=f[e];t&&(o&&o(t.target,e,n,r),t.handle.remove(),delete f[e])}var f={},l=v(n,e,function(e,o,i){c(i),e&&"function"==typeof e.on&&(f[i]={handle:e.on(r,t),target:e},u&&u(e,i,n,r))},i);return{remove:function(){l.remove();for(var n in f)c(n)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.init=v,e.watch=s,e.once=h,e.when=w,e.whenOnce=m,e.whenNot=p,e.whenNotOnce=O,e.whenTrue=g,e.whenTrueOnce=y,e.whenFalse=j,e.whenFalseOnce=A,e.whenDefined=F,e.whenDefinedOnce=R,e.whenUndefined=b,e.whenUndefinedOnce=D,e.pausable=N,e.on=x});
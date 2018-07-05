// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/Promise"],function(n,e,r,t){function u(n,e){Array.isArray(n)?n.forEach(e):e(n)}function o(n,e,r,t,o){var i=n.watch(e,function(e,u,o,i){t&&!t(e)||r.call(n,e,u,o,i)},o);return u(e,function(e){var u=n.get(e);t&&t(u)&&r.call(n,u,u,e,n)}),i}function i(n,e,u,i,c){function f(){a&&(a.remove(),a=null)}var a,l=!1,d=new r(f),v=new t;return v.cancel=d.cancel,v.isCanceled=d.isCanceled,v.isFulfilled=d.isFulfilled,v.isRejected=d.isRejected,v.isResolved=d.isResolved,v.then=d.then,v.remove=f,Object.freeze(v),a=o(n,e,function(e,r,t,o){l=!0,f(),u&&u.call(n,e,r,t,o),d.resolve({value:e,oldValue:r,propertyName:t,target:o})},i,c),l&&a.remove(),v}function c(n){return!!n}function f(n){return!n}function a(n){return!0===n}function l(n){return!1===n}function d(n){return void 0!==n}function v(n){return void 0===n}function s(n,e,r,t){var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=h(n,e,r,t);return u.forEach(function(e){e=e.trim();var t=n.get(e);r.call(n,t,t,e,n)}),o}function h(n,e,r,t){return n.watch(e,r,t)}function w(n,e,r,t){return i(n,e,r,null,t)}function m(n,e,r,t){return o(n,e,r,c,t)}function p(n,e,r,t){return i(n,e,r,c,t)}function O(n,e,r,t){return o(n,e,r,f,t)}function y(n,e,r,t){return i(n,e,r,f,t)}function j(n,e,r,t){return o(n,e,r,a,t)}function g(n,e,r,t){return i(n,e,r,a,t)}function A(n,e,r,t){return o(n,e,r,l,t)}function F(n,e,r,t){return i(n,e,r,l,t)}function R(n,e,r,t){return o(n,e,r,d,t)}function b(n,e,r,t){return i(n,e,r,d,t)}function D(n,e,r,t){return o(n,e,r,v,t)}function N(n,e,r,t){return i(n,e,r,v,t)}function x(n,e,r,t){var u=!1,o=n.watch(e,function(e,t,o,i){u||r.call(n,e,t,o,i)},t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}}function C(n,e,r,t,u,o,i){function c(e){var t=f[e];t&&(o&&o(t.target,e,n,r),t.handle.remove(),delete f[e])}var f={},a=s(n,e,function(e,o,i){c(i),e&&"function"==typeof e.on&&(f[i]={handle:e.on(r,t),target:e},u&&u(e,i,n,r))},i);return{remove:function(){a.remove();for(var n in f)c(n)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.init=s,e.watch=h,e.once=w,e.when=m,e.whenOnce=p,e.whenNot=O,e.whenNotOnce=y,e.whenTrue=j,e.whenTrueOnce=g,e.whenFalse=A,e.whenFalseOnce=F,e.whenDefined=R,e.whenDefinedOnce=b,e.whenUndefined=D,e.whenUndefinedOnce=N,e.pausable=x,e.on=C});
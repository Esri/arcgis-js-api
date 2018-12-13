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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./promiseUtils"],function(e,n,r){function t(e,n,r,t,u){var i=e.watch(n,function(n,u,i,o){t&&!t(n)||r.call(e,n,u,i,o)},u);if(Array.isArray(n))for(var o=0,c=n;o<c.length;o++){var f=c[o],a=e.get(f);t&&t(a)&&r.call(e,a,a,n,e)}else{var a=e.get(n);t&&t(a)&&r.call(e,a,a,n,e)}return i}function u(e,n,u,i,o){function c(){f&&(f.remove(),f=null)}var f,a=!1,l=r.createDeferred(c),s={cancel:l.cancel,then:l.promise.then,catch:l.promise.catch,isCanceled:l.promise.isCanceled,isFulfilled:l.promise.isFulfilled,isRejected:l.promise.isRejected,isResolved:l.promise.isResolved,remove:c};return Object.freeze(s),f=t(e,n,function(n,r,t,i){a=!0,c(),u&&u.call(e,n,r,t,i),l.resolve({value:n,oldValue:r,propertyName:t,target:i})},i,o),a&&c(),s}function i(e){return!!e}function o(e){return!e}function c(e){return!0===e}function f(e){return!1===e}function a(e){return void 0!==e}function l(e){return void 0===e}function s(e,n,r,t){for(var u=Array.isArray(n)?n:n.indexOf(",")>-1?n.split(","):[n],i=d(e,n,r,t),o=0,c=u;o<c.length;o++){var f=c[o],a=f.trim(),l=e.get(a);r.call(e,l,l,a,e)}return i}function d(e,n,r,t){return e.watch(n,r,t)}function v(e,n,r,t){return u(e,n,r,null,t)}function h(e,n,r,u){return t(e,n,r,i,u)}function m(e,n,r,t){return u(e,n,r,i,t)}function w(e,n,r,u){return t(e,n,r,o,u)}function p(e,n,r,t){return u(e,n,r,o,t)}function O(e,n,r,u){return t(e,n,r,c,u)}function g(e,n,r,t){return u(e,n,r,c,t)}function y(e,n,r,u){return t(e,n,r,f,u)}function j(e,n,r,t){return u(e,n,r,f,t)}function A(e,n,r,u){return t(e,n,r,a,u)}function F(e,n,r,t){return u(e,n,r,a,t)}function R(e,n,r,u){return t(e,n,r,l,u)}function b(e,n,r,t){return u(e,n,r,l,t)}function D(e,n,r,t){var u=!1,i=e.watch(n,function(n,t,i,o){u||r.call(e,n,t,i,o)},t);return{remove:function(){i.remove()},pause:function(){u=!0},resume:function(){u=!1}}}function N(e,n,r,t,u,i,o){function c(n){var t=f[n];t&&(i&&i(t.target,n,e,r),t.handle.remove(),delete f[n])}var f={},a=s(e,n,function(n,i,o){c(o),n&&"function"==typeof n.on&&(f[o]={handle:n.on(r,t),target:n},u&&u(n,o,e,r))},o);return{remove:function(){a.remove();for(var e in f)c(e)}}}Object.defineProperty(n,"__esModule",{value:!0}),n.init=s,n.watch=d,n.once=v,n.when=h,n.whenOnce=m,n.whenNot=w,n.whenNotOnce=p,n.whenTrue=O,n.whenTrueOnce=g,n.whenFalse=y,n.whenFalseOnce=j,n.whenDefined=A,n.whenDefinedOnce=F,n.whenUndefined=R,n.whenUndefinedOnce=b,n.pausable=D,n.on=N});
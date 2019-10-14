// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./events","./has","./lang","./promiseUtils"],function(n,e,r,t,u,o){function c(n,e,r,t,u){var o=n.watch(e,function(e,u,o,c){r&&!r(e)||t.call(n,e,u,o,c)},u);if(Array.isArray(e))for(var c=0,i=e;c<i.length;c++){var a=i[c],f=n.get(a);r&&r(f)&&t.call(n,f,f,e,n)}else{var f=n.get(e);r&&r(f)&&t.call(n,f,f,e,n)}return o}function i(n,e,r,u,i){function a(){h&&(h.remove(),h=null)}var f="function"==typeof u?u:null,l="object"==typeof u?u:null;"boolean"==typeof u&&(i=u);var h,v=!1,s=o.createDeferred(a);o.onAbort(l,function(){a(),s.reject(o.createAbortError())});var d=t("esri-native-promise")?{then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:a}:{cancel:s.cancel,then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:a};return Object.freeze(d),h=c(n,e,r,function(e,r,t,u){v=!0,a(),f&&f.call(n,e,r,t,u),s.resolve({value:e,oldValue:r,propertyName:t,target:u})},i),v&&a(),d}function a(n){return!!n}function f(n){return!n}function l(n){return!0===n}function h(n){return!1===n}function v(n){return void 0!==n}function s(n){return void 0===n}function d(n,e,r,t){for(var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=m(n,e,r,t),c=0,i=u;c<i.length;c++){var a=i[c],f=a.trim().replace($,"$1"),l=n.get(f);r.call(n,l,l,f,n)}return o}function m(n,e,r,t){return n.watch(e,r,t)}function p(n,e,r,t){return i(n,e,null,r,t)}function w(n,e,r,t){return c(n,e,a,r,t)}function b(n,e,r,t){return i(n,e,a,r,t)}function g(n,e,r,t){return c(n,e,f,r,t)}function O(n,e,r,t){return i(n,e,f,r,t)}function y(n,e,r,t){return c(n,e,l,r,t)}function A(n,e,r,t){return i(n,e,l,r,t)}function q(n,e,r,t){return c(n,e,h,r,t)}function j(n,e,r,t){return i(n,e,h,r,t)}function E(n,e,r,t){return c(n,e,v,r,t)}function D(n,e,r,t){return i(n,e,v,r,t)}function N(n,e,r,t){return c(n,e,s,r,t)}function T(n,e,r,t){return i(n,e,s,r,t)}function U(n,e,r,t,o){return c(n,e,function(n){return u.equals(r,n)},t,o)}function x(n,e,r,t,o){return i(n,e,function(n){return u.equals(r,n)},t,o)}function F(n,e,r,t){var u=!1,o=n.watch(e,function(e,t,o,c){u||r.call(n,e,t,o,c)},t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}}function V(n,e,t,u,o,c,i){function a(e){var r=f[e];r&&(c&&c(r.target,e,n,t),r.handle.remove(),delete f[e])}var f={},l=d(n,e,function(e,c,i){a(i),r.isEventTarget(e)&&(f[i]={handle:r.on(e,t,u),target:e},o&&o(e,i,n,t))},i);return{remove:function(){l.remove();for(var n in f)a(n)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.whenValidOnce=i;var $=/\?(\.|$)/g;e.init=d,e.watch=m,e.once=p,e.when=w,e.whenOnce=b,e.whenNot=g,e.whenNotOnce=O,e.whenTrue=y,e.whenTrueOnce=A,e.whenFalse=q,e.whenFalseOnce=j,e.whenDefined=E,e.whenDefinedOnce=D,e.whenUndefined=N,e.whenUndefinedOnce=T,e.whenEqual=U,e.whenEqualOnce=x,e.pausable=F,e.on=V});
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

define(["require","exports","./events","./has","./promiseUtils"],function(n,e,r,t,o){function u(n,e,r,t,o){var u=n.watch(e,function(e,o,u,c){r&&!r(e)||t.call(n,e,o,u,c)},o);if(Array.isArray(e))for(var c=0,i=e;c<i.length;c++){var a=i[c],f=n.get(a);r&&r(f)&&t.call(n,f,f,e,n)}else{var f=n.get(e);r&&r(f)&&t.call(n,f,f,e,n)}return u}function c(n,e,r,c,i){function a(){h&&(h.remove(),h=null)}var f="function"==typeof c?c:null,l="object"==typeof c?c:null;"boolean"==typeof c&&(i=c);var h,v=!1,s=o.createDeferred(a);o.onAbort(l,function(){a(),s.reject(o.createAbortError())});var d=t("esri-native-promise")?{then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:a}:{cancel:s.cancel,then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:a};return Object.freeze(d),h=u(n,e,r,function(e,r,t,o){v=!0,a(),f&&f.call(n,e,r,t,o),s.resolve({value:e,oldValue:r,propertyName:t,target:o})},i),v&&a(),d}function i(n){return!!n}function a(n){return!n}function f(n){return!0===n}function l(n){return!1===n}function h(n){return void 0!==n}function v(n){return void 0===n}function s(n,e,r,t){for(var o=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],u=d(n,e,r,t),c=0,i=o;c<i.length;c++){var a=i[c],f=a.trim().replace(F,"$1"),l=n.get(f);r.call(n,l,l,f,n)}return u}function d(n,e,r,t){return n.watch(e,r,t)}function m(n,e,r,t){return c(n,e,null,r,t)}function p(n,e,r,t){return u(n,e,i,r,t)}function w(n,e,r,t){return c(n,e,i,r,t)}function b(n,e,r,t){return u(n,e,a,r,t)}function g(n,e,r,t){return c(n,e,a,r,t)}function O(n,e,r,t){return u(n,e,f,r,t)}function y(n,e,r,t){return c(n,e,f,r,t)}function A(n,e,r,t){return u(n,e,l,r,t)}function j(n,e,r,t){return c(n,e,l,r,t)}function D(n,e,r,t){return u(n,e,h,r,t)}function N(n,e,r,t){return c(n,e,h,r,t)}function T(n,e,r,t){return u(n,e,v,r,t)}function U(n,e,r,t){return c(n,e,v,r,t)}function x(n,e,r,t){var o=!1,u=n.watch(e,function(e,t,u,c){o||r.call(n,e,t,u,c)},t);return{remove:function(){u.remove()},pause:function(){o=!0},resume:function(){o=!1}}}function E(n,e,t,o,u,c,i){function a(e){var r=f[e];r&&(c&&c(r.target,e,n,t),r.handle.remove(),delete f[e])}var f={},l=s(n,e,function(e,c,i){a(i),r.isEventTarget(e)&&(f[i]={handle:r.on(e,t,o),target:e},u&&u(e,i,n,t))},i);return{remove:function(){l.remove();for(var n in f)a(n)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.whenValidOnce=c;var F=/\?(\.|$)/g;e.init=s,e.watch=d,e.once=m,e.when=p,e.whenOnce=w,e.whenNot=b,e.whenNotOnce=g,e.whenTrue=O,e.whenTrueOnce=y,e.whenFalse=A,e.whenFalseOnce=j,e.whenDefined=D,e.whenDefinedOnce=N,e.whenUndefined=T,e.whenUndefinedOnce=U,e.pausable=x,e.on=E});
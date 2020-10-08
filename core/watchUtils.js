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

define(["require","exports","./events","./lang","./promiseUtils"],(function(n,e,r,t,u){"use strict";function o(n,e,r,t,u){var o=n.watch(e,(function(e,u,o,c){r&&!r(e)||null==t||t.call(n,e,u,o,c)}),u);if(Array.isArray(e))for(var c=0,i=e;c<i.length;c++){var a=i[c],f=n.get(a);r&&r(f)&&(null==t||t.call(n,f,f,e,n))}else{f=n.get(e);r&&r(f)&&(null==t||t.call(n,f,f,e,n))}return o}function c(n,e,r,t,c){var i="function"==typeof t?t:null,a="object"==typeof t?t:null;"boolean"==typeof t&&(c=t);var f,l=!1;function h(){f&&(f.remove(),f=null)}var w=u.createDeferred();u.onAbort(a,(function(){h(),w.reject(u.createAbortError())}));var v={then:w.promise.then.bind(w.promise),catch:w.promise.catch.bind(w.promise),remove:h};return Object.freeze(v),f=o(n,e,r,(function(e,r,t,u){l=!0,h(),i&&i.call(n,e,r,t,u),w.resolve({value:e,oldValue:r,propertyName:t,target:u})}),c),l&&h(),v}function i(n){return!!n}function a(n){return!n}function f(n){return!0===n}function l(n){return!1===n}function h(n){return void 0!==n}function w(n){return void 0===n}Object.defineProperty(e,"__esModule",{value:!0}),e.on=e.pausable=e.whenEqualOnce=e.whenEqual=e.whenUndefinedOnce=e.whenUndefined=e.whenDefinedOnce=e.whenDefined=e.whenFalseOnce=e.whenFalse=e.whenTrueOnce=e.whenTrue=e.whenNotOnce=e.whenNot=e.whenOnce=e.when=e.once=e.watch=e.init=e.whenValidOnce=void 0,e.whenValidOnce=c;var v=/\?(\.|$)/g;function d(n,e,r,t){for(var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=s(n,e,r,t),c=0,i=u;c<i.length;c++){var a=i[c].trim().replace(v,"$1"),f=n.get(a);r.call(n,f,f,a,n)}return o}function s(n,e,r,t){return n.watch(e,r,t)}e.init=d,e.watch=s,e.once=function(n,e,r,t){return c(n,e,null,r,t)},e.when=function(n,e,r,t){return o(n,e,i,r,t)},e.whenOnce=function(n,e,r,t){return c(n,e,i,r,t)},e.whenNot=function(n,e,r,t){return o(n,e,a,r,t)},e.whenNotOnce=function(n,e,r,t){return c(n,e,a,r,t)},e.whenTrue=function(n,e,r,t){return o(n,e,f,r,t)},e.whenTrueOnce=function(n,e,r,t){return c(n,e,f,r,t)},e.whenFalse=function(n,e,r,t){return o(n,e,l,r,t)},e.whenFalseOnce=function(n,e,r,t){return c(n,e,l,r,t)},e.whenDefined=function(n,e,r,t){return o(n,e,h,r,t)},e.whenDefinedOnce=function(n,e,r,t){return c(n,e,h,r,t)},e.whenUndefined=function(n,e,r,t){return o(n,e,w,r,t)},e.whenUndefinedOnce=function(n,e,r,t){return c(n,e,w,r,t)},e.whenEqual=function(n,e,r,u,c){return o(n,e,(function(n){return t.equals(r,n)}),u,c)},e.whenEqualOnce=function(n,e,r,u,o){return c(n,e,(function(n){return t.equals(r,n)}),u,o)},e.pausable=function(n,e,r,t){var u=!1,o=n.watch(e,(function(e,t,o,c){u||r.call(n,e,t,o,c)}),t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}},e.on=function(n,e,t,u,o,c,i){var a={};function f(e){var r=a[e];r&&(c&&c(r.target,e,n,t),r.handle.remove(),delete a[e])}var l=d(n,e,(function(e,c,i){f(i),r.isEventTarget(e)&&(a[i]={handle:r.on(e,t,u),target:e},o&&o(e,i,n,t))}),i);return{remove:function(){for(var n in l.remove(),a)f(n)}}}}));
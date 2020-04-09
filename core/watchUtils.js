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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./events","./has","./lang","./promiseUtils"],(function(n,e,r,t,u,o){function c(n,e,r,t,u){var o=n.watch(e,(function(e,u,o,c){r&&!r(e)||t.call(n,e,u,o,c)}),u);if(Array.isArray(e))for(var c=0,i=e;c<i.length;c++){var a=i[c],f=n.get(a);r&&r(f)&&t.call(n,f,f,e,n)}else{f=n.get(e);r&&r(f)&&t.call(n,f,f,e,n)}return o}function i(n,e,r,u,i){var a="function"==typeof u?u:null,f="object"==typeof u?u:null;"boolean"==typeof u&&(i=u);var l,h=!1;function v(){l&&(l.remove(),l=null)}var s=o.createDeferred(v);o.onAbort(f,(function(){v(),s.reject(o.createAbortError())}));var d=t("esri-native-promise")?{then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:v}:{cancel:s.cancel,then:s.promise.then.bind(s.promise),catch:s.promise.catch.bind(s.promise),remove:v};return Object.freeze(d),l=c(n,e,r,(function(e,r,t,u){h=!0,v(),a&&a.call(n,e,r,t,u),s.resolve({value:e,oldValue:r,propertyName:t,target:u})}),i),h&&v(),d}function a(n){return!!n}function f(n){return!n}function l(n){return!0===n}function h(n){return!1===n}function v(n){return void 0!==n}function s(n){return void 0===n}Object.defineProperty(e,"__esModule",{value:!0}),e.whenValidOnce=i;var d=/\?(\.|$)/g;function m(n,e,r,t){for(var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=p(n,e,r,t),c=0,i=u;c<i.length;c++){var a=i[c].trim().replace(d,"$1"),f=n.get(a);r.call(n,f,f,a,n)}return o}function p(n,e,r,t){return n.watch(e,r,t)}e.init=m,e.watch=p,e.once=function(n,e,r,t){return i(n,e,null,r,t)},e.when=function(n,e,r,t){return c(n,e,a,r,t)},e.whenOnce=function(n,e,r,t){return i(n,e,a,r,t)},e.whenNot=function(n,e,r,t){return c(n,e,f,r,t)},e.whenNotOnce=function(n,e,r,t){return i(n,e,f,r,t)},e.whenTrue=function(n,e,r,t){return c(n,e,l,r,t)},e.whenTrueOnce=function(n,e,r,t){return i(n,e,l,r,t)},e.whenFalse=function(n,e,r,t){return c(n,e,h,r,t)},e.whenFalseOnce=function(n,e,r,t){return i(n,e,h,r,t)},e.whenDefined=function(n,e,r,t){return c(n,e,v,r,t)},e.whenDefinedOnce=function(n,e,r,t){return i(n,e,v,r,t)},e.whenUndefined=function(n,e,r,t){return c(n,e,s,r,t)},e.whenUndefinedOnce=function(n,e,r,t){return i(n,e,s,r,t)},e.whenEqual=function(n,e,r,t,o){return c(n,e,(function(n){return u.equals(r,n)}),t,o)},e.whenEqualOnce=function(n,e,r,t,o){return i(n,e,(function(n){return u.equals(r,n)}),t,o)},e.pausable=function(n,e,r,t){var u=!1,o=n.watch(e,(function(e,t,o,c){u||r.call(n,e,t,o,c)}),t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}},e.on=function(n,e,t,u,o,c,i){var a={};function f(e){var r=a[e];r&&(c&&c(r.target,e,n,t),r.handle.remove(),delete a[e])}var l=m(n,e,(function(e,c,i){f(i),r.isEventTarget(e)&&(a[i]={handle:r.on(e,t,u),target:e},o&&o(e,i,n,t))}),i);return{remove:function(){for(var n in l.remove(),a)f(n)}}}}));
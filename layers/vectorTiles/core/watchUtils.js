// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/Promise"],(function(n,e,r,t){function u(n,e,r,t,u){var o=n.watch(e,(function(e,u,o,i){t&&!t(e)||r.call(n,e,u,o,i)}),u);return function(n,e){Array.isArray(n)?n.forEach(e):e(n)}(e,(function(e){var u=n.get(e);t&&t(u)&&r.call(n,u,u,e,n)})),o}function o(n,e,o,i,c){var f,a=!1;function l(){f&&(f.remove(),f=null)}var d=new r(l),v=new t;return v.cancel=d.cancel,v.isCanceled=d.isCanceled,v.isFulfilled=d.isFulfilled,v.isRejected=d.isRejected,v.isResolved=d.isResolved,v.then=d.then,v.remove=l,Object.freeze(v),f=u(n,e,(function(e,r,t,u){a=!0,l(),o&&o.call(n,e,r,t,u),d.resolve({value:e,oldValue:r,propertyName:t,target:u})}),i,c),a&&f.remove(),v}function i(n){return!!n}function c(n){return!n}function f(n){return!0===n}function a(n){return!1===n}function l(n){return void 0!==n}function d(n){return void 0===n}function v(n,e,r,t){var u=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e],o=s(n,e,r,t);return u.forEach((function(e){e=e.trim();var t=n.get(e);r.call(n,t,t,e,n)})),o}function s(n,e,r,t){return n.watch(e,r,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.init=v,e.watch=s,e.once=function(n,e,r,t){return o(n,e,r,null,t)},e.when=function(n,e,r,t){return u(n,e,r,i,t)},e.whenOnce=function(n,e,r,t){return o(n,e,r,i,t)},e.whenNot=function(n,e,r,t){return u(n,e,r,c,t)},e.whenNotOnce=function(n,e,r,t){return o(n,e,r,c,t)},e.whenTrue=function(n,e,r,t){return u(n,e,r,f,t)},e.whenTrueOnce=function(n,e,r,t){return o(n,e,r,f,t)},e.whenFalse=function(n,e,r,t){return u(n,e,r,a,t)},e.whenFalseOnce=function(n,e,r,t){return o(n,e,r,a,t)},e.whenDefined=function(n,e,r,t){return u(n,e,r,l,t)},e.whenDefinedOnce=function(n,e,r,t){return o(n,e,r,l,t)},e.whenUndefined=function(n,e,r,t){return u(n,e,r,d,t)},e.whenUndefinedOnce=function(n,e,r,t){return o(n,e,r,d,t)},e.pausable=function(n,e,r,t){var u=!1,o=n.watch(e,(function(e,t,o,i){u||r.call(n,e,t,o,i)}),t);return{remove:function(){o.remove()},pause:function(){u=!0},resume:function(){u=!1}}},e.on=function(n,e,r,t,u,o,i){var c={};function f(e){var t=c[e];t&&(o&&o(t.target,e,n,r),t.handle.remove(),delete c[e])}var a=v(n,e,(function(e,o,i){f(i),e&&"function"==typeof e.on&&(c[i]={handle:e.on(r,t),target:e},u&&u(e,i,n,r))}),i);return{remove:function(){for(var n in a.remove(),c)f(n)}}}}));
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/promise/Promise"],function(n,e){function t(n,e,t,r){var u=n.watch(e,function(e,u,o,c){(!r||r(e))&&t.call(n,e,u,o,c)}),o=n.get(e);return r&&r(o)&&t.call(n,o,o,e,n),u}function r(n,t){var r=new e;return r.cancel=n.cancel,r.isCanceled=n.isCanceled,r.isFulfilled=n.isFulfilled,r.isRejected=n.isRejected,r.isResolved=n.isResolved,r.then=n.then,r.remove=t,Object.freeze(r)}function u(e,u,o,c){var i,f=!1,l=new n(function(){i&&(i.remove(),i=null)}),a=r(l,function(){i&&(i.remove(),i=null)});return i=t(e,u,function(n,t,r,u){f=!0,i&&(i.remove(),i=null),o&&o.call(e,n,t,r,u),l.resolve({value:n,oldValue:t,propertyName:r,target:u})},c),f&&i.remove(),a}function o(n){return!!n}function c(n){return!n}function i(n){return n===!0}function f(n){return n===!1}function l(n){return void 0!==n}function a(n){return void 0===n}var d={init:function(n,e,t){var r=Array.isArray(e)?e:e.indexOf(",")>-1?e.split(","):[e];return r.forEach(function(e){e=e.trim();var r=n.get(e);t.call(n,r,r,e,n)}),d.watch(n,e,t)},watch:function(n,e,t){return n.watch(e,t)},once:function(n,e,t){return u(n,e,t)},when:function(n,e,r){return t(n,e,r,o)},whenOnce:function(n,e,t){return u(n,e,t,o)},whenNot:function(n,e,r){return t(n,e,r,c)},whenNotOnce:function(n,e,t){return u(n,e,t,c)},whenTrue:function(n,e,r){return t(n,e,r,i)},whenTrueOnce:function(n,e,t){return u(n,e,t,i)},whenFalse:function(n,e,r){return t(n,e,r,f)},whenFalseOnce:function(n,e,t){return u(n,e,t,f)},whenDefined:function(n,e,r){return t(n,e,r,l)},whenDefinedOnce:function(n,e,t){return u(n,e,t,l)},whenUndefined:function(n,e,r){return t(n,e,r,a)},whenUndefinedOnce:function(n,e,t){return u(n,e,t,a)},pausable:function(n,e,t){t||"function"!=typeof e||(t=e,e="*");var r=!1,u=n.watch(e,function(e,u,o,c){r||t.call(n,e,u,o,c)});return{remove:u.remove,pause:function(){r=!0},resume:function(){r=!1}}},on:function(n,e,t,r,u,o){var c={target:null,handle:null},i=function(){c.handle&&(o&&o(c.target,n,e,t),c.handle.remove(),c.handle=null,c.target=null)},f=d.init(n,e,function(o){i(),o&&o.on&&(c.target=o,c.handle=o.on(t,r),u&&u(c.target,n,e,t))});return{remove:function(){f.remove(),i()}}}};return d});
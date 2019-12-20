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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./has"],function(n,r,e){function u(n){return null!=n}function t(n){return null==n}function o(n,r){return u(n)?r(n):null}function a(n){return n}function f(n,r){return u(n)?n:"function"==typeof r?r():r}function l(n){return t(n)&&(e("dojo-debug-messages")||e("esri-2d-debug"))&&console.error("Expected value to not be null",(new Error).stack),n}function i(n,r){var e=new Array;return n.forEach(function(n){var t=r(n);u(t)&&e.push(t)}),e}function c(n,r){for(var e=new Array,u=0,t=n;u<t.length;u++){var o=t[u];e.push(s(o,null,r))}return e}function p(n,r){for(var e=0,u=n;e<u.length;e++){s(u[e],null,r)}}function s(n,r,e){return u(n)?e(n):r}function h(n,r){return u(n)?r(n):null}function v(n,r){for(var e=0,t=n;e<t.length;e++){var o=t[e],a=r(o);if(u(a))return a}return null}function m(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];for(var u=n,t=0;t<r.length&&u;)u=u[r[t++]];return u}Object.defineProperty(r,"__esModule",{value:!0}),r.isSome=u,r.isNone=t,r.applySome=o,r.unwrap=a,r.unwrapOr=f,r.expect=l,r.mapSome=i,r.mapMany=c,r.forEachSome=p,r.mapOr=s,r.andThen=h,r.mapSomeFirst=v,r.get=m});
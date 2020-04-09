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

define(["require","exports","./has"],(function(n,r,e){function u(n){return null!=n}function t(n){return null==n}function o(n,r,e){return u(n)?e(n):r}Object.defineProperty(r,"__esModule",{value:!0}),r.isSome=u,r.isNone=t,r.applySome=function(n,r){return u(n)?r(n):null},r.unwrap=function(n){return n},r.unwrapOr=function(n,r){return u(n)?n:"function"==typeof r?r():r},r.expect=function(n){return t(n)&&(e("dojo-debug-messages")||e("esri-2d-debug"))&&console.error("Expected value to not be null",(new Error).stack),n},r.mapSome=function(n,r){var e=new Array;return n.forEach((function(n){var t=r(n);u(t)&&e.push(t)})),e},r.mapMany=function(n,r){for(var e=new Array,u=0,t=n;u<t.length;u++){var a=t[u];e.push(o(a,null,r))}return e},r.forEachSome=function(n,r){for(var e=0,u=n;e<u.length;e++){o(u[e],null,r)}},r.mapOr=o,r.andThen=function(n,r){return u(n)?r(n):null},r.mapSomeFirst=function(n,r){for(var e=0,t=n;e<t.length;e++){var o=r(t[e]);if(u(o))return o}return null},r.get=function(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];for(var u=n,t=0;t<r.length&&u;)u=u[r[t++]];return u}}));
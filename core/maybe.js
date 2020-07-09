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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(n,r){function e(n){return null!=n}function u(n,r,u){return e(n)?u(n):r}Object.defineProperty(r,"__esModule",{value:!0}),r.isSome=e,r.isNone=function(n){return null==n},r.isUndefined=function(n){return void 0===n},r.applySome=function(n,r){return e(n)?r(n):null},r.unwrap=function(n){return n},r.unwrapOr=function(n,r){return e(n)?n:"function"==typeof r?r():r},r.destroyMaybe=function(n){return e(n)&&n.destroy(),null},r.mapSome=function(n,r){var u=new Array;return n.forEach((function(n){var t=r(n);e(t)&&u.push(t)})),u},r.mapMany=function(n,r){for(var e=new Array,t=0,o=n;t<o.length;t++){var f=o[t];e.push(u(f,null,r))}return e},r.forEachSome=function(n,r){for(var e=0,t=n;e<t.length;e++){u(t[e],null,r)}},r.mapOr=u,r.andThen=function(n,r){return e(n)?r(n):null},r.mapSomeFirst=function(n,r){for(var u=0,t=n;u<t.length;u++){var o=r(t[u]);if(e(o))return o}return null},r.get=function(n){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];for(var u=n,t=0;t<r.length&&u;)u=u[r[t++]];return u}}));
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

define(["require","exports"],(function(n,e){"use strict";function r(n){return null!=n}function u(n,e,u){return r(n)?u(n):e}Object.defineProperty(e,"__esModule",{value:!0}),e.assumeNonNull=e.get=e.mapSomeFirst=e.andThen=e.mapOr=e.forEachSome=e.mapMany=e.mapSome=e.nullifyNonnullableForDispose=e.removeMaybe=e.disposeMaybe=e.destroyMaybe=e.unwrapOr=e.unwrap=e.applySome=e.isUndefined=e.isNone=e.isSome=e.none=void 0,e.none=null,e.isSome=r,e.isNone=function(n){return null==n},e.isUndefined=function(n){return void 0===n},e.applySome=function(n,e){return r(n)?e(n):null},e.unwrap=function(n){return n},e.unwrapOr=function(n,e){return r(n)?n:"function"==typeof e?e():e},e.destroyMaybe=function(n){return r(n)&&n.destroy(),null},e.disposeMaybe=function(n){return r(n)&&n.dispose(),null},e.removeMaybe=function(n){return r(n)&&n.remove(),null},e.nullifyNonnullableForDispose=function(n){return null},e.mapSome=function(n,e){var u=new Array;return n.forEach((function(n){var o=e(n);r(o)&&u.push(o)})),u},e.mapMany=function(n,e){for(var r=new Array,o=0,t=n;o<t.length;o++){var l=t[o];r.push(u(l,null,e))}return r},e.forEachSome=function(n,e){for(var r=0,o=n;r<o.length;r++){u(o[r],null,e)}},e.mapOr=u,e.andThen=function(n,e){return r(n)?e(n):null},e.mapSomeFirst=function(n,e){for(var u=0,o=n;u<o.length;u++){var t=e(o[u]);if(r(t))return t}return null},e.get=function(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var u=n,o=0;o<e.length&&u;)u=u[e[o++]];return u},e.assumeNonNull=function(n){return n}}));
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

define(["require","exports","../Accessor","../Collection","../maybe","./utils"],(function(e,t,r,n,i,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmpty=t.diff=t.hasDiffAny=t.hasDiff=void 0;var o=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function u(e){return e instanceof r}function l(e){return e instanceof n?Object.keys(e.items):u(e)?f.getProperties(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof n?e.items[t]:e[t]}function a(e){return e?e.declaredClass:null}function s(e,t){var r,n=e.diff;if(n&&"function"==typeof n)return n(e,t);var f=l(e),p=l(t);if(0!==f.length||0!==p.length){if(!f.length||!p.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};var y,d=p.filter((function(e){return-1===f.indexOf(e)})),h=f.filter((function(e){return-1===p.indexOf(e)})),m=f.filter((function(r){return p.indexOf(r)>-1&&c(e,r)!==c(t,r)})).concat(d,h).sort(),v=a(e);if(v&&o.indexOf(v)>-1&&m.length)return{type:"complete",oldValue:e,newValue:t};for(var g=u(e)&&u(t),b=0,A=m;b<A.length;b++){var D=A[b],V=c(e,D),j=c(t,D),O=void 0;(g||"function"!=typeof V&&"function"!=typeof j)&&(V!==j&&(null==V&&null==j||(O=n&&n[D]&&"function"==typeof n[D]?n[D](V,j):"object"==typeof V&&"object"==typeof j&&a(V)===a(j)?s(V,j):{type:"complete",oldValue:V,newValue:j},i.isSome(O)&&(i.isSome(y)?y.diff[D]=O:y={type:"partial",diff:(r={},r[D]=O,r)}))))}return y}}function p(e,t){if(i.isNone(e))return!1;for(var r=e,n=0,f=t.split(".");n<f.length;n++){var o=f[n];if("complete"===r.type)return!0;if("partial"!==r.type)return!1;var u=r.diff[o];if(!u)return!1;r=u}return!0}t.hasDiff=p,t.hasDiffAny=function(e,t){for(var r=0,n=t;r<n.length;r++){if(p(e,n[r]))return!0}return!1},t.diff=function(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&a(e)!==a(t)?{type:"complete",oldValue:e,newValue:t}:s(e,t)},t.isEmpty=function e(t){if(i.isNone(t))return!0;switch(t.type){case"complete":return!1;case"collection":for(var r=t,n=0,f=r.added;n<f.length;n++){if(!e(f[n]))return!1}for(var o=0,u=r.removed;o<u.length;o++){if(!e(u[o]))return!1}for(var l=0,c=r.changed;l<c.length;l++){if(!e(c[l]))return!1}return!0;case"partial":for(var a in t.diff){if(!e(t.diff[a]))return!1}return!0}}}));
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

define(["require","exports","../Accessor","../Collection","../maybe","./utils"],(function(e,t,n,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function u(e){return e instanceof n}function l(e){return e instanceof r?Object.keys(e.items):u(e)?i.getProperties(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof r?e.items[t]:e[t]}function a(e){return e?e.declaredClass:null}function s(e,t){var n,r=e.diff;if(r&&"function"==typeof r)return r(e,t);var i=l(e),p=l(t);if(0!==i.length||0!==p.length){if(!i.length||!p.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};var y,d=p.filter((function(e){return-1===i.indexOf(e)})),m=i.filter((function(e){return-1===p.indexOf(e)})),h=i.filter((function(n){return p.indexOf(n)>-1&&c(e,n)!==c(t,n)})).concat(d,m).sort(),g=a(e);if(g&&f.indexOf(g)>-1&&h.length)return{type:"complete",oldValue:e,newValue:t};for(var v=u(e)&&u(t),b=0,V=h;b<V.length;b++){var j=V[b],A=c(e,j),O=c(t,j),w=void 0;(v||"function"!=typeof A&&"function"!=typeof O)&&(A!==O&&(null==A&&null==O||(w=r&&r[j]&&"function"==typeof r[j]?r[j](A,O):"object"==typeof A&&"object"==typeof O&&a(A)===a(O)?s(A,O):{type:"complete",oldValue:A,newValue:O},o.isSome(w)&&(o.isSome(y)?y.diff[j]=w:y={type:"partial",diff:(n={},n[j]=w,n)}))))}return y}}t.diff=function(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&a(e)!==a(t)?{type:"complete",oldValue:e,newValue:t}:s(e,t)},t.isEmpty=function e(t){if(o.isNone(t))return!0;switch(t.type){case"complete":return!1;case"collection":for(var n=t,r=0,i=n.added;r<i.length;r++){if(!e(i[r]))return!1}for(var f=0,u=n.removed;f<u.length;f++){if(!e(u[f]))return!1}for(var l=0,c=n.changed;l<c.length;l++){if(!e(c[l]))return!1}return!0;case"partial":for(var a in t.diff){if(!e(t.diff[a]))return!1}return!0}}}));
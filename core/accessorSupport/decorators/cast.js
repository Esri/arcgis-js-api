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

define(["require","exports","../../deprecate","../../Logger","../ensureType","../metadata"],(function(e,t,r,a,n,o){Object.defineProperty(t,"__esModule",{value:!0});var c=Object.prototype.toString;function i(e){var t="_meta"in e?n.ensureType(e):e;return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e.push(t),"number"==typeof e[2]?u.apply(this,e):s.apply(this,e)}}function s(e,t,r,a){o.getPropertyMetadata(e,t).cast=a}function u(e,t,n,c){r.deprecated(a.getLogger("esri.core.accessorSupport.decorators.cast"),"@cast decorator on method parameters is deprecated for compatibility with ES decorator spec",{version:"4.14",see:"https://arcg.is/vvbW8"}),o.getParameterMetadata(e,t,n).cast=c}function d(e){return function(t,r){o.getPropertyMetadata(t,e).cast=t[r]}}t.autocastMethod=function(e,t,r){if(o.hasParametersMetadata(e,t)){var a=o.getParametersMetadata(e,t).filter((function(e){return null!=e.cast}));if(a.length){var n=r.value;return r.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,o=a;r<o.length;r++){var c=o[r];e[c.index]=c.cast(e[c.index])}return n.apply(this,e)},r}console.warn("Method "+e.declaredClass+"::"+t+" is decorated with @cast but no parameters are decorated")}},t.cast=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(3!==e.length||"string"!=typeof e[1])return 1===e.length&&"[object Function]"===c.call(e[0])?i(e[0]):1===e.length&&"string"==typeof e[0]?d(e[0]):void 0}}));
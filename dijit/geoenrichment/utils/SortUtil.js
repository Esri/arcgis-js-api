// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define([],function(){function e(e,r,n,a){var u=void 0===a?n:a,t=void 0===e||null===e;if(t!=(void 0===r||null===r)){var o=t?-1:1;return u?-o:o}return t?0:null}function r(e){var r=/^(.+)\s([1-9]\d*)$/.exec(e);return r?{base:r[1],number:r[2]}:/^[1-9]\d*$/.test(e)?{base:"",number:+e}:{base:e,number:0}}var n={};n.compareNumeric=function(r,n,a,u){var t=e(r,n,a,u);return null!==t?t:(r=Number(r),n=Number(n),t=r>n?1:r<n?-1:0,a?-t:t)},n.compareString=function(r,n,a,u){var t=e(r,n,a,u);return null!==t?t:(r=String(r),n=String(n),t=r.localeCompare(n),a?-t:t)};var a=/^(.+)\s([1-9]\d*)(\D*)$/;return n.compareNames=function(e,u,t,o){var c=r("string"==typeof e?e.toLowerCase():e),i=r("string"==typeof u?u.toLowerCase():u),l=null;if(c.base===i.base)l=n.compareNumeric(c.number,i.number,t,o);else{var m=a.exec(c.base);if(m){var s=a.exec(i.base);s&&m[1]===s[1]&&m[3]===s[3]&&(l=n.compareNumeric(m[2],s[2],t,o))}null===l&&(l=n.compareString(c.base,i.base,t,o))}return l||n.compareString(e,u,t,o)},n.compare=function(r,a,u,t){var o=e(r,a,u,t);if(null!==o)return o;var c=typeof r;switch(typeof a!=c&&(c=""),c){case"number":case"boolean":break;case"object":r=r.valueOf(),a=a.valueOf();break;default:return n.compareString(r,a,u,t)}return o=r>a?1:r<a?-1:0,u?-o:o},n});
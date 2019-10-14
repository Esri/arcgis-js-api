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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define([],function(){function e(e,r,a,n){var t=void 0===n?a:n,u=void 0===e||null===e;if(u!=(void 0===r||null===r)){var o=u?-1:1;return t?-o:o}return u?0:null}function r(e){var r=/^(.+)\s([1-9]\d*)$/.exec(e);return r?{base:r[1],number:r[2]}:/^[1-9]\d*$/.test(e)?{base:"",number:+e}:{base:e,number:0}}var a={};a.NEWEST="newest",a.OLDEST="oldest",a.ALPHABETICAL="alphabetical",a.UNALPHABETICAL="unalphabetical",a.compareNumeric=function(r,a,n,t){var u=e(r,a,n,t);return null!==u?u:(r=Number(r),a=Number(a),u=r>a?1:r<a?-1:0,n?-u:u)},a.compareString=function(r,a,n,t){var u=e(r,a,n,t);return null!==u?u:(r=String(r),a=String(a),u=r.localeCompare(a),n?-u:u)};var n=/^(.+)\s([1-9]\d*)(\D*)$/;return a.compareNames=function(e,t,u,o){var c=r("string"==typeof e?e.toLowerCase():e),i=r("string"==typeof t?t.toLowerCase():t),l=null;if(c.base===i.base)l=a.compareNumeric(c.number,i.number,u,o);else{var s=n.exec(c.base);if(s){var b=n.exec(i.base);b&&s[1]===b[1]&&s[3]===b[3]&&(l=a.compareNumeric(s[2],b[2],u,o))}null===l&&(l=a.compareString(c.base,i.base,u,o))}return l||a.compareString(e,t,u,o)},a.compare=function(r,n,t,u){var o=e(r,n,t,u);if(null!==o)return o;var c=typeof r;switch(typeof n!=c&&(c=""),c){case"number":case"boolean":break;case"object":r=r.valueOf(),n=n.valueOf();break;default:return a.compareString(r,n,t,u)}return o=r>n?1:r<n?-1:0,t?-o:o},a});
// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define([],(function(){var e={};function r(e,r,a,n){var t=null==e;if(t!=(null==r)){var u=t?-1:1;return(void 0===n?a:n)?-u:u}return t?0:null}e.NEWEST="newest",e.OLDEST="oldest",e.ALPHABETICAL="alphabetical",e.UNALPHABETICAL="unalphabetical",e.compareNumeric=function(e,a,n,t){var u=r(e,a,n,t);return null!==u?u:(u=(e=Number(e))>(a=Number(a))?1:e<a?-1:0,n?-u:u)},e.compareString=function(e,a,n,t){var u=r(e,a,n,t);return null!==u?u:(e=String(e),a=String(a),u=e.localeCompare(a),n?-u:u)};var a=/^(.+)\s([1-9]\d*)(\D*)$/;function n(e){var r=/^(.+)\s([1-9]\d*)$/.exec(e);return r?{base:r[1],number:r[2]}:/^[1-9]\d*$/.test(e)?{base:"",number:+e}:{base:e,number:0}}return e.compareNames=function(r,t,u,o){var c=n("string"==typeof r?r.toLowerCase():r),l=n("string"==typeof t?t.toLowerCase():t),i=null;if(c.base===l.base)i=e.compareNumeric(c.number,l.number,u,o);else{var s=a.exec(c.base);if(s){var b=a.exec(l.base);b&&s[1]===b[1]&&s[3]===b[3]&&(i=e.compareNumeric(s[2],b[2],u,o))}null===i&&(i=e.compareString(c.base,l.base,u,o))}return i||e.compareString(r,t,u,o)},e.compare=function(a,n,t,u){var o=r(a,n,t,u);if(null!==o)return o;var c=typeof a;switch(typeof n!=c&&(c=""),c){case"number":case"boolean":break;case"object":a=a.valueOf(),n=n.valueOf();break;default:return e.compareString(a,n,t,u)}return o=a>n?1:a<n?-1:0,t?-o:o},e}));
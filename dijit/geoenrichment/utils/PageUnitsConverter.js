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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang"],(function(r){var e={},t=["px","pt","mm","cm","in","twip"];function n(e,t,o){for(var i in o&&(e=r.mixin({},e)),e){var a=e[i];null!==a&&""!==a&&"boolean"!=typeof a&&("object"!=typeof a?(a=Number(a),isNaN(a)||(e[i]=t(a))):e[i]=n(a,t,o))}return e}return t.forEach((function(r){t.forEach((function(t){if(r!==t){var n=r+"To"+t.charAt(0).toUpperCase()+t.substr(1);e[n]=function(n,o){return e.convert(n,r,t,void 0!==o?o:5)}}}))})),e.convert=function(r,t,n,o){switch(r=Number(r)||0,t){case"in":r*=72;break;case"pt":break;case"px":r*=.75;break;case"mm":r/=25.4,r*=72;break;case"cm":r/=2.54,r*=72;break;case"twip":r/=20}switch(n){case"in":r/=72;break;case"pt":break;case"px":r/=.75;break;case"mm":r/=72,r*=25.4;break;case"cm":r/=72,r*=2.54;break;case"twip":r*=20,r=Math.round(r)}return void 0!==o&&(r=e.roundNDigits(r,o)),r},e.pxToPtObj=function(r,t){return n(r,e.pxToPt,!t)},e.ptToPxObj=function(r,t){return n(r,e.ptToPx,!t)},e.roundNDigits=function(r,e){return Number(Number(r).toFixed(e))},e.roundNDigitsObj=function(r,t){for(var n in r){var o=r[n];"object"==typeof o?e.roundNDigitsObj(o,t):r[n]=e.roundNDigits(o,t)}},e}));
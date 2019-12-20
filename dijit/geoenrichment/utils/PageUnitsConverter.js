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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(r){function e(t,n,o){o&&(t=r.mixin({},t));for(var i in t){var a=t[i];null!==a&&""!==a&&"boolean"!=typeof a&&("object"!=typeof a?(a=Number(a),isNaN(a)||(t[i]=n(a))):t[i]=e(a,n,o))}return t}var t={},n=["px","pt","mm","cm","in","twip"];return n.forEach(function(r){n.forEach(function(e){if(r!==e){var n=r+"To"+e.charAt(0).toUpperCase()+e.substr(1);t[n]=function(n,o){return t.convert(n,r,e,void 0!==o?o:5)}}})}),t.convert=function(r,e,n,o){switch(r=Number(r)||0,e){case"in":r*=72;break;case"pt":break;case"px":r*=.75;break;case"mm":r/=25.4,r*=72;break;case"cm":r/=2.54,r*=72;break;case"twip":r/=20}switch(n){case"in":r/=72;break;case"pt":break;case"px":r/=.75;break;case"mm":r/=72,r*=25.4;break;case"cm":r/=72,r*=2.54;break;case"twip":r*=20,r=Math.round(r)}return void 0!==o&&(r=t.roundNDigits(r,o)),r},t.pxToPtObj=function(r,n){return e(r,t.pxToPt,!n)},t.ptToPxObj=function(r,n){return e(r,t.ptToPx,!n)},t.roundNDigits=function(r,e){return Number(Number(r).toFixed(e))},t.roundNDigitsObj=function(r,e){for(var n in r){var o=r[n];"object"==typeof o?t.roundNDigitsObj(o,e):r[n]=t.roundNDigits(o,e)}},t});
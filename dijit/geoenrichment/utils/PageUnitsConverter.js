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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(r){function t(n,e,o){o&&(n=r.mixin({},n));for(var i in n){var a=n[i];null!==a&&""!==a&&"boolean"!=typeof a&&("object"!=typeof a?(a=Number(a),isNaN(a)||(n[i]=e(a))):n[i]=t(a,e,o))}return n}var n={},e=["px","pt","mm","in","twip"];return e.forEach(function(r){e.forEach(function(t){if(r!==t){var e=r+"To"+t.charAt(0).toUpperCase()+t.substr(1);n[e]=function(e,o){return n.convert(e,r,t,void 0!==o?o:5)}}})}),n.convert=function(r,t,e,o){switch(r=Number(r)||0,t){case"in":r*=72;break;case"pt":break;case"px":r*=.75;break;case"mm":r/=25.4,r*=72;break;case"twip":r/=20}switch(e){case"in":r/=72;break;case"pt":break;case"px":r/=.75;break;case"mm":r/=72,r*=25.4;break;case"twip":r*=20,r=Math.round(r)}return void 0!==o&&(r=n.roundNDigits(r,o)),r},n.pxToPtObj=function(r,e){return t(r,n.pxToPt,e)},n.ptToPxObj=function(r,e){return t(r,n.ptToPx,e)},n.roundNDigits=function(r,t){return Number(Number(r).toFixed(t))},n.roundNDigitsObj=function(r,t){for(var e in r){var o=r[e];"object"==typeof o?n.roundNDigitsObj(o,t):r[e]=n.roundNDigits(o,t)}},n});
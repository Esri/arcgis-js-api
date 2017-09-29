// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang"],function(r){function t(n,e,o){o&&(n=r.mixin({},n));for(var i in n){var a=n[i];null!==a&&""!==a&&"boolean"!=typeof a&&("object"!=typeof a?(a=Number(a),isNaN(a)||(n[i]=e(a))):n[i]=t(a,e,o))}return n}var n={},e=25.4,o=.75,i=72,a=20,c=5,u=["px","pt","mm","in","twip"];return u.forEach(function(r){u.forEach(function(t){if(r!==t){var e=r+"To"+t.charAt(0).toUpperCase()+t.substr(1);n[e]=function(e,o){return n.convert(e,r,t,void 0!==o?o:c)}}})}),n.convert=function(r,t,c,u){switch(r=Number(r)||0,t){case"in":r*=i;break;case"pt":break;case"px":r*=o;break;case"mm":r/=e,r*=i;break;case"twip":r/=a}switch(c){case"in":r/=i;break;case"pt":break;case"px":r/=o;break;case"mm":r/=i,r*=e;break;case"twip":r*=a,r=Math.round(r)}return void 0!==u&&(r=n.roundNDigits(r,u)),r},n.pxToPtObj=function(r,e){return t(r,n.pxToPt,e)},n.ptToPxObj=function(r,e){return t(r,n.ptToPx,e)},n.roundNDigits=function(r,t){return Number(Number(r).toFixed(t))},n.roundNDigitsObj=function(r,t){for(var e in r){var o=r[e];"object"==typeof o?n.roundNDigitsObj(o,t):r[e]=n.roundNDigits(o,t)}},n});
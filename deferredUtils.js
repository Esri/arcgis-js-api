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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","./kernel"],function(n,r,e){var a={_dfdCanceller:function(n){n.canceled=!0;var r=n._pendingDfd;-1===n.fired&&r&&-1===r.fired&&r.cancel(),n._pendingDfd=null},_fixDfd:function(n){var r=n.then;return n.then=function(n,e,a){if(n){var l=n;n=function(n){return n&&n._argsArray?l.apply(null,n):l(n)}}return r.call(this,n,e,a)},n},_resDfd:function(n,r,e){var a=r.length;1===a?e?n.errback(r[0]):n.callback(r[0]):a>1?(r._argsArray=!0,n.callback(r)):n.callback()}};return r("extend-esri")&&n.mixin(e,a),a});
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

define(["dojo/_base/lang","dojo/has","./kernel"],function(n,e,r){var l={_dfdCanceller:function(n){n.canceled=!0;var e,r=n._pendingDfd;return n.isFulfilled()||!r||r.isFulfilled()||(r.cancel(),e=r.results&&r.results[1]),n._pendingDfd=null,e},_fixDfd:function(n){var e=n.then;return n.then=function(n,r,l){if(n){var a=n;n=function(n){return n&&n._argsArray?a.apply(null,n):a(n)}}return e.call(this,n,r,l)},n},_resDfd:function(n,e,r){var l=e.length;1===l?r?n.errback(e[0]):n.callback(e[0]):l>1?(e._argsArray=!0,n.callback(e)):n.callback()}};return e("extend-esri")&&n.mixin(r,l),l});
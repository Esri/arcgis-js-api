// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/Deferred"],function(e){var n={makeDeferredCancellingPending:function(){var r={},d=n._dfdCanceller.bind(null,r),l=new e(d);return r.deferred=l,l},_dfdCanceller:function(e){var n;n=e.deferred?e.deferred:e,n.canceled=!0;var r=n._pendingDfd;n.isResolved()||!r||r.isResolved()||r.cancel(),n._pendingDfd=null},_fixDfd:function(e){var n=e.then;return e.then=function(e,r,d){if(e){var l=e;e=function(e){return e&&e._argsArray?l.apply(null,e):l(e)}}return n.call(this,e,r,d)},e},_resDfd:function(e,n,r){var d=n.length;1===d?r?e.reject(n[0]):e.resolve(n[0]):d>1?(n._argsArray=!0,e.resolve(n)):e.resolve()}};return n});
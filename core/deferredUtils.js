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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define([],function(){var e={_dfdCanceller:function(e){e.canceled=!0;var n=e._pendingDfd;e.isResolved()||!n||n.isResolved()||n.cancel(),e._pendingDfd=null},_fixDfd:function(e){var n=e.then;return e.then=function(e,r,l){if(e){var t=e;e=function(e){return e&&e._argsArray?t.apply(null,e):t(e)}}return n.call(this,e,r,l)},e},_resDfd:function(e,n,r){var l=n.length;1===l?r?e.reject(n[0]):e.resolve(n[0]):l>1?(n._argsArray=!0,e.resolve(n)):e.resolve()}};return e});
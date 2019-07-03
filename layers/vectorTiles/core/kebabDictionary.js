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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports"],function(r,n){function o(r,n){void 0===n&&(n={});var o=n.ignoreUnknown||!1,t={};for(var e in r){var i=r[e];t[i]=e}var u=function(r){return t.hasOwnProperty(r)?t[r]:o?void 0:r},f=function(n){return r.hasOwnProperty(n)?r[n]:o?void 0:n};return{toJSON:u,fromJSON:f,read:function(r){return f(r)},write:function(r,n,o){var t=u(r);void 0!==t&&(n[o]=t)}}}return o});
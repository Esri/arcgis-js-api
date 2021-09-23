// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel"],(function(e,r,n,t){function o(e,r){return e.r===r.r&&e.g===r.g&&e.b===r.b}var i={haveIdenticalColors:function(e,n){var t=0;if(e.length===n.length)if(r.every(e,(function(e,r){return o(e,n[r])})))t=1;else{var i=e.slice(0).reverse();r.every(i,(function(e,r){return o(e,n[r])}))&&(t=-1)}return t}};return n("extend-esri")&&e.setObject("styles.utils",i,t),i}));
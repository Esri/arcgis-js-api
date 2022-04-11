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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define([],(function(){var a={EPSILON:1e-6};a.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,a.RANDOM=Math.random,a.ENABLE_SIMD=!1,a.SIMD_AVAILABLE=a.ARRAY_TYPE===Float32Array&&"SIMD"in this,a.USE_SIMD=a.ENABLE_SIMD&&a.SIMD_AVAILABLE,a.setMatrixArrayType=function(t){a.ARRAY_TYPE=t};var t=Math.PI/180;return a.toRadian=function(a){return a*t},a.equals=function(t,r){return Math.abs(t-r)<=a.EPSILON*Math.max(1,Math.abs(t),Math.abs(r))},a}));
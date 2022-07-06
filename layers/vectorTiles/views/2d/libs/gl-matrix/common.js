// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define([],(function(){if(!r)var r=1e-6;if(!a)var a="undefined"!=typeof Float32Array?Float32Array:Array;if(!t)var t=Math.random;var e={GLMAT_EPSILON:r,GLMAT_ARRAY_TYPE:a,GLMAT_RANDOM:t,setMatrixArrayType:function(r){e.GLMAT_ARRAY_TYPE=r}},n=Math.PI/180,A=180/Math.PI;return e.toRadian=function(r){return r*n},e.toDegree=function(r){return r*A},e.setMatrixArrayType(Array),e}));
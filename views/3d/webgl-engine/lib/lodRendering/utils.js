// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../doublePrecisionUtils"],function(e,r,a){function t(e,r){var a={};return a[0]=r.acquire(e,"color"),a[3]=r.acquire(e,"depthShadowMap"),a[2]=r.acquire(e,"normal"),a[1]=r.acquire(e,"depth"),a[4]=r.acquire(e,"highlight"),a}function i(e,r){r.release(e.id,"color"),r.release(e.id,"depthShadowMap"),r.release(e.id,"normal"),r.release(e.id,"depth"),r.release(e.id,"highlight")}function o(e,r,t,i,o){l[0]=e.get(r,0),l[1]=e.get(r,1),l[2]=e.get(r,2),a.encodeDoubleArray(l,n,3),t.set(o,0,n[0]),i.set(o,0,n[1]),t.set(o,1,n[2]),i.set(o,1,n[3]),t.set(o,2,n[4]),i.set(o,2,n[5])}Object.defineProperty(r,"__esModule",{value:!0}),r.acquireGLMaterials=t,r.releaseGLMaterials=i,r.encodeDoubleVec3=o;var l=new Float64Array(3),n=new Float32Array(6)});
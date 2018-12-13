// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../doublePrecisionUtils"],function(e,r,a){function t(e,r){var a={};return a[0]=r.aquire(e),a[3]=r.aquireDepthShadowMap(e),a[2]=r.aquireNormal(e),a[1]=r.aquireDepth(e),a[4]=r.aquireHighlight(e),a}function i(e,r){r.release(e.id),r.releaseDepthShadowMap(e.id),r.releaseNormal(e.id),r.releaseDepth(e.id),r.releaseHighlight(e.id)}function l(e,r,t,i,l){o[0]=e.get(r,0),o[1]=e.get(r,1),o[2]=e.get(r,2),a.encodeDoubleArray(o,s,3),t.set(l,0,s[0]),i.set(l,0,s[1]),t.set(l,1,s[2]),i.set(l,1,s[3]),t.set(l,2,s[4]),i.set(l,2,s[5])}Object.defineProperty(r,"__esModule",{value:!0}),r.acquireGLMaterials=t,r.releaseGLMaterials=i,r.encodeDoubleVec3=l;var o=new Float64Array(3),s=new Float32Array(6)});
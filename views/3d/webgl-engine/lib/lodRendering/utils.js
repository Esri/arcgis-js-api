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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../doublePrecisionUtils","../RenderPass"],function(e,r,a,t){function i(e,r){var a={};return a[t.MATERIAL]=r.aquire(e),a[t.MATERIAL_DEPTH_SHADOWMAP]=r.aquireDepthShadowMap(e),a[t.MATERIAL_NORMAL]=r.aquireNormal(e),a[t.MATERIAL_DEPTH]=r.aquireDepth(e),a[t.MATERIAL_HIGHLIGHT]=r.aquireHighlight(e),a}function l(e,r){r.release(e.id),r.releaseDepthShadowMap(e.id),r.releaseNormal(e.id),r.releaseDepth(e.id),r.releaseHighlight(e.id)}function s(e,r,t,i,l){o[0]=e.get(r,0),o[1]=e.get(r,1),o[2]=e.get(r,2),a.encodeDoubleArray(o,n,3),t.set(l,0,n[0]),i.set(l,0,n[1]),t.set(l,1,n[2]),i.set(l,1,n[3]),t.set(l,2,n[4]),i.set(l,2,n[5])}Object.defineProperty(r,"__esModule",{value:!0}),r.acquireGLMaterials=i,r.releaseGLMaterials=l,r.encodeDoubleVec3=s;var o=new Float64Array(3),n=new Float32Array(6)});
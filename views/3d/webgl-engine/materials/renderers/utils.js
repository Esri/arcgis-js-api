// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/maybe","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64","../../lib/doublePrecisionUtils","../../lib/Util"],(function(e,t,r,a,i,n,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encodeDoubleVec3=t.calculateTransformRelToOrigin=t.releaseMaterials=t.acquireMaterials=t.isInstanceHidden=t.removeObject3DStateID=t.addObject3DStateID=void 0,t.addObject3DStateID=function(e,t){return r.isNone(e)&&(e=[]),e.push(t),e},t.removeObject3DStateID=function(e,t){if(r.isNone(e))return e;var a=e.filter((function(e){return e!==t}));return 0===a.length?null:a},t.isInstanceHidden=function(e){return!!a.isSome(e)&&!e.visible},t.acquireMaterials=function(e,t){var r=new Map;return r.set(0,t.acquire(e,0)),r.set(3,t.acquire(e,3)),r.set(2,t.acquire(e,2)),r.set(1,t.acquire(e,1)),r.set(4,t.acquire(e,4)),r},t.releaseMaterials=function(e,t){t.release(e,0),t.release(e,3),t.release(e,2),t.release(e,1),t.release(e,4)},t.calculateTransformRelToOrigin=function(e,t,r){var n=e.origin.vec3;o.setMatrixTranslation3(u,-n[0],-n[1],-n[2]),a.isSome(e.transformation)?i.mat4.multiply(t,u,e.transformation):i.mat4.copy(t,u),r&&(i.mat4.invert(r,t),i.mat4.transpose(r,r))},t.encodeDoubleVec3=function(e,t,r,a,i){c[0]=e.get(t,0),c[1]=e.get(t,1),c[2]=e.get(t,2),s.encodeDoubleArray(c,l,3),r.set(i,0,l[0]),a.set(i,0,l[1]),r.set(i,1,l[2]),a.set(i,1,l[3]),r.set(i,2,l[4]),a.set(i,2,l[5])};var c=new Float64Array(3),l=new Float32Array(6),u=n.mat4f64.create()}));
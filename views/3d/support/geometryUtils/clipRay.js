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

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec3","../stack","./ray"],(function(e,r,t,c,n,o){"use strict";function i(e){return e?{ray:o.create(e.ray),c0:e.c0,c1:e.c1}:{ray:o.create(),c0:0,c1:Number.MAX_VALUE}}function a(e,r,t,c){return void 0===c&&(c=i()),o.copy(e,c.ray),c.c0=r,c.c1=t,c}function u(e,r,t){void 0===t&&(t=i());var n=c.vec3.length(e.vector);return o.fromValues(e.origin,r,t.ray),t.c0=0,t.c1=n,t}function f(e,r,t){return c.vec3.add(t,e.ray.origin,c.vec3.scale(t,e.ray.direction,r))}Object.defineProperty(r,"__esModule",{value:!0}),r.getAt=r.getEnd=r.getStart=r.fromLineSegmentAndDirection=r.fromLineSegment=r.fromRay=r.fromValues=r.copy=r.wrap=r.create=void 0,r.create=i,r.wrap=function(e,r,t){var c=y.get();return c.ray=e,c.c0=r,c.c1=t,c},r.copy=function(e,r){return void 0===r&&(r=i()),a(e.ray,e.c0,e.c1,r)},r.fromValues=a,r.fromRay=function(e,r){return void 0===r&&(r=i()),o.copy(e,r.ray),r.c0=0,r.c1=Number.MAX_VALUE,r},r.fromLineSegment=function(e,r){return void 0===r&&(r=i()),u(e,c.vec3.normalize(n.sv3d.get(),e.vector),r)},r.fromLineSegmentAndDirection=u,r.getStart=function(e,r){return f(e,e.c0,r)},r.getEnd=function(e,r){return f(e,e.c1,r)},r.getAt=f;var y=new t.ObjectStack((function(){return{c0:0,c1:0,ray:null}}))}));
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectStack","../../../../core/libs/gl-matrix-2/vec3","../stack","./ray"],(function(r,e,c,n,t,o){function i(r){return r?{ray:o.create(r.ray),c0:r.c0,c1:r.c1}:{ray:o.create(),c0:0,c1:Number.MAX_VALUE}}function a(r,e,c,n){return void 0===n&&(n=i()),o.copy(r,n.ray),n.c0=e,n.c1=c,n}function u(r,e,c){void 0===c&&(c=i());var t=n.vec3.length(r.vector);return o.fromValues(r.origin,e,c.ray),c.c0=0,c.c1=t,c}function f(r,e,c){return n.vec3.add(c,r.ray.origin,n.vec3.scale(c,r.ray.direction,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.create=i,e.wrap=function(r,e,c){var n=v.get();return n.ray=r,n.c0=e,n.c1=c,n},e.copy=function(r,e){return void 0===e&&(e=i()),a(r.ray,r.c0,r.c1,e)},e.fromValues=a,e.fromRay=function(r,e){return void 0===e&&(e=i()),o.copy(r,e.ray),e.c0=0,e.c1=Number.MAX_VALUE,e},e.fromLineSegment=function(r,e){return void 0===e&&(e=i()),u(r,n.vec3.normalize(t.sv3d.get(),r.vector),e)},e.fromLineSegmentAndDirection=u,e.getStart=function(r,e){return f(r,r.c0,e)},e.getEnd=function(r,e){return f(r,r.c1,e)},e.getAt=f;var v=new c.ObjectStack((function(){return{c0:0,c1:0,ray:null}}))}));
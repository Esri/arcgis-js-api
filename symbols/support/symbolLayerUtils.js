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

define(["require","exports","../../request","../../core/Error","../../core/LRUCache","../../core/promiseUtils","../../geometry/support/aaBoundingBox","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/objectResourceUtils","../../views/3d/layers/graphics/primitiveObjectSymbolUtils"],function(e,r,i,n,t,o,u,c,s,a,p){function f(){return new t(50)}function h(){B=f()}function v(e){return"icon"===e.type?d(e):"object"===e.type?g(e):void 0}function l(e){return"icon"===e.type?y(e):"object"===e.type?z(e):void 0}function d(e){return e.resource.href?m(e.resource.href).then(function(e){return[e.width,e.height]}):e.resource.primitive?o.resolve(c.PRIMITIVE_SIZE):void 0}function y(e){return d(e).then(function(r){if(null==e.size)return r;var i=r[0]/r[1];return i>1?[e.size,e.size/i]:[e.size*i,e.size]})}function m(e){return i(e,{responseType:"image"}).then(function(e){return e.data})}function g(e){return b(e).then(function(e){return u.size(e)})}function z(e){return g(e).then(function(r){return s.computeSizeWithResourceSize(r,e)})}function b(e){if(e.isPrimitive){var r=null;return e.resource&&e.resource.primitive&&(r=p.primitiveBoundingBox(e.resource.primitive)),r?o.resolve(r):o.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}var i=e.resource.href;return B.has(i)?o.resolve(B.use(i)):a.fetch(i).then(function(e){var r=a.computeBoundingBox(e);return B.insert(i,r),r})}Object.defineProperty(r,"__esModule",{value:!0});var B=f();r.clearBoundingBoxCache=h,r.computeLayerResourceSize=v,r.computeLayerSize=l});
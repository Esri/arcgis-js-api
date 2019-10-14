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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../request","../../core/asyncUtils","../../core/Error","../../core/ItemCache","../../core/promiseUtils","../../geometry/support/aaBoundingBox","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/objectResourceUtils","../../views/3d/layers/graphics/primitiveObjectSymbolUtils"],function(e,r,t,i,n,o,u,s,c,a,l,y){function f(){return new o(50)}function p(){B=f()}function h(e){if("icon"===e.type)return d(e);if("object"===e.type)return w(e);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function m(e){if("icon"===e.type)return v(e);if("object"===e.type)return g(e);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function d(e){if(e.resource.href)return b(e.resource.href).then(function(e){return[e.width,e.height]});if(e.resource.primitive)return u.resolve(c.default.PRIMITIVE_SIZE);throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function v(e){return d(e).then(function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]})}function b(e){return t(e,{responseType:"image"}).then(function(e){return e.data})}function w(e){return z(e).then(function(e){return s.size(e)})}function g(e){return w(e).then(function(r){return a.computeSizeWithResourceSize(r,e)})}function z(e){if(!e.isPrimitive){var r=e.resource.href,t=B.get(r);return void 0!==t?u.resolve(t):i.safeCast(l.fetch(r,{disableTextures:!0}).then(function(e){return B.put(r,e.referenceBoundingBox),e.referenceBoundingBox}))}var o=null;return e.resource&&e.resource.primitive&&(o=y.primitiveBoundingBox(e.resource.primitive)),o?u.resolve(o):u.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}Object.defineProperty(r,"__esModule",{value:!0});var B=f();r.clearBoundingBoxCache=p,r.computeLayerResourceSize=h,r.computeLayerSize=m});
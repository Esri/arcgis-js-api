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

define(["require","exports","../../request","../../core/Error","../../core/ItemCache","../../core/promiseUtils","../../geometry/support/aaBoundingBox","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/objectResourceUtils","../../views/3d/layers/graphics/primitiveObjectSymbolUtils"],function(e,r,t,i,n,o,u,s,c,a,l){function y(){return new n(50)}function f(){z=y()}function p(e){if("icon"===e.type)return m(e);if("object"===e.type)return b(e);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function h(e){if("icon"===e.type)return d(e);if("object"===e.type)return w(e);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}function m(e){if(e.resource.href)return v(e.resource.href).then(function(e){return[e.width,e.height]});if(e.resource.primitive)return o.resolve(s.default.PRIMITIVE_SIZE);throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function d(e){return m(e).then(function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]})}function v(e){return t(e,{responseType:"image"}).then(function(e){return e.data})}function b(e){return g(e).then(function(e){return u.size(e)})}function w(e){return b(e).then(function(r){return c.computeSizeWithResourceSize(r,e)})}function g(e){if(!e.isPrimitive){var r=e.resource.href,t=z.get(r);return void 0!==t?o.resolve(t):a.fetch(r,{disableTextures:!0}).then(function(e){return z.put(r,e.referenceBoundingBox),e.referenceBoundingBox})}var n=null;return e.resource&&e.resource.primitive&&(n=l.primitiveBoundingBox(e.resource.primitive)),n?o.resolve(n):o.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}Object.defineProperty(r,"__esModule",{value:!0});var z=y();r.clearBoundingBoxCache=f,r.computeLayerResourceSize=p,r.computeLayerSize=h});
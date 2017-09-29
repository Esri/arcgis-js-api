// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../request","../../core/promiseUtils","../../core/Error","../../core/LRUCache","../../views/3d/support/aaBoundingBox","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/Graphics3DObjectSymbolLayer","../../views/3d/layers/graphics/objectResourceUtils"],function(e,r,i,n,t,o,u,c,s,a,h){function f(){var e=50;return new o(e)}function p(){I=f()}function v(e){return"icon"===e.type?d(e):"object"===e.type?g(e):void 0}function l(e){return"icon"===e.type?y(e):"object"===e.type?z(e):void 0}function d(e){return e.resource.href?m(e.resource.href).then(function(e){return[e.width,e.height]}):e.resource.primitive?n.resolve(s.PRIMITIVE_SIZE):void 0}function y(e){return d(e).then(function(r){if(null==e.size)return r;var i=r[0]/r[1];return i>1?[e.size,e.size/i]:[e.size*i,e.size]})}function m(e){return i(e,{responseType:"image"}).then(function(e){return e.data})}function g(e){return b(e).then(function(e){return u.size(e)})}function z(e){return g(e).then(function(r){return c.computeSizeWithResourceSize(r,e)})}function b(e){if(e.isPrimitive){var r=null;return e.resource&&e.resource.primitive&&(r=a.PRIMITIVE_BOUNDING_BOX[e.resource.primitive]),r?n.resolve(r):n.reject(new t("symbol:invalid-resource","The symbol does not have a valid resource"))}var i=e.resource.href;return I.has(i)?n.resolve(I.use(i)):h.fetch(i).then(function(e){var r=h.computeBoundingBox(e);return I.insert(i,r),r})}Object.defineProperty(r,"__esModule",{value:!0});var I=f();r.clearBoundingBoxCache=p,r.computeLayerResourceSize=v,r.computeLayerSize=l});
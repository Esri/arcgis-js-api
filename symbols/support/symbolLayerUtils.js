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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/Error","../../core/ItemCache","../../core/maybe","../../core/promiseUtils","../../geometry/support/aaBoundingBox","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/objectResourceUtils","../../views/3d/layers/graphics/primitiveObjectSymbolUtils"],(function(e,r,t,o,i,n,u,s,c,a,l,p,f,y){Object.defineProperty(r,"__esModule",{value:!0});var h=m();function m(){return new u(50)}function d(e,r){return o(this,void 0,void 0,(function(){return t(this,(function(t){if(e.resource.href)return[2,(o=e.resource.href,i(o,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]}))];var o;if(e.resource.primitive)return s.isSome(r)?[2,[r,r]]:[2,l.default.PRIMITIVE_SIZE];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}))}))}function v(e,r){return d(e,r).then((function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}function b(e,r){return function(e,r){if(!e.isPrimitive){var t=e.resource.href,o=h.get(t);return void 0!==o?c.resolve(o):f.fetch(t,{disableTextures:!0}).then((function(e){return h.put(t,e.referenceBoundingBox),e.referenceBoundingBox}))}var i=null;if(e.resource&&e.resource.primitive&&(i=a.create(y.primitiveBoundingBox(e.resource.primitive)),s.isSome(r)))for(var u=0;u<i.length;u++)i[u]*=r;return i?c.resolve(i):c.reject(new n("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((function(e){return a.size(e)}))}function w(e,r){return b(e,r).then((function(r){return p.computeSizeWithResourceSize(r,e)}))}r.clearBoundingBoxCache=function(){h=m()},r.computeLayerResourceSize=function(e,r){if("icon"===e.type)return d(e,r);if("object"===e.type)return b(e,r);throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")},r.computeLayerSize=function(e,r){return o(this,void 0,void 0,(function(){return t(this,(function(t){if("icon"===e.type)return[2,v(e,r)];if("object"===e.type)return[2,w(e,r)];throw new n("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}))}))},r.computeIconLayerResourceSize=d,r.computeObjectLayerResourceSize=b}));
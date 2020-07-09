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

define(["require","exports","tslib","../../request","../../core/Error","../../core/ItemCache","../../core/maybe","../../core/promiseUtils","../../geometry/support/aaBoundingBox","../../views/3d/layers/graphics/Graphics3DIconSymbolLayer","../../views/3d/layers/graphics/graphicUtils","../../views/3d/layers/graphics/objectResourceUtils","../../views/3d/layers/graphics/primitiveObjectSymbolUtils"],(function(e,r,t,i,o,n,u,s,c,a,l,f,y){Object.defineProperty(r,"__esModule",{value:!0});var p=h();function h(){return new n(50)}function m(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){if(e.resource.href)return[2,(n=e.resource.href,i(n,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]}))];var n;if(e.resource.primitive)return u.isSome(r)?[2,[r,r]]:[2,a.default.PRIMITIVE_SIZE];throw new o("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}))}))}function d(e,r){return m(e,r).then((function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}function v(e,r){return function(e,r){if(!e.isPrimitive){var t=e.resource.href,i=p.get(t);return void 0!==i?s.resolve(i):f.fetch(t,{disableTextures:!0}).then((function(e){return p.put(t,e.referenceBoundingBox),e.referenceBoundingBox}))}var n=null;if(e.resource&&e.resource.primitive&&(n=c.create(y.primitiveBoundingBox(e.resource.primitive)),u.isSome(r)))for(var a=0;a<n.length;a++)n[a]*=r;return n?s.resolve(n):s.reject(new o("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((function(e){return c.size(e)}))}function b(e,r){return v(e,r).then((function(r){return l.computeSizeWithResourceSize(r,e)}))}r.clearBoundingBoxCache=function(){p=h()},r.computeLayerResourceSize=function(e,r){if("icon"===e.type)return m(e,r);if("object"===e.type)return v(e,r);throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")},r.computeLayerSize=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){if("icon"===e.type)return[2,d(e,r)];if("object"===e.type)return[2,b(e,r)];throw new o("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}))}))},r.computeIconLayerResourceSize=m,r.computeObjectLayerResourceSize=v}));
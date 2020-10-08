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

define(["require","exports","tslib","../../request","../../core/Error","../../core/ItemCache","../../core/maybe","../../core/promiseUtils","../../geometry/support/aaBoundingBox","./symbolLayerUtils3D","@dojo/framework/shim/Promise"],(function(e,r,t,o,i,n,u,c,s,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.computeObjectLayerResourceSize=r.computeIconLayerResourceSize=r.computeLayerSize=r.computeLayerResourceSize=r.clearBoundingBoxCache=void 0;var y=l();function l(){return new n(50)}function f(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){if(e.resource.href)return[2,(n=e.resource.href,o(n,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]}))];var n;if(e.resource.primitive)return u.isSome(r)?[2,[r,r]]:[2,[256,256]];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}))}))}function m(e,r){return f(e,r).then((function(r){if(null==e.size)return r;var t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}function h(r,o){return function(r,o){return t.__awaiter(this,void 0,void 0,(function(){var n,l,f,m,h;return t.__generator(this,(function(t){switch(t.label){case 0:return r.isPrimitive?[3,3]:(n=r.resource.href,void 0!==(l=y.get(n))?[2,c.resolve(l)]:[4,new Promise((function(r,t){e(["../../views/3d/layers/graphics/objectResourceUtils"],r,t)}))]);case 1:return[4,t.sent().fetch(n,{disableTextures:!0})];case 2:return f=t.sent(),y.put(n,f.referenceBoundingBox),[2,f.referenceBoundingBox];case 3:if(m=null,r.resource&&r.resource.primitive&&(m=s.create(a.objectSymbolLayerPrimitiveBoundingBox(r.resource.primitive)),u.isSome(o)))for(h=0;h<m.length;h++)m[h]*=o;return[2,m?c.resolve(m):c.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))]}}))}))}(r,o).then((function(e){return s.size(e)}))}function d(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,h(e,r)];case 1:return o=t.sent(),[2,a.objectSymbolLayerSizeWithResourceSize(o,e)]}}))}))}r.clearBoundingBoxCache=function(){y=l()},r.computeLayerResourceSize=function(e,r){if("icon"===e.type)return f(e,r);if("object"===e.type)return h(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")},r.computeLayerSize=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){if("icon"===e.type)return[2,m(e,r)];if("object"===e.type)return[2,d(e,r)];throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}))}))},r.computeIconLayerResourceSize=f,r.computeObjectLayerResourceSize=h}));
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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/promiseUtils","../../../../../../symbols/cim/cimAnalyzer","./WGLMeshTemplate"],function(e,a,r,t,m,h,i){Object.defineProperty(a,"__esModule",{value:!0});var g=t.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate"),n=function(t){function e(e){var a=t.call(this)||this;return a._ongoingMaterialRequestMap=new Map,a._materialCache=new Map,a._dynamicPropertyMap=new Map,a._cimLayer=e,a}return r(e,t),e.prototype.analyze=function(e,a,t,r){var i=this,n=this._materialCache,s=this._cimLayer.materialHash;if(!s)return g.error("A Dynamic mesh template must have a material hash value or function!"),m.reject(null);var o="function"==typeof s?s(a,t,r):s;if(n.has(o)){var l=n.get(o);return m.resolve(l)}if(this._ongoingMaterialRequestMap.has(o))return this._ongoingMaterialRequestMap.get(o);var u=h.analyzeCIMResource(this._cimLayer.cim,this._cimLayer.materialOverrides);u.mosaicHash=o;var c=e.getCIMMosaicItem(u).then(function(e){return i._ongoingMaterialRequestMap.delete(o),n.set(o,e),e}).catch(function(e){return i._ongoingMaterialRequestMap.delete(o),g.error(".analyze()",e.message),null});return this._ongoingMaterialRequestMap.set(o,c),c},e}(i.default);a.default=n});
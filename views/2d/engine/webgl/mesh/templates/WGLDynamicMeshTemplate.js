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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/promiseUtils","../../../../../../symbols/cim/cimAnalyzer","./WGLMeshTemplate"],(function(e,a,t,r,i,n,s){Object.defineProperty(a,"__esModule",{value:!0});var o=r.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate"),l=function(e){function a(a){var t=e.call(this)||this;return t._ongoingMaterialRequestMap=new Map,t._materialCache=new Map,t._dynamicPropertyMap=new Map,t._cimLayer=a,t}return t(a,e),a.prototype.analyze=function(e,a,t,r){var s=this,l=this._materialCache,u=this._cimLayer.materialHash;if(!u)return o.error("A Dynamic mesh template must have a material hash value or function!"),i.reject(null);var c="function"==typeof u?u(a,t,r):u;if(l.has(c)){var m=l.get(c);return i.resolve(m)}if(this._ongoingMaterialRequestMap.has(c))return this._ongoingMaterialRequestMap.get(c);var h=n.analyzeCIMResource(this._cimLayer.cim,this._cimLayer.materialOverrides);h.mosaicHash=c;var g=e.getMosaicItem(h,!1).then((function(e){return s._ongoingMaterialRequestMap.delete(c),l.set(c,e),e})).catch((function(e){return s._ongoingMaterialRequestMap.delete(c),o.error(".analyze()",e.message),null}));return this._ongoingMaterialRequestMap.set(c,g),g},a}(s.default);a.default=l}));
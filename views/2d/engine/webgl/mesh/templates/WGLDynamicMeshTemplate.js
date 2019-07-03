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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/promiseUtils","../../../../../../symbols/cim/cimAnalyzer","./WGLMeshTemplate"],function(e,r,t,a,l,m,i){Object.defineProperty(r,"__esModule",{value:!0});var u=a.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate"),n=function(a){function e(e){var r=a.call(this)||this;return r._materialCache=new Map,r._dynamicPropertyMap=new Map,r._cimLayer=e,r}return t(e,a),e.prototype.analyze=function(e,r,a,t){var i=this._materialCache,n=this._cimLayer.materialHash;if(!n)return u.error("A Dynamic mesh template must have a material hash function!"),l.reject(null);var s=n(r,a,t);if(i.has(s)){var c=i.get(s);return l.resolve(c)}var o=m.analyzeCIMResource(r,this._cimLayer.cim,this._cimLayer.materialOverrides);return o.mosaicHash=s,e.getCIMMosaicItem(o).then(function(e){return i.set(s,e),e})},e}(i.default);r.default=n});
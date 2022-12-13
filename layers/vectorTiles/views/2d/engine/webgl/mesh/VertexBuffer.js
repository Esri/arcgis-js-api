// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r,n){this.data=e,this.stride=r,this.vertexCount=n}return e.decode=function(r){return new e(new Uint32Array(r.data),r.stride,r.vertexCount)},e}();r.default=n;var t=function(){function e(e,r,n){this.geometryType=e,this.indexBuffer=new Uint32Array(r),this.namedBuffers=n}return e.decode=function(r){var t=r.geometryType,f=r.indexBuffer,i={};for(var u in r.namedBuffers)i[u]=n.decode(r.namedBuffers[u]);return new e(t,f,i)},e}();r.VertexBuffers=t}));
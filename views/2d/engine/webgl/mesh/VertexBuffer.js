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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../Utils"],function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function r(e,r,t){this.data=e,this.stride=r,this.vertexCount=t}return r.decode=function(e){return new r(t.allocateTypedArrayBufferwithData(e.data,e.stride),e.stride,e.vertexCount)},r.fromVertexVector=function(e){return new r(t.allocateTypedArrayBufferwithData(e.data.buffer(),e.stride),e.stride,e.vertexCount)},r}();r.default=i;var n=function(){function o(e,r,t){this.geometryType=e,this.indexBuffer=new Uint32Array(r),this.namedBuffers=t}return o.decode=function(e){var r=e.geometryType,t=e.indexBuffer,n={};for(var f in e.namedBuffers)n[f]=i.decode(e.namedBuffers[f]);return new o(r,t,n)},o.fromVertexVectors=function(e){var r=e.geometryType,t=e.indexVector.buffer(),n={};for(var f in e.namedVectors)n[f]=i.fromVertexVector(e.namedVectors[f]);return new o(r,t,n)},o}();r.VertexBuffers=n});
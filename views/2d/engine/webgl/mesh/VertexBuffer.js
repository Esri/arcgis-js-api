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

define(["require","exports","../Utils"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r,t){this.data=e,this.stride=r,this.vertexCount=t}return e.decode=function(r){return new e(t.allocateTypedArrayBufferwithData(r.data,r.stride),r.stride,r.vertexCount)},e.fromVertexVector=function(r){return new e(t.allocateTypedArrayBufferwithData(r.data.buffer(),r.stride),r.stride,r.vertexCount)},e}();r.default=n;var f=function(){function e(e,r,t){this.geometryType=e,this.indexBuffer=new Uint32Array(r),this.namedBuffers=t}return e.decode=function(r){var t=r.geometryType,f=r.indexBuffer,o={};for(var i in r.namedBuffers)o[i]=n.decode(r.namedBuffers[i]);return new e(t,f,o)},e.fromVertexVectors=function(r){var t=r.geometryType,f=r.indexVector.buffer(),o={};for(var i in r.namedVectors)o[i]=n.fromVertexVector(r.namedVectors[i]);return new e(t,f,o)},e}();r.VertexBuffers=f}));
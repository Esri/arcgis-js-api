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

define(["require","exports","../Utils","./VertexBuffer","../util/Writer"],function(e,t,a,r,f){Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){this.data=e,this.stride=t,this.vertexCount=0}return e.prototype.transfer=function(e,t){var r=this.data.buffer();e.vertexCount=this.vertexCount,e.data=r,e.stride=this.stride,t.push(r)},e}();t.default=u;var n=function(){function e(e,t,r){this.geometryType=e,this.indexVector=new f.default(Uint32Array,r),this.namedVectors={};var n=a.getStrides(e,t);for(var i in n){var s=n[i],o=void 0;switch(s%4){case 0:case 2:o=new f.default(Uint32Array,s/4*r);break;case 1:case 3:o=new f.default(Uint8Array,s*r)}this.namedVectors[i]=new u(o,s)}}return e.prototype.get=function(e){return this.namedVectors[e].data},e.prototype.transfer=function(e,t){var r=this.indexVector.buffer(),n={};for(var i in t.push(r),this.namedVectors){var s=this.namedVectors[i];n[i]={},s.transfer(n[i],t)}e.geometryType=this.geometryType,e.indexBuffer=r,e.namedBuffers=n,this.destroy()},e.prototype.intoBuffers=function(){var e=r.VertexBuffers.fromVertexVectors(this);return this.destroy(),e},e.prototype.destroy=function(){this.indexVector=null,this.namedVectors=null},e}();t.VertexVectors=n});
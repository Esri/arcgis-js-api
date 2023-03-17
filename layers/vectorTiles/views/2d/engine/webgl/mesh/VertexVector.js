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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../Utils","../util/Writer"],(function(t,e,r,n){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){this.data=t,this.stride=e,this.vertexCount=0}return t.prototype.transfer=function(t,e){var r=this.data.buffer();t.vertexCount=this.vertexCount,t.data=r,t.stride=this.stride,e.push(r)},t}();e.default=i;var o=function(){function t(t,e,o){this.geometryType=t,this.indexVector=new n.default(Uint32Array,o),this.namedVectors={};var s=r.getStrides(t,e);for(var a in s){var u=s[a],d=u/4,f=new n.default(Uint32Array,d*o);this.namedVectors[a]=new i(f,u)}}return t.prototype.get=function(t){return this.namedVectors[t].data},t.prototype.transfer=function(t,e){var r=this.indexVector.buffer(),n={};for(var i in e.push(r),this.namedVectors){var o=this.namedVectors[i];n[i]={},o.transfer(n[i],e)}t.geometryType=this.geometryType,t.indexBuffer=r,t.namedBuffers=n,this.destroy()},t.prototype.destroy=function(){this.indexVector=null,this.namedVectors=null},t}();e.VertexVectors=o}));
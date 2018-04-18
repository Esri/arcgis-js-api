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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfo","./MeshData"],function(t,e,r,i,s){return function(){function t(){this.id=-1,this.geometryType=r.WGLGeometryType.UNKNOWN,this.meshData=null,this.materialInfo=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(t.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,e,r,i,s,a){this.id=t,this.geometryType=e,this.meshData=r,this.materialInfo=i,this.symbolLevel=s,this.zOrder=a},t.prototype.readMeshDataFromBuffers=function(t,e){this.meshData?this.meshData.clear():this.meshData=new s;for(var r in t){for(var i=t[r].stride,a=t[r].data,n=[],o=0;o<i*this.vertexCount/4;++o)n[o]=a[o+i*this.vertexFrom/4];this.meshData.vertexData.set(r,n)}this.meshData.indexData.length=0;for(var o=0;o<this.indexCount;++o)this.meshData.indexData[o]=e[o+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},t.prototype.writeMeshDataToBuffers=function(t,e,r,i){for(var s in e)for(var a=e[s].stride,n=this.meshData.vertexData.get(s),o=e[s].data,h=0;h<a*this.meshData.vertexCount/4;++h)o[h+a*t/4]=n[h];for(var h=0;h<this.meshData.indexData.length;++h)i[h+r]=this.meshData.indexData[h]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},t.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,s=0,a=0,n=t;a<n.length;a++){var o=n[a];o.writeMeshDataToBuffers(i,e,s,r),i+=o.vertexCount,s+=o.indexCount}},t.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},t.prototype.serialize=function(t){return t.writeInt32(this.geometryType),this.materialInfo.serialize(t),t.writeInt32(this.symbolLevel),t.writeInt32(this.zOrder),t.writeInt32(this.vertexFrom),t.writeInt32(this.vertexCount),t.writeInt32(this.indexFrom),t.writeInt32(this.indexCount),t},t.deserialize=function(e,r){var s=new t;return s.id=r.id,s.geometryType=e.readInt32(),s.materialInfo=i.default.deserialize(e),s.symbolLevel=e.readInt32(),s.zOrder=e.readInt32(),s.vertexFrom=e.readInt32(),s.vertexCount=e.readInt32(),s.indexFrom=e.readInt32(),s.indexCount=e.readInt32(),s.meshData=null,s},t}()});
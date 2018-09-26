// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","./MeshData"],function(t,e,r,i){var n=r.getLogger("esri/views/2d/engine/webgl/WGLDisplayRecord");return function(){function t(t,e,r){this.id=t,this.geometryType=e,this._materialInfo=r,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(t.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"materialInfo",{get:function(){return"number"==typeof this._materialInfo?(n.warn("Tried to read materialInfo, but found an index! Was materialInfo deserialized correctly?"),null):this._materialInfo},set:function(t){this._materialInfo=t},enumerable:!0,configurable:!0}),t.prototype.copy=function(){var e=new t(this.id,this.geometryType,this._materialInfo);return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e},t.prototype.setMeshDataFromBuffers=function(t,e,r){var n=new i;for(var o in e){for(var a=e[o].stride,s=e[o].data,h=[],d=0;d<a*t.vertexCount/4;++d)h[d]=s[d+a*t.vertexFrom/4];n.vertexData.set(o,h)}n.indexData.length=0;for(var d=0;d<t.indexCount;++d)n.indexData[d]=r[d+t.indexFrom]-t.vertexFrom;n.vertexCount=t.vertexCount,this.meshData=n},t.prototype.readMeshDataFromBuffers=function(t,e){this.meshData?this.meshData.clear():this.meshData=new i;for(var r in t){for(var n=t[r].stride,o=t[r].data,a=[],s=0;s<n*this.vertexCount/4;++s)a[s]=o[s+n*this.vertexFrom/4];this.meshData.vertexData.set(r,a)}this.meshData.indexData.length=0;for(var s=0;s<this.indexCount;++s)this.meshData.indexData[s]=e[s+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},t.prototype.writeMeshDataToBuffers=function(t,e,r,i){for(var n in e)for(var o=e[n].stride,a=this.meshData.vertexData.get(n),s=e[n].data,h=0;h<o*this.meshData.vertexCount/4;++h)s[h+o*t/4]=a[h];for(var h=0;h<this.meshData.indexData.length;++h)i[h+r]=this.meshData.indexData[h]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},t.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,n=0,o=0,a=t;o<a.length;o++){var s=a[o];s.writeMeshDataToBuffers(i,e,n,r),i+=s.vertexCount,n+=s.indexCount}},t.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},t.prototype.serialize=function(t){return t.writeInt32(this.geometryType),t.writeInt32(this._materialInfo),t.writeInt32(this.symbolLevel),t.writeInt32(this.zOrder),t.writeInt32(this.vertexFrom),t.writeInt32(this.vertexCount),t.writeInt32(this.indexFrom),t.writeInt32(this.indexCount),t},t.deserialize=function(e,r){var i=e.readInt32(),n=r.store&&r.store.get(e.readInt32())||e.readInt32(),o=new t(r.id,i,n);return o.symbolLevel=e.readInt32(),o.zOrder=e.readInt32(),o.vertexFrom=e.readInt32(),o.vertexCount=e.readInt32(),o.indexFrom=e.readInt32(),o.indexCount=e.readInt32(),o},t}()});
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","./MeshData","./Utils"],function(t,e,r,i,o){var a=r.getLogger("esri/views/2d/engine/webgl/WGLDisplayRecord");return function(){function t(t,e,r){this.id=t,this.geometryType=e,this._materialInfo=r,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(t.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"materialInfo",{get:function(){return"number"==typeof this._materialInfo?(a.warn("Tried to read materialInfo, but found an index! Was materialInfo deserialized correctly?"),null):this._materialInfo},set:function(t){this._materialInfo=t},enumerable:!0,configurable:!0}),t.prototype.copy=function(){var e=new t(this.id,this.geometryType,this._materialInfo);return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e},t.prototype.setMeshDataFromBuffers=function(t,e,r){var a=new i;for(var n in e){for(var s=e[n].stride,h=e[n].data,u=[],d=o.strideToPackingFactor(s),m=0;m<s*t.vertexCount/d;++m)u[m]=h[m+s*t.vertexFrom/d];a.vertexData.set(n,u)}a.indexData.length=0;for(var m=0;m<t.indexCount;++m)a.indexData[m]=r[m+t.indexFrom]-t.vertexFrom;a.vertexCount=t.vertexCount,this.meshData=a},t.prototype.readMeshDataFromBuffers=function(t,e){this.meshData?this.meshData.clear():this.meshData=new i;for(var r in t){for(var a=t[r].stride,n=t[r].data,s=[],h=o.strideToPackingFactor(a),u=0;u<a*this.vertexCount/h;++u)s[u]=n[u+a*this.vertexFrom/h];this.meshData.vertexData.set(r,s)}this.meshData.indexData.length=0;for(var u=0;u<this.indexCount;++u)this.meshData.indexData[u]=e[u+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},t.prototype.writeMeshDataToBuffers=function(t,e,r,i){for(var a in e)for(var n=e[a].stride,s=this.meshData.vertexData.get(a),h=e[a].data,u=o.strideToPackingFactor(n),d=0;d<n*this.meshData.vertexCount/u;++d)h[d+n*t/u]=s[d];for(var d=0;d<this.meshData.indexData.length;++d)i[d+r]=this.meshData.indexData[d]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},t.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,o=0,a=0,n=t;a<n.length;a++){var s=n[a];s.writeMeshDataToBuffers(i,e,o,r),i+=s.vertexCount,o+=s.indexCount}},t.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},t.prototype.serialize=function(t){return t.push(this.geometryType),t.push(this._materialInfo),t.push(this.symbolLevel),t.push(this.zOrder),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t},t.deserialize=function(e,r){var i=e.readInt32(),o=r.store&&r.store.get(e.readInt32())||e.readInt32(),a=new t(r.id,i,o);return a.symbolLevel=e.readInt32(),a.zOrder=e.readInt32(),a.vertexFrom=e.readInt32(),a.vertexCount=e.readInt32(),a.indexFrom=e.readInt32(),a.indexCount=e.readInt32(),a},t}()});
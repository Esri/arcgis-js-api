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

define(["require","exports","./MeshData","./Utils"],(function(t,e,r,i){return function(){function t(t,e,r,i,o){void 0===i&&(i=0),void 0===o&&(o=0),this.id=t,this.geometryType=e,this.materialKey=r,this.minZoom=i,this.maxZoom=o,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(t.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return this.copy()},t.prototype.copy=function(){var e=new t(this.id,this.geometryType,this.materialKey);return e.vertexFrom=this.vertexFrom,e.vertexCount=this.vertexCount,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e.zOrder=this.zOrder,e.symbolLevel=this.symbolLevel,e.meshData=this.meshData,e.minZoom=this.minZoom,e.maxZoom=this.maxZoom,e},t.prototype.setMeshDataFromBuffers=function(t,e,o){var s=new r;for(var n in e){for(var a=e[n].stride,h=e[n].data,m=[],u=i.strideToPackingFactor(a),d=0;d<a*t.vertexCount/u;++d)m[d]=h[d+a*t.vertexFrom/u];s.vertexData.set(n,m)}s.indexData.length=0;for(d=0;d<t.indexCount;++d)s.indexData[d]=o[d+t.indexFrom]-t.vertexFrom;s.vertexCount=t.vertexCount,this.meshData=s},t.prototype.readMeshDataFromBuffers=function(t,e){for(var o in this.meshData?this.meshData.clear():this.meshData=new r,t){for(var s=t[o].stride,n=t[o].data,a=[],h=i.strideToPackingFactor(s),m=0;m<s*this.vertexCount/h;++m)a[m]=n[m+s*this.vertexFrom/h];this.meshData.vertexData.set(o,a)}this.meshData.indexData.length=0;for(m=0;m<this.indexCount;++m)this.meshData.indexData[m]=e[m+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},t.prototype.writeMeshDataToBuffers=function(t,e,r,o){for(var s in e)for(var n=e[s].stride,a=this.meshData.vertexData.get(s),h=e[s].data,m=i.strideToPackingFactor(n),u=0;u<n*this.meshData.vertexCount/m;++u)h[u+n*t/m]=a[u];for(u=0;u<this.meshData.indexData.length;++u)o[u+r]=this.meshData.indexData[u]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},t.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,o=0,s=0,n=t;s<n.length;s++){var a=n[s];a.writeMeshDataToBuffers(i,e,o,r),i+=a.vertexCount,o+=a.indexCount}},t.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},t.prototype.serialize=function(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.symbolLevel),t.push(this.zOrder),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t},t.deserialize=function(e,r){var i=e.readInt32(),o=e.readInt32(),s=new t(r.id,i,o);return s.symbolLevel=e.readInt32(),s.zOrder=e.readInt32(),s.vertexFrom=e.readInt32(),s.vertexCount=e.readInt32(),s.indexFrom=e.readInt32(),s.indexCount=e.readInt32(),s.minZoom=e.readInt32(),s.maxZoom=e.readInt32(),s},t}()}));
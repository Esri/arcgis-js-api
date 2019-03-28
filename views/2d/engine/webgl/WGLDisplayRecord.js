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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./MeshData","./Utils"],function(t,e,u,d){return function(){function s(t,e,r,i,o){void 0===i&&(i=0),void 0===o&&(o=0),this.id=t,this.geometryType=e,this.materialKey=r,this.minZoom=i,this.maxZoom=o,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(s.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),s.prototype.clone=function(){return this.copy()},s.prototype.copy=function(){var t=new s(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t},s.prototype.setMeshDataFromBuffers=function(t,e,r){var i=new u;for(var o in e){for(var s=e[o].stride,n=e[o].data,a=[],h=d.strideToPackingFactor(s),m=0;m<s*t.vertexCount/h;++m)a[m]=n[m+s*t.vertexFrom/h];i.vertexData.set(o,a)}for(m=i.indexData.length=0;m<t.indexCount;++m)i.indexData[m]=r[m+t.indexFrom]-t.vertexFrom;i.vertexCount=t.vertexCount,this.meshData=i},s.prototype.readMeshDataFromBuffers=function(t,e){for(var r in this.meshData?this.meshData.clear():this.meshData=new u,t){for(var i=t[r].stride,o=t[r].data,s=[],n=d.strideToPackingFactor(i),a=0;a<i*this.vertexCount/n;++a)s[a]=o[a+i*this.vertexFrom/n];this.meshData.vertexData.set(r,s)}for(a=this.meshData.indexData.length=0;a<this.indexCount;++a)this.meshData.indexData[a]=e[a+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},s.prototype.writeMeshDataToBuffers=function(t,e,r,i){for(var o in e)for(var s=e[o].stride,n=this.meshData.vertexData.get(o),a=e[o].data,h=d.strideToPackingFactor(s),m=0;m<s*this.meshData.vertexCount/h;++m)a[m+s*t/h]=n[m];for(m=0;m<this.meshData.indexData.length;++m)i[m+r]=this.meshData.indexData[m]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},s.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,o=0,s=0,n=t;s<n.length;s++){var a=n[s];a.writeMeshDataToBuffers(i,e,o,r),i+=a.vertexCount,o+=a.indexCount}},s.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},s.prototype.serialize=function(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.symbolLevel),t.push(this.zOrder),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t},s.deserialize=function(t,e){var r=t.readInt32(),i=t.readInt32(),o=new s(e.id,r,i);return o.symbolLevel=t.readInt32(),o.zOrder=t.readInt32(),o.vertexFrom=t.readInt32(),o.vertexCount=t.readInt32(),o.indexFrom=t.readInt32(),o.indexCount=t.readInt32(),o.minZoom=t.readInt32(),o.maxZoom=t.readInt32(),o},s}()});
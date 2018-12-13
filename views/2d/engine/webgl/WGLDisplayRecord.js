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

define(["require","exports","../../../../core/Logger","./MeshData","./Utils"],function(t,e,r,u,d){var i=r.getLogger("esri/views/2d/engine/webgl/WGLDisplayRecord");return function(){function n(t,e,r,i,o){void 0===i&&(i=0),void 0===o&&(o=0),this.id=t,this.geometryType=e,this._materialInfo=r,this.minZoom=i,this.maxZoom=o,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}return Object.defineProperty(n.prototype,"sortKey",{get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"materialInfo",{get:function(){return"number"==typeof this._materialInfo?(i.warn("Tried to read materialInfo, but found an index! Was materialInfo deserialized correctly?"),null):this._materialInfo},set:function(t){this._materialInfo=t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"materialIndex",{get:function(){return this._materialInfo},enumerable:!0,configurable:!0}),n.prototype.copy=function(){var t=new n(this.id,this.geometryType,this._materialInfo);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t},n.prototype.setMeshDataFromBuffers=function(t,e,r){var i=new u;for(var o in e){for(var n=e[o].stride,a=e[o].data,s=[],h=d.strideToPackingFactor(n),m=0;m<n*t.vertexCount/h;++m)s[m]=a[m+n*t.vertexFrom/h];i.vertexData.set(o,s)}for(m=i.indexData.length=0;m<t.indexCount;++m)i.indexData[m]=r[m+t.indexFrom]-t.vertexFrom;i.vertexCount=t.vertexCount,this.meshData=i},n.prototype.readMeshDataFromBuffers=function(t,e){for(var r in this.meshData?this.meshData.clear():this.meshData=new u,t){for(var i=t[r].stride,o=t[r].data,n=[],a=d.strideToPackingFactor(i),s=0;s<i*this.vertexCount/a;++s)n[s]=o[s+i*this.vertexFrom/a];this.meshData.vertexData.set(r,n)}for(s=this.meshData.indexData.length=0;s<this.indexCount;++s)this.meshData.indexData[s]=e[s+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},n.prototype.writeMeshDataToBuffers=function(t,e,r,i){for(var o in e)for(var n=e[o].stride,a=this.meshData.vertexData.get(o),s=e[o].data,h=d.strideToPackingFactor(n),m=0;m<n*this.meshData.vertexCount/h;++m)s[m+n*t/h]=a[m];for(m=0;m<this.meshData.indexData.length;++m)i[m+r]=this.meshData.indexData[m]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},n.writeAllMeshDataToBuffers=function(t,e,r){for(var i=0,o=0,n=0,a=t;n<a.length;n++){var s=a[n];s.writeMeshDataToBuffers(i,e,o,r),i+=s.vertexCount,o+=s.indexCount}},n.prototype._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},n.prototype.serialize=function(t){return t.push(this.geometryType),t.push(this._materialInfo),t.push(this.symbolLevel),t.push(this.zOrder),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t},n.deserialize=function(t,e){var r=t.readInt32(),i=e.store&&e.store.get(t.readInt32())||t.readInt32(),o=new n(e.id,r,i);return o.symbolLevel=t.readInt32(),o.zOrder=t.readInt32(),o.vertexFrom=t.readInt32(),o.vertexCount=t.readInt32(),o.indexFrom=t.readInt32(),o.indexCount=t.readInt32(),o.minZoom=t.readInt32(),o.maxZoom=t.readInt32(),o},n}()});
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","./MeshData","./Utils"],(function(t,e,i){"use strict";return function(){function s(t,e,i,s=0,o=0){this.id=t,this.geometryType=e,this.materialKey=i,this.minZoom=s,this.maxZoom=o,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}var o=s.prototype;return o.clone=function(){return this.copy()},o.copy=function(){const t=new s(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t},o.setMeshDataFromBuffers=function(t,s,o){const r=new e;for(const e in s){const o=s[e].stride,n=s[e].data,a=[],h=i.strideToPackingFactor(o);for(let e=0;e<o*t.vertexCount/h;++e)a[e]=n[e+o*t.vertexFrom/h];r.vertexData.set(e,a)}r.indexData.length=0;for(let e=0;e<t.indexCount;++e)r.indexData[e]=o[e+t.indexFrom]-t.vertexFrom;r.vertexCount=t.vertexCount,this.meshData=r},o.readMeshDataFromBuffers=function(t,s){this.meshData?this.meshData.clear():this.meshData=new e;for(const e in t){const s=t[e].stride,o=t[e].data,r=[],n=i.strideToPackingFactor(s);for(let t=0;t<s*this.vertexCount/n;++t)r[t]=o[t+s*this.vertexFrom/n];this.meshData.vertexData.set(e,r)}this.meshData.indexData.length=0;for(let e=0;e<this.indexCount;++e)this.meshData.indexData[e]=s[e+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},o.writeMeshDataToBuffers=function(t,e,s,o){for(const r in e){const s=e[r].stride,o=this.meshData.vertexData.get(r),n=e[r].data,a=i.strideToPackingFactor(s);for(let e=0;e<s*this.meshData.vertexCount/a;++e)n[e+s*t/a]=o[e]}for(let i=0;i<this.meshData.indexData.length;++i)o[i+s]=this.meshData.indexData[i]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=s,this.indexCount=this.meshData.indexData.length},s.writeAllMeshDataToBuffers=function(t,e,i){let s=0,o=0;for(const r of t)r.writeMeshDataToBuffers(s,e,o,i),s+=r.vertexCount,o+=r.indexCount},o._computeSortKey=function(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},o.serialize=function(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t},s.deserialize=function(t,e){const i=t.readInt32(),o=t.readInt32(),r=new s(e.id,i,o);return r.vertexFrom=t.readInt32(),r.vertexCount=t.readInt32(),r.indexFrom=t.readInt32(),r.indexCount=t.readInt32(),r.minZoom=t.readInt32(),r.maxZoom=t.readInt32(),r},t._createClass(s,[{key:"sortKey",get:function(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}}]),s}()}));

// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./MeshData","./MaterialInfo","./enums","./Utils"],function(e,t,r,i,a,s,o){var n=function(){function e(){this.id=-1,this.geometryType=s.WGLGeometryType.UNKNOWN,this.meshData=null,this.materialInfo=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0,this.sortKey=0}return e.prototype.acquire=function(e,t,r,i,a,s){this.setData(e,t,r,i,a,s)},e.prototype.release=function(){this.id=-1,this.geometryType=s.WGLGeometryType.UNKNOWN,this.meshData=null,this.materialInfo=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0,this.sortKey=0},e.prototype.setData=function(e,t,r,i,a,s){this.id=e,this.geometryType=t,this.meshData=r,this.materialInfo=i,this.symbolLevel=a,this.zOrder=s,this._computeSortKey()},e.prototype.readMeshDataFromBuffers=function(e,t){this.meshData?this.meshData.clear():this.meshData=i.pool.acquire();for(var r in e){for(var a=e[r].stride,s=e[r].data,o=[],n=0;n<a*this.vertexCount/4;++n)o[n]=s[n+a*this.vertexFrom/4];this.meshData.vertexData.set(r,o)}this.meshData.indexData.length=0;for(var n=0;n<this.indexCount;++n)this.meshData.indexData[n]=t[n+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount},e.prototype.writeMeshDataToBuffers=function(e,t,r,i){for(var a in t)for(var s=t[a].stride,o=this.meshData.vertexData.get(a),n=t[a].data,h=0;h<s*this.meshData.vertexCount/4;++h)n[h+s*e/4]=o[h];for(var h=0;h<this.meshData.indexData.length;++h)i[h+r]=this.meshData.indexData[h]+e;this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length},e.writeAllMeshDataToBuffers=function(e,t,r){for(var i=0,a=0,s=0,o=e;s<o.length;s++){var n=o[s];n.writeMeshDataToBuffers(i,t,a,r),i+=n.vertexCount,a+=n.indexCount}},e.prototype._computeSortKey=function(){this.sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType},e.serialize=function(e,t,r,i){var s=0;return i&&(t&&(t[r+s]=e.geometryType),++s),s+=a.serialize(e.materialInfo,t,r+s),t&&(t[r+s]=e.symbolLevel),++s,t&&(t[r+s]=e.zOrder),++s,s+=o.serializeInteger(e.vertexFrom,t,r+s),s+=o.serializeInteger(e.vertexCount,t,r+s),s+=o.serializeInteger(e.indexFrom,t,r+s),s+=o.serializeInteger(e.indexCount,t,r+s)},e.deserialize=function(t,r,i,s){var n=0;t.displayRecord=e.pool.acquire(),t.displayRecord.id=-1,s&&(t.displayRecord.geometryType=r[i+n],++n),t.displayRecord.meshData=null;var h={materialInfo:null};n+=a.deserialize(h,r,i+n),t.displayRecord.materialInfo=h.materialInfo,t.displayRecord.symbolLevel=r[i+n],++n,t.displayRecord.zOrder=r[i+n],++n;var l={n:void 0};return n+=o.deserializeInteger(l,r,i+n),t.displayRecord.vertexFrom=l.n,n+=o.deserializeInteger(l,r,i+n),t.displayRecord.vertexCount=l.n,n+=o.deserializeInteger(l,r,i+n),t.displayRecord.indexFrom=l.n,n+=o.deserializeInteger(l,r,i+n),t.displayRecord.indexCount=l.n,t.displayRecord._computeSortKey(),n},e.pool=new r(e),e}();return n});
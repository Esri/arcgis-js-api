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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./TileDisplayData","./TileBufferData","./WGLDisplayRecord","./enums"],function(e,a,t,i,r,l,s){var f=function(){function e(){this.tileDisplayData=null,this.tileBufferData=null}return e.prototype.release=function(){i.pool.release(this.tileDisplayData),this.tileDisplayData=null,r.pool.release(this.tileBufferData),this.tileBufferData=null},e.prototype.serialize=function(){var e=this.tileBufferData.serialize(),a=this.tileBufferData.getBuffers(),t=i.serialize(this.tileDisplayData,null,0),r=new Uint8Array(t);i.serialize(this.tileDisplayData,r,0),a.push(r.buffer);var l={displayData:r.buffer,bufferData:e};return{data:l,buffers:a}},e.deserialize=function(a){var t=i.pool.acquire();i.deserialize(t,new Uint8Array(a.displayData),0);var l=r.deserialize(a.bufferData),s=new e;return s.tileDisplayData=t,s.tileBufferData=l,s},e.prototype.deserializeMeshData=function(){var e=this;this.tileDisplayData.displayObjectRegistry.forEach(function(a,t){for(var i=e.tileDisplayData.displayObjectRegistry.get(t),r=0,l=i.displayRecords;r<l.length;r++){var s=l[r],f=s.geometryType;s.readMeshDataFromBuffers(e.tileBufferData.geometries[f].vertexBuffer,e.tileBufferData.geometries[f].indexBuffer)}})},e.bind=function(a,t){var i=new e;return i.tileDisplayData=a,i.tileBufferData=t,i},e.create=function(a,t){var f=new e;f.tileDisplayData=new i;for(var y=[0,0,0,0],o=[0,0,0,0],D=0,p=a;D<p.length;D++){var u=p[D];f.tileDisplayData.displayObjects.push(u),f.tileDisplayData.displayObjectRegistry.set(u.id,u);for(var n=0,d=u.displayRecords;n<d.length;n++){var c=d[n];f.tileDisplayData.displayRecords[c.geometryType].push(c),y[c.geometryType]+=c.meshData.vertexCount,o[c.geometryType]+=c.meshData.indexData.length}}for(var B=function(e,a){return e.sortKey-a.sortKey},T=0;T<f.tileDisplayData.displayRecords.length;T++)f.tileDisplayData.displayRecords[T].sort(B);for(var L,h=[t.fill||{},t.line||{},t.icon||{},t.text||{}],m=new r,T=0;4>T;T++){m.geometries[T].indexBuffer=new Uint32Array(o[T]),m.geometries[T].vertexBuffer={},L=h[T];for(var v in L)m.geometries[T].vertexBuffer[v]={data:new Uint32Array(y[T]*L[v]/4),stride:L[v]}}f.tileBufferData=m;var G=f.tileBufferData.geometries[s.WGLGeometryType.FILL];G&&l.writeAllMeshDataToBuffers(f.tileDisplayData.displayRecords[s.WGLGeometryType.FILL],G.vertexBuffer,G.indexBuffer);var g=f.tileBufferData.geometries[s.WGLGeometryType.LINE];g&&l.writeAllMeshDataToBuffers(f.tileDisplayData.displayRecords[s.WGLGeometryType.LINE],g.vertexBuffer,g.indexBuffer);var R=f.tileBufferData.geometries[s.WGLGeometryType.MARKER];R&&l.writeAllMeshDataToBuffers(f.tileDisplayData.displayRecords[s.WGLGeometryType.MARKER],R.vertexBuffer,R.indexBuffer);var x=f.tileBufferData.geometries[s.WGLGeometryType.TEXT];return x&&l.writeAllMeshDataToBuffers(f.tileDisplayData.displayRecords[s.WGLGeometryType.TEXT],x.vertexBuffer,x.indexBuffer),f.tileDisplayData.displayList.addToList(f.tileDisplayData.displayRecords[s.WGLGeometryType.FILL]),f.tileDisplayData.displayList.addToList(f.tileDisplayData.displayRecords[s.WGLGeometryType.LINE]),f.tileDisplayData.displayList.addToList(f.tileDisplayData.displayRecords[s.WGLGeometryType.MARKER]),f.tileDisplayData.displayList.addToList(f.tileDisplayData.displayRecords[s.WGLGeometryType.TEXT]),f},e.pool=new t(e),e}();return f});
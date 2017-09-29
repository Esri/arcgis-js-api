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

define(["require","exports","../../../../core/ObjectPool","./TileDisplayData","./TileBufferData","./WGLDisplayRecord","./enums"],function(e,a,t,i,r,l,s){var D=function(){function e(){this.tileDisplayData=null,this.tileBufferData=null}return e.prototype.release=function(){i.pool.release(this.tileDisplayData),this.tileDisplayData=null,r.pool.release(this.tileBufferData),this.tileBufferData=null},e.prototype.serialize=function(){var e=this.tileBufferData.serialize(),a=this.tileBufferData.getBuffers(),t=i.serialize(this.tileDisplayData,null,0),r=new Uint8Array(t);i.serialize(this.tileDisplayData,r,0),a.push(r.buffer);var l={displayData:r.buffer,bufferData:e};return{data:l,buffers:a}},e.deserialize=function(a){var t={tileDisplayData:null};i.deserialize(t,new Uint8Array(a.displayData),0);var l=t.tileDisplayData,s=r.deserialize(a.bufferData),D=new e;return D.tileDisplayData=l,D.tileBufferData=s,D},e.prototype.deserializeMeshData=function(){var e=this;this.tileDisplayData.displayObjectRegistry.forEach(function(a,t){for(var i=e.tileDisplayData.displayObjectRegistry.get(t),r=0,l=i.displayRecords;r<l.length;r++){var s=l[r],D=s.geometryType;s.readMeshDataFromBuffers(e.tileBufferData.geometries[D].vertexBuffer,e.tileBufferData.geometries[D].indexBuffer)}})},e.bind=function(a,t){var i=new e;return i.tileDisplayData=a,i.tileBufferData=t,i},e.create=function(a,t){var D=new e;D.tileDisplayData=new i;for(var f=[0,0,0,0],y=[0,0,0,0],o=0,p=a;o<p.length;o++){var n=p[o];D.tileDisplayData.displayObjectRegistry.set(n.id,n);for(var u=0,d=n.displayRecords;u<d.length;u++){var c=d[u];switch(c.geometryType){case s.WGLGeometryType.FILL:D.tileDisplayData.fillDisplayRecords.push(c);break;case s.WGLGeometryType.LINE:D.tileDisplayData.lineDisplayRecords.push(c);break;case s.WGLGeometryType.MARKER:D.tileDisplayData.iconDisplayRecords.push(c);break;case s.WGLGeometryType.TEXT:D.tileDisplayData.textDisplayRecords.push(c)}f[c.geometryType]+=c.meshData.vertexCount,y[c.geometryType]+=c.meshData.indexData.length}}var B=function(e,a){return e.sortKey-a.sortKey};D.tileDisplayData.fillDisplayRecords.sort(B),D.tileDisplayData.lineDisplayRecords.sort(B),D.tileDisplayData.iconDisplayRecords.sort(B),D.tileDisplayData.textDisplayRecords.sort(B);for(var h,v=[t.fill||{},t.line||{},t.icon||{},t.text||{}],R=new r,T=0;4>T;T++){R.geometries[T].indexBuffer=new Uint32Array(y[T]),R.geometries[T].vertexBuffer={},h=v[T];for(var m in h)R.geometries[T].vertexBuffer[m]={data:new Uint32Array(f[T]*h[m]/4),stride:h[m]}}D.tileBufferData=R;var L=D.tileBufferData.geometries[s.WGLGeometryType.FILL];L&&l.writeAllMeshDataToBuffers(D.tileDisplayData.fillDisplayRecords,L.vertexBuffer,L.indexBuffer);var g=D.tileBufferData.geometries[s.WGLGeometryType.LINE];g&&l.writeAllMeshDataToBuffers(D.tileDisplayData.lineDisplayRecords,g.vertexBuffer,g.indexBuffer);var x=D.tileBufferData.geometries[s.WGLGeometryType.MARKER];x&&l.writeAllMeshDataToBuffers(D.tileDisplayData.iconDisplayRecords,x.vertexBuffer,x.indexBuffer);var G=D.tileBufferData.geometries[s.WGLGeometryType.TEXT];return G&&l.writeAllMeshDataToBuffers(D.tileDisplayData.textDisplayRecords,G.vertexBuffer,G.indexBuffer),D.tileDisplayData.displayList.addToList(D.tileDisplayData.fillDisplayRecords),D.tileDisplayData.displayList.addToList(D.tileDisplayData.lineDisplayRecords),D.tileDisplayData.displayList.addToList(D.tileDisplayData.iconDisplayRecords),D.tileDisplayData.displayList.addToList(D.tileDisplayData.textDisplayRecords),D},e.pool=new t(e),e}();return D});
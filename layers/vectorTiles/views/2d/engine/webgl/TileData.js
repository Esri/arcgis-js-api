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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./MemoryRequirements","./TileBufferData","./TileDisplayData","./Utils","./WGLDisplayList","./WGLDisplayRecord","./util/Reader","./util/Writer"],function(e,t,r,a,i,n,s,f,l,u){function o(e,t){var r={};for(var a in e){var i={data:new Uint32Array(t*e[a]/4),stride:e[a]};r[a]=i}return r}function D(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{}]}var h=new n.ValuesGetter,d=new r.default,v=new r.default;return function(){function e(){this.tileDisplayData=null,this.tileBufferData=null}return e.prototype.reshuffle=function(){d.reset();var t=this._collectDisplayRecords();for(var r in t)for(var i=t[r],n=0,f=i;n<f.length;n++){var l=f[n];d.needMore(l.geometryType,l.meshData?l.meshData.vertexCount:l.vertexCount,l.meshData?l.meshData.indexData.length:l.indexCount)}for(var u=t.length,o=new a,r=0;r<u;++r){o.geometries[r].indexBuffer=new Uint32Array(Math.round(1.15*d.indicesFor(r)));var D=[];for(var h in this.tileBufferData.geometries[r].vertexBuffer)D.push(this.tileBufferData.geometries[r].vertexBuffer[h].stride);var p=e._computeVertexAlignment(D),y=Math.round(1.15*d.verticesFor(r)),g=e._align(y,p);for(var c in this.tileBufferData.geometries[r].vertexBuffer){var m=this.tileBufferData.geometries[r].vertexBuffer[c].stride,B=Math.round(g*m/4);o.geometries[r].vertexBuffer[c]={stride:m,data:new Uint32Array(B)}}}v.reset(),this.tileDisplayData.displayList=new s;for(var r=0;r<u;++r){for(var i=t[r],x=0,w=i;x<w.length;x++){var l=w[x];l.meshData||l.readMeshDataFromBuffers(this.tileBufferData.geometries[r].vertexBuffer,this.tileBufferData.geometries[r].indexBuffer),l.writeMeshDataToBuffers(v.verticesFor(r),o.geometries[r].vertexBuffer,v.indicesFor(r),o.geometries[r].indexBuffer),l.meshData=null,v.needMore(r,l.vertexCount,l.indexCount)}this.tileDisplayData.displayList.addToList(i)}this.tileBufferData=o},e.prototype.getStrides=function(){for(var e=[],t=0;t<this.tileBufferData.geometries.length;++t){var r=this.tileBufferData.geometries[t];e[t]={};for(var a in r.vertexBuffer)e[t][a]=r.vertexBuffer[a].stride}return e},e.prototype._guessSize=function(){for(var e=this.tileDisplayData.displayObjects,t=Math.min(e.length,4),r=0,a=0;a<t;a++)r=Math.max(r,e[a].displayRecords.length);return 2*(12*e.length+e.length*r*40)},e.prototype.serialize=function(){var e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new u.default(this._guessSize())),a=r.buffer();return t.push(a),{result:{displayData:a,bufferData:e},transferList:t}},e.deserialize=function(t){var r=i.deserialize(new l.default(t.displayData)),n=a.deserialize(t.bufferData),s=new e;return s.tileDisplayData=r,s.tileBufferData=n,s},e.bind=function(t,r){var a=new e;return a.tileDisplayData=t,a.tileBufferData=r,a},e.create=function(t,r){var n=new e;n.tileDisplayData=new i,n.tileDisplayData.displayObjects=t;for(var s=[0,0,0,0],l=[0,0,0,0],u=[[],[],[],[]],h=0,d=t;h<d.length;h++)for(var v=d[h],p=0,y=v.displayRecords;p<y.length;p++){var g=y[p];u[g.geometryType].push(g),s[g.geometryType]+=g.meshData.vertexCount,l[g.geometryType]+=g.meshData.indexData.length}for(var c=new a,m=D(r),B=0;B<4;B++){var x=new Uint32Array(l[B]),w=o(m[B],s[B]);f.writeAllMeshDataToBuffers(u[B],w,x),c.geometries[B]={indexBuffer:x,vertexBuffer:w}}return n.tileBufferData=c,n},e._align=function(e,t){var r=e%t;return 0===r?e:e+(t-r)},e._computeVertexAlignment=function(e){for(var t=!1,r=!1,a=0,i=e;a<i.length;a++){var n=i[a];n%4==2?t=!0:n%4!=0&&(r=!0)}return r?4:t?2:1},e.prototype._collectDisplayRecords=function(){for(var e=[[],[],[],[]],t=h.getValues(this.tileDisplayData.displayObjectRegistry),r=0,a=t;r<a.length;r++)for(var i=a[r],n=0,s=i.displayRecords;n<s.length;n++){var f=s[n];e[f.geometryType].push(f)}return e},e}()});
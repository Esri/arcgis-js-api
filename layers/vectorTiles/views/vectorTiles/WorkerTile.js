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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../core/promiseUtils","../../core/executeAsync","./VertexMemoryBuffer","./IndexMemoryBuffer","./TileParser","./BackgroundBucket","./FillBucket","./LineBucket","./SymbolBucket","./Placement","./GeometryUtils"],function(e,r,t,n,f,u,o,s,i,l,a,B,y,p){var x=function(){function e(e,r,t,n){void 0===n&&(n=0),this.rotation=0,this._symbolBuckets=[],this.tileKey=e,this.refKey=r,this._workerTileHandler=t,this.status=0,this.rotation=n;var f=p.C_DEG_TO_RAD*n;this.placementEngine=new y.PlacementEngine(f)}return e.prototype.setDataAndParse=function(e,r){var n=this;this.polygonVertexBuffer=new u.PolygonMemoryBuffer,this.polygonOutlineVertexBuffer=new u.PolygonOutlineMemoryBuffer,this.polygonIndexBuffer=new o.TriangleElementMemoryBuffer,this.polygonOutlineIndexBuffer=new o.TriangleElementMemoryBuffer,this.lineVertexBuffer=new u.LineMemoryBuffer,this.lineIndexBuffer=new o.TriangleElementMemoryBuffer,this.lineJoinVertexBuffer=new u.LineJoinMemoryBuffer,this.markerVertexBuffer=new u.SymbolMemoryBuffer,this.markerIndexBuffer=new o.TriangleElementMemoryBuffer,this.textVertexBuffer=new u.SymbolMemoryBuffer,this.textIndexBuffer=new o.TriangleElementMemoryBuffer;var f=new t(function(e){n.status=6});return this._parse(e,r).then(function(e){n.placementEngine=null;for(var r=[2,n.polygonVertexBuffer.sizeInBytes,3,n.polygonOutlineVertexBuffer.sizeInBytes,6,n.polygonIndexBuffer.sizeInBytes,7,n.polygonOutlineIndexBuffer.sizeInBytes,0,n.lineVertexBuffer.sizeInBytes,8,n.lineIndexBuffer.sizeInBytes,1,n.lineJoinVertexBuffer.sizeInBytes,4,n.markerVertexBuffer.sizeInBytes,9,n.markerIndexBuffer.sizeInBytes,5,n.textVertexBuffer.sizeInBytes,10,n.textIndexBuffer.sizeInBytes],t=new Uint32Array(r),u=[],o=e.length,s=0;o>s;s++){var y=e[s];if(y instanceof l)u.push(y.layerIndex),u.push(1),u.push(y.polygonIndexStart),u.push(y.polygonIndexCount),u.push(y.polygonOutlineIndexStart),u.push(y.polygonOutlineIndexCount);else if(y instanceof a)u.push(y.layerIndex),u.push(2),u.push(y.triangleIndexStart),u.push(y.triangleIndexCount),u.push(y.connectorStart),u.push(y.connectorCount);else if(y instanceof B){u.push(y.layerIndex),u.push(3),u.push(0===y.textIndexCount?0:y.textIndexStart),u.push(y.textIndexCount),u.push(y.sdfMarker?1:0);var p=y.markerPageMap;u.push(p.size),p.forEach(function(e,r){u.push(r),u.push(e[0]),u.push(e[1])})}else y instanceof i&&(u.push(y.layerIndex),u.push(0))}var x=new Uint32Array(u),h=n.polygonVertexBuffer.toBuffer(),I=n.polygonOutlineVertexBuffer.toBuffer(),d=n.polygonIndexBuffer.toBuffer(),m=n.polygonOutlineIndexBuffer.toBuffer(),c=n.lineVertexBuffer.toBuffer(),g=n.lineIndexBuffer.toBuffer(),b=n.lineJoinVertexBuffer.toBuffer(),w=n.markerVertexBuffer.toBuffer(),k=n.markerIndexBuffer.toBuffer(),V=n.textVertexBuffer.toBuffer(),v=n.textIndexBuffer.toBuffer();n.placementEngine=null,n.polygonVertexBuffer=null,n.polygonIndexBuffer=null,n.polygonOutlineVertexBuffer=null,n.polygonOutlineIndexBuffer=null,n.lineVertexBuffer=null,n.lineIndexBuffer=null,n.lineJoinVertexBuffer=null,f.resolve({data:{bufferDataInfo:t.buffer,bucketDataInfo:x.buffer,bufferData:[h,I,d,m,c,g,b,w,k,V,v]},buffers:[h,d,I,m,c,g,b,w,k,V,v,t.buffer,x.buffer]})}),f.promise},e.prototype.addBucket=function(e){this._symbolBuckets.push(e)},e.prototype.updateSymbols=function(e){var r=this,t=this._symbolBuckets;if(!t)return n.resolve({data:null});this.rotation=e;var s=new y.PlacementEngine(e/256*360*p.C_DEG_TO_RAD),i=new u.SymbolMemoryBuffer,l=new o.TriangleElementMemoryBuffer,a=new u.SymbolMemoryBuffer,B=new o.TriangleElementMemoryBuffer,x=[],h=t.length,I=0;return f(function(){if(6===r.status)return!0;if(h>I){var e=t[I++].copy(i,l,a,B,s);e&&(x.push(e),e.updateSymbols())}return I>=h},5).then(function(){if(6===r.status||0===i.sizeInBytes&&0===l.sizeInBytes&&0===a.sizeInBytes&&0===B.sizeInBytes)return{data:null};var e=[4,i.sizeInBytes,9,l.sizeInBytes,5,a.sizeInBytes,10,B.sizeInBytes],t=new Uint32Array(e),n=[];h=x.length;for(var f=0;h>f;f++){var u=x[f];n.push(u.layerIndex),n.push(3),n.push(0===u.textIndexCount?0:u.textIndexStart),n.push(u.textIndexCount),n.push(u.sdfMarker?1:0);var o=u.markerPageMap;n.push(o.size),o.forEach(function(e,r){n.push(r),n.push(e[0]),n.push(e[1])})}var s=new Uint32Array(n),y=i.toBuffer(),p=l.toBuffer(),I=a.toBuffer(),d=B.toBuffer();return{data:{bufferDataInfo:t.buffer,bucketDataInfo:s.buffer,bufferData:[y,p,I,d]},buffers:[y,p,I,d,t.buffer,s.buffer]}}).otherwise(function(e){return n.resolve({data:null})})},e.prototype.setObsolete=function(){this.status=6},e.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},e.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},e.prototype._parse=function(e,r){if(!e||0===e.byteLength)return n.resolve([]);var t=new s(e,this,r);return t.parse()},e}();return x});
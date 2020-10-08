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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/has"],(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GLB=void 0;var i=function(){function t(e,r){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=t.HEADER_SIZE,this.length+=t.CHUNK_HEADER_SIZE;var i=this.textToArrayBuffer(e);if(this.length+=this.alignTo(i.byteLength,4),r&&(this.length+=t.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();var n=this.writeChunk(i,12,1313821514,32);r&&this.writeChunk(r,n,5130562)}return t.prototype.writeHeader=function(){this.outView.setUint32(0,t.MAGIC,!0),this.outView.setUint32(4,t.VERSION,!0),this.outView.setUint32(8,this.length,!0)},t.prototype.writeChunk=function(t,e,r,i){void 0===i&&(i=0);var n=this.alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,r,!0),this.writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)i&&this.outView.setUint8(e,i),e++;return e},t.prototype.writeArrayBuffer=function(t,e,r,i,n){new Uint8Array(t,r,n).set(new Uint8Array(e,i,n),0)},t.prototype.textToArrayBuffer=function(t){if(r("esri-text-encoder"))return(new TextEncoder).encode(t).buffer;for(var e=new Uint8Array(t.length),i=0;i<e.length;++i)e[i]=t.charCodeAt(i);return e.buffer},t.prototype.alignTo=function(t,e){return e*Math.ceil(t/e)},t.HEADER_SIZE=12,t.CHUNK_HEADER_SIZE=8,t.MAGIC=1179937895,t.VERSION=2,t}();e.GLB=i}));
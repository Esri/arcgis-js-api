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

define(["require","exports","../../../../../core/promiseUtils","./bufferview"],(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Buffer=void 0;var f=function(){function e(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;var r={byteLength:-1};e.buffers.push(r),this.buffer=r}return e.prototype.addBufferView=function(e,r,i){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var f=new t.BufferView(this,this.gltf,e,r,i);return this.bufferViews.push(f),f},e.prototype.getByteOffset=function(e){for(var r=0,i=0,t=this.bufferViews;i<t.length;i++){var f=t[i];if(f===e)return r;r+=f.size}throw new Error("Given bufferView was not present in this buffer")},e.prototype.getViewFinalizePromises=function(e){for(var r=[],i=0,t=this.bufferViews;i<t.length;i++){var f=t[i];if(e&&f===e)return r;r.push(f.finalized)}return r},e.prototype.getArrayBuffer=function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");for(var e=this.getTotalSize(),r=new ArrayBuffer(e),i=0,t=0,f=this.bufferViews;t<f.length;t++){var n=f[t];n.writeOutToBuffer(r,i),i+=n.size}return r},e.prototype.finalize=function(){var e=this;if(this.finalizePromise)throw new Error("Buffer "+this.index+" was already finalized");return this.finalizePromise=i.create((function(r){r(i.eachAlways(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var r=e.getArrayBuffer();e.buffer.byteLength=r.byteLength,e.buffer.uri=r})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise},e.prototype.getTotalSize=function(){for(var e=0,r=0,i=this.bufferViews;r<i.length;r++){e+=i[r].size}return e},e}();r.Buffer=f}));
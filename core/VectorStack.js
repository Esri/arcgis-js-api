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

define(["require","exports","./nextTick","./libs/gl-matrix-2/gl-matrix"],function(e,t,i,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r){var n=this;this.itemByteSize=e,this.itemCreate=t,this.bufferPtr=0,this.items=[],this.itemsPtr=0;var f=Math.ceil(r/this.itemByteSize);this.buffer=new ArrayBuffer(f*this.itemByteSize),this.tickHandle=i.before(function(){return n.reset()});for(var s=0;s<f;s++)this.create();this.reset()}return e.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null)},e.prototype.get=function(){return 0===this.itemsPtr&&i(function(){}),this.itemsPtr<this.items.length?this.items[this.itemsPtr++]:(this.growIfNeeded(),this.create())},e.prototype.reset=function(){this.itemsPtr=0},e.prototype.create=function(){var e=this.itemCreate(this.buffer,this.bufferPtr);return this.bufferPtr+=this.itemByteSize,this.items.push(e),this.itemsPtr++,e},e.prototype.growIfNeeded=function(){if(this.bufferPtr+this.itemByteSize>this.buffer.byteLength){var e=new ArrayBuffer(2*this.buffer.byteLength);new Uint8Array(e).set(new Uint8Array(this.buffer)),this.buffer=e}},e.createVec2f64=function(t){return void 0===t&&(t=f),new e(16,r.vec2f64.createView,t)},e.createVec3f64=function(t){return void 0===t&&(t=f),new e(24,r.vec3f64.createView,t)},e.createVec4f64=function(t){return void 0===t&&(t=f),new e(32,r.vec4f64.createView,t)},e.createMat3f64=function(t){return void 0===t&&(t=f),new e(72,r.mat3f64.createView,t)},e.createMat4f64=function(t){return void 0===t&&(t=f),new e(128,r.mat4f64.createView,t)},e.createQuatf64=function(t){return void 0===t&&(t=f),new e(32,r.quatf64.createView,t)},e}();t.VectorStack=n;var f=4096;t.default=n});
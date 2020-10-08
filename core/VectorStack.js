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

define(["require","exports","./maybe","./nextTick","./libs/gl-matrix-2/mat3f64","./libs/gl-matrix-2/mat4f64","./libs/gl-matrix-2/quatf64","./libs/gl-matrix-2/vec2f64","./libs/gl-matrix-2/vec3f64","./libs/gl-matrix-2/vec4f64"],(function(e,t,i,r,s,f,n,u,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VectorStack=void 0;var h=function(){function e(e,t,i){var s=this;this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(i/this.itemByteSize),this.tickHandle=r.before((function(){return s.reset()}))}return e.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=i.nullifyNonnullableForDispose(this.tickHandle)),this.itemsPtr=0,this.items=i.nullifyNonnullableForDispose(this.items),this.buffers=i.nullifyNonnullableForDispose(this.buffers)},e.prototype.get=function(){0===this.itemsPtr&&r((function(){}));for(var e=Math.floor(this.itemsPtr/this.itemsPerBuffer);this.buffers.length<=e;){for(var t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize),i=0;i<this.itemsPerBuffer;++i)this.items.push(this.itemCreate(t,i*this.itemByteSize));this.buffers.push(t)}return this.items[this.itemsPtr++]},e.prototype.reset=function(){for(var e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0},e.createVec2f64=function(t){return void 0===t&&(t=c),new e(16,u.vec2f64.createView,t)},e.createVec3f64=function(t){return void 0===t&&(t=c),new e(24,o.vec3f64.createView,t)},e.createVec4f64=function(t){return void 0===t&&(t=c),new e(32,a.vec4f64.createView,t)},e.createMat3f64=function(t){return void 0===t&&(t=c),new e(72,s.mat3f64.createView,t)},e.createMat4f64=function(t){return void 0===t&&(t=c),new e(128,f.mat4f64.createView,t)},e.createQuatf64=function(t){return void 0===t&&(t=c),new e(32,n.quatf64.createView,t)},Object.defineProperty(e.prototype,"test",{get:function(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}},enumerable:!1,configurable:!0}),e}();t.VectorStack=h;var c=4096}));
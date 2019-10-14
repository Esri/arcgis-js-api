// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/has","./Util"],function(e,t,i,n){return function(){function e(t,n,r,o,s){this._context=null,this._glName=null,this._layout=null,this._locations=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._layout=r,this._buffers=o,this._locations=n,s&&(this._indexBuffer=s),this._id=e._nextId++,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(2)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var e=this;return Object.keys(this._buffers).reduce(function(t,i){return t+e._buffers[i].size},this._indexBuffer?this._indexBuffer.size:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.dispose=function(e){if(void 0===e&&(e=!0),this._context){var t=this._context.capabilities.vao;t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null);if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var n in this._buffers)this._buffers[n].dispose(),delete this._buffers[n];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(2),this._context=null}},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}},e.prototype.bind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())},e.prototype._bindLayout=function(){var e=this._buffers,t=!!this._context.capabilities.vao,i=this._layout,r=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");var o=this._context.gl;for(var s in e){var u=e[s];u||console.error("Vertex buffer is uninitialized!");var f=i[s];f||console.error("Vertex element descriptor is empty!"),n.bindVertexBufferLayout(this._context,this._locations,u,f)}r&&(t?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))},e.prototype.unbind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()},e.prototype._unbindLayout=function(){var e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(var i in e){var r=e[i];r||console.error("Vertex buffer is uninitialized!");var o=t[i];n.unbindVertexBufferLayout(this._context,this._locations,r,o)}var s=this._indexBuffer;s&&this._context.unbindBuffer(s.bufferType)},e._nextId=0,e}()});
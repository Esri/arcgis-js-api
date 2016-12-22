// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var i=function(){function e(t,i,r,n,o){this._context=null,this._glName=null,this._layout=null,this._locations=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._layout=r,this._buffers=n,this._locations=i,o&&(this._indexBuffer=o),this._id=e._nextId++}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.dispose=function(e){void 0===e&&(e=!0);var t=this._context.extensions.vao;t&&this._glName&&(t.deleteVertexArrayOES(this._glName),this._glName=null);var i=this._context.getBoundVAO();if(i===this&&this._context.bindVAO(null),e){for(var r in this._buffers)this._buffers[r].dispose(),delete this._buffers[r];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.extensions.vao;if(e){var t=e.createVertexArrayOES();e.bindVertexArrayOES(t),this._bindLayout(),e.bindVertexArrayOES(null),this._glName=t}this._initialized=!0}},e.prototype.bind=function(){this.initialize();var e=this._context.extensions.vao;e?e.bindVertexArrayOES(this.glName):(this._context.bindVAO(null),this._bindLayout())},e.prototype._bindLayout=function(){var e=this._buffers,t=this._context.extensions.vao,i=this._layout,r=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");var n,o,s,f=this._context.gl,u=0;for(var a in e)for(n=e[a],n||console.error("Vertex buffer is uninitialized!"),o=i[a],o||console.error("Vertex element descriptor is empty!"),this._context.bindBuffer(n),u=0;u<o.length;++u){s=o[u];var l=this._locations[s.name];if(void 0===l&&console.error("There is no location for vertex attribute '"+s.name+" defined."),s.count<=4){if(f.enableVertexAttribArray(l),f.vertexAttribPointer(l,s.count,s.type,s.normalized,s.stride,s.offset),s.divisor&&s.divisor>0){var d=this._context.extensions.angleInstancedArrays;d&&d.vertexAttribDivisorANGLE(l,s.divisor)}}else if(16===s.count&&5126===s.type){for(var c=0;4>c;c++)if(f.enableVertexAttribArray(l+c),f.vertexAttribPointer(l+c,4,s.type,s.normalized,s.stride,s.offset+16*c),s.divisor&&s.divisor>0){var d=this._context.extensions.angleInstancedArrays;d&&d.vertexAttribDivisorANGLE(l+c,s.divisor)}}else console.error("Unsupported vertex attribute element count: "+s.count)}r&&(t?f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))},e.prototype.unbind=function(){this.initialize();var e=this._context.extensions.vao;e?e.bindVertexArrayOES(null):this._unbindLayout()},e.prototype._unbindLayout=function(){var e=this._buffers,t=this._layout,i=this._locations,r=this._context;e||console.error("Vertex buffer dictionary is empty!");var n,o,s,f=r.gl,u=0,a=0;for(var l in e){for(n=e[l],n||console.error("Vertex buffer is uninitialized!"),o=t[l],u=0,a=o.length;a>u;++u){s=o[u];var d=i[s.name];f.disableVertexAttribArray(d)}r.unbindBuffer(n.bufferType)}var c=this._indexBuffer;c&&r.unbindBuffer(c.bufferType)},e._nextId=0,e}();return i});
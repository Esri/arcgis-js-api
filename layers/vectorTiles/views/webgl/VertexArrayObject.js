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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var i=function(){function e(t,i,r,n,o){this._context=null,this._glName=null,this._layout=null,this._locations=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._layout=r,this._buffers=n,this._locations=i,o&&(this._indexBuffer=o),this._id=e._nextId++}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.dispose=function(e){if(void 0===e&&(e=!0),this._context){var t=this._context.extensions.vao;t&&this._glName&&(t.deleteVertexArrayOES(this._glName),this._glName=null);var i=this._context.getBoundVAO();if(i===this&&this._context.bindVAO(null),e){for(var r in this._buffers)this._buffers[r].dispose(),delete this._buffers[r];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context=null}},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.extensions.vao;if(e){var t=e.createVertexArrayOES();e.bindVertexArrayOES(t),this._bindLayout(),e.bindVertexArrayOES(null),this._glName=t}this._initialized=!0}},e.prototype.bind=function(){this.initialize();var e=this._context.extensions.vao;e?e.bindVertexArrayOES(this.glName):(this._context.bindVAO(null),this._bindLayout())},e.prototype._bindLayout=function(){var e=this._buffers,t=this._context.extensions.vao,i=this._layout,r=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");var n,o,s,a=this._context.gl,f=0;for(var u in e)for(n=e[u],n||console.error("Vertex buffer is uninitialized!"),o=i[u],o||console.error("Vertex element descriptor is empty!"),this._context.bindBuffer(n),f=0;f<o.length;++f){s=o[f];var l=this._locations[s.name],d=s.baseInstance?s.baseInstance*s.stride:0;if(void 0===l&&console.error("There is no location for vertex attribute '"+s.name+"' defined."),s.baseInstance&&!s.divisor&&console.error("Vertex attribute '"+s.name+"' uses baseInstanceOffset without divisor."),s.count<=4){if(a.enableVertexAttribArray(l),a.vertexAttribPointer(l,s.count,s.type,s.normalized,s.stride,s.offset+d),s.divisor&&s.divisor>0){var c=this._context.extensions.angleInstancedArrays;c&&c.vertexAttribDivisorANGLE(l,s.divisor)}}else if(16===s.count&&5126===s.type){for(var b=0;4>b;b++)if(a.enableVertexAttribArray(l+b),a.vertexAttribPointer(l+b,4,s.type,s.normalized,s.stride,s.offset+16*b+d),s.divisor&&s.divisor>0){var c=this._context.extensions.angleInstancedArrays;c&&c.vertexAttribDivisorANGLE(l+b,s.divisor)}}else console.error("Unsupported vertex attribute element count: "+s.count)}r&&(t?a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))},e.prototype.unbind=function(){this.initialize();var e=this._context.extensions.vao;e?e.bindVertexArrayOES(null):this._unbindLayout()},e.prototype._unbindLayout=function(){var e=this._buffers,t=this._layout,i=this._locations,r=this._context;e||console.error("Vertex buffer dictionary is empty!");var n,o,s,a=r.gl,f=0,u=0;for(var l in e){for(n=e[l],n||console.error("Vertex buffer is uninitialized!"),o=t[l],f=0,u=o.length;u>f;++f){s=o[f];var d=i[s.name];a.disableVertexAttribArray(d)}r.unbindBuffer(n.bufferType)}var c=this._indexBuffer;c&&r.unbindBuffer(c.bufferType)},e._nextId=0,e}();return i});
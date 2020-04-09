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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../webgl","./buffer/glUtil","./buffer/InterleavedLayout","../webgl-engine/shaders/LaserlinePathTechnique"],(function(e,t,r,s,i,n,o,u,a){Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=i.vec3f64.create(),this._dirty=!1,this._count=0,this._vao=null}return Object.defineProperty(e.prototype,"vertices",{set:function(e){for(var t=new Float64Array(3*e.length),r=0,s=0,i=e;s<i.length;s++){var n=i[s];t[r++]=n[0],t[r++]=n[1],t[r++]=n[2]}this.buffers=[t]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffers",{set:function(e){if(this._buffers=e,this._buffers.length>0){var t=this._buffers[0],r=3*Math.floor(t.length/3/2);s.vec3.set(this._origin,t[r+0],t[r+1],t[r+2])}else s.vec3.set(this._origin,0,0,0);this._dirty=!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"origin",{get:function(){return this._origin},enumerable:!0,configurable:!0}),e.prototype.draw=function(e){var t=this.ensureVAO(e);r.isSome(t)&&(e.bindVAO(t),e.drawArrays(4,0,this._count))},e.prototype.dispose=function(){r.isSome(this._vao)&&this._vao.dispose()},e.prototype.ensureVAO=function(e){return r.isNone(this._buffers)?null:(r.isNone(this._vao)&&(this._vao=this.createVAO(e,this._buffers)),this.ensureVertexData(this._vao,this._buffers),this._vao)},e.prototype.createVAO=function(e,t){var r=this.createDataBuffer(t);return this._dirty=!1,new n.VertexArrayObject(e,a.LaserlinePathTechnique.attributeLocations,{data:o.glLayout(l)},{data:n.BufferObject.createVertex(e,35044,r)})},e.prototype.ensureVertexData=function(e,t){if(this._dirty){var r=this.createDataBuffer(t);e.vertexBuffers.data.setData(r),this._dirty=!1}},e.prototype.numberOfRenderVertices=function(e){return 3*(2*(e.length/3-1))},e.prototype.createDataBuffer=function(e){var t=this,r=e.reduce((function(e,r){return e+t.numberOfRenderVertices(r)}),0);this._count=r;for(var i=l.createBuffer(r),n=this._origin,o=0,u=0,a=0,f=e;a<f.length;a++){for(var d=f[a],p=0;p<d.length;p+=3){var v=s.vec3.set(h,d[p+0],d[p+1],d[p+2]);0===p?u=this._renderCoordsHelper.getAltitude(v):this._renderCoordsHelper.setAltitude(u,v);var b=this._renderCoordsHelper.worldUpAtPosition(v,c),_=o+2*p,g=s.vec3.subtract(h,v,n);if(p<d.length-3){i.up.setVec(_,b),i.up.setVec(_+3,b),i.up.setVec(_+5,b);for(var y=0;y<6;y++)i.start.setVec(_+y,g);i.extrude.setValues(_+0,0,-1),i.extrude.setValues(_+1,1,-1),i.extrude.setValues(_+2,1,1),i.extrude.setValues(_+3,0,-1),i.extrude.setValues(_+4,1,1),i.extrude.setValues(_+5,0,1)}if(p>0){i.up.setVec(_-2,b),i.up.setVec(_-4,b),i.up.setVec(_-5,b);for(y=-6;y<0;y++)i.end.setVec(_+y,g)}}o+=this.numberOfRenderVertices(d)}return i.buffer},e}();t.LaserlinePathData=f;var c=i.vec3f64.create(),h=i.vec3f64.create(),l=u.newLayout().vec3f("start").vec3f("end").vec3f("up").vec2f("extrude")}));
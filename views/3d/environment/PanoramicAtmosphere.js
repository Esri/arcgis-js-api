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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","./resources/SimpleAtmosphereTexture","../support/imageUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Util","../webgl-engine/shaders/SimpleAtmospherePrograms","../../webgl/BufferObject","../../webgl/programUtils","../../webgl/renderState","../../webgl/Texture","../../webgl/Util","../../webgl/Util","../../webgl/VertexArrayObject"],function(e,t,r,i,o,n,a,s,l,u,p,c,m,h,g,f,d,x){function b(e,t){return r.mat4.copy(e,t),e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}var y=function(){function e(e){this.needsRender=!1,this.didRender=!0,this.slot=12,this.view=e}return e.prototype.destroy=function(){this._program&&(this._program.dispose(),this._program=null),this._texture&&(this._texture.dispose(),this._texture=null),this._readyPromise&&(this._readyPromise.cancel(),this._readyPromise=null)},e.prototype.when=function(e){return this._readyPromise.then(e)},e.prototype.initializeRenderContext=function(e){var t=this,r=e.rctx;this._program=m.createProgram(r,p.colorPass,{panoramic:!0}),this._pipelineState=h.makePipelineState({blending:h.separateBlendingParams(770,1,771,771),culling:h.backFaceCullingParams,depthTest:{func:515},colorWrite:h.defaultColorWriteParams}),this._vao=this._createVertexArrayObject(r),this._vaoCount=d.vertexCount(this._vao,"geometry"),this._readyPromise=n.requestImage(o).then(function(r){t._texture=new g(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),t.needsRender=!0})},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||0!==e.pass||null==this._texture)return!1;var t=e.rctx,r=this._program;return t.bindProgram(r),t.setPipelineState(this._pipelineState),t.bindTexture(this._texture),r.setUniform1i("tex",0),r.setUniformMatrix4fv("proj",e.camera.projectionMatrix),b(_,e.camera.viewMatrix),r.setUniformMatrix4fv("view",_),r.setUniform4f("color",1,1,1,1),r.setUniform3fv("lightDirection",e.lightingData.direction),t.bindVAO(this._vao),f.assertCompatibleVertexAttributeLocations(this._vao,r),t.drawArrays(4,0,this._vaoCount),!0},e.prototype._createVertexArrayObject=function(e){for(var t=l.createPolySphereGeometry(1,2,!1),r=t.indices[u.VertexAttrConstants.POSITION],i=0;i<r.length;i+=3){var o=r[i];r[i]=r[i+2],r[i+2]=o}for(var n=t.vertexAttributes[u.VertexAttrConstants.POSITION].data,s=v.createBuffer(r.length),m=s.position,i=0;i<r.length;++i){var h=3*r[i];m.set(i,0,n[h]),m.set(i,1,n[h+1]),m.set(i,2,n[h+2])}return new x(e,p.colorPass.attributes,{geometry:a.glLayout(v)},{geometry:c.createVertex(e,35044,s.buffer)})},e}(),_=i.mat4f64.create(),v=s.newLayout().vec3f("position");return y});
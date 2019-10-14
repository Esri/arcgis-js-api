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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/promiseUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","./resources/SimpleAtmosphereTexture","../support/imageUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Util","../webgl-engine/shaders/SimpleAtmospherePrograms","../../webgl/BufferObject","../../webgl/programUtils","../../webgl/renderState","../../webgl/Texture","../../webgl/Util","../../webgl/Util","../../webgl/VertexArrayObject"],function(e,t,r,i,o,n,a,s,l,u,p,c,g,h,f,m,d,b,y,x,_){function v(e,t){return n.mat4.copy(e,t),e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}var w=function(){function e(e){this.slot=13,this._readyResolver=o.createResolver(),this._readyController=o.createAbortController(),this.view=e}return Object.defineProperty(e.prototype,"canRender",{get:function(){return null!=this._texture},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._readyResolver.reject(),this._program&&(this._program.dispose(),this._program=null),this._texture&&(this._texture.dispose(),this._texture=null),this._readyController&&(this._readyController.abort(),this._readyController=null)},e.prototype.when=function(e){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this._readyResolver.promise];case 1:return t.sent(),e(),[2]}})})},e.prototype.initializeRenderContext=function(e){var t=this,r=e.rctx;this._program=m.createProgram(r,h.colorPass,{panoramic:!0}),this._pipelineState=d.makePipelineState({blending:d.separateBlendingParams(770,1,771,771),culling:d.backFaceCullingParams,depthTest:{func:515},colorWrite:d.defaultColorWriteParams}),this._vao=this._createVertexArrayObject(r),this._vaoCount=x.vertexCount(this._vao,"geometry"),l.requestImage(s,{signal:this._readyController.signal}).then(function(r){t._texture=new b(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),e.requestRender(),t._readyController=null,t._readyResolver.resolve()})},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||0!==e.pass)return!1;var t=e.rctx,r=this._program;return t.bindProgram(r),t.setPipelineState(this._pipelineState),t.bindTexture(this._texture),r.setUniform1i("tex",0),r.setUniformMatrix4fv("proj",e.camera.projectionMatrix),v(C,e.camera.viewMatrix),r.setUniformMatrix4fv("view",C),r.setUniform4f("color",1,1,1,1),e.scenelightingData.setLightDirectionUniform(r),t.bindVAO(this._vao),y.assertCompatibleVertexAttributeLocations(this._vao,r),t.drawArrays(4,0,this._vaoCount),!0},e.prototype._createVertexArrayObject=function(e){for(var t=c.createPolySphereGeometry(1,2,!1),r=t.indices[g.VertexAttrConstants.POSITION],i=0;i<r.length;i+=3){var o=r[i];r[i]=r[i+2],r[i+2]=o}for(var n=t.vertexAttributes[g.VertexAttrConstants.POSITION].data,a=P.createBuffer(r.length),s=a.position,i=0;i<r.length;++i){var l=3*r[i];s.set(i,0,n[l]),s.set(i,1,n[l+1]),s.set(i,2,n[l+2])}return new _(e,h.colorPass.attributes,{geometry:u.glLayout(P)},{geometry:f.createVertex(e,35044,a.buffer)})},e}(),C=a.mat4f64.create(),P=p.newLayout().vec3f("position");return w});
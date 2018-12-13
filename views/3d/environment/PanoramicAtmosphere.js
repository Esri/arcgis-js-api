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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","./resources/SimpleAtmosphereTexture","../support/imageUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Util","../webgl-engine/shaders/SimpleAtmospherePrograms","../../webgl/BufferObject","../../webgl/programUtils","../../webgl/Texture","../../webgl/Util","../../webgl/Util","../../webgl/VertexArrayObject"],function(e,t,r,i,n,o,s,a,l,u,p,c,h,d,g,m){function f(e,t){return r.mat4.copy(e,t),e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}var b=function(){function e(e){this.needsRender=!1,this.didRender=!0,this.slot=16,this.view=e}return e.prototype.destroy=function(){this._program&&(this._program.dispose(),this._program=null),this._texture&&(this._texture.dispose(),this._texture=null),this._readyPromise&&(this._readyPromise.cancel(),this._readyPromise=null)},e.prototype.when=function(e){return this._readyPromise.then(e)},e.prototype.initializeRenderContext=function(e){var t=this,r=e.rctx;this._program=c.createProgram(r,u.colorPass,{panoramic:!0}),this._vao=this._createVertexArrayObject(r),this._vaoCount=g.vertexCount(this._vao,"geometry"),this._readyPromise=n.requestImage(i).then(function(r){t._texture=new h(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),t.needsRender=!0})},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||0!==e.pass||null==this._texture)return!1;var t=e.rctx,r=this._program;return t.bindProgram(r),t.bindTexture(this._texture),r.setUniform1i("tex",0),r.setUniformMatrix4fv("proj",e.camera.projectionMatrix),f(x,e.camera.viewMatrix),r.setUniformMatrix4fv("view",x),r.setUniform4f("color",1,1,1,1),r.setUniform3fv("lightDirection",e.lightingData.direction),t.setDepthTestEnabled(!0),t.setFaceCullingEnabled(!0),t.setFrontFace(2305),t.setCullFace(1029),t.setDepthFunction(515),t.setBlendingEnabled(!0),t.setDepthWriteEnabled(!1),t.bindVAO(this._vao),d.assertCompatibleVertexAttributeLocations(this._vao,r),t.drawArrays(4,0,this._vaoCount),t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1),t.setDepthFunction(513),t.setFaceCullingEnabled(!1),!0},e.prototype._createVertexArrayObject=function(e){for(var t=a.createPolySphereGeometry(1,2,!1),r=t.indices[l.VertexAttrConstants.POSITION],i=0;i<r.length;i+=3){var n=r[i];r[i]=r[i+2],r[i+2]=n}for(var s=t.vertexAttributes[l.VertexAttrConstants.POSITION].data,c=y.createBuffer(r.length),h=c.position,i=0;i<r.length;++i){var d=3*r[i];h.set(i,0,s[d]),h.set(i,1,s[d+1]),h.set(i,2,s[d+2])}return new m(e,u.colorPass.attributes,{geometry:o.glLayout(y)},{geometry:p.createVertex(e,35044,c.buffer)})},e}(),x=r.mat4f64.create(),y=s.newLayout().vec3f("position");return b});
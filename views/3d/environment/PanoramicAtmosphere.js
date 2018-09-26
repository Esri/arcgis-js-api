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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./resources/SimpleAtmosphereTexture","../lib/gl-matrix","../support/imageUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","../webgl-engine/lib/Util","../webgl-engine/shaders/SimpleAtmospherePrograms","../../webgl/BufferObject","../../webgl/programUtils","../../webgl/Texture","../../webgl/Util","../../webgl/Util","../../webgl/VertexArrayObject"],function(e,t,r,i,n,o,s,a,l,u,p,g,d,h,c,b,m,f){var x=function(){function e(e){this.needsRender=!1,this.didRender=!0,this.slot=u.POSTPROCESSING_ATMOSPHERE_OPAQUE,this.view=e}return e.prototype.destroy=function(){this._program&&(this._program.dispose(),this._program=null),this._texture&&(this._texture.dispose(),this._texture=null)},e.prototype.when=function(e){return this._readyPromise.then(e)},e.prototype.initializeRenderContext=function(e){var t=this,i=e.rctx;this._program=h.createProgram(i,g.colorPass,{panoramic:!0}),this._vao=this._createVertexArrayObject(i),this._vaoCount=m.vertexCount(this._vao,"geometry"),this._readyPromise=n.requestImage(r).then(function(r){t._texture=new c(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),t.needsRender=!0})},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||e.pass!==l.MATERIAL||null==this._texture)return!1;var t=e.rctx,r=this._program;return t.bindProgram(r),t.bindTexture(this._texture),r.setUniform1i("tex",0),r.setUniformMatrix4fv("proj",e.camera.projectionMatrix),i.mat4d.toRotationMat(e.camera.viewMatrix,y),r.setUniformMatrix4fv("view",y),r.setUniform4f("color",1,1,1,1),r.setUniform3fv("lightDirection",e.lightingData.direction),t.setDepthTestEnabled(!0),t.setFaceCullingEnabled(!0),t.setDepthFunction(515),t.setBlendingEnabled(!0),t.setDepthWriteEnabled(!1),t.bindVAO(this._vao),b.assertCompatibleVertexAttributeLocations(this._vao,r),t.drawArrays(4,0,this._vaoCount),t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1),t.setDepthFunction(513),t.setFaceCullingEnabled(!1),!0},e.prototype._createVertexArrayObject=function(e){for(var t=a.createPolySphereGeometry(1,2,!1),r=t.indices[p.VertexAttrConstants.POSITION],i=0;i<r.length;i+=3){var n=r[i];r[i]=r[i+2],r[i+2]=n}for(var s=t.vertexAttributes[p.VertexAttrConstants.POSITION].data,l=v.createBuffer(r.length),u=l.position,i=0;i<r.length;++i){var h=3*r[i];u.set(i,0,s[h]),u.set(i,1,s[h+1]),u.set(i,2,s[h+2])}return new f(e,g.colorPass.attributes,{geometry:o.glLayout(v)},{geometry:d.createVertex(e,35044,l.buffer)})},e}(),y=i.mat4d.create(),v=s.newLayout().vec3f("position");return x});
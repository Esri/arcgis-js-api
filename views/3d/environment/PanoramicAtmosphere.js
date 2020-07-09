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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/promiseUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","./SimpleAtmosphereTechnique","./resources/SimpleAtmosphereTexture","../support/imageUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/GeometryUtil","../webgl-engine/lib/Util","../../webgl/BufferObject","../../webgl/Texture","../../webgl/Util","../../webgl/VertexArrayObject"],(function(e,t,r,i,o,n,s,a,l,u,h,c,p,m,f,g,y,d){var b=r.getLogger("esri.views.3d.environment.PanoramicAtmosphere"),x=function(){function e(e,t){this.slot=14,this._readyResolver=i.createResolver(),this._readyController=i.createAbortController(),this.view=e,this._techniqueRepository=t,this._atmosphereTechniqueConfig=new s.SimpleAtmosphereTechniqueConfiguration}return Object.defineProperty(e.prototype,"canRender",{get:function(){return null!=this._texture},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._readyResolver.reject(),this._texture&&(this._texture.dispose(),this._texture=null),this._readyController&&(this._readyController.abort(),this._readyController=null)},e.prototype.when=function(){return this._readyResolver.promise},e.prototype.initializeRenderContext=function(e){var t=this,r=e.rctx;this._atmosphereTechniqueConfig.geometry=1,this._atmosphereTechnique=this._techniqueRepository.acquireAndReleaseExisting(s.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereTechnique),this._vao=this._createVertexArrayObject(r),this._vaoCount=y.vertexCount(this._vao,"geometry"),l.requestImage(a,{signal:this._readyController.signal}).then((function(r){t._texture=new g(e.rctx,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},r),e.requestRender(),t._readyController=null,t._readyResolver.resolve()})).catch((function(e){i.isAbortError(e)||b.error("Unable to initialize atmosphere: image request failed",e),t._readyResolver.reject()}))},e.prototype.uninitializeRenderContext=function(){this.destroy()},e.prototype.render=function(e){if(e.slot!==this.slot||0!==e.pass)return!1;var t,r,i=e.rctx,n=this._atmosphereTechnique.program;return i.bindProgram(n),this._atmosphereTechnique.bindPipelineState(i),i.bindTexture(this._texture),n.setUniform1i("tex",0),n.setUniformMatrix4fv("proj",e.camera.projectionMatrix),t=_,r=e.camera.viewMatrix,o.mat4.copy(t,r),t[12]=0,t[13]=0,t[14]=0,t[15]=1,n.setUniformMatrix4fv("view",_),n.setUniform4f("color",1,1,1,1),e.scenelightingData.setLightDirectionUniform(n),i.bindVAO(this._vao),n.assertCompatibleVertexAttributeLocations(this._vao),i.drawArrays(4,0,this._vaoCount),!0},e.prototype._createVertexArrayObject=function(e){for(var t=p.createPolySphereGeometry(1,2,!1),r=t.indices[m.VertexAttrConstants.POSITION],i=0;i<r.length;i+=3){var o=r[i];r[i]=r[i+2],r[i+2]=o}var n=t.vertexAttributes[m.VertexAttrConstants.POSITION].data,s=v.createBuffer(r.length),a=s.position;for(i=0;i<r.length;++i){var l=3*r[i];a.set(i,0,n[l]),a.set(i,1,n[l+1]),a.set(i,2,n[l+2])}return new d(e,c.Default3D,{geometry:u.glLayout(v)},{geometry:f.createVertex(e,35044,s.buffer)})},e}();var _=n.mat4f64.create(),v=h.newLayout().vec3f("position");return x}));
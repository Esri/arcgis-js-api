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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Util","./gl-matrix","dojo/text!../materials/internal/occluded.xml","../../../webgl/FramebufferObject","../../../webgl/Program","../../../webgl/VertexArrayObject","../../../webgl/BufferObject","../../../webgl/Util","../../../webgl/enums","./DefaultVertexBufferLayouts","./DefaultVertexAttributeLocations"],function(e,t,r,o,i,s,a,n,l,d,h,c,p){var u=o.vec4d,_=function(){function e(e,t,r){this._quadVAO=null,this._rctx=r,this._colorFBO=void 0,this._viewportToRestore=u.create(),this.programRep=e}return Object.defineProperty(e.prototype,"colorFBO",{get:function(){return this._colorFBO},enumerable:!0,configurable:!0}),e.prototype.createQuadVAO=function(){var e=this._rctx,t=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return new n(e,p.Default3D,{geometry:c.Pos2},{geometry:l.createVertex(e,35044,t)})},e.prototype.setEnableState=function(e){e?this.enable():this.disable()},e.prototype.getEnableState=function(){return void 0!==this._colorFBO},e.prototype.enable=function(){this._quadVAO=this.createQuadVAO(),this._colorFBO=s.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1})},e.prototype.disable=function(){this.getEnableState()&&(this._quadVAO.dispose(!0),this._quadVAO=void 0,this._colorFBO.dispose(),this._colorFBO=void 0)},e.prototype.setupFBOs=function(e){r.assert(this.getEnableState());var t=e.fullViewport;this._viewportToRestore=t,this._width=t[2],this._height=t[3],this._rctx.setViewport(0,0,this._width,this._height)},e.prototype.prepareColorPass=function(){r.assert(this.getEnableState());var e=this._rctx,t=e.gl;this._colorFBO.resize(this._width,this._height),e.bindFramebuffer(this._colorFBO),e.setClearColor(0,0,0,0),e.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)},e.prototype.finish=function(e){var t=this._rctx;t.bindFramebuffer(e),t.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])},e.prototype.apply=function(){var e=this._rctx,t=this.programRep.get("render-occluded-apply");e.bindProgram(t),e.bindVAO(this._quadVAO),e.bindTexture(this._colorFBO.colorTexture,0),t.setUniform1i("occludedColorMap",0),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setBlendingEnabled(!0),e.setBlendFunction(770,771),e.drawArrays(5,0,d.vertexCount(this._quadVAO,"geometry")),e.bindVAO(null),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!0),e.setBlendingEnabled(!1)},e.loadShaders=function(e,t,r,o){e._parse(i),r.add("render-occluded-apply",new a(o,e.vsRenderOccludedApply,e.fsRenderOccludedApply,p.Default3D))},e}();return _});
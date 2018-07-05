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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/text!../materials/internal/occluded.xml","./DefaultVertexAttributeLocations","./gl-matrix","./glUtil3D","./Util","../../../webgl/FramebufferObject","../../../webgl/Program","../../../webgl/Util"],function(e,t,r,i,o,s,n,a,l,d){return function(){function e(e,t,r){this._quadVAO=null,this._rctx=r,this._colorFBO=void 0,this._viewportToRestore=o.vec4d.create(),this.programRep=e}return Object.defineProperty(e.prototype,"enabled",{get:function(){return void 0!==this._colorFBO},set:function(e){e?this.enable():this.disable()},enumerable:!0,configurable:!0}),e.prototype.setupFBOs=function(e){n.assert(this.enabled);var t=e.fullViewport;this._viewportToRestore=t,this._width=t[2],this._height=t[3],this._rctx.setViewport(0,0,this._width,this._height)},e.prototype.prepareColorPass=function(){n.assert(this.enabled);var e=this._rctx,t=e.gl;this._colorFBO.resize(this._width,this._height),e.bindFramebuffer(this._colorFBO),e.setClearColor(0,0,0,0),e.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT)},e.prototype.finish=function(e){var t=this._rctx;t.bindFramebuffer(e),t.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])},e.prototype.apply=function(){var e=this._rctx,t=this.programRep.get("render-occluded-apply");e.bindProgram(t),e.bindVAO(this._quadVAO),e.bindTexture(this._colorFBO.colorTexture,0),t.setUniform1i("occludedColorMap",0),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setBlendingEnabled(!0),e.setBlendFunction(770,771),e.drawArrays(5,0,d.vertexCount(this._quadVAO,"geometry")),e.bindVAO(null),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!0),e.setBlendingEnabled(!1)},e.prototype.enable=function(){this.enabled||(this._quadVAO=s.createQuadVAO(this._rctx),this._colorFBO=a.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1}))},e.prototype.disable=function(){this.enabled&&(this._quadVAO.dispose(!0),this._quadVAO=void 0,this._colorFBO.dispose(),this._colorFBO=void 0)},e.loadShaders=function(e,t,o){e._parse(r),t.add("render-occluded-apply",new l(o,e.vsRenderOccludedApply,e.fsRenderOccludedApply,i.Default3D))},e}()});
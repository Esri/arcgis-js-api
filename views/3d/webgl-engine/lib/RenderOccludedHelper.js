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

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","./glUtil3D","./Util","../shaders/OccludedPrograms","../../../webgl/FramebufferObject","../../../webgl/Util"],function(t,e,i,r,o,s,n,a){return function(){function t(t,e){this._quadVAO=null,this._rctx=e,this._colorFBO=void 0,this._viewportToRestore=i.vec4f64.create(),this._combineProgram=t.getProgram(s.combinePass)}return Object.defineProperty(t.prototype,"enabled",{get:function(){return void 0!==this._colorFBO},set:function(t){t?this.enable():this.disable()},enumerable:!0,configurable:!0}),t.prototype.setupFBOs=function(t){o.assert(this.enabled);var e=t.fullViewport;this._viewportToRestore=e,this._width=e[2],this._height=e[3],this._rctx.setViewport(0,0,this._width,this._height)},t.prototype.prepareColorPass=function(){o.assert(this.enabled);var t=this._rctx,e=t.gl;this._colorFBO.resize(this._width,this._height),t.bindFramebuffer(this._colorFBO),t.setClearColor(0,0,0,0),t.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},t.prototype.finish=function(t){var e=this._rctx;e.bindFramebuffer(t),e.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])},t.prototype.apply=function(){var t=this._rctx,e=this._combineProgram;t.bindProgram(e),t.bindVAO(this._quadVAO),t.bindTexture(this._colorFBO.colorTexture,0),e.setUniform1i("occludedColorMap",0),t.setDepthWriteEnabled(!1),t.setDepthTestEnabled(!1),t.setBlendingEnabled(!0),t.setBlendFunction(770,771),t.drawArrays(5,0,a.vertexCount(this._quadVAO,"geometry")),t.bindVAO(null),t.setDepthWriteEnabled(!0),t.setDepthTestEnabled(!0),t.setBlendingEnabled(!1)},t.prototype.enable=function(){this.enabled||(this._quadVAO=r.createQuadVAO(this._rctx),this._colorFBO=n.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1}))},t.prototype.disable=function(){this.enabled&&(this._quadVAO.dispose(!0),this._quadVAO=void 0,this._colorFBO.dispose(),this._colorFBO=void 0)},t}()});
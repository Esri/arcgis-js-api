// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Util","./gl-matrix","dojo/text!../materials/internal/highlight.xml","../../../webgl/FramebufferObject","../../../webgl/Program","../../../webgl/VertexArrayObject","../../../webgl/BufferObject","../../../webgl/Util","../../../webgl/enums","./DefaultVertexBufferLayouts","./DefaultVertexAttributeLocations"],function(t,e,i,r,o,l,n,s,h,u,a,g,b){var d=r.vec4d,p=function(){function t(t,e,i){this.quadVAO=null,this.blur0Fbo=null,this.blur1Fbo=null,this._rctx=i,this.viewportToRestore=d.create(),this.programRep=t,this.color=d.create(),this.exponent=.3,this.fill=.1,d.set4(1,0,.5,1,this.color)}return t.prototype.createQuadVAO=function(){var t=this._rctx,e=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return new s(t,b.Default3D,{geometry:g.Pos2},{geometry:h.createVertex(t,35044,e)})},t.prototype.getIsSupported=function(){return!0},t.prototype.setEnableState=function(t){t?this.enable():this.disable()},t.prototype.getEnableState=function(){return null!==this.blur0Fbo},t.prototype.enable=function(){this.quadVAO=this.createQuadVAO();var t={colorTarget:0,depthStencilTarget:0,width:0,height:0};this.blur0Fbo=l.create(this._rctx,t),this.blur1Fbo=l.create(this._rctx,t)},t.prototype.disable=function(){this.getEnableState()&&(this.quadVAO.dispose(!0),this.blur1Fbo.dispose(),this.blur0Fbo.dispose(),this.quadVAO=null,this.blur0Fbo=null,this.blur1Fbo=null)},t.prototype.getHighlightFBO=function(){return this.blur0Fbo},t.prototype.render=function(t,e,r){this.updateDebugData();var o=this._rctx;i.assert(this.getEnableState()),d.set(t.fullViewport,this.viewportToRestore);var l=2,n=r.width,s=r.height,h=Math.ceil(n/l),a=Math.ceil(s/l);this.blur0Fbo.resize(h,a),this.blur1Fbo.resize(h,a);var g=this.programRep.get("highlight-blur"),b=this.programRep.get("highlight-apply");o.bindVAO(this.quadVAO),o.setDepthWriteEnabled(!1),o.setDepthTestEnabled(!1),o.setBlendingEnabled(!1),o.bindFramebuffer(this.blur0Fbo),o.bindTexture(r.colorTexture,0),o.bindProgram(g),g.setUniform1i("tex",0),g.setUniform2f("blurSize",1/h,0),o.setViewport(0,0,h,a),o.drawArrays(5,0,u.vertexCount(this.quadVAO,"geometry")),o.bindFramebuffer(this.blur1Fbo),this.blur0Fbo.colorTexture.setSamplingMode(9729),o.bindTexture(this.blur0Fbo.colorTexture,0),g.setUniform2f("blurSize",0,1/a),o.drawArrays(5,0,u.vertexCount(this.quadVAO,"geometry")),o.bindFramebuffer(e),o.setBlendingEnabled(!0),o.setBlendFunctionSeparate(770,771,1,771),o.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3]),o.bindProgram(b),b.setUniform1i("tex",0),this.blur1Fbo.colorTexture.setSamplingMode(9729),o.bindTexture(this.blur1Fbo.colorTexture,0),b.setUniform1i("origin",1),b.setUniform4fv("color",this.color),b.setUniform1f("exponent",this.exponent),b.setUniform1f("fill",this.fill),o.bindTexture(r.colorTexture,1),o.drawArrays(5,0,u.vertexCount(this.quadVAO,"geometry")),o.bindVAO(null),o.setDepthWriteEnabled(!0),o.setDepthTestEnabled(!0),o.setBlendingEnabled(!1)},t.prototype.updateDebugData=function(){window.webglEngineHighlightColor?d.set(window.webglEngineHighlightColor,this.color):window.webglEngineHighlightColor=[this.color[0],this.color[1],this.color[2],this.color[3]],void 0!==window.webglEngineHighlightExponent?this.exponent=window.webglEngineHighlightExponent:window.webglEngineHighlightExponent=this.exponent,void 0!==window.webglEngineHighlightFill?this.fill=window.webglEngineHighlightFill:window.webglEngineHighlightFill=this.fill},t.loadShaders=function(t,e,i,r){t._parse(o);var l=new n(r,t.vsHighlightBlurG9,t.fsHighlightBlurG9,b.Default3D),s=new n(r,t.vsHighlightApply,t.fsHighlightApply,b.Default3D);i.add("highlight-blur",l),i.add("highlight-apply",s)},t}();return p});
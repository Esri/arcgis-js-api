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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./GLFBO","./GLVBO","./GLSLShader","./GLSLProgram","./VertexBufferLayout","./Util","./gl-matrix","dojo/text!../materials/internal/highlight.xml"],function(t,e,i,r,o,l,n,s,h,u){var a=h.vec4d,g=function(){function t(t,e,i){this.quadVBO=null,this.blur0Fbo=null,this.blur1Fbo=null,this.gl=i,this.viewportToRestore=a.create(),this.programRep=t,this.color=a.create(),this.exponent=.3,this.fill=.1,a.set4(1,0,.5,1,this.color)}return t.prototype.createQuadVBO=function(t){var e=new Float32Array(8);return e[0]=-1,e[1]=-1,e[2]=1,e[3]=-1,e[4]=-1,e[5]=1,e[6]=1,e[7]=1,new r(e,n.Defaults.Pos2,t)},t.prototype.getIsSupported=function(){return!0},t.prototype.setEnableState=function(t){s.assert(t!==this.getEnableState()),t?this.enable():this.disable()},t.prototype.getEnableState=function(){return null!==this.blur0Fbo},t.prototype.enable=function(){var t=this.gl;this.quadVBO=this.createQuadVBO(this.gl),this.blur0Fbo=new i(t.RGBA,t.UNSIGNED_BYTE,!1,t.LINEAR,t,null),this.blur1Fbo=new i(t.RGBA,t.UNSIGNED_BYTE,!1,t.LINEAR,t,null)},t.prototype.disable=function(){s.assert(this.getEnableState()),this.quadVBO.dispose(),this.blur1Fbo.dispose(),this.blur0Fbo.dispose(),this.quadVBO=null,this.blur0Fbo=null,this.blur1Fbo=null},t.prototype.getHighlightFBO=function(){return this.blur0Fbo},t.prototype.render=function(t,e,i){this.updateDebugData();var r=this.gl;s.assert(this.getEnableState()),a.set(t.fullViewport,this.viewportToRestore);var o=2,l=i.getWidth(),n=i.getHeight(),h=Math.ceil(l/o),u=Math.ceil(n/o);this.blur0Fbo.setSize(h,u),this.blur1Fbo.setSize(h,u);var g=this.programRep.get("highlight-blur"),b=this.programRep.get("highlight-apply");this.quadVBO.bind(),this.quadVBO.setPointers(g,!1),this.quadVBO.getLayout().enableVertexAttribArrays(r,g,void 0),r.depthMask(!1),r.disable(r.DEPTH_TEST),r.disable(r.BLEND),this.blur0Fbo.bind(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,i.getTexture()),g.use(),g.uniform1i("tex",0),g.uniform2f("blurSize",1/h,0),r.viewport(0,0,h,u),r.drawArrays(r.TRIANGLE_STRIP,0,this.quadVBO.getNum()),this.blur1Fbo.bind(),g.uniform1i("tex",0),g.uniform2f("blurSize",0,1/u),r.bindTexture(r.TEXTURE_2D,this.blur0Fbo.getTexture()),r.drawArrays(r.TRIANGLE_STRIP,0,this.quadVBO.getNum()),r.bindFramebuffer(r.FRAMEBUFFER,e),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.viewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3]),b.use(),b.uniform1i("tex",0),r.bindTexture(r.TEXTURE_2D,this.blur1Fbo.getTexture()),b.uniform1i("origin",1),b.uniform4fv("color",this.color),b.uniform1f("exponent",this.exponent),b.uniform1f("fill",this.fill),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,i.getTexture()),r.drawArrays(r.TRIANGLE_STRIP,0,this.quadVBO.getNum()),r.activeTexture(r.TEXTURE0),this.quadVBO.getLayout().disableVertexAttribArrays(r,g,void 0),r.depthMask(!0),r.enable(r.DEPTH_TEST),r.disable(r.BLEND)},t.prototype.updateDebugData=function(){window.webglEngineHighlightColor?a.set(window.webglEngineHighlightColor,this.color):window.webglEngineHighlightColor=[this.color[0],this.color[1],this.color[2],this.color[3]],void 0!==window.webglEngineHighlightExponent?this.exponent=window.webglEngineHighlightExponent:window.webglEngineHighlightExponent=this.exponent,void 0!==window.webglEngineHighlightFill?this.fill=window.webglEngineHighlightFill:window.webglEngineHighlightFill=this.fill},t.loadShaders=function(t,e,i,r){t._parse(u);var n=new o(r.VERTEX_SHADER,t.vsHighlightBlurG9,r,void 0),s=new o(r.FRAGMENT_SHADER,t.fsHighlightBlurG9,r,void 0),h=new o(r.VERTEX_SHADER,t.vsHighlightApply,r,void 0),a=new o(r.FRAGMENT_SHADER,t.fsHighlightApply,r,void 0),g=new l(new Array(n,s),r),b=new l(new Array(h,a),r);i.add("highlight-blur",g),i.add("highlight-apply",b)},t}();return g});
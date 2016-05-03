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

define(["require","exports","./GLFBO","./GLVBO","./GLSLShader","./GLSLProgram","./VertexBufferLayout","./Util","dojo/text!../materials/internal/offscreen.xml"],function(t,e,r,s,i,n,a,o,h){var u=function(){function t(t,e){this._enabled=!1,this.width=0,this.height=0,this._programRep=t,this._gl=e,this._extension=null,this.width=null,this.height=null}return t.prototype.enable=function(){o.assert(!this.getEnableState()),o.assert(this.getIsSupported());var t=this._gl;this._enabled=!0,this.osFBO=new r(t.RGBA,t.UNSIGNED_BYTE,!1,t.NEAREST,t,void 0,!0),this.quadVBO=this.createQuadVBO(t)},t.prototype.disable=function(){o.assert(this.getEnableState()),this._enabled=!1,this.osFBO.dispose(),this.quadVBO.dispose(),this.osFBO=null,this.quadVBO=null},t.prototype.createQuadVBO=function(t){var e=new Float32Array(16);return e[0]=-1,e[1]=-1,e[2]=-1,e[3]=-1,e[4]=1,e[5]=-1,e[6]=1,e[7]=-1,e[8]=-1,e[9]=1,e[10]=-1,e[11]=1,e[12]=1,e[13]=1,e[14]=1,e[15]=1,new s(e,a.Defaults.Pos2Tex,t)},t.prototype.getIsSupported=function(){var t=this._gl;return this._extension||(this._extension=t.getExtension("WEBGL_depth_texture")),!!this._extension},t.prototype.setEnableState=function(t){t?this.enable():this.disable()},t.prototype.getEnableState=function(){return this._enabled},t.prototype.getColorTexture=function(){return this.osFBO.getTexture()},t.prototype.getDepthFBO=function(){return this.osFBO.getVirtualDepthFBO()},t.prototype.prepareRenderPass=function(t){o.assert(this.getEnableState());var e=this._gl,r=t.fullViewport;this.width=r[2],this.height=r[3],this.osFBO.setSize(this.width,this.height),this.osFBO.bind(),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},t.prototype.drawQuad=function(){o.assert(this.getEnableState());var t=this._gl,e=this._programRep.get("offscreenProgram");t.bindFramebuffer(t.FRAMEBUFFER,null),t.disable(t.DEPTH_TEST),t.clear(t.COLOR_BUFFER_BIT),e.use(),t.bindTexture(t.TEXTURE_2D,this.osFBO.getTexture()),this.quadVBO.getLayout().enableVertexAttribArrays(t,e),this.quadVBO.bind(),this.quadVBO.setPointers(e),t.drawArrays(t.TRIANGLE_STRIP,0,this.quadVBO.getNum()),t.bindBuffer(t.ARRAY_BUFFER,null),this.quadVBO.getLayout().disableVertexAttribArrays(t,e),t.useProgram(null),t.enable(t.DEPTH_TEST)},t.loadShaders=function(t,e,r,s){t._parse(h);var a=new i(s.VERTEX_SHADER,t.vsOffscreenRenderer,s),o=new i(s.FRAGMENT_SHADER,t.fsOffscreenRenderer,s),u=new n([a,o],s);r.add("offscreenProgram",u)},t}();return u});
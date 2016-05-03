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

define(["require","exports","./GLFBO","./Util"],function(t,e,i,s){var o=function(){function t(t){this.gl=t,this.fbo=null,this.fbo2=null,this.viewportToRestore=null,this.width=null,this.height=null}return t.prototype.setEnableState=function(t){t!==this.getEnableState()&&(t?this.enable():this.disable())},t.prototype.getEnableState=function(){return null!==this.fbo},t.prototype.getHighlightFBO=function(){return this.fbo},t.prototype.getBlurFBO=function(){return this.fbo2},t.prototype.enable=function(){s.assert(!this.getEnableState()),this.fbo=new i(this.gl.RGBA,this.gl.UNSIGNED_BYTE,!0,this.gl.NEAREST,this.gl,null)},t.prototype.disable=function(){s.assert(this.getEnableState()),this.fbo.dispose(),this.fbo=null},t.prototype.setupFBOs=function(t){s.assert(this.getEnableState());var e=t.fullViewport;this.viewportToRestore=e,this.width=e[2],this.height=e[3],this.gl.viewport(0,0,this.width,this.height)},t.prototype.prepareHighlightPass=function(){s.assert(this.getEnableState()),this.fbo.setSize(this.width,this.height),this.fbo.bind(),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)},t.prototype.finish=function(t){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t),this.gl.viewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])},t}();return o});
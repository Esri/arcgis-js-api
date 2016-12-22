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

define(["require","exports","./Util","../../../webgl/FramebufferObject","../../../webgl/enums"],function(t,e,i,o,r){var s=function(){function t(t){this._rctx=t,this.fbo=null,this.fbo2=null,this.viewportToRestore=null,this.width=null,this.height=null}return t.prototype.setEnableState=function(t){t!==this.getEnableState()&&(t?this.enable():this.disable())},t.prototype.getEnableState=function(){return null!==this.fbo},t.prototype.getHighlightFBO=function(){return this.fbo},t.prototype.getBlurFBO=function(){return this.fbo2},t.prototype.enable=function(){i.assert(!this.getEnableState()),this.fbo=o.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1})},t.prototype.disable=function(){i.assert(this.getEnableState()),this.fbo.dispose(),this.fbo=null},t.prototype.setupFBOs=function(t){i.assert(this.getEnableState());var e=t.fullViewport;this.viewportToRestore=e,this.width=e[2],this.height=e[3],this._rctx.setViewport(0,0,this.width,this.height)},t.prototype.prepareHighlightPass=function(){i.assert(this.getEnableState());var t=this._rctx,e=t.gl;this.fbo.resize(this.width,this.height),t.bindFramebuffer(this.fbo),t.setClearColor(0,0,0,0),t.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)},t.prototype.finish=function(t){var e=this._rctx;e.bindFramebuffer(t),e.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])},t}();return s});
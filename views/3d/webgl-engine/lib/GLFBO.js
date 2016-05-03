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

define(["require","exports","./GLUtil"],function(e,t,r){var i=function(){function e(e,t,r,i,u,f,E){this.frameBuffer=u.createFramebuffer(),this.texture=f||u.createTexture(),this.renderBuffer=r?u.createRenderbuffer():void 0,this.depthTexture=E?u.createTexture():void 0,this.dimI=0,this.dimJ=0,this.gl=u,this.format=e,this.type=t,this.texFilter=i,this._initTexture(this.texture),E&&this._initTexture(this.depthTexture)}return e.prototype._initTexture=function(e){var t=this.gl;t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,this.texFilter),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,this.texFilter),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,4,4,0,t.RGBA,t.UNSIGNED_BYTE,null)},e.prototype.dispose=function(){var e=this.gl;e.deleteFramebuffer(this.frameBuffer),e.deleteTexture(this.texture),void 0!==this.renderBuffer&&e.deleteRenderbuffer(this.renderBuffer)},e.prototype.setSize=function(e,t){if(e!==this.dimI||t!==this.dimJ){this.dimI=e,this.dimJ=t;var i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this.format,this.dimI,this.dimJ,0,this.format,this.type,null),void 0!==this.renderBuffer?(i.bindRenderbuffer(i.RENDERBUFFER,this.renderBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,this.dimI,this.dimJ)):void 0!==this.depthTexture&&(i.bindTexture(i.TEXTURE_2D,this.depthTexture),i.texImage2D(i.TEXTURE_2D,0,i.DEPTH_STENCIL,this.dimI,this.dimJ,0,i.DEPTH_STENCIL,34042,null)),i.bindFramebuffer(i.FRAMEBUFFER,this.frameBuffer),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.texture,0),void 0!==this.renderBuffer?i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,this.renderBuffer):void 0!==this.depthTexture&&i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,this.depthTexture,0),r.checkFramebufferStatus(i.FRAMEBUFFER,i),void 0!==this.renderBuffer&&i.bindRenderbuffer(i.RENDERBUFFER,null),i.bindFramebuffer(i.FRAMEBUFFER,null)}},e.prototype.getWidth=function(){return this.dimI},e.prototype.getHeight=function(){return this.dimJ},e.prototype.bind=function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.frameBuffer)},e.prototype.getVirtualDepthFBO=function(){var e=this.depthTexture,t=this.dimI,r=this.dimJ;return{getWidth:function(){return t},getHeight:function(){return r},getTexture:function(){return e}}},e.prototype.getTexture=function(){return this.texture},e.prototype.getGLName=function(){return this.frameBuffer},e}();return i});
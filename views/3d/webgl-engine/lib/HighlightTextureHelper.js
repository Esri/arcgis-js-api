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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../webgl/FramebufferObject"],function(t,e,r){return function(){function t(t){this._rctx=t,this.fbo=null,this.viewportToRestore=null}return t.prototype.dispose=function(){this.fbo&&(this.fbo.dispose(),this.fbo=null)},Object.defineProperty(t.prototype,"framebuffer",{get:function(){return this.fbo},enumerable:!0,configurable:!0}),t.prototype.prepareHighlightPass=function(t){var e=this._rctx,r=e.gl,o=t.fullViewport,i=o[2],s=o[3];this.updateFBO(i,s),this.viewportToRestore=o,this._rctx.setViewport(0,0,i,s),e.bindFramebuffer(this.fbo),e.setClearColor(0,0,0,0),e.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT)},t.prototype.finish=function(t){var e=this._rctx;e.bindFramebuffer(t),e.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])},t.prototype.updateFBO=function(t,e){this.fbo?this.fbo.resize(t,e):this.fbo=r.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:32819,samplingMode:9729,wrapMode:33071,width:t,height:e},{colorTarget:0,depthStencilTarget:1})},t}()});
// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../webgl","../../engine","./BitBlitRenderer","./enums","./MaterialManager","./TextureManager","./effects/AnimationEffect","./effects/HighlightEffect","./effects/HittestEffect","./painter/RenderPass"],function(e,t,r,h,s,i,n,a,o,f,l,u,c){Object.defineProperty(t,"__esModule",{value:!0});var b=function(){};t.PainterOptions=b;var p=function(){function e(e){this.context=e,this._blitRenderer=new i.BitBlitRenderer,this._brushCache=new Map,this.textureManager=new o,this.effects={highlight:new l.default,hittest:new u.HittestEffect,integrate:new f.AnimationEffect},this.materialManager=new a(e)}return e.prototype.getFbos=function(e,t,r){if(t!==this._lastWidth||r!==this._lastHeight){if(this._lastWidth=t,this._lastHeight=r,this._fbos)for(var s in this._fbos)this._fbos[s].dispose();var i={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:t,height:r},n={colorTarget:0,depthStencilTarget:3},a=new h.Renderbuffer(this.context,{width:t,height:r,internalFormat:34041});this._fbos={output:h.FramebufferObject.createWithAttachments(this.context,i,n,a),alpha:h.FramebufferObject.createWithAttachments(this.context,i,n,a),effect0:h.FramebufferObject.createWithAttachments(this.context,i,n,a)}}return this._fbos},e.prototype.beforeRenderLayers=function(e){var t=e.getViewport(),r=t.width,s=t.height,i=this.getFbos(e,r,s);this._prevFBO=e.getBoundFramebufferObject(),e.bindFramebuffer(i.output),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)},e.prototype.beforeRenderLayer=function(e,t,r){1!==r?(e.bindFramebuffer(this._fbos.alpha),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)):e.bindFramebuffer(this._fbos.output),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setClearStencil(t),e.setStencilWriteMask(255),e.clear(e.gl.STENCIL_BUFFER_BIT)},e.prototype.compositeLayer=function(e,t){1!==t&&(e.bindFramebuffer(this._fbos.output),e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,this._fbos.alpha.colorTexture,9728,t))},e.prototype.renderLayers=function(e){e.bindFramebuffer(this._prevFBO),this._fbos&&(e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,this._fbos.output.colorTexture,9728,1))},e.prototype.dispose=function(){this.materialManager.dispose(),this.textureManager.dispose(),this.effects.highlight.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null)},e.prototype.getGeometryBrush=function(e){var t,r=((t={})[n.WGLGeometryType.FILL]=s.brushes.Fill,t[n.WGLGeometryType.LINE]=s.brushes.Line,t[n.WGLGeometryType.MARKER]=s.brushes.Marker,t[n.WGLGeometryType.TEXT]=s.brushes.Text,t)[e];return this._brushCache.has(r)||this._brushCache.set(r,new r),this._brushCache.get(r)},e.prototype.registerRenderPass=function(e){var t=this,r=e.brushes.map(function(e){return t._brushCache.has(e)||t._brushCache.set(e,new e),t._brushCache.get(e)});return new c.default(r,e)},e.prototype.setHighlightOptions=function(e){this.effects.highlight.setHighlightOptions(e)},e}();t.default=p});
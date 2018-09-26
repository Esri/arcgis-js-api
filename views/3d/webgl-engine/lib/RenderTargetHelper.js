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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../webgl/FramebufferObject","../../../webgl/Renderbuffer","../../../webgl/Texture"],function(e,t,r,i,h,o){Object.defineProperty(t,"__esModule",{value:!0});var s={dataType:5121},d={},p=function(){function e(e){this.rctx=e,this.framebuffers=new Map,this.depthTextures=new Map,this.depthBuffers=new Map,this.colorTextures=new Map,this.nextId=1,this.depthTextureSupported=e.capabilities.depthTexture}return e.prototype.disposeAllResource=function(){this.depthBuffers.forEach(function(e){return e.dispose()}),this.depthBuffers.clear(),this.depthTextures.forEach(function(e){return e.dispose()}),this.depthTextures.clear(),this.colorTextures.forEach(function(e){return e.dispose()}),this.colorTextures.clear()},e.prototype.getDepthTexture=function(e,t){if(this.depthTextureSupported){var r=this.depthTextures.get(e.id);return r&&(r.descriptor.width===t.width&&r.descriptor.height===t.height||(r.dispose(),r=void 0)),r||(r=new o(this.rctx,{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:t.width,height:t.height}),this.depthTextures.set(e.id,r)),r}},e.prototype.getDepthBuffer=function(e,t){if(!this.depthTextureSupported){var i=this.depthBuffers.get(e.id);return i?i.descriptor.width===t.width&&i.descriptor.height===t.height||i.resize(t.width,t.height):(i=new h(this.rctx,r({internalFormat:34041},t)),this.depthBuffers.set(e.id,i)),i}},e.prototype.getColorTexture=function(e,t){var r=this.colorTextures.get(e.id);return r&&(r.descriptor.width===t.width&&r.descriptor.height===t.height||(r.dispose(),r=void 0)),r||(r=new o(this.rctx,{target:3553,pixelFormat:6408,dataType:e.dataType,samplingMode:9729,wrapMode:33071,width:t.width,height:t.height}),this.colorTextures.set(e.id,r)),r},e.prototype.registerDepthTarget=function(e){void 0===e&&(e={});var t=this.nextId++;return r({id:t},d,e)},e.prototype.registerColorTarget=function(e){void 0===e&&(e={});var t=this.nextId++;return r({id:t},s,e)},e.prototype.getFramebuffer=function(e,t,r){var h=this.getKey(t,r),o=this.framebuffers.get(h),s=this.getColorTexture(t,e);if(this.depthTextureSupported){var d=r?this.getDepthTexture(r,e):void 0;if(!o)return o=r?i.createWithAttachments(this.rctx,s,{colorTarget:0,depthStencilTarget:4},d):i.createWithAttachments(this.rctx,s,{colorTarget:0,depthStencilTarget:0}),this.framebuffers.set(h,o),o;var p=o.width!==e.width||o.height!==e.height||o.colorTexture!==s||o.depthStencilTexture!==d;return p&&(o.detachColorTexture(),o.detachDepthStencilTexture(),o.resize(e.width,e.height),o.attachColorTexture(s),o.attachDepthStencilTexture(d)),o}var u=r?this.getDepthBuffer(r,e):void 0;if(!o)return o=i.createWithAttachments(this.rctx,s,{colorTarget:0,depthStencilTarget:r?3:0},u),this.framebuffers.set(h,o),o;var p=o.width!==e.width||o.height!==e.height||o.colorTexture!==s;return p&&(o.detachColorTexture(),o.detachDepthStencilBuffer(),o.resize(e.width,e.height),o.attachColorTexture(s),o.attachDepthStencilBuffer(u)),o},e.prototype.getKey=function(e,t){return e.id+"_"+(t?t.id:"X")+"_"+e.name+(t?"_"+t.name:"")},e}();t.RenderTargetHelper=p});
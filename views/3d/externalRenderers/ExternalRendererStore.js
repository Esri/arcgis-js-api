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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Collection","../../../core/Logger","../../../core/watchUtils","./RenderContext","../webgl-engine/lib/gl-matrix","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot"],function(e,t,n,r,i,s,o,d,a){function c(e,t,n){"function"==typeof e[t]&&e[t](n)}var h=r.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore"),u=o.vec3d,f=function(){function e(){this._renderers=new n}return e.prototype.add=function(e,t){this._findOrCreateStageRenderer(e).add(t)},e.prototype.remove=function(e,t){var n=this._findStageRenderer(e);n&&n.remove(t),0===n.renderers.length&&(n.destroy(),this._renderers.remove(n))},e.prototype._findStageRenderer=function(e){return this._renderers.find(function(t){return t.view===e})},e.prototype._findOrCreateStageRenderer=function(e){var t=this._findStageRenderer(e);return t||(t=new g(e),this._renderers.add(t)),t},e}(),g=function(){function e(e){var t=this;this.view=e,this.didRender=!0,this.needsRender=!1,this.renderers=new n,this._readyWatchHandle=i.init(e,"ready",function(e){e?(t.context=new s(t.view),t.view._stage.addExternalRenderer([a.OPAQUE_EXTERNAL,a.TRANSPARENT_EXTERNAL],t)):(t.renderers.forEach(function(e){return c(e,"dispose",t.context)}),t.context=null)})}return e.prototype.destroy=function(){var e=this;this.renderers.drain(function(t){e.context&&c(t,"dispose",e.context)}),this.view._stage&&this.view._stage.removeExternalRenderer(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null},e.prototype.add=function(e){if(-1!==this.renderers.indexOf(e))return void h.warn("add(): Cannot add external renderer: renderer has already been added");this.renderers.add(e),this.context&&(this._webglStateReset(),c(e,"setup",this.context),this.view._stage.setNeedsRender())},e.prototype.remove=function(e){var t=this.renderers.indexOf(e);-1!==t&&(this.renderers.removeAt(t),this.context&&(c(e,"dispose",this.context),this.view._stage.setNeedsRender()))},e.prototype.initializeRenderContext=function(e){var t=this;this.context.gl=e.rctx.gl,this.context.rctx=e.rctx,this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach(function(e){return c(e,"setup",t.context)})},e.prototype.uninitializeRenderContext=function(e){},e.prototype.render=function(e){var t=this;return e.pass!==d.MATERIAL||(this._updateContext(e),this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach(function(n){switch(e.slot){case a.OPAQUE_EXTERNAL:c(n,"render",t.context);break;case a.TRANSPARENT_EXTERNAL:c(n,"renderTransparent",t.context)}}),!0)},e.prototype.resetNeedsRender=function(){},e.prototype._updateContext=function(e){this.context.camera.copyFrom(e.camera),u.set(e.lightingData.direction,this.context.sunLight.direction),u.set(e.lightingData.diffuse,this.context.sunLight.diffuse.color),u.set(e.lightingData.ambient,this.context.sunLight.ambient.color),this.context.sunLight.diffuse.intensity=e.lightingData.diffuse[3],this.context.sunLight.ambient.intensity=e.lightingData.ambient[3],this.context._renderTargetHelper=e.offscreenRenderingHelper},e.prototype._webglStateReset=function(){this.context.rctx.resetState(),this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()},e}();return f});
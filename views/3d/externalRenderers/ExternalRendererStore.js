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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/Collection","../../../core/Logger","../../../core/watchUtils","../../../core/libs/gl-matrix-2/vec3","./RenderContext"],function(e,t,n,r,i,o,s){function d(e,t,n){"function"==typeof e[t]&&e[t](n)}var a=r.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore"),c=function(){function e(){this._renderers=new n}return e.prototype.add=function(e,t){this._findOrCreateStageRenderer(e).add(t)},e.prototype.remove=function(e,t){var n=this._findStageRenderer(e);n&&n.remove(t),0===n.renderers.length&&(n.destroy(),this._renderers.remove(n))},e.prototype._findStageRenderer=function(e){return this._renderers.find(function(t){return t.view===e})},e.prototype._findOrCreateStageRenderer=function(e){var t=this._findStageRenderer(e);return t||(t=new h(e),this._renderers.add(t)),t},e}(),h=function(){function e(e){var t=this;this.view=e,this.didRender=!0,this.needsRender=!1,this.renderers=new n,this._readyWatchHandle=i.init(e,"ready",function(e){e?(t.context=new s(t.view),t.view._stage.addRenderPlugin([5,7],t)):(t.renderers.forEach(function(e){return d(e,"dispose",t.context)}),t.context=null)})}return e.prototype.destroy=function(){var e=this;this.renderers.drain(function(t){e.context&&d(t,"dispose",e.context)}),this.view._stage&&this.view._stage.removeRenderPlugin(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null},e.prototype.add=function(e){if(-1!==this.renderers.indexOf(e))return void a.warn("add(): Cannot add external renderer: renderer has already been added");this.renderers.add(e),this.context&&(this._webglStateReset(),d(e,"setup",this.context),this.view._stage.setNeedsRender())},e.prototype.remove=function(e){var t=this.renderers.indexOf(e);-1!==t&&(this.renderers.removeAt(t),this.context&&(d(e,"dispose",this.context),this.view._stage.setNeedsRender()))},e.prototype.initializeRenderContext=function(e){var t=this;this.context.gl=e.rctx.gl,this.context.rctx=e.rctx,this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach(function(e){return d(e,"setup",t.context)})},e.prototype.uninitializeRenderContext=function(e){},e.prototype.render=function(e){var t=this;return 0!==e.pass||(this._updateContext(e),this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach(function(n){switch(e.slot){case 5:d(n,"render",t.context);break;case 7:d(n,"renderTransparent",t.context)}}),!0)},e.prototype.resetNeedsRender=function(){},e.prototype._updateContext=function(e){this.context.camera.copyFrom(e.camera),o.vec3.copy(this.context.sunLight.direction,e.lightingData.direction),o.vec3.copy(this.context.sunLight.diffuse.color,e.lightingData.diffuse),o.vec3.copy(this.context.sunLight.ambient.color,e.lightingData.ambient),this.context.sunLight.diffuse.intensity=e.lightingData.diffuse[3],this.context.sunLight.ambient.intensity=e.lightingData.ambient[3],this.context._renderTargetHelper=e.offscreenRenderingHelper},e.prototype._webglStateReset=function(){this.context.rctx.resetState(),this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()},e}();return c});
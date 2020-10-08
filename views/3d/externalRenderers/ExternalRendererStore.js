// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/Collection","../../../core/Logger","../../../core/watchUtils","../../../core/libs/gl-matrix-2/vec3","./RenderContext"],(function(e,t,n,r,i,o,s){"use strict";var d=r.getLogger("esri.views.3d.externalRenderers.ExternalRendererStore"),a=function(){function e(){this._renderers=new n}return e.prototype.add=function(e,t){this._findOrCreateStageRenderer(e).add(t)},e.prototype.remove=function(e,t){var n=this._findStageRenderer(e);n&&n.remove(t),0===n.renderers.length&&(n.destroy(),this._renderers.remove(n))},e.prototype._findStageRenderer=function(e){return this._renderers.find((function(t){return t.view===e}))},e.prototype._findOrCreateStageRenderer=function(e){var t=this._findStageRenderer(e);return t||(t=new c(e),this._renderers.add(t)),t},e}(),c=function(){function e(e){var t=this;this.view=e,this.canRender=!0,this.renderers=new n,this._readyWatchHandle=i.init(e,"ready",(function(e){e?(t.context=new s(t.view),t.view._stage.addRenderPlugin([4,6],t)):(t.renderers.forEach((function(e){return h(e,"dispose",t.context)})),t.context=null)}))}return e.prototype.destroy=function(){var e=this;this.renderers.drain((function(t){e.context&&h(t,"dispose",e.context)})),this.view._stage&&this.view._stage.removeRenderPlugin(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null},e.prototype.add=function(e){-1===this.renderers.indexOf(e)?(this.renderers.add(e),this.context&&(this._webglStateReset(),h(e,"setup",this.context),this.view._stage.renderView.setNeedsRender())):d.warn("add(): Cannot add external renderer: renderer has already been added")},e.prototype.remove=function(e){var t=this.renderers.indexOf(e);-1!==t&&(this.renderers.removeAt(t),this.context&&(h(e,"dispose",this.context),this.view._stage.renderView.setNeedsRender()))},e.prototype.initializeRenderContext=function(e){var t=this;this.context.gl=e.rctx.gl,this.context.rctx=e.rctx,this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach((function(e){return h(e,"setup",t.context)}))},e.prototype.uninitializeRenderContext=function(){},e.prototype.render=function(e){var t=this;return 0!==e.pass||(this._updateContext(e),this.renderers.length>0&&this._webglStateReset(),this.renderers.forEach((function(n){switch(e.slot){case 4:h(n,"render",t.context);break;case 6:h(n,"renderTransparent",t.context)}})),!0)},e.prototype._updateContext=function(e){this.context.camera.copyFrom(e.camera),o.vec3.copy(this.context.sunLight.direction,e.scenelightingData.old.direction),o.vec3.copy(this.context.sunLight.diffuse.color,e.scenelightingData.old.diffuse.color),o.vec3.copy(this.context.sunLight.ambient.color,e.scenelightingData.old.ambient.color),this.context.sunLight.diffuse.intensity=e.scenelightingData.old.diffuse.intensity,this.context.sunLight.ambient.intensity=e.scenelightingData.old.ambient.intensity,this.context._renderTargetHelper=e.offscreenRenderingHelper},e.prototype._webglStateReset=function(){this.context.rctx.resetState(),this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()},e}();function h(e,t,n){"function"==typeof e[t]&&e[t](n)}return a}));
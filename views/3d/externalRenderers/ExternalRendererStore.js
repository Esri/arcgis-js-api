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

define(["require","exports","./RenderContext","../../../core/watchUtils","../../../core/Collection","../webgl-engine/lib/RenderSlot","../webgl-engine/lib/RenderPass","../webgl-engine/lib/gl-matrix","../webgl-engine/lib/GLSLProgram"],function(e,t,n,r,i,s,o,d,a){var h=d.vec3d,c=function(){function e(){this._renderers=new i}return e.prototype.add=function(e,t){this._findOrCreateStageRenderer(e).add(t)},e.prototype.remove=function(e,t){var n=this._findStageRenderer(e);n&&n.remove(t),0===n.renderers.length&&(n.destroy(),this._renderers.remove(n))},e.prototype._findStageRenderer=function(e){return this._renderers.find(function(t){return t.view===e})},e.prototype._findOrCreateStageRenderer=function(e){var t=this._findStageRenderer(e);return t||(t=new u(e),this._renderers.add(t)),t},e}(),u=function(){function e(e){var t=this;this.view=e,this.didRender=!0,this.needsRender=!1,this.needsDepthMap=!1,this.renderers=new i,this._readyWatchHandle=r.init(e,"ready",function(e){e?(t.context=new n(t.view),t.view._stage.addExternalRenderer([s.OPAQUE_EXTERNAL,s.TRANSPARENT_EXTERNAL],t)):(t.renderers.forEach(function(e){e.dispose(t.context)}),t.context=null)})}return e.prototype.destroy=function(){var e=this;this.renderers.drain(function(t){e.context&&t.dispose(e.context)}),this.view._stage&&this.view._stage.removeExternalRenderer(this),this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null),this.context=null},e.prototype.add=function(e){return-1!==this.renderers.indexOf(e)?void console.warn("Cannot add external renderer: renderer has already been added"):(this.renderers.add(e),void(this.context&&(e.setup(this.context),this.view._stage.setNeedsRender())))},e.prototype.remove=function(e){var t=this.renderers.indexOf(e);-1!==t&&(this.renderers.removeAt(t),this.context&&(e.dispose(this.context),this.view._stage.setNeedsRender()))},e.prototype.initializeRenderContext=function(e){var t=this;this.context.gl=e.gl,this.renderers.forEach(function(e){e.setup(t.context)})},e.prototype.render=function(e){var t=this;if(e.pass!==o.MATERIAL)return!0;this._updateContext(e),this.renderers.forEach(function(n){switch(e.slot){case s.OPAQUE_EXTERNAL:n.render&&n.render(t.context);break;case s.TRANSPARENT_EXTERNAL:n.renderTransparent&&n.renderTransparent(t.context)}});var n=this.context.gl;return n.web3DDefaultState.apply(),n.enable(n.DEPTH_TEST),n.disable(n.BLEND),a.unuse(n),n.activeTexture(n.TEXTURE0),!0},e.prototype.resetNeedsRender=function(){},e.prototype._updateContext=function(e){this.context.camera.copyFrom(e.camera),h.set(e.lightingData.direction,this.context.sunLight.direction),h.set(e.lightingData.diffuse,this.context.sunLight.diffuse.color),h.set(e.lightingData.ambient,this.context.sunLight.ambient.color),this.context.sunLight.diffuse.intensity=e.lightingData.diffuse[3],this.context.sunLight.ambient.intensity=e.lightingData.ambient[3]},e}();return c});
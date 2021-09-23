/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","./RenderTargetHelper"],(function(e,t,r){"use strict";let i=function(){function e(e,t){this._rctx=e,this._compositingHelper=t,this._currentRenderTarget=0,this.dimensions={width:4,height:4},this._needLastFrameColorTexture=!1,this._background={type:"color",color:[0,0,0,1]};const i=this._rctx,o="webgl2"===i.webglVersion;this.renderTargetHelper=new r.RenderTargetHelper(i);const n=this.renderTargetHelper;this.mainColorTarget0=n.registerColorTarget({name:"mainColorTarget0"}),this.mainColorTarget1=n.registerColorTarget({name:"mainColorTarget1"}),this.frontFaceTarget=n.registerColorTarget({name:"frontFaceTarget"});const s=e=>n.registerColorTarget({name:e,dataType:5126,internalFormat:o?34836:6408,samplingMode:9728});this.colorFloatTarget=s("colorFloatTarget"),this.alphaFloatTarget=s("alphaFloatTarget"),this.mainDepth=n.registerDepthTarget({name:"mainDepth"}),this.linearDepth=n.registerColorTarget({name:"linearDepth",samplingMode:9728}),this.terrainLinearDepth=n.registerColorTarget({name:"terrainLinearDepth"}),this.geometryLinearDepth=n.registerColorTarget({name:"geometryLinearDepth"}),this.normal=n.registerColorTarget({name:"normal"}),this.highlight=n.registerColorTarget({name:"highlight",internalFormat:o?32854:6408,dataType:32819}),this.hudVisibility=n.registerColorTarget({name:"hudVisibility",internalFormat:o?32854:6408,dataType:32819}),this.tmpColor=n.registerColorTarget({name:"tmpColor"}),this.tmpDepth=n.registerDepthTarget({name:"tmpDepth"}),this.hudColor=n.registerColorTarget({name:"hudColor"})}var i=e.prototype;return i.dispose=function(){this.renderTargetHelper.dispose()},i.getFramebuffer=function(e,t){return this.renderTargetHelper.getFramebuffer(this.dimensions,e,t)},i.advanceCurrentRenderTarget=function(){this._currentRenderTarget=0===this._currentRenderTarget&&this._needLastFrameColorTexture?1:0},i.initializeFrame=function(e){const t=this._rctx;this.dimensions.width=e.fullWidth,this.dimensions.height=e.fullHeight,this.bindTarget(this.currentColorTarget,this.mainDepth),t.setClearStencil(0);const r=this._background.color;t.setClearColor(r[0]*r[3],r[1]*r[3],r[2]*r[3],r[3]),t.clearSafe(17664)},i.composite=function(){this._compositingHelper.composite(this.colorTexture,0)},i.renderTmpAndCompositeToMain=function(e,t,r=!1){this.renderToTargets(e,this.tmpColor,r?this.tmpDepth:this.mainDepth,o),this._compositingHelper.composite(this.getColorTexture(this.tmpColor),t)},i.renderHUDVisibility=function(e,t=!1){this.renderToTargets(e,this.hudVisibility,t?this.tmpDepth:this.mainDepth,n)},i.compositeTransparentTerrainOntoHUDVisibility=function(){this.renderToTargets((()=>{this._compositingHelper.compositeSpecial(this.getColorTexture(this.tmpColor),1)}),this.hudVisibility,this.tmpDepth)},i.renderOITPass=function(e,t,r){let i,o;switch(t){case 0:i=this.colorFloatTarget,o=[0,0,0,0];break;case 1:i=this.alphaFloatTarget,o=[1,1,1,1];break;case 2:i=this.frontFaceTarget,o=[0,0,0,0]}r?this.renderToTargets(e,i,this.tmpDepth,o,!0,!0):this.renderToTargets(e,i,this.mainDepth,o,!1)},i.compositeTransparentTerrainOntoMain=function(){this.bindFramebuffer(),this._compositingHelper.composite(this.getColorTexture(this.tmpColor),2)},i.compositeOccludedOntoMain=function(e){this.bindFramebuffer(),this._compositingHelper.composite(this.getColorTexture(this.tmpColor),2,e)},i.compositeTransparentOntoOpaque=function(e){e?(this.bindTarget(this.hudColor,this.tmpDepth),this._rctx.setClearColor(0,0,0,1e-13),this._rctx.clearSafe(16384)):this.bindFramebuffer(),this._compositingHelper.compositeTransparent(this.getColorTexture(this.colorFloatTarget),this.getColorTexture(this.alphaFloatTarget),this.getColorTexture(this.frontFaceTarget))},i.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)},i.renderDepthDetached=function(e){this.bindTarget(this.currentColorTarget),e(),this.bindTarget(this.currentColorTarget,this.mainDepth)},i.disposeTarget=function(e){this.renderTargetHelper.disposeTargetResource(e)},i.renderToTargets=function(e,t,r,i,o=!1,n=!1){const s=this._rctx,a=this.bindTarget(t,r);let h=0;if(i){const e=1e-13,t=Math.max(e,i[3]);s.setClearColor(i[0],i[1],i[2],t),h|=16384}return o&&(h|=256),!1===n?n=0:(!0===n&&(n=255),h|=1024),h&&s.clearSafe(h,n),e(),s.gl.flush(),this.bindTarget(this.currentColorTarget,this.mainDepth),a},i.bindTarget=function(e,t){const r=this.renderTargetHelper.getFramebuffer(this.dimensions,e,t);return this._rctx.bindFramebuffer(r),r},i.getColorTexture=function(e){return this.renderTargetHelper.getColorTexture(e,this.dimensions)},i.getGpuMemoryUsage=function(){let e=0;return this.renderTargetHelper&&(e+=this.renderTargetHelper.getGpuMemoryUsage()),e},t._createClass(e,[{key:"width",get:function(){return this.dimensions.width}},{key:"height",get:function(){return this.dimensions.height}},{key:"background",get:function(){return this._background},set:function(e){this._background=e}},{key:"currentColorTarget",get:function(){return 0===this._currentRenderTarget?this.mainColorTarget0:this.mainColorTarget1}},{key:"previousColorTarget",get:function(){return 0===this._currentRenderTarget?this.mainColorTarget1:this.mainColorTarget0}},{key:"currentRenderTarget",get:function(){return this._currentRenderTarget}},{key:"framebuffer",get:function(){return this.getFramebuffer(this.currentColorTarget,this.mainDepth)}},{key:"colorTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.currentColorTarget)}},{key:"depthTexture",get:function(){return this.renderTargetHelper.getAllocatedDepthTexture(this.mainDepth)}},{key:"linearDepthTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.linearDepth)}},{key:"terrainLinearDepthTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.terrainLinearDepth)}},{key:"geometryLinearDepthTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.geometryLinearDepth)}},{key:"lastFrameColorTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.previousColorTarget)}},{key:"normalTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.normal)}},{key:"highlightTexture",get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.highlight)}},{key:"hudVisibilityTexture",get:function(){return this.getColorTexture(this.hudVisibility)}},{key:"tmpColorTexture",get:function(){return this.getColorTexture(this.tmpColor)}},{key:"hudColorTexture",get:function(){return this.getColorTexture(this.hudColor)}},{key:"mainColorTexture",get:function(){return this.getColorTexture(this.currentColorTarget)}},{key:"needLastFrameColorTexture",get:function(){return this._needLastFrameColorTexture},set:function(e){!e&&this._needLastFrameColorTexture&&(this._currentRenderTarget=0,this.disposeTarget(this.mainColorTarget1)),this._needLastFrameColorTexture=e}}]),e}();const o=[0,0,0,0],n=[0,1,0,1];e.OffscreenRendering=i,Object.defineProperty(e,"__esModule",{value:!0})}));

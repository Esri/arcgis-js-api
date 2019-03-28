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

define(["require","exports","../../../../core/has","../../../../core/now","../../../../core/libs/gl-matrix-2/vec3f64","../lib/Camera","../lib/Renderer"],function(e,r,t,n,i,s,o){var d=t("dojo-debug-messages"),a=function(){function e(e,r,t,n,d){this._stats={renderGeometriesTotal:0,renderGeometriesVisible:0,renderTimeTotal:0,renderTimeLast:0,frameCount:0},this._needsRender=!0,this._rctx=d,this._renderer=new o(r,t,n,d,"scene",e),this._camera=new s(i.vec3f64.fromValues(0,100,-100))}return Object.defineProperty(e.prototype,"isLoadingResources",{get:function(){return this._renderer.isLoadingResources},enumerable:!0,configurable:!0}),e.prototype.getCombinedStats=function(){var e=this._rctx.gl,r={},t=this._renderer.getCombinedStats();for(var n in t)r[n]=t[n];if(r.renderGeometriesTotal=this._stats.renderGeometriesTotal,r.renderGeometriesVisible=this._stats.renderGeometriesVisible,d&&(r.totalRenderTime=this._stats.renderTimeTotal,r.currentRenderTime=this._stats.renderTimeLast,r.totalNumFramesRendered=this._stats.frameCount),void 0!==e.getUsedTextureMemory&&(r.textureMemory=e.getUsedTextureMemory()),void 0!==e.getUsedRenderbufferMemory&&(r.renderbufferMemory=e.getUsedRenderbufferMemory()),void 0!==e.getUsedVBOMemory&&(r.VBOMemory=e.getUsedVBOMemory()),void 0!==e.getUsedTextureMemoryStats){var i=e.getUsedTextureMemoryStats();for(var s in i)r["texMem type: "+s]=i[s]}return r},e.prototype.dispose=function(){this._renderer.dispose(),this._renderer=null},e.prototype.setLighting=function(e){this._renderer.setLighting(e)},e.prototype.setRenderParams=function(e){this._renderer.setRenderParams(e)},e.prototype.getRenderParams=function(){return this._renderer.getRenderParams()},e.prototype.ensureEdgeView=function(){return this._renderer.ensureEdgeView()},Object.defineProperty(e.prototype,"hasSlicePlane",{get:function(){return this._renderer.hasSlicePlane},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"edgeView",{get:function(){return this._renderer.edgeView},enumerable:!0,configurable:!0}),e.prototype.modify=function(e,r,t,n){this._renderer.modify(e,r,t,n)},e.prototype.setCamera=function(e){this._camera.copyFrom(e),this._needsRender=!0},e.prototype.getCamera=function(){return this._camera},Object.defineProperty(e.prototype,"renderPlugins",{get:function(){return this._renderer.renderPlugins},enumerable:!0,configurable:!0}),e.prototype.getFramebufferTexture=function(e){return this._renderer.getFramebufferTexture(e)},e.prototype.render=function(e){var r;d&&(r=n()),u.camera=e.camera||this._camera,u.fbo=e.fbo,u.lightDirection=e.lightDirection,u.disableSlice=e.disableSlice||!1,this._renderer.render(u),d&&(this._stats.renderTimeLast=n()-r,this._stats.renderTimeTotal+=this._stats.renderTimeLast,this._stats.frameCount++)},e.prototype.resetNeedsRender=function(){this._needsRender=!1,this._renderer.resetNeedsRender()},e.prototype.needsRender=function(){return this._needsRender||this._renderer.needsRender()},Object.defineProperty(e.prototype,"test",{get:function(){return{renderer:this._renderer}},enumerable:!0,configurable:!0}),e.prototype.getGpuMemoryUsage=function(){return this._renderer.getGpuMemoryUsage()},e}(),u={fbo:null,lightDirection:null,camera:null,disableSlice:!1};return a});
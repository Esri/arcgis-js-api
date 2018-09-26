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

define(["require","exports","../../../../core/has","../../lib/gl-matrix","../lib/Camera","../lib/PerformanceTimer","./Visualizer"],function(e,t,r,i,s,n,o){var a=r("dojo-debug-messages"),u=function(){function e(e,t,r,u,d){this._content=new Map,this._stats={renderGeometriesTotal:0,renderGeometriesVisible:0,visualizerRenderTimer:null,viewportRenderTimer:null},this._needsRender=!0,this._rctx=d,this._gl=d.gl,this._visualizer=new o(e,t,r,u,this._rctx),this._camera=new s(i.vec3.createFrom(0,100,-100),i.vec3.createFrom(0,0,0)),a&&(this._stats.visualizerRenderTimer=new n(10),this._stats.viewportRenderTimer=new n(10))}return Object.defineProperty(e.prototype,"isLoadingResources",{get:function(){return this._visualizer.isLoadingResources},enumerable:!0,configurable:!0}),e.prototype.getCombinedStats=function(){var e={},t=this._visualizer.getCombinedStats();for(var r in t)e[r]=t[r];if(e.renderGeometriesTotal=this._stats.renderGeometriesTotal,e.renderGeometriesVisible=this._stats.renderGeometriesVisible,a&&(e.visualizerTotalRenderTime=this._stats.visualizerRenderTimer.getTotal(),e.visualizerCurrentRenderTime=this._stats.visualizerRenderTimer.getLastFiltered(),e.viewportTotalRenderTime=this._stats.viewportRenderTimer.getTotal(),e.viewportCurrentRenderTime=this._stats.viewportRenderTimer.getLastFiltered(),e.totalNumFramesRendered=this._stats.viewportRenderTimer.getNumMeasurements()),void 0!==this._gl.getUsedTextureMemory&&(e.textureMemory=this._gl.getUsedTextureMemory()),void 0!==this._gl.getUsedRenderbufferMemory&&(e.renderbufferMemory=this._gl.getUsedRenderbufferMemory()),void 0!==this._gl.getUsedVBOMemory&&(e.VBOMemory=this._gl.getUsedVBOMemory()),void 0!==this._gl.getUsedTextureMemoryStats){var i=this._gl.getUsedTextureMemoryStats();for(var s in i)e["texMem type: "+s]=i[s]}return e},e.prototype.dispose=function(){this._visualizer.dispose(),this._visualizer=null},e.prototype.setLighting=function(e){this._visualizer.setLighting(e)},e.prototype.setRenderParams=function(e){this._visualizer.setRenderParams(e)},e.prototype.getRenderParams=function(){return this._visualizer.getRenderParams()},e.prototype.getEdgeView=function(){return this._visualizer.getEdgeView()},e.prototype.modify=function(e,t,r,i){this._visualizer.modify(e,t,r,i),this._content=this._visualizer.getContent()},e.prototype.getContent=function(){return this._content},e.prototype.setCamera=function(e){this._camera.copyFrom(e),this._needsRender=!0},e.prototype.getCamera=function(){return this._camera},Object.defineProperty(e.prototype,"renderPlugins",{get:function(){return this._visualizer.renderPlugins},enumerable:!0,configurable:!0}),e.prototype.getFramebufferTexture=function(e){return this._visualizer.getFramebufferTexture(e)},e.prototype.render=function(e){a&&this._stats.viewportRenderTimer.start(),a&&this._stats.visualizerRenderTimer.start(),d.camera=e.camera||this._camera,d.fbo=e.fbo,d.lightDirection=e.lightDirection,d.pixelRatio=e.pixelRatio||1,this._visualizer.render(d),a&&(this._stats.visualizerRenderTimer.stop(),this._stats.viewportRenderTimer.stop())},e.prototype.resetNeedsRender=function(){this._needsRender=!1,this._visualizer.resetNeedsRender()},e.prototype.needsRender=function(){return this._needsRender||this._visualizer.needsRender()},e}(),d={fbo:null,lightDirection:null,camera:null,pixelRatio:1};return u});
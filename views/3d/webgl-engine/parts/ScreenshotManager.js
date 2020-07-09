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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/libs/gl-matrix-2/vec4f64","../lib/AutoDisposable","../../../support/screenshotUtils","../../../webgl/FramebufferObject"],(function(e,t,r,i,n,a,s,o,h){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,r,i,n,a,s){void 0===n&&(n=null),void 0===s&&(s=!0);var o=e.call(this)||this;return o._rctx=t,o._renderScene=r,o._requestRenderScene=i,o._renderOverlay=n,o.forceCameraHook=a,o.supersample=s,o._screenshotQueue=[],o}return r.__extends(t,e),t.prototype.dispose=function(){this._rctx=null},t.prototype.takeScreenshot=function(e){this._requestRenderScene();var t=n.createResolver();return this._screenshotQueue.push({settings:e,resolver:t}),t.promise},t.prototype.update=function(e){if(0!==this._screenshotQueue.length){for(var t=0,i=this._screenshotQueue;t<i.length;t++){var n=i[t];if(this.isDisposed)n.resolver.reject();else{var a=r.__assign(r.__assign({},n.settings),{pixelRatio:n.settings.pixelRatio*e.viewCamera.pixelRatio}),s=this._ensureScreenshotEncodeCanvas(),h=this._renderScreenshot(e,a),c=o.encodeResult(h,a,s,{flipY:!0,premultipliedAlpha:!0});n.resolver(c)}}this._screenshotQueue=[]}},t.prototype._renderScreenshotOverlay=function(e,t,r){if(!i.isNone(this._renderOverlay)){e.width=t.width,e.height=t.height;var n=e.getContext("2d"),a=r.pixelRatio;n.save(),n.translate(0,t.height),n.scale(1,-1),r.region&&n.translate(-r.region.x,-r.region.y),n.scale(a,a),this._renderOverlay(e,t),n.restore()}},t.prototype._readbackScreenshot=function(e){return e.resample?this._readbackScreenshotResampled(e):this._readbackScreenshotImmediate(e)},t.prototype._readbackScreenshotResampled=function(e){var t=e.framebufferWidth,i=e.framebufferHeight,n=e.region,a=e.resample,s=this._ensureScreenshotEncodeCanvas(),h=o.createEmptyImageData(t,i,s);this._rctx.gl.readPixels(0,0,t,i,6408,5121,new Uint8Array(h.data.buffer)),this._renderScreenshotOverlay(s,h,r.__assign(r.__assign({},e),{region:null}));var c=o.createEmptyImageData(n.width,n.height,s);return o.resampleHermite(h,c,!0,a.region.x,i-(a.region.y+a.region.height),a.region.width,a.region.height)},t.prototype._readbackScreenshotImmediate=function(e){var t=e.framebufferHeight,r=e.region,i=this._ensureScreenshotEncodeCanvas(),n=o.createEmptyImageData(r.width,r.height,i);return this._rctx.gl.readPixels(r.x,t-(r.y+r.height),r.width,r.height,6408,5121,new Uint8Array(n.data.buffer)),this._renderScreenshotOverlay(i,n,e),n},t.prototype._renderScreenshot=function(e,t){var r=null,i=e.viewCamera,n=t.framebufferWidth,s=t.framebufferHeight,o=!1,c=e.frameHasSlicePlane&&t.disableSlice,l=n!==i.fullWidth||s!==i.fullHeight,d=t.ignorePadding&&i.pixelRatio!==t.pixelRatio,u=l||c||d;if(u){var f=i.clone();if(t.ignorePadding){for(var p=a.vec4f64.clone(f.padding),g=0;g<4;g++)p[g]=Math.round(p[g]/f.pixelRatio*t.pixelRatio);f.padding=p}f.fullWidth=n,f.fullHeight=s,f.pixelRatio=t.pixelRatio;var v=i.fovX-f.fovX,_=i.fovY-f.fovY;v<0&&v<_?f.fovX=i.fovX:_<0&&_<v&&(f.fovY=i.fovY),this.forceCameraHook(f),o=!0,r=new h(this._rctx,{width:f.fullWidth,height:f.fullHeight,colorTarget:0,depthStencilTarget:3}),this._renderScene(r,f,t.disableSlice)}var m=this._readbackScreenshot(t);if(u&&!this._rctx.contextAttributes.alpha)for(g=3;g<m.data.length;g+=4)m.data[g]=255;return r&&r.dispose(),this._rctx.bindFramebuffer(null),o&&this.forceCameraHook(i),m},t.prototype._ensureScreenshotEncodeCanvas=function(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas},t}(s.AutoDisposable);t.ScreenshotManager=c}));
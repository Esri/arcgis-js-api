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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/maybe","../../../../core/promiseUtils","../lib/AutoDisposable","../../../support/screenshotUtils","../../../webgl/FramebufferObject"],function(e,r,t,n,i,s,a,o,h,c){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(r,t,n,i,s){void 0===i&&(i=null),void 0===s&&(s=!0);var a=e.call(this)||this;return a._rctx=r,a._renderScene=t,a._requestRenderScene=n,a._renderOverlay=i,a.supersample=s,a._screenshotQueue=[],a}return n(r,e),r.prototype.dispose=function(){this._rctx=null},r.prototype.takeScreenshot=function(e){var r=this;this._requestRenderScene();var t=a.createResolver(function(){r._screenshotQueue=r._screenshotQueue.filter(function(e){return e.resolver!==t})});return this._screenshotQueue.push({settings:e,resolver:t}),t.promise},r.prototype.update=function(e){if(0!==this._screenshotQueue.length){for(var r=0,n=this._screenshotQueue;r<n.length;r++){var i=n[r];if(this.isDisposed)i.resolver.reject();else{var s=t({},i.settings,{pixelRatio:i.settings.pixelRatio*e.viewCamera.pixelRatio}),a=this._ensureScreenshotEncodeCanvas(),o=this._renderScreenshot(e,s),c=h.encodeResult(o,s,a,{flipY:!0,premultipliedAlpha:!0});i.resolver(c)}}this._screenshotQueue=[]}},r.prototype._renderScreenshotOverlay=function(e,r,t){if(!s.isNone(this._renderOverlay)){e.width=r.width,e.height=r.height;var n=e.getContext("2d"),i=t.pixelRatio;n.save(),n.translate(0,r.height),n.scale(1,-1),t.region&&n.translate(-t.region.x,-t.region.y),n.scale(i,i),this._renderOverlay(e,r),n.restore()}},r.prototype._readbackScreenshot=function(e){return e.resample?this._readbackScreenshotResampled(e):this._readbackScreenshotImmediate(e)},r.prototype._readbackScreenshotResampled=function(e){var r=e.framebufferWidth,n=e.framebufferHeight,i=e.region,s=e.resample,a=this._ensureScreenshotEncodeCanvas(),o=h.createEmptyImageData(r,n,a);this._rctx.gl.readPixels(0,0,r,n,6408,5121,new Uint8Array(o.data.buffer)),this._renderScreenshotOverlay(a,o,t({},e,{region:null}));var c=h.createEmptyImageData(i.width,i.height,a);return h.resampleHermite(o,c,!0,s.region.x,n-(s.region.y+s.region.height),s.region.width,s.region.height)},r.prototype._readbackScreenshotImmediate=function(e){var r=e.framebufferHeight,t=e.region,n=this._ensureScreenshotEncodeCanvas(),i=h.createEmptyImageData(t.width,t.height,n);return this._rctx.gl.readPixels(t.x,r-(t.y+t.height),t.width,t.height,6408,5121,new Uint8Array(i.data.buffer)),this._renderScreenshotOverlay(n,i,e),i},r.prototype._renderScreenshot=function(e,r){var t=null,n=e.viewCamera,i=r.framebufferWidth,s=r.framebufferHeight,a=!1,o=e.frameHasSlicePlane&&r.disableSlice,h=i!==n.fullWidth||s!==n.fullHeight||o;if(h){var l=n.clone();l.fullWidth=i,l.fullHeight=s,l.pixelRatio=r.pixelRatio;var d=n.fovX-l.fovX,u=n.fovY-l.fovY;d<0&&d<u?l.fovX=n.fovX:u<0&&u<d&&(l.fovY=n.fovY),e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(l),a=!0,t=new c(this._rctx,{width:l.fullWidth,height:l.fullHeight,colorTarget:0,depthStencilTarget:3}),this._renderScene(t,l,r.disableSlice)}var p=this._readbackScreenshot(r);if(h&&!this._rctx.contextAttributes.alpha)for(var f=3;f<p.data.length;f+=4)p.data[f]=255;return t&&t.dispose(),this._rctx.bindFramebuffer(null),a&&e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(n),p},r.prototype._ensureScreenshotEncodeCanvas=function(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas},r}(o.AutoDisposable);r.ScreenshotManager=l});
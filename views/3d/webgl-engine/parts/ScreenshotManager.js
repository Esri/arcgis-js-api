// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../lib/AutoDisposable","../../../support/screenshotUtils","../../../webgl/FramebufferObject"],function(e,r,t,n,s,a,i,o,c,h,l){Object.defineProperty(r,"__esModule",{value:!0});var d=function(e){function r(r,t,n,s,a){void 0===s&&(s=null),void 0===a&&(a=!0);var i=e.call(this)||this;return i._rctx=r,i._renderScene=t,i._requestRenderScene=n,i._renderOverlay=s,i.supersample=a,i._screenshotQueue=[],i}return n(r,e),r.prototype.dispose=function(){this._rctx=null},r.prototype.takeScreenshot=function(e){var r=this;this._requestRenderScene();var t=i.createResolver(function(){r._screenshotQueue=r._screenshotQueue.filter(function(e){return e.resolver!==t})});return this._screenshotQueue.push({settings:e,resolver:t}),t.promise},r.prototype.update=function(e){if(0!==this._screenshotQueue.length){for(var r=0,n=this._screenshotQueue;r<n.length;r++){var s=n[r];if(this.isDisposed)s.resolver.reject();else{var a=t({},s.settings,{pixelRatio:s.settings.pixelRatio*e.viewCamera.pixelRatio}),i=this._ensureScreenshotEncodeCanvas(),o=this._renderScreenshot(e,a),c=h.encodeResult(o,a,i,{flipY:!0,premultipliedAlpha:!0});s.resolver(c)}}this._screenshotQueue=[]}},r.prototype._renderScreenshotOverlay=function(e,r,t){if(!a.isNone(this._renderOverlay)){e.width=r.width,e.height=r.height;var n=e.getContext("2d"),s=t.pixelRatio;n.save(),n.translate(0,r.height),n.scale(1,-1),t.region&&n.translate(-t.region.x,-t.region.y),n.scale(s,s),this._renderOverlay(e,r),n.restore()}},r.prototype._readbackScreenshot=function(e){return e.resample?this._readbackScreenshotResampled(e):this._readbackScreenshotImmediate(e)},r.prototype._readbackScreenshotResampled=function(e){var r=e.framebufferWidth,n=e.framebufferHeight,s=e.region,a=e.resample,i=this._ensureScreenshotEncodeCanvas(),o=h.createEmptyImageData(r,n,i);this._rctx.gl.readPixels(0,0,r,n,6408,5121,new Uint8Array(o.data.buffer)),this._renderScreenshotOverlay(i,o,t({},e,{region:null}));var c=h.createEmptyImageData(s.width,s.height,i);return h.resampleHermite(o,c,!0,a.region.x,n-(a.region.y+a.region.height),a.region.width,a.region.height)},r.prototype._readbackScreenshotImmediate=function(e){var r=e.framebufferHeight,t=e.region,n=this._ensureScreenshotEncodeCanvas(),s=h.createEmptyImageData(t.width,t.height,n);return this._rctx.gl.readPixels(t.x,r-(t.y+t.height),t.width,t.height,6408,5121,new Uint8Array(s.data.buffer)),this._renderScreenshotOverlay(n,s,e),s},r.prototype._renderScreenshot=function(e,r){var t=null,n=e.viewCamera,s=r.framebufferWidth,a=r.framebufferHeight,i=!1,o=e.frameHasSlicePlane&&r.disableSlice,c=s!==n.fullWidth||a!==n.fullHeight||o;if(c){var h=n.clone();h.fullWidth=s,h.fullHeight=a,h.pixelRatio=r.pixelRatio;var d=n.fovX-h.fovX,u=n.fovY-h.fovY;d<0&&d<u?h.fovX=n.fovX:u<0&&u<d&&(h.fovY=n.fovY),e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(h),i=!0,t=new l(this._rctx,{width:h.fullWidth,height:h.fullHeight,colorTarget:0,depthStencilTarget:3}),this._renderScene(t,h,r.disableSlice)}var p=this._readbackScreenshot(r);if(c&&!this._rctx.contextAttributes.alpha)for(var f=3;f<p.data.length;f+=4)p.data[f]=255;return t&&t.dispose(),this._rctx.bindFramebuffer(null),i&&e.drapedRenderer.forceUpdate&&e.drapedRenderer.forceUpdate(n),p},r.prototype._ensureScreenshotEncodeCanvas=function(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas},r=s([o.subclass("esri.views.3d.webgl-engine.parts.ScreenshotManager")],r)}(o.declared(c.AutoDisposable));r.ScreenshotManager=d});
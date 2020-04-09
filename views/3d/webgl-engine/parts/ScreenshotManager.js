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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec4f64","../lib/AutoDisposable","../../../support/screenshotUtils","../../../webgl/FramebufferObject"],(function(e,r,t,i,o,n,s,a,c,h,l,u){Object.defineProperty(r,"__esModule",{value:!0});var d=function(e){function r(r,t,i,o,n,s){void 0===o&&(o=null),void 0===s&&(s=!0);var a=e.call(this)||this;return a._rctx=r,a._renderScene=t,a._requestRenderScene=i,a._renderOverlay=o,a.forceCameraHook=n,a.supersample=s,a._screenshotQueue=[],a}return i(r,e),r.prototype.dispose=function(){this._rctx=null},r.prototype.takeScreenshot=function(e){var r=this;this._requestRenderScene();var t=s.createResolver((function(){r._screenshotQueue=r._screenshotQueue.filter((function(e){return e.resolver!==t}))}));return this._screenshotQueue.push({settings:e,resolver:t}),t.promise},r.prototype.update=function(e){if(0!==this._screenshotQueue.length){for(var r=0,i=this._screenshotQueue;r<i.length;r++){var o=i[r];if(this.isDisposed)o.resolver.reject();else{var n=t({},o.settings,{pixelRatio:o.settings.pixelRatio*e.viewCamera.pixelRatio}),s=this._ensureScreenshotEncodeCanvas(),a=this._renderScreenshot(e,n),c=l.encodeResult(a,n,s,{flipY:!0,premultipliedAlpha:!0});o.resolver(c)}}this._screenshotQueue=[]}},r.prototype._renderScreenshotOverlay=function(e,r,t){if(!n.isNone(this._renderOverlay)){e.width=r.width,e.height=r.height;var i=e.getContext("2d"),o=t.pixelRatio;i.save(),i.translate(0,r.height),i.scale(1,-1),t.region&&i.translate(-t.region.x,-t.region.y),i.scale(o,o),this._renderOverlay(e,r),i.restore()}},r.prototype._readbackScreenshot=function(e){return e.resample?this._readbackScreenshotResampled(e):this._readbackScreenshotImmediate(e)},r.prototype._readbackScreenshotResampled=function(e){var r=e.framebufferWidth,i=e.framebufferHeight,o=e.region,n=e.resample,s=this._ensureScreenshotEncodeCanvas(),a=l.createEmptyImageData(r,i,s);this._rctx.gl.readPixels(0,0,r,i,6408,5121,new Uint8Array(a.data.buffer)),this._renderScreenshotOverlay(s,a,t({},e,{region:null}));var c=l.createEmptyImageData(o.width,o.height,s);return l.resampleHermite(a,c,!0,n.region.x,i-(n.region.y+n.region.height),n.region.width,n.region.height)},r.prototype._readbackScreenshotImmediate=function(e){var r=e.framebufferHeight,t=e.region,i=this._ensureScreenshotEncodeCanvas(),o=l.createEmptyImageData(t.width,t.height,i);return this._rctx.gl.readPixels(t.x,r-(t.y+t.height),t.width,t.height,6408,5121,new Uint8Array(o.data.buffer)),this._renderScreenshotOverlay(i,o,e),o},r.prototype._renderScreenshot=function(e,r){var t=null,i=e.viewCamera,o=r.framebufferWidth,n=r.framebufferHeight,s=!1,a=e.frameHasSlicePlane&&r.disableSlice,h=o!==i.fullWidth||n!==i.fullHeight,l=r.ignorePadding&&i.pixelRatio!==r.pixelRatio,d=h||a||l;if(d){var p=i.clone();if(r.ignorePadding){for(var f=c.vec4f64.clone(p.padding),g=0;g<4;g++)f[g]=Math.round(f[g]/p.pixelRatio*r.pixelRatio);p.padding=f}p.fullWidth=o,p.fullHeight=n,p.pixelRatio=r.pixelRatio;var v=i.fovX-p.fovX,_=i.fovY-p.fovY;v<0&&v<_?p.fovX=i.fovX:_<0&&_<v&&(p.fovY=i.fovY),this.forceCameraHook(p),s=!0,t=new u(this._rctx,{width:p.fullWidth,height:p.fullHeight,colorTarget:0,depthStencilTarget:3}),this._renderScene(t,p,r.disableSlice)}var m=this._readbackScreenshot(r);if(d&&!this._rctx.contextAttributes.alpha)for(g=3;g<m.data.length;g+=4)m.data[g]=255;return t&&t.dispose(),this._rctx.bindFramebuffer(null),s&&this.forceCameraHook(i),m},r.prototype._ensureScreenshotEncodeCanvas=function(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas},r=o([a.subclass("esri.views.3d.webgl-engine.parts.ScreenshotManager")],r)}(a.declared(h.AutoDisposable));r.ScreenshotManager=d}));
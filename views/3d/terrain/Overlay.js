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

define(["require","exports","../../../geometry/support/aaBoundingRect","./OverlayRenderTarget","../webgl-engine/lib/localOrigin"],(function(e,r,t,a,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Overlay=void 0;var s=function(){function e(e,r){this.extent=t.create(),this.resolution=0,this.renderLocalOrigin=o.fromValues(0,0,0,"O"),this.pixelRatio=1,this.renderTargets={color:{fbo:new a.OverlayRenderTarget(e,"overlay",r,!0),valid:!1,lastUsed:1/0},colorWithoutRasterImage:{fbo:new a.OverlayRenderTarget(e,"overlayWithoutRasterImage",r,!0),valid:!1,lastUsed:1/0},highlight:{fbo:new a.OverlayRenderTarget(e,"overlayHighlight",r,!1),valid:!1,lastUsed:1/0},water:{fbo:new a.OverlayRenderTarget(e,"overlayWaterMask",r,!0),valid:!1,lastUsed:1/0},occluded:{fbo:new a.OverlayRenderTarget(e,"overlayOccluded",r,!0),valid:!1,lastUsed:1/0}}}return e.prototype.dispose=function(){this.renderTargets.color.fbo.dispose(),this.renderTargets.colorWithoutRasterImage.fbo.dispose(),this.renderTargets.highlight.fbo.dispose(),this.renderTargets.water.fbo.dispose(),this.renderTargets.occluded.fbo.dispose()},e.prototype.drawRenderTargets=function(e,r,t){var a=this.renderTargets;a.color.valid=e.drawPass(0,a.color.fbo,r),a.highlight.valid=e.drawPass(4,a.highlight.fbo,r),a.water.valid=e.drawPass(2,a.water.fbo,r),a.occluded.valid=e.drawPass(0,a.occluded.fbo,r,1),a.colorWithoutRasterImage.valid=t&&e.drawPass(0,a.colorWithoutRasterImage.fbo,r,2)},e.prototype.computeRenderTargetValidityBitfield=function(){var e=this.renderTargets;return+e.color.valid|+e.colorWithoutRasterImage.valid<<1|+e.highlight.valid<<2|+e.water.valid<<3|+e.occluded.valid<<4},e.prototype.validateUsage=function(e,r){if(e.valid)e.lastUsed=r;else if(r-e.lastUsed>i)e.fbo.disposeRenderTargetMemory(),e.lastUsed=1/0;else if(e.lastUsed<1/0)return!0;return!1},e.prototype.collectUnusedMemory=function(e){var r=!1;return r=this.validateUsage(this.renderTargets.color,e)||r,r=this.validateUsage(this.renderTargets.colorWithoutRasterImage,e)||r,r=this.validateUsage(this.renderTargets.highlight,e)||r,r=this.validateUsage(this.renderTargets.occluded,e)||r,r=this.validateUsage(this.renderTargets.water,e)||r},e.prototype.getGpuMemoryUsage=function(){return this.renderTargets.color.fbo.getGpuMemoryUsage()+this.renderTargets.colorWithoutRasterImage.fbo.getGpuMemoryUsage()+this.renderTargets.highlight.fbo.getGpuMemoryUsage()+this.renderTargets.water.fbo.getGpuMemoryUsage()+this.renderTargets.occluded.fbo.getGpuMemoryUsage()},e}();r.Overlay=s;var i=1e3}));
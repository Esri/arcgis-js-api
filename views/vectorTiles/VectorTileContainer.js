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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","dojo/has","../../core/libs/gl-matrix/vec3","../../core/libs/gl-matrix/mat4","../2d/engine/Container","./renderers/Renderer","./GeometryUtils","./StencilClipGenerator"],function(e,t,i,r,s,n,a,l,o,h){var d=r("dojo-debug-messages"),c=function(e){function t(){e.call(this),this.isInitialized=!1,this._displayWidth=0,this._displayHeight=0,this._clip=new h,this._tileCoordinateScale=s.create(),this._orientationVec=s.create(),this._displayScale=s.create(),this._orientationVec.set([0,0,1]),this._defaultTransform=n.create()}return i(t,e),t.prototype.initialize=function(e,t,i,r){this._renderer=new l(e,t),this._tileInfoView=r,this._tileInfo=i,this.isInitialized=!0},t.prototype.prepareChildrenRenderParameters=function(e){var t=e.state;if(!t||!this._tileInfo||!this.isInitialized)return e;var i=e;return i.displayLevel=this._tileInfo.scaleToZoom(t.scale),i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.renderer=this._renderer,i},t.prototype.renderChildren=function(t){if(0!==this.children.length&&this.isInitialized&&t&&t.state){this.sortChildren(function(e,t){return t.resolution-e.resolution}),this._clip.update(this.children),this._updateTilesTransform(t.state,this._tileInfoView.getClosestInfoForScale(t.state.scale).level);var i=t.context;if(i.setDepthWriteEnabled(!0),this._renderer.setStateParams(t.state,t.devicePixelRatio,t.displayLevel),this._renderer.drawClippingMasks(i,this.children),i.setStencilWriteMask(0),i.setBlendFunctionSeparate(1,771,1,771),i.setStencilOp(7680,7680,7681),i.setDepthFunction(515),i.setBlendingEnabled(!1),i.setStencilTestEnabled(!0),i.setDepthTestEnabled(!0),i.setDepthWriteEnabled(!0),t.drawphase=0,e.prototype.renderChildren.call(this,t),i.setDepthWriteEnabled(!1),i.setBlendingEnabled(!0),t.drawphase=1,e.prototype.renderChildren.call(this,t),t.drawphase=2,e.prototype.renderChildren.call(this,t),i.setStencilTestEnabled(!1),i.setDepthTestEnabled(!1),d)for(var r=0,s=this.children;r<s.length;r++){var n=s[r];n.attached&&n.visible&&this._renderer.renderTileInfo(i,n)}this._renderer.needsRedraw()&&this.requestRender()}},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.detachChild=function(e,t){e.detach(t)},t.prototype.renderChild=function(e,t){e.render(t)},t.prototype._updateTilesTransform=function(e,t){var i=1/e.width,r=1/e.height,s=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lods[t].resolution,e.resolution,e.rotation,this._tileInfo.size[1],4096,e.width,e.height,this._defaultTransform);for(var n=0,a=this.children;n<a.length;n++){var l=a[n];e.toScreen(s,l.topLeft),s[1]=e.height-s[1],l.tileTransform.displayCoord[0]=2*s[0]*i-1,l.tileTransform.displayCoord[1]=2*s[1]*r-1,l.key.level===t&&4096===l.coordRange?l.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lods[l.key.level].resolution,e.resolution,e.rotation,this._tileInfo.size[1],l.coordRange,e.width,e.height,l.tileTransform.transform)}},t.prototype._calculateRelativeViewProjMat=function(e,t,i,r,s,a,l,h){var d=e/t,c=.125;512!==r&&4096!==s&&(c=r/s);var p=c*d;this._tileCoordinateScale.set([p,p,1]),(a!==this._displayWidth||l!==this._displayHeight)&&(this._displayScale.set([2/a,-2/l,1]),this._displayWidth=a,this._displayHeight=l),n.identity(h),n.scale(h,h,this._tileCoordinateScale),n.rotate(h,h,-i*o.C_DEG_TO_RAD,this._orientationVec),n.scale(h,h,this._displayScale),n.transpose(h,h)},t}(a);return c});
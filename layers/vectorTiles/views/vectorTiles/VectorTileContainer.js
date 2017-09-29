// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","dojo/has","../../core/libs/gl-matrix/vec3","../../core/libs/gl-matrix/mat4","../2d/engine/Container","./renderers/Renderer","./GeometryUtils"],function(e,t,i,r,s,n,l,a,o){var d=function(e){function t(){var t=e.call(this)||this;return t.isInitialized=!1,t._displayWidth=0,t._displayHeight=0,t._tileCoordinateScale=s.create(),t._orientationVec=s.create(),t._displayScale=s.create(),t._orientationVec.set([0,0,1]),t._defaultTransform=n.create(),t}return i(t,e),t.prototype.initialize=function(e,t,i,r){this._renderer=new a,this._renderer.initialize(e,t),this._tileInfoView=r,this._tileInfo=i,this.isInitialized=!0},t.prototype.destroy=function(){this._renderer&&(this._renderer.dispose(),this._renderer=null)},t.prototype.prepareChildrenRenderParameters=function(e){var t=e.state;if(!t||!this._tileInfo||!this.isInitialized)return e;var i=e;return i.displayLevel=this._tileInfo.scaleToZoom(t.scale),i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.renderer=this._renderer,i},t.prototype.renderChildren=function(t){if(0!==this.children.length&&this.isInitialized&&t&&t.state){this.sortChildren(function(e,t){return e.key.level-t.key.level});for(var i=this.children.length,s=1;i>=s;s++){var n=this.children[s-1];n.attached&&(n.stencilData.reference=s,n.stencilData.mask=255)}this._updateTilesTransform(t.state,this._tileInfoView.getClosestInfoForScale(t.state.scale).level);var l=t.context;if(l.setDepthWriteEnabled(!0),this._renderer.setStateParams(t.state,t.devicePixelRatio,t.displayLevel),this._renderer.drawClippingMasks(l,this.children),l.setStencilWriteMask(0),l.setBlendFunctionSeparate(1,771,1,771),l.setStencilOp(7680,7680,7681),l.setDepthFunction(515),l.setBlendingEnabled(!1),l.setStencilTestEnabled(!0),l.setDepthTestEnabled(!0),l.setDepthWriteEnabled(!0),t.drawphase=0,e.prototype.renderChildren.call(this,t),l.setDepthWriteEnabled(!1),l.setBlendingEnabled(!0),t.drawphase=1,e.prototype.renderChildren.call(this,t),t.drawphase=2,e.prototype.renderChildren.call(this,t),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),r("esri-vector-tiles-debug"))for(var a=0,o=this.children;a<o.length;a++){var d=o[a];d.attached&&d.visible&&this._renderer.renderTileInfo(l,d)}this._renderer.needsRedraw()&&this.requestRender()}},t.prototype.removeAllChildren=function(){for(var t=0;t<this.children.length;t++){var i=this.children[t];i.dispose()}e.prototype.removeAllChildren.call(this)},t.prototype._updateTilesTransform=function(e,t){var i=1/e.width,r=1/e.height,s=[0,0];this._calculateRelativeViewProjMat(this._tileInfo.lodAt(t).resolution,e.resolution,e.rotation,this._tileInfo.size[1],4096,e.width,e.height,this._defaultTransform);for(var n=0,l=this.children;n<l.length;n++){var a=l[n];e.toScreen(s,a.coords),s[1]=e.height-s[1],a.tileTransform.displayCoord[0]=2*s[0]*i-1,a.tileTransform.displayCoord[1]=2*s[1]*r-1,a.key.level===t&&4096===a.coordRange?a.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfo.lodAt(a.key.level).resolution,e.resolution,e.rotation,this._tileInfo.size[1],a.coordRange,e.width,e.height,a.tileTransform.transform)}},t.prototype._calculateRelativeViewProjMat=function(e,t,i,r,s,l,a,d){var h=e/t,c=.125;512!==r&&4096!==s&&(c=r/s);var p=c*h;this._tileCoordinateScale.set([p,p,1]),(l!==this._displayWidth||a!==this._displayHeight)&&(this._displayScale.set([2/l,-2/a,1]),this._displayWidth=l,this._displayHeight=a),n.identity(d),n.scale(d,d,this._tileCoordinateScale),n.rotate(d,d,-i*o.C_DEG_TO_RAD,this._orientationVec),n.scale(d,d,this._displayScale),n.transpose(d,d)},t}(l);return d});
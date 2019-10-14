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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","./WGLContainer","./brushes/WGLBrushInfo","./brushes/WGLBrushStencil"],function(e,r,t,n,s,o,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e,r){return e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col},a=function(s){function e(e,r){var t=s.call(this,r)||this;return t._tileInfoView=e,t}return t(e,s),e.prototype.renderChildren=function(e){this.sortChildren(l),this._setStencilReference(this.children),s.prototype.renderChildren.call(this,e)},e.prototype.createRenderParams=function(e){var r=e.state;return n({},s.prototype.createRenderParams.call(this,e),{requiredLevel:this._tileInfoView.getClosestInfoForScale(r.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(r.scale)})},e.prototype.prepareRenderPasses=function(e){var r=this,t=e.registerRenderPass({name:"stencil",brushes:[i.default],target:function(){return r.children}}),n=e.registerRenderPass({name:"tileInfo",brushes:[o.default],target:function(){return r.children},has:"esri-feature-tiles-debug"});return s.prototype.prepareRenderPasses.call(this,e).concat([t,n])},e.prototype.updateTransforms=function(e){for(var r=0,t=this.children;r<t.length;r++){var n=t[r],s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}},e.prototype._setStencilReference=function(e){for(var r=1,t=0,n=this.children;t<n.length;t++){n[t].stencilRef=r++}},e}(s.default);r.default=a});
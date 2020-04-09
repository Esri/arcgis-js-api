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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","./enums","./WGLContainer","./brushes/WGLBrushInfo","./brushes/WGLBrushStencil"],(function(e,r,t,n,s,o,l,i){Object.defineProperty(r,"__esModule",{value:!0}),r.sortByLevel=function(e,r){return e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col};var a=function(e){function o(r,t){var n=e.call(this,t)||this;return n._tileInfoView=r,n}return t(o,e),o.prototype.renderChildren=function(t){this.sortChildren(r.sortByLevel),this.setStencilReference(),e.prototype.renderChildren.call(this,t)},o.prototype.createRenderParams=function(r){var t=r.state;return n({},e.prototype.createRenderParams.call(this,r),{requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)})},o.prototype.prepareRenderPasses=function(r){var t=this,n=r.registerRenderPass({name:"stencil",brushes:[i.default],drawPhase:s.WGLDrawPhase.DEBUG|s.WGLDrawPhase.MAP,target:function(){return t.children}}),o=r.registerRenderPass({name:"tileInfo",brushes:[l.default],drawPhase:s.WGLDrawPhase.DEBUG,target:function(){return t.children},has:"esri-tiles-debug"});return e.prototype.prepareRenderPasses.call(this,r).concat([n,o])},o.prototype.updateTransforms=function(e){for(var r=0,t=this.children;r<t.length;r++){var n=t[r],s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}},o.prototype.setStencilReference=function(){for(var e=1,r=0,t=this.children;r<t.length;r++){t[r].stencilRef=e++}},o}(o.default);r.default=a}));
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

define(["require","exports","tslib","./enums","./WGLContainer","./brushes/WGLBrushInfo","./brushes/WGLBrushStencil"],(function(e,r,t,n,s,i,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.sortByLevel=void 0,r.sortByLevel=function(e,r){return e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col};var l=function(e){function s(r){var t=e.call(this)||this;return t._tileInfoView=r,t}return t.__extends(s,e),s.prototype.renderChildren=function(t){this.sortChildren(r.sortByLevel),this.setStencilReference(),e.prototype.renderChildren.call(this,t)},s.prototype.createRenderParams=function(r){var n=r.state;return t.__assign(t.__assign({},e.prototype.createRenderParams.call(this,r)),{requiredLevel:this._tileInfoView.getClosestInfoForScale(n.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(n.scale)})},s.prototype.prepareRenderPasses=function(r){var s=this,l=r.registerRenderPass({name:"stencil",brushes:[o.default],drawPhase:n.WGLDrawPhase.DEBUG|n.WGLDrawPhase.MAP,target:function(){return s.getStencilTarget()}}),a=r.registerRenderPass({name:"tileInfo",brushes:[i.default],drawPhase:n.WGLDrawPhase.DEBUG,target:function(){return s.children},has:"esri-tiles-debug"});return t.__spreadArrays(e.prototype.prepareRenderPasses.call(this,r),[l,a])},s.prototype.getStencilTarget=function(){return this.children},s.prototype.updateTransforms=function(e){for(var r=0,t=this.children;r<t.length;r++){var n=t[r],s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}},s.prototype.setStencilReference=function(){for(var e=1,r=0,t=this.children;r<t.length;r++){t[r].stencilRef=e++}},s}(s.default);r.default=l}));
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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../core/promiseUtils","../../../geometry/support/aaBoundingRect","../engine"],function(e,t,r,i,n,o,a,s,d,u){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r){var i=e.call(this,t,r)||this;return i._rendererInfo=new u.WGLRendererInfo,i.attributeView=new u.AttributeStoreView,i}return n(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach(function(e){return e.destroy()}),this.attributeView.destroy()},t.prototype.whenAttached=function(){var e=this;return this.attached?a.resolve():a.create(function(t){return e.once("attached",function(){return t()})})},t.prototype.setRendererInfo=function(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return i(this,void 0,void 0,function(){var i,n,o,a;return r(this,function(r){switch(r.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return r.sent(),i=this.stage.painter.textureManager,n=e.map(function(e){return i.rasterizeItem(e.symbol,e.glyphIds,t)}),[4,s.all(n)];case 2:return o=r.sent(),a=o.map(function(t,r){return{id:e[r].id,mosaicItem:t}}),[2,a]}})})},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var r=t.addOrUpdate&&u.TileData.decode(t.addOrUpdate),i=o({},t,{addOrUpdate:r});e.setData(i,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(d.create(),e);return new u.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.attach=function(){return this._initializeExtensions(),e.prototype.attach.call(this)},t.prototype.createRenderParams=function(t){return o({},e.prototype.createRenderParams.call(this,t),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype._initializeExtensions=function(){var e=this.stage.context.capabilities;e.textureFloat,e.vao},t}(u.TileContainer);t.FeatureContainer=l});
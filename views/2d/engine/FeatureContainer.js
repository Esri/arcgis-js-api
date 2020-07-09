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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/promiseUtils","../../../geometry/support/aaBoundingRect","../engine"],(function(e,t,r,i,n,a,o){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var r=e.call(this,t)||this;return r._rendererInfo=new o.WGLRendererInfo,r._attachedResolver=i.createResolver(),r.attributeView=new o.AttributeStoreView,r}return r.__extends(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy()},t.prototype.whenAttached=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,this._attachedResolver.promise];case 1:return e.sent(),[2]}}))}))},t.prototype.setRendererInfo=function(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,a,o;return r.__generator(this,(function(r){switch(r.label){case 0:return e&&0!==e.length?[4,this.whenAttached()]:[2,null];case 1:return r.sent(),i=this.stage.painter.textureManager,a=e.map((function(e){return i.rasterizeItem(e.symbol,e.glyphIds,t)})),[4,n.all(a)];case 2:return o=r.sent(),[2,o.map((function(t,r){return{id:e[r].id,mosaicItem:t}}))]}}))}))},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t,this.hasLabels,this.labelsVisible);else{var i=t.addOrUpdate&&o.TileData.decode(t.addOrUpdate),n=r.__assign(r.__assign({},t),{addOrUpdate:i});e.setData(n,this.hasLabels,this.labelsVisible)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.renderChildren=function(t){this._rendererInfo.update(t.state),this.attributeView.bindTextures(this.stage.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(a.create(),e);return new o.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.createRenderParams=function(t){return r.__assign(r.__assign({},e.prototype.createRenderParams.call(this,t)),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype.onAttach=function(){e.prototype.onAttach.call(this);var t=this.stage.context.capabilities;t.textureFloat,t.vao,this._attachedResolver()},t.prototype.onDetach=function(){e.prototype.onDetach.call(this),this._attachedResolver=i.createResolver()},t}(o.TileContainer);t.FeatureContainer=s}));
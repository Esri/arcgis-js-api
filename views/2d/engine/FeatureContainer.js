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

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/promiseUtils","../../../core/Queue","../../../geometry/support/aaBoundingRect","./webgl/AttributeStoreView","./webgl/TileContainer","./webgl/TileData","./webgl/WGLRendererInfo","./webgl/WGLTile"],(function(e,t,r,i,n,o,a,s,u,l,d,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureContainer=void 0;var c=function(e){function t(t){var r=e.call(this,t)||this;return r._rendererInfo=new d.WGLRendererInfo,r._materialItemsRequestQueue=new o.default,r.attributeView=new s.AttributeStoreView,r}return r.__extends(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.children.forEach((function(e){return e.destroy()})),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()},t.prototype.setRendererInfo=function(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()},t.prototype.getMaterialItems=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){return e&&0!==e.length?(n=i.createResolver(),this._materialItemsRequestQueue.push({items:e,abortOptions:t,resolver:n}),this.requestRender(),[2,n.promise]):[2,null]}))}))},t.prototype.onTileData=function(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t);else{var i=t.addOrUpdate&&l.TileData.decode(t.addOrUpdate),n=r.__assign(r.__assign({},t),{addOrUpdate:i});e.setData(n)}this.contains(e)||this.addChild(e),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},t.prototype.doRender=function(t){if(t.context.capabilities.textureFloat,t.context.capabilities.vao,this._materialItemsRequestQueue.length>0)for(var r=this._materialItemsRequestQueue.pop();r;)this._processMaterialItemRequest(t,r),r=this._materialItemsRequestQueue.pop();e.prototype.doRender.call(this,t)},t.prototype.renderChildren=function(t){for(var r=0,i=this.children;r<i.length;r++){i[r].commitChanges(t)}this._rendererInfo.update(t.state),this.attributeView.bindTextures(t.context),e.prototype.renderChildren.call(this,t)},t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(a.create(),e);return new p.WGLTile(e,t)},t.prototype.destroyTile=function(e){this.removeChild(e),e.destroy()},t.prototype.createRenderParams=function(t){return r.__assign(r.__assign({},e.prototype.createRenderParams.call(this,t)),{rendererInfo:this._rendererInfo,attributeView:this.attributeView})},t.prototype._processMaterialItemRequest=function(e,t){var r=this,i=t.items,o=t.abortOptions,a=t.resolver,s=e.painter,u=e.pixelRatio,l=i.map((function(e){return s.textureManager.rasterizeItem(e.symbol,u,e.glyphIds,o)}));n.all(l).then((function(e){if(r.stage){var t=e.map((function(e,t){return{id:i[t].id,mosaicItem:e}}));a.resolve(t)}else a.reject()}),a.reject)},t}(u.default);t.FeatureContainer=c}));
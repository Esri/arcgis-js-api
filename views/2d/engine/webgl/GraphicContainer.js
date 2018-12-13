// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../../../../core/promiseUtils","../Container","./enums","./WGLRendererInfo"],function(e,t,s,o,h,i,a,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(i){function e(e){var t=i.call(this)||this;return t._displayHeight=0,t._displayWidth=0,t._rendererInfo=new r,t._highlightOptionsUpToDate=!1,t.tileInfoView=e.tileInfoView,t.highlightOptions=e.highlightOptions,t.highlightIDs=e.highlightIDs,t.getMaterialItems=t.getMaterialItems.bind(t),t}return o(e,i),e.prototype.dispose=function(){this.removeAllChildren();for(var e=0,t=this.children;e<t.length;e++){t[e].dispose()}},e.prototype.disposeWebGLResources=function(){for(var e=0,t=this.children;e<t.length;e++){t[e].clear()}},e.prototype.displayWidth=function(){return this._displayWidth},Object.defineProperty(e.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightOptions",{get:function(){return this._highlightOptions},set:function(e){this._highlightOptions=e,this._highlightOptionsUpToDate=!1},enumerable:!0,configurable:!0}),e.prototype.setVisibility=function(e,t){},e.prototype.getMaterialItems=function(e){var i=e;if(i&&0!==i.length){for(var t=[],o=this.stage.painter.textureManager,r=0,n=i;r<n.length;r++){var l=n[r];t.push(o.rasterizeItem(l.symbol,l.glyphIds))}return h.all(t).then(function(e){return e.map(function(e,t){return{id:i[t].id,mosaicItem:e}})})}},e.prototype.renderChildren=function(e){var t=this.stage.painter;if(this._updateTilesTransform(e.state,this.tileInfoView.getClosestInfoForScale(e.state.scale).level),this._updateHighlightOptions(),e.drawPhase===a.WGLDrawPhase.MAP){var i=this.tileInfoView.getClosestInfoForScale(e.state.scale).level,o=this.tileInfoView.tileInfo.scaleToZoom(e.state.scale),r=this._rendererInfo,n=s({},e,{rendererInfo:r,requiredLevel:i,displayLevel:o,context:this.stage.context,painter:t});this.sortChildren(function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col});var l=n.drawPhase;t.draw(n,this.children,l,null),0<this.highlightIDs.size&&t.highlight(n,this.children)}},e.prototype._updateTilesTransform=function(e,t){for(var i=0,o=this.children;i<o.length;i++){var r=o[i],n=this.tileInfoView.tileInfo.lods[r.key.level].resolution/(e.resolution*e.pixelRatio);r.setTransform(e,n)}},e.prototype._updateHighlightOptions=function(){if(!this._highlightOptionsUpToDate&&this.parent&&this._highlightOptions){var e=this.stage.painter,t=this._highlightOptions;if(e){var i=t.color.toRgba();i[0]/=255,i[1]/=255,i[2]/=255;var o=i.slice();i[3]*=t.fillOpacity,o[3]*=t.haloOpacity,e.setHighlightOptions({fillColor:i,outlineColor:o,outlineWidth:2,outerHaloWidth:.3,innerHaloWidth:.3,outlinePosition:0}),this._highlightOptionsUpToDate=!0}}},e}(i.Container);t.default=n});
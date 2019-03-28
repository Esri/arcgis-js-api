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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../../../../core/promiseUtils","../Container","./enums","./WGLRendererInfo"],function(e,t,l,r,a,i,h,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(i){function e(e){var t=i.call(this)||this;return t._displayHeight=0,t._displayWidth=0,t._rendererInfo=new n,t.tileInfoView=e.tileInfoView,t.highlightIDs=e.highlightIDs,t.getMaterialItems=t.getMaterialItems.bind(t),t}return r(e,i),e.prototype.dispose=function(){this.removeAllChildren();for(var e=0,t=this.children;e<t.length;e++){t[e].dispose()}},e.prototype.disposeWebGLResources=function(){for(var e=0,t=this.children;e<t.length;e++){t[e].clear()}},e.prototype.displayWidth=function(){return this._displayWidth},Object.defineProperty(e.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0}),e.prototype.setVisibility=function(e,t){},e.prototype.getMaterialItems=function(e){var i=e;if(i&&0!==i.length){for(var t=[],r=this.stage.painter.textureManager,n=0,o=i;n<o.length;n++){var s=o[n];t.push(r.rasterizeItem(s.symbol,s.glyphIds))}return a.all(t).then(function(e){return e.map(function(e,t){return{id:i[t].id,mosaicItem:e}})})}},e.prototype.renderChildren=function(e){var t=this.stage.painter;if(this._updateTilesTransform(e.state,this.tileInfoView.getClosestInfoForScale(e.state.scale).level),e.drawPhase===h.WGLDrawPhase.MAP){var i=this.tileInfoView.getClosestInfoForScale(e.state.scale).level,r=this.tileInfoView.tileInfo.scaleToZoom(e.state.scale),n=this._rendererInfo,o=l({},e,{rendererInfo:n,requiredLevel:i,displayLevel:r,context:this.stage.context,painter:t});this.sortChildren(function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col});var s=o.drawPhase;t.draw(o,this.children,s,null),0<this.highlightIDs.size&&t.highlight(o,this.children)}},e.prototype._updateTilesTransform=function(e,t){for(var i=0,r=this.children;i<r.length;i++){var n=r[i],o=this.tileInfoView.tileInfo.lods[n.key.level].resolution/(e.resolution*e.pixelRatio);n.setTransform(e,o)}},e}(i.Container);t.default=o});
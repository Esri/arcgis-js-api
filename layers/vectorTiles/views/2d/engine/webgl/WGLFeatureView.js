// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/extendsHelper","../../../../core/promiseUtils","../../../../core/promiseUtils","../../../../core/libs/gl-matrix/mat4","../../../../core/libs/gl-matrix/vec3","../../../../geometry/Point","../Container","../StageGL","../../engine/webgl/TileData","./enums","./GeometryUtils","./TextureManager","./Utils","./WGLPainter","./WGLRendererInfo"],(function(e,t,i,r,a,s,l,o,n,h,d,p,u,c,f,g,_,y){Object.defineProperty(t,"__esModule",{value:!0});var v=function(e){function t(t){var i=e.call(this)||this;return i._rendererInfo=new y,i._stage=new d,i._container=null,i._tileCoordinateScale=o.create(),i._orientationVec=o.fromValues(0,0,1),i._displayScale=o.create(),i._defaultTransform=l.create(),i._pointToCallbacks=new Map,i._highlightIDs=new Set,i._tileId=void 0,i._patches={},i._displayWidth=0,i._displayHeight=0,i._highlightOptionsUpToDate=!1,i.layer=null,i.textureManager=new f,i.highlightOptions=t.highlightOptions,i.tileInfoView=t.tileInfoView,i._stage.useContextVersion("webgl"),i.layer=t.layer,i._layerView=t.layerView,i}return r(t,e),t.prototype.dispose=function(){this.textureManager&&(this.textureManager.dispose(),this.textureManager=null),this.removeAllChildren();for(var e=0,t=this.children;e<t.length;e++){t[e].dispose()}},t.prototype.disposeWebGLResources=function(){for(var e=0,t=this.children;e<t.length;e++){t[e].clear()}},t.prototype.displayWidth=function(){return this._displayWidth},Object.defineProperty(t.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"highlightOptions",{get:function(){return this._highlightOptions},set:function(e){this._highlightOptions=e,this._highlightOptionsUpToDate=!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visualVariablesInfo",{get:function(){return this._visualVariablesInfo},set:function(e){this._visualVariablesInfo=e,this.requestRender()},enumerable:!0,configurable:!0}),t.prototype.install=function(e){e.addChild(this._stage),this._stage.addChild(this),this._container=e},t.prototype.uninstall=function(e){e.removeChild(this._stage),this._stage.removeChild(this),this.dispose(),this._container=null},t.prototype.hitTest=function(e,t){var i=this,r=[e,t];return a.create((function(e,t){i._pointToCallbacks.set(r,{resolve:e,reject:t}),i.requestRender()}),(function(){i._pointToCallbacks.has(r)&&i._pointToCallbacks.delete(r)}))},t.prototype.highlight=function(e){var t=this;return t.addHighlight(e),{remove:function(){t.removeHighlight(e)}}},t.prototype.setHighlight=function(e){this._highlightIDs.clear(),this.addHighlight(e)},t.prototype.setVisibility=function(e,t){for(var i=function(i){if(i.data){var r=i.data.tileDisplayData.displayObjectRegistry,a=e.filter((function(e){return r.has(e.id)}));i.setVisibility(a,t)}},r=0,a=this.children;r<a.length;r++){i(a[r])}},t.prototype.setVisibilityRange=function(e,t,i,r){for(var a=0,s=this.children;a<s.length;a++){var l=s[a];if(l.data)l.data.tileDisplayData.displayObjectRegistry.has(e)&&l.setVisibilityRange(e,t,i,r)}},t.prototype.addHighlight=function(e){for(var t=0,i=e;t<i.length;t++){var r=i[t];this._highlightIDs.add(r)}this._buildHLList()},t.prototype.removeHighlight=function(e){for(var t=0,i=e;t<i.length;t++){var r=i[t];this._highlightIDs.delete(r)}this._buildHLList()},t.prototype.getMaterialItems=function(e){var t=e;if(t&&0!==t.length){for(var i=[],r=0,a=t;r<a.length;r++){var l=a[r];i.push(this.textureManager.rasterizeItem(l.symbol,l.glyphIds))}return s.all(i).then((function(e){return e.map((function(e,t){return{id:t,mosaicItem:e}}))}))}},t.prototype.onTileData=function(e,t){var i=null;t&&(i=p.decode(t)),e.setData(i,null!=this.visualVariablesInfo.vvFields,this.layer.labelsVisible),e.buildHLList(this._highlightIDs),this._layerView&&this._layerView.view.labelManager.requestUpdate(),this.addChild(e),this._stage.fadeInLabels(),this.requestRender()},t.prototype.onTileDataUpdate=function(e,t){this._patches[e.key.id]=this._patches[e.key.id]||[],this._patches[e.key.id].push({tile:e,patch:t}),this._stage.fadeInLabels(),this.requestRender()},t.prototype.onTileError=function(e){e.clear(),e.buildHLList(this._highlightIDs),this.addChild(e),this.requestRender()},t.prototype.addChild=function(t){var i=e.prototype.addChild.call(this,t);return this.layer.labelingInfo&&this._layerView&&this._layerView.view.labelManager.addTile(this.layer.uid,t),this._buildHLList(),i},t.prototype.removeChild=function(t){var i=e.prototype.removeChild.call(this,t);return this.layer.labelingInfo&&this._layerView&&this._layerView.view.labelManager.removeTile(this.layer.uid,t.key.id),this._buildHLList(),i},t.prototype.prepareChildrenRenderParameters=function(e){this._rendererInfo.updateVisualVariables(this._visualVariablesInfo.vvRanges,e.state);var t=this.tileInfoView.getClosestInfoForScale(e.state.scale).level,r=this.tileInfoView.tileInfo.scaleToZoom(e.state.scale);return i({},e,{rendererInfo:this._rendererInfo,requiredLevel:t,displayLevel:r})},t.prototype.renderChildren=function(e){for(var t=this,i=0;this._nextTile()&&i<4;){for(var r=0,a=this._patches[this._tileId];r<a.length;r++){var s=a[r];this._patchTileVisuals(s.tile,s.patch)}delete this._patches[this._tileId],++i}var l=e.painter;l.bindTextureManager(this.textureManager),this._rendererInfo.updateVisualVariables(this._visualVariablesInfo.vvRanges,e.state),this.sortChildren((function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col}));var o=_.default.toWGLDrawPhases(e.drawPhase);if(o.length>0&&o[0]===u.WGLDrawPhase.LABEL||o[0]===u.WGLDrawPhase.LABEL_ALPHA){var n=this.layer;if(!(n.labelsVisible&&n.labelingInfo&&n.labelingInfo.length>0))return;this._updateTilesTransform(e.state,e.requiredLevel),l.update(e.state,e.pixelRatio)}l.draw(e,this.children,o,this._painterOptions),this._highlightIDs.size>0&&l.highlight(e,this.children),0!==this._pointToCallbacks.size&&(this._pointToCallbacks.forEach((function(i,r){i.resolve(t._hitTest(e,r[0],r[1]))})),this._pointToCallbacks.clear())},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.detachChild=function(e,t){e.detach(t)},t.prototype.renderChild=function(e,t){e.doRender(t)},t.prototype.beforeRenderChildren=function(e,t){this._updateTilesTransform(e.state,this.tileInfoView.getClosestInfoForScale(e.state.scale).level),this._updateHighlightOptions(),this._stage.opacity=this._container.opacity},t.prototype._hitTest=function(e,t,i){var r=e.painter,a=e.requiredLevel,s=[0,0];e.state.toMap(s,[t,i]);var l=e.state.clone(),o=l.viewpoint.clone();return o.targetGeometry=new n(s[0],s[1],e.state.spatialReference),l.viewpoint=o,l.size=[g.C_HITTEST_SEARCH_SIZE,g.C_HITTEST_SEARCH_SIZE],this._updateTilesTransform(l,a),r.update(l,e.pixelRatio),r.hitTest({context:e.context,drawPhase:u.WGLDrawPhase.HITTEST,painter:r,pixelRatio:e.pixelRatio,displayLevel:e.displayLevel,rendererInfo:this._rendererInfo,requiredLevel:a,state:l,stationary:e.stationary},this.children)},t.prototype._updateTilesTransform=function(e,t){var i=1/e.width,r=1/e.height,a=[0,0];this._calculateRelativeViewProjMat(this.tileInfoView.tileInfo.lods[t].resolution,e.resolution,e.rotation,this.tileInfoView.tileInfo.size[0],e.width,e.height,this._defaultTransform);for(var s=0,l=this.children;s<l.length;s++){var o=l[s];e.toScreen(a,o.coords),a[1]=e.height-a[1],o.tileTransform.displayCoord[0]=2*a[0]*i-1,o.tileTransform.displayCoord[1]=2*a[1]*r-1,o.key.level===t?o.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this.tileInfoView.tileInfo.lods[o.key.level].resolution,e.resolution,e.rotation,this.tileInfoView.tileInfo.size[0],e.width,e.height,o.tileTransform.transform)}},t.prototype._calculateRelativeViewProjMat=function(e,t,i,r,a,s,o){var n=e/t;this._tileCoordinateScale.set([n,n,1]),a===this._displayWidth&&s===this._displayHeight||(this._displayScale.set([2/a,-2/s,1]),this._displayWidth=a,this._displayHeight=s),l.identity(o),l.scale(o,o,this._tileCoordinateScale),l.rotate(o,o,-i*c.C_DEG_TO_RAD,this._orientationVec),l.scale(o,o,this._displayScale),l.transpose(o,o)},t.prototype._updateHighlightOptions=function(){if(!this._highlightOptionsUpToDate&&this.parent){var e=this.parent.glPainter,t=this._highlightOptions;if(e){var i=t.color.toRgba();i[0]/=255,i[1]/=255,i[2]/=255;var r=i.slice();i[3]*=t.fillOpacity,r[3]*=t.haloOpacity,e.setHighlightOptions({fillColor:i,outlineColor:r,outlineWidth:2,outerHaloWidth:.3,innerHaloWidth:.3,outlinePosition:0})}}},t.prototype._buildHLList=function(){for(var e=0,t=this.children;e<t.length;e++){t[e].buildHLList(this._highlightIDs)}this.requestRender()},t.prototype._nextTile=function(){var e=Object.keys(this._patches);if(0===e.length)return this._tileId=void 0,!1;if(!this._tileId)return this._tileId=e[0],!0;var t=e.indexOf(this._tileId);return t=(t+1)%e.length,this._tileId=e[t],!0},t.prototype._patchTileVisuals=function(e,t){var i=t.addOrUpdate?p.decode(t.addOrUpdate):null,r={remove:t.remove||[],addOrUpdate:i};e.patchData(r,this.layer.labelsVisible),e.buildHLList(this._highlightIDs),this.contains(e)||this.addChild(e)},t}(h);t.default=v}));
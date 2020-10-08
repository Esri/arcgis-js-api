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

define(["require","exports","../../../../core/LRUCache","../../tiling/TileCoverage","../../tiling/TileKey"],(function(e,i,t,r,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.TileManager=void 0;var l=function(e,i){return e+1/(1<<2*i)},s=function(){function e(e,i){this._tiles=new Map,this._tileCache=new t(40,(function(e){return e.dispose()})),this._viewSize=[0,0],this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this._container=i}return e.prototype.destroy=function(){this._tiles.clear(),this._tiles=null,this._tileCache.clear(),this._tileCache=null},e.prototype.update=function(e){var i=this;this._updateCacheSize(e);for(var t=this.tileInfoView.getTileCoverage(e.state,0,"smallest"),l=t.spans,s=t.lodInfo,o=s.level,n=new Set,h=new Set,c=0,d=l;c<d.length;c++)for(var u=d[c],_=u.row,p=u.colFrom,f=u.colTo,v=p;v<=f;v++){var C=a.getId(o,_,s.normalizeCol(v),s.getWorldForColumn(v)),g=this._getOrAcquireTile(C);n.add(C),g.hasData()?this._container.addChild(g):h.add(new a(C))}this._tiles.forEach((function(e,i){e.isCoverage=n.has(i)})),h.forEach((function(e){return i._findPlaceholdersForMissingTiles(e,n)}));var T=!1;return this._tiles.forEach((function(e,i){e.neededForCoverage=n.has(i),e.isHoldingForFade&&n.add(i),e.isFading&&(T=!0)})),this._tiles.forEach((function(e,t){n.has(t)||i._releaseTile(t)})),r.pool.release(t),!T},e.prototype.clearCache=function(){this._tileCache.clear()},e.prototype._findPlaceholdersForMissingTiles=function(e,i){var t=this,r=[];this._tiles.forEach((function(a){t._addPlaceholderChild(r,a,e,i)}));var a=r.reduce(l,0);Math.abs(1-a)<1e-6||this._addPlaceholderParent(e.id,i)},e.prototype._addPlaceholderChild=function(e,i,t,r){var a,l,s;i.key.level<=t.level||!i.hasData()||(a=t,l=i.key,s=l.level-a.level,a.row===l.row>>s&&a.col===l.col>>s&&a.world===l.world&&(this._container.addChild(i),r.add(i.id),e.push(i.key.level-t.level)))},e.prototype._addPlaceholderParent=function(e,i){for(var t=e;;){if(!(t=o(t))||i.has(t))return;var r=this._getTile(t);if(r&&r.hasData())return this._container.addChild(r),void i.add(r.id)}},e.prototype._getOrAcquireTile=function(e){var i=this._tiles.get(e);return i||((i=this._tileCache.pop(e))||(i=this.acquireTile(new a(e))),this._tiles.set(e,i),i)},e.prototype._getTile=function(e){var i=this._tiles.get(e);return i||((i=this._tileCache.pop(e))&&this._tiles.set(e,i),i)},e.prototype._releaseTile=function(e){var i=this._tiles.get(e);this.releaseTile(i),this._container.removeChild(i),this._tiles.delete(e),i.hasData()?this._tileCache.put(e,i,1):i.dispose()},e.prototype._updateCacheSize=function(e){var i=e.state.size;if(i[0]!==this._viewSize[0]||i[1]!==this._viewSize[1]){var t=Math.ceil(i[0]/512)+1,r=Math.ceil(i[1]/512)+1;this._viewSize[0]=i[0],this._viewSize[1]=i[1],this._tileCache.maxSize=5*t*r}},e}();function o(e){var i=e.split("/"),t=i[0],r=i[1],a=i[2],l=i[3],s=parseInt(t,10);return 0===s?null:s-1+"/"+(parseInt(r,10)>>1)+"/"+(parseInt(a,10)>>1)+"/"+parseInt(l,10)}i.TileManager=s}));
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

define(["require","exports","../../../../core/LRUCache","../../tiling/TileCoverage","../../tiling/TileKey"],(function(e,t,i,a,l){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return e+1/(1<<2*t)},o=function(){function e(e,t){this._tiles=new Map,this._tileCache=new i(40,(function(e){return e.dispose()})),this._viewSize=[0,0],this.fadeDuration=300,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.fadeDuration&&(this.fadeDuration=e.fadeDuration),this._container=t}return e.prototype.destroy=function(){this._tiles.clear(),this._tiles=null,this._tileCache.clear(),this._tileCache=null},e.prototype.update=function(e){var t=this;this._updateCacheSize(e);for(var i=this.tileInfoView.getTileCoverage(e.state,0,"smallest"),r=i.spans,o=i.lodInfo,s=o.level,n=new Set,h=new Set,d=0,c=r;d<c.length;d++)for(var u=c[d],_=u.row,f=u.colFrom,p=u.colTo,v=f;v<=p;v++){var g=l.getId(s,_,o.normalizeCol(v),o.getWorldForColumn(v)),y=this._getOrAcquireTile(g);n.add(g),y.hasData()?this._container.addChild(y):h.add(new l(g))}h.forEach((function(e){return t._findPlaceholdersForMissingTiles(e,n)})),n.forEach((function(e){t._tiles.get(e).clearSymbolFadeHold()}));var C=[];this._tiles.forEach((function(e,t){n.has(t)||C.push(t)}));for(var w=0,T=C;w<T.length;w++){g=T[w];(y=this._tiles.get(g)).hasSymbolBuckets&&!y.isHoldingForFade?y.setSymbolHoldDuration(this.fadeDuration):y.hasSymbolBuckets&&!y.isSymbolFadeDone||this._releaseTile(g)}a.pool.release(i)},e.prototype._findPlaceholdersForMissingTiles=function(e,t){var i=this,a=[];this._tiles.forEach((function(l){i._addPlaceholderChild(a,l,e,t)}));var l=a.reduce(r,0);Math.abs(1-l)<1e-6||this._addPlaceholderParent(e.id,t)},e.prototype._addPlaceholderChild=function(e,t,i,a){var l,r,o;t.key.level<=i.level||!t.hasData()||(l=i,r=t.key,o=r.level-l.level,l.row===r.row>>o&&l.col===r.col>>o&&l.world===r.world&&(this._container.addChild(t),a.add(t.id),e.push(t.key.level-i.level)))},e.prototype._addPlaceholderParent=function(e,t){for(var i=e;;){if(!(i=s(i))||t.has(i))return;var a=this._getTile(i);if(a&&a.hasData())return this._container.addChild(a),void t.add(a.id)}},e.prototype._getOrAcquireTile=function(e){var t=this._tiles.get(e);return t||((t=this._tileCache.pop(e))||(t=this.acquireTile(new l(e))),this._tiles.set(e,t),t)},e.prototype._getTile=function(e){var t=this._tiles.get(e);return t||((t=this._tileCache.pop(e))&&this._tiles.set(e,t),t)},e.prototype._releaseTile=function(e){var t=this._tiles.get(e);this.releaseTile(t),this._container.removeChild(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()},e.prototype._updateCacheSize=function(e){var t=e.state.size;if(t[0]!==this._viewSize[0]||t[1]!==this._viewSize[1]){var i=Math.ceil(t[0]/512)+1,a=Math.ceil(t[1]/512)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*i*a}},e}();function s(e){var t=e.split("/"),i=t[0],a=t[1],l=t[2],r=t[3],o=parseInt(i,10);return 0===o?null:o-1+"/"+(parseInt(a,10)>>1)+"/"+(parseInt(l,10)>>1)+"/"+parseInt(r,10)}t.TileManager=o}));
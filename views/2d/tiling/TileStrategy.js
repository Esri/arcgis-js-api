/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../geometry/support/aaBoundingRect","./TileCache","./TileCoverage","./TileKey"],(function(e,i,t,s){"use strict";const l=new s(0,0,0,0),a=new Map,h=[],c=[];return function(){function s(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new i(e.cacheSize,this.tileInfoView,(e=>{this.releaseTile(e)})))}var n=s.prototype;return n.destroy=function(){this.tileIndex.clear()},n.update=function(e){const{resampling:i,tileIndex:s}=this,n=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(c.length=0,h.length=0,a.clear(),!n)return;const{minScale:o,maxScale:r}=this.tileInfoView.tileInfo,{spans:f,lodInfo:u}=n,{level:d}=u,{scale:y,center:g,resolution:p}=e.state,I=!e.stationary&&y>this._previousScale;if(this._previousScale=y,this.tiles.length=0,!i&&(y>o||y<r))return this.tiles.length=0,a.clear(),s.forEach((e=>{this.releaseTile(e)})),s.clear(),c.length=0,h.length=0,a.clear(),t.pool.release(n),!0;s.forEach((e=>e.visible=!0));let T=0,_=0;if(f.length>0)for(const{row:t,colFrom:h,colTo:c}of f)for(let e=h;e<=c;e++){T++;const i=l.set(d,t,u.normalizeCol(e),u.getWorldForColumn(e)).id;if(s.has(i)){const e=s.get(i);e.isReady?(a.set(i,e),_++):I||this._addParentTile(i,a)}else{let e;if(this._tileCache&&this._tileCache.has(i)){if(e=this._tileCache.pop(i),this.tileIndex.set(i,e),e.isReady){a.set(i,e),_++;continue}}else e=this.acquireTile(l),this.tileIndex.set(i,e);I||this._addParentTile(i,a)}}const v=_===T;s.forEach(((e,i)=>{if(l.set(i),a.has(i))return;const t=this.tileInfoView.intersects(n,l),s="purge"===this.cachePolicy?l.level!==d:l.level>d;!t||!I&&v?!s&&t||h.push(i):e.isReady?s&&"purge"===this.cachePolicy&&this._hasReadyAncestor(l,d)?h.push(i):c.push(i):s&&h.push(i)}));for(const t of c){const e=s.get(t);e&&e.isReady&&a.set(t,e)}for(const t of h){const e=s.get(t);this._tileCache?this._tileCache.add(e):this.releaseTile(e),s.delete(t)}return a.forEach((e=>this.tiles.push(e))),s.forEach((e=>{a.has(e.key.id)||(e.visible=!1)})),this._tileCache&&this._tileCache.prune(d,g,p),t.pool.release(n),a.clear(),v},n.clear=function(e=!0){const{tileIndex:i}=this;e&&i.forEach((e=>{this.releaseTile(e)})),i.clear()},n.updateCacheSize=function(e){this._tileCache&&(this._tileCache.maxSize=e)},n._addParentTile=function(e,i){let t=e,s=null;for(;t=this.tileInfoView.getTileParentId(t),t;)if(this.tileIndex.has(t)){if(s=this.tileIndex.get(t),s&&s.isReady){i.has(s.key.id)||i.set(s.key.id,s);break}}else if(this._tileCache&&this._tileCache.has(t)&&(s=this._tileCache.pop(t),this.tileIndex.set(t,s),s&&s.isReady)){i.has(s.key.id)||i.set(s.key.id,s);break}},n._hasReadyAncestor=function(i,t){const s=e.create();this.tileInfoView.getTileBounds(s,i,!0);for(const l of this.tileIndex.values())if(l.isReady&&l.key.level>=t&&l.key.level<i.level){const i=e.create();if(this.tileInfoView.getTileBounds(i,l.key,!0),e.contains(i,s))return!0}return!1},s}()}));

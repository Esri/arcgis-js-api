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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/LRUCache","../../tiling/TileCoverage","../../tiling/TileKey"],function(e,t,i,l,a){function r(e,t){if(t&&e.level>=t)return[e.id];var i=e.level+1,l=2*e.row,r=2*e.col,o=e.world;return[a.getId(i,l,r,o),a.getId(i,l+1,r,o),a.getId(i,l,r+1,o),a.getId(i,l+1,r+1,o)]}function o(e,t,i){i<=0&&e.set(t.level,t.row,t.col,t.world);var l=t.level-i;return e.set(i,t.row>>l,t.col>>l,t.world),e}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){this._tiles=new Map,this._tileCache=new i(40,function(e){return e.dispose()}),this._viewSize=[0,0],this._previousScale=Number.POSITIVE_INFINITY,this.fadeDuration=300,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.fadeDuration&&(this.fadeDuration=e.fadeDuration),this._container=t;var l=this.tileInfoView.tileInfo.lods;this._minLevel=l[0].level,this._maxLevel=l[l.length-1].level}return e.prototype.destroy=function(){this._tiles.clear(),this._tiles=null,this._tileCache.clear(),this._tileCache=null},e.prototype.update=function(e){var t=this;this._updateCacheSize(e);var i=this.tileInfoView.getTileCoverage(e.state,0,"smallest"),s=i.spans,n=i.lodInfo,h=n.level,d=e.state.scale,c=!e.stationary&&d>this._previousScale,v=0,u=0;this._previousScale=d;for(var _=new Set,f=new Set,p=0,g=s;p<g.length;p++)for(var y=g[p],w=y.row,C=y.colFrom,T=y.colTo,S=C;S<=T;S++){v++;var m=a.getId(h,w,n.normalizeCol(S),n.getWorldForColumn(S)),I=this._getOrAcquireTile(m);_.add(m),I.hasData()?(u++,this._container.addChild(I)):f.add(m)}var k=this._minLevel,D=this._maxLevel,z=u===v;this._retainLoadedChildren(f,_,h,D,c,z);for(var F=new a(null),L=new Set,b=0,M=s;b<M.length;b++)for(var q=M[b],w=q.row,C=q.colFrom,T=q.colTo,S=C;S<=T;S++){var m=a.getId(h,w,n.normalizeCol(S),n.getWorldForColumn(S)),I=this._tiles.get(m);if(!I.hasData()){var V=r(I.key);if(!(_.has(V[0])&&_.has(V[1])&&_.has(V[2])&&_.has(V[3])))for(var x=I.key,E=!0,O=x.level-1;O>=k;--O){var H=o(F,x,O).id;L.has(H)||(L.add(H),(I=this._getTile(H))&&(_.add(H),E&&I.hasData())&&(this._container.addChild(I),E=!1))}}}_.forEach(function(e){t._tiles.get(e).clearSymbolFadeHold()});var N=[];this._tiles.forEach(function(e,t){_.has(t)||N.push(t)});for(var A=0,B=N;A<B.length;A++){var m=B[A],I=this._tiles.get(m);I.hasSymbolBuckets&&!I.isHoldingForFade?I.setSymbolHoldDuration(this.fadeDuration):I.hasSymbolBuckets&&!I.isSymbolFadeDone||this._releaseTile(m)}l.pool.release(i)},e.prototype._retainLoadedChildren=function(e,t,i,l,r,o){var s=this,n=new a(null);this._tiles.forEach(function(a,h){s._retainTopMostLoadedChild(a,h,i,e,t,l,r,o,n)})},e.prototype._retainTopMostLoadedChild=function(e,t,i,l,a,r,s,n,h){if(!(a.has(t)||!e.hasData()||e.key.level<=i||e.key.level>r)){if(s||!n)return void a.add(e.key.id);for(var d=e,c=d.key;d&&d.key.level>i+1;){var v=o(h,d.key,d.key.level-1);d=this._tiles.get(v.id),d&&d.hasData()&&(c=d.key)}h.set(c);for(var u=h;u.level>i;)if(u=o(u,u,u.level-1),l.has(u.id)){a.add(c.id);break}}},e.prototype._getOrAcquireTile=function(e){var t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t||(t=this.acquireTile(new a(e))),this._tiles.set(e,t),t)},e.prototype._getTile=function(e){var t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t&&this._tiles.set(e,t),t)},e.prototype._releaseTile=function(e){var t=this._tiles.get(e);this.releaseTile(t),this._container.removeChild(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()},e.prototype._updateCacheSize=function(e){var t=e.state.size;if(t[0]!==this._viewSize[0]||t[1]!==this._viewSize[1]){var i=Math.ceil(t[0]/512)+1,l=Math.ceil(t[1]/512)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*i*l}},e}();t.TileManager=s});
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

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileCache","./TileCoverage","./TileKey"],function(e,i,t,l,s,a){function r(e,i){e.delete(i)}var h=new a(0,0,0,0),n=new Map,o=[],c=[];return function(){function e(e){var i=this;this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new l.default(e.cacheSize,this.tileInfoView,function(e){i.releaseTile(e)}))}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this,l=t.resampling,a=t.tileIndex,f=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(c.length=0,o.length=0,n.clear(),f){var u=this.tileInfoView.tileInfo,d=u.minScale,p=u.maxScale,v=f.spans,g=f.lodInfo,y=g.level,I=e.state,T=I.scale,_=I.center,C=I.resolution,P=!e.stationary&&T>this._previousScale;if(this._previousScale=T,this.tiles.length=0,!l&&(T>d||T<p))return this.tiles.length=0,n.clear(),a.forEach(function(e){i.releaseTile(e)}),a.clear(),c.length=0,o.length=0,n.clear(),s.pool.release(f),!0;a.forEach(function(e){return e.visible=!0});var w=0,x=0;if(v.length>0)for(var b=0,m=v;b<m.length;b++)for(var k=m[b],S=k.row,V=k.colFrom,E=k.colTo,R=V;R<=E;R++){w++;var q=h.set(y,S,g.normalizeCol(R),g.getWorldForColumn(R)).id;if(a.has(q)){var z=a.get(q);z.isReady?(n.set(q,z),x++):P||this._addParentTile(q,n)}else{var z=void 0;if(this._tileCache&&this._tileCache.has(q)){if(z=this._tileCache.pop(q),this.tileIndex.set(q,z),z.isReady){n.set(q,z),x++;continue}}else z=this.acquireTile(h),this.tileIndex.set(q,z);P||this._addParentTile(q,n)}}var F=x===w;a.forEach(function(e,t){if(h.set(t),!n.has(t)){var l=i.tileInfoView.intersects(f,h);if(!l||!P&&F)if("purge"===i.cachePolicy){var s=h.level!==y;!s&&l||o.push(t)}else(h.level>y||!l)&&o.push(t);else e.isReady?c.push(t):h.level>y&&o.push(t)}});for(var N=0,M=c;N<M.length;N++){var q=M[N],z=a.get(q);z&&z.isReady&&n.set(q,z)}for(var H=0,K=o;H<K.length;H++){var q=K[H],z=a.get(q);this._tileCache?this._tileCache.add(z):this.releaseTile(z),r(a,q)}return n.forEach(function(e){return i.tiles.push(e)}),a.forEach(function(e){n.has(e.key.id)||(e.visible=!1)}),this._tileCache&&this._tileCache.prune(y,_,C),s.pool.release(f),F}},e.prototype.clear=function(){var e=this,i=this.tileIndex;i.forEach(function(i){e.releaseTile(i)}),i.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,l=null;;){if(!(t=this.tileInfoView.getTileParentId(t)))break;if(this.tileIndex.has(t)){if((l=this.tileIndex.get(t))&&l.isReady){i.has(l.key.id)||i.set(l.key.id,l);break}}else if(this._tileCache&&this._tileCache.has(t)&&(l=this._tileCache.pop(t),this.tileIndex.set(t,l),l&&l.isReady)){i.has(l.key.id)||i.set(l.key.id,l);break}}},e}()});
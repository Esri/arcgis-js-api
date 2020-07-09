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

define(["require","exports","./TileCache","./TileCoverage","./TileKey"],(function(e,i,t,l,s){var a=new s(0,0,0,0),r=new Map,h=[],n=[];function o(e,i){e.delete(i)}return function(){function e(e){var i=this;this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new t.default(e.cacheSize,this.tileInfoView,(function(e){i.releaseTile(e)})))}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this.resampling,s=this.tileIndex,c=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(n.length=0,h.length=0,r.clear(),c){var f=this.tileInfoView.tileInfo,u=f.minScale,d=f.maxScale,p=c.spans,v=c.lodInfo,g=v.level,y=e.state,I=y.scale,T=y.center,_=y.resolution,C=!e.stationary&&I>this._previousScale;if(this._previousScale=I,this.tiles.length=0,!t&&(I>u||I<d))return this.tiles.length=0,r.clear(),s.forEach((function(e){i.releaseTile(e)})),s.clear(),n.length=0,h.length=0,r.clear(),l.pool.release(c),!0;s.forEach((function(e){return e.visible=!0}));var P=0,w=0;if(p.length>0)for(var m=0,x=p;m<x.length;m++)for(var b=x[m],k=b.row,S=b.colFrom,V=b.colTo,E=S;E<=V;E++){P++;var R=a.set(g,k,v.normalizeCol(E),v.getWorldForColumn(E)).id;if(s.has(R)){(q=s.get(R)).isReady?(r.set(R,q),w++):C||this._addParentTile(R,r)}else{var q=void 0;if(this._tileCache&&this._tileCache.has(R)){if(q=this._tileCache.pop(R),this.tileIndex.set(R,q),q.isReady){r.set(R,q),w++;continue}}else q=this.acquireTile(a),this.tileIndex.set(R,q);C||this._addParentTile(R,r)}}var z=w===P;s.forEach((function(e,t){if(a.set(t),!r.has(t)){var l=i.tileInfoView.intersects(c,a);if(!l||!C&&z)if("purge"===i.cachePolicy)!(a.level!==g)&&l||h.push(t);else(a.level>g||!l)&&h.push(t);else e.isReady?n.push(t):a.level>g&&h.push(t)}}));for(var F=0,N=n;F<N.length;F++){R=N[F];(q=s.get(R))&&q.isReady&&r.set(R,q)}for(var M=0,K=h;M<K.length;M++){R=K[M],q=s.get(R);this._tileCache?this._tileCache.add(q):this.releaseTile(q),o(s,R)}return r.forEach((function(e){return i.tiles.push(e)})),s.forEach((function(e){r.has(e.key.id)||(e.visible=!1)})),this._tileCache&&this._tileCache.prune(g,T,_),l.pool.release(c),z}},e.prototype.clear=function(e){var i=this;void 0===e&&(e=!0);var t=this.tileIndex;e&&t.forEach((function(e){i.releaseTile(e)})),t.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,l=null;t=this.tileInfoView.getTileParentId(t);)if(this.tileIndex.has(t)){if((l=this.tileIndex.get(t))&&l.isReady){i.has(l.key.id)||i.set(l.key.id,l);break}}else if(this._tileCache&&this._tileCache.has(t)&&(l=this._tileCache.pop(t),this.tileIndex.set(t,l),l&&l.isReady)){i.has(l.key.id)||i.set(l.key.id,l);break}},e}()}));
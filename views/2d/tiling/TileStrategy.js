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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileCache","./TileCoverage","./TileKey"],(function(e,i,t,l,s,a){var r=new a(0,0,0,0),h=new Map,n=[],o=[];function c(e,i){e.delete(i)}return function(){function e(e){var i=this;this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new l.default(e.cacheSize,this.tileInfoView,(function(e){i.releaseTile(e)})))}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this.resampling,l=this.tileIndex,a=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(o.length=0,n.length=0,h.clear(),a){var f=this.tileInfoView.tileInfo,u=f.minScale,d=f.maxScale,p=a.spans,v=a.lodInfo,g=v.level,y=e.state,I=y.scale,T=y.center,_=y.resolution,C=!e.stationary&&I>this._previousScale;if(this._previousScale=I,this.tiles.length=0,!t&&(I>u||I<d))return this.tiles.length=0,h.clear(),l.forEach((function(e){i.releaseTile(e)})),l.clear(),o.length=0,n.length=0,h.clear(),s.pool.release(a),!0;l.forEach((function(e){return e.visible=!0}));var P=0,w=0;if(p.length>0)for(var x=0,m=p;x<m.length;x++)for(var b=m[x],S=b.row,k=b.colFrom,V=b.colTo,E=k;E<=V;E++){P++;var R=r.set(g,S,v.normalizeCol(E),v.getWorldForColumn(E)).id;if(l.has(R)){(q=l.get(R)).isReady?(h.set(R,q),w++):C||this._addParentTile(R,h)}else{var q=void 0;if(this._tileCache&&this._tileCache.has(R)){if(q=this._tileCache.pop(R),this.tileIndex.set(R,q),q.isReady){h.set(R,q),w++;continue}}else q=this.acquireTile(r),this.tileIndex.set(R,q);C||this._addParentTile(R,h)}}var z=w===P;l.forEach((function(e,t){if(r.set(t),!h.has(t)){var l=i.tileInfoView.intersects(a,r);if(!l||!C&&z)if("purge"===i.cachePolicy)!(r.level!==g)&&l||n.push(t);else(r.level>g||!l)&&n.push(t);else e.isReady?o.push(t):r.level>g&&n.push(t)}}));for(var F=0,N=o;F<N.length;F++){R=N[F];(q=l.get(R))&&q.isReady&&h.set(R,q)}for(var M=0,H=n;M<H.length;M++){R=H[M],q=l.get(R);this._tileCache?this._tileCache.add(q):this.releaseTile(q),c(l,R)}return h.forEach((function(e){return i.tiles.push(e)})),l.forEach((function(e){h.has(e.key.id)||(e.visible=!1)})),this._tileCache&&this._tileCache.prune(g,T,_),s.pool.release(a),z}},e.prototype.clear=function(e){var i=this;void 0===e&&(e=!0);var t=this.tileIndex;e&&t.forEach((function(e){i.releaseTile(e)})),t.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,l=null;t=this.tileInfoView.getTileParentId(t);)if(this.tileIndex.has(t)){if((l=this.tileIndex.get(t))&&l.isReady){i.has(l.key.id)||i.set(l.key.id,l);break}}else if(this._tileCache&&this._tileCache.has(t)&&(l=this._tileCache.pop(t),this.tileIndex.set(t,l),l&&l.isReady)){i.has(l.key.id)||i.set(l.key.id,l);break}},e}()}));
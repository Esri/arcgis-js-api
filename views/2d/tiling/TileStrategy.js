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

define(["require","exports","./TileCache","./TileCoverage","./TileKey"],(function(e,i,t,l,s){"use strict";var a=new s(0,0,0,0),r=new Map,h=[],n=[];return function(){function e(e){var i=this;this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new t.default(e.cacheSize,this.tileInfoView,(function(e){i.releaseTile(e)})))}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this.resampling,s=this.tileIndex,o=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(n.length=0,h.length=0,r.clear(),o){var c=this.tileInfoView.tileInfo,f=c.minScale,u=c.maxScale,d=o.spans,p=o.lodInfo,v=p.level,g=e.state,y=g.scale,I=g.center,T=g.resolution,_=!e.stationary&&y>this._previousScale;if(this._previousScale=y,this.tiles.length=0,!t&&(y>f||y<u))return this.tiles.length=0,r.clear(),s.forEach((function(e){i.releaseTile(e)})),s.clear(),n.length=0,h.length=0,r.clear(),l.pool.release(o),!0;s.forEach((function(e){return e.visible=!0}));var C=0,P=0;if(d.length>0)for(var w=0,m=d;w<m.length;w++)for(var x=m[w],b=x.row,k=x.colFrom,S=x.colTo,V=k;V<=S;V++){C++;var E=a.set(v,b,p.normalizeCol(V),p.getWorldForColumn(V)).id;if(s.has(E)){(R=s.get(E)).isReady?(r.set(E,R),P++):_||this._addParentTile(E,r)}else{var R=void 0;if(this._tileCache&&this._tileCache.has(E)){if(R=this._tileCache.pop(E),this.tileIndex.set(E,R),R.isReady){r.set(E,R),P++;continue}}else R=this.acquireTile(a),this.tileIndex.set(E,R);_||this._addParentTile(E,r)}}var q=P===C;s.forEach((function(e,t){if(a.set(t),!r.has(t)){var l=i.tileInfoView.intersects(o,a);if(!l||!_&&q)if("purge"===i.cachePolicy)!(a.level!==v)&&l||h.push(t);else(a.level>v||!l)&&h.push(t);else e.isReady?n.push(t):a.level>v&&h.push(t)}}));for(var z=0,F=n;z<F.length;z++){E=F[z];(R=s.get(E))&&R.isReady&&r.set(E,R)}for(var N=0,M=h;N<M.length;N++){E=M[N],R=s.get(E);this._tileCache?this._tileCache.add(R):this.releaseTile(R),s.delete(E)}return r.forEach((function(e){return i.tiles.push(e)})),s.forEach((function(e){r.has(e.key.id)||(e.visible=!1)})),this._tileCache&&this._tileCache.prune(v,I,T),l.pool.release(o),r.clear(),q}},e.prototype.clear=function(e){var i=this;void 0===e&&(e=!0);var t=this.tileIndex;e&&t.forEach((function(e){i.releaseTile(e)})),t.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,l=null;t=this.tileInfoView.getTileParentId(t);)if(this.tileIndex.has(t)){if((l=this.tileIndex.get(t))&&l.isReady){i.has(l.key.id)||i.set(l.key.id,l);break}}else if(this._tileCache&&this._tileCache.has(t)&&(l=this._tileCache.pop(t),this.tileIndex.set(t,l),l&&l.isReady)){i.has(l.key.id)||i.set(l.key.id,l);break}},e}()}));
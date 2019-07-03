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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,i,t,l){function r(e,i){e.delete(i)}var s=new l(0,0,0,0),a=new Map,n=[],o=[];return function(){function e(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.resampling=null==e.resampling||!!e.resampling,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this,l=t.resampling,c=t.tileIndex,h=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(o.length=0,n.length=0,a.clear(),h){var f=this.tileInfoView.tileInfo,u=f.minScale,v=f.maxScale,p=h.spans,d=h.lodInfo,g=d.level,y=e.state.scale,I=!e.stationary&&y>this._previousScale;if(this._previousScale=y,this.tiles.length=0,!l&&(y>u||y<v))return this.tiles.length=0,a.clear(),c.forEach(function(e){i.releaseTile(e)}),c.clear(),o.length=0,n.length=0,a.clear(),!0;c.forEach(function(e){return e.visible=!0});var T=0,P=0;if(p.length>0)for(var m=0,b=p;m<b.length;m++)for(var w=b[m],x=w.row,E=w.colFrom,S=w.colTo,V=E;V<=S;V++){T++;var _=s.set(g,x,d.normalizeCol(V),d.getWorldForColumn(V)).id;if(c.has(_)){var k=c.get(_);k.isReady?(a.set(_,k),P++):I||this._addParentTile(_,a)}else{var k=this.acquireTile(s);this.tileIndex.set(_,k),I||this._addParentTile(_,a)}}var q=P===T;c.forEach(function(e,t){if(s.set(t),!a.has(t)){var l=i.tileInfoView.intersects(h,s);if(!l||!I&&q)if("purge"===i.cachePolicy){var r=s.level!==g;!r&&l||n.push(t)}else(s.level>g||!l)&&n.push(t);else e.isReady?o.push(t):s.level>g&&n.push(t)}});for(var R=0,C=o;R<C.length;R++){var _=C[R],k=c.get(_);k&&k.isReady&&a.set(_,k)}for(var F=0,N=n;F<N.length;F++){var _=N[F],k=c.get(_);this.releaseTile(k),r(c,_)}return a.forEach(function(e){return i.tiles.push(e)}),c.forEach(function(e){a.has(e.key.id)||(e.visible=!1)}),q}},e.prototype.clear=function(){var e=this,i=this.tileIndex;i.forEach(function(i){e.releaseTile(i)}),i.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,l=null;;){if(!(t=this.tileInfoView.getTileParentId(t)))break;if(this.tileIndex.has(t)&&(l=this.tileIndex.get(t))&&l.isReady){i.has(l.key.id)||i.set(l.key.id,l);break}}},e}()});
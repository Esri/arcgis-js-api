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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,i,t,r){function l(e,i){e.delete(i)}var s=new r(0,0,0,0),o=new Map,a=[],n=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var i=this,t=this.tileIndex,r=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(r){var h=r.spans,c=r.lodInfo,f=c.level,u=e.state.resolution,v=!e.stationary&&u>this._previousResolution;this._previousResolution=u,t.forEach(function(e){return e.visible=!0}),this.tiles.length=0,o.clear();var d=0,p=0;if(h.length>0)for(var y=0,g=h;y<g.length;y++)for(var I=g[y],T=I.row,P=I.colFrom,b=I.colTo,w=P;w<=b;w++){d++;var x=s.set(f,T,c.normalizeCol(w),c.getWorldForColumn(w)).id;if(t.has(x)){var R=t.get(x);R.isReady?(o.set(x,R),p++):v||this._addParentTile(x,o)}else{var R=this.acquireTile(s);this.tileIndex.set(x,R),v||this._addParentTile(x,o)}}var _=p===d;n.length=0,a.length=0,t.forEach(function(e,t){if(s.set(t),!o.has(t)){var l=i.tileInfoView.intersects(r,s);if(!l||!v&&_)if("purge"===i.cachePolicy){var h=s.level!==f;!h&&l||a.push(t)}else(s.level>f||!l)&&a.push(t);else e.isReady?n.push(t):s.level>f&&a.push(t)}});for(var k=0,E=n;k<E.length;k++){var x=E[k],R=t.get(x);R&&R.isReady&&o.set(x,R)}for(var V=0,m=a;V<m.length;V++){var x=m[V],R=t.get(x);this.releaseTile(R),l(t,x)}return o.forEach(function(e){return i.tiles.push(e)}),t.forEach(function(e){o.has(e.key.id)||(e.visible=!1)}),n.length=0,a.length=0,o.clear(),_}},e.prototype.clear=function(){var e=this,i=this.tileIndex;i.forEach(function(i){e.releaseTile(i)}),i.clear()},e.prototype._addParentTile=function(e,i){for(var t=e,r=null;;){if(!(t=this.tileInfoView.getTileParentId(t)))break;if(this.tileIndex.has(t)&&(r=this.tileIndex.get(t))&&r.isReady){i.has(r.key.id)||i.set(r.key.id,r);break}}},e}()});
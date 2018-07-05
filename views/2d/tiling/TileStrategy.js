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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./enums","./TileKey"],function(e,t,i,r,s){function l(e,t){e.delete(t)}var a=new s(0,0,0,0),n=new Map,o=[],h=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,s=this.tileInfoView.getTileCoverage(e.state,this.buffer);if(s){var u=s.spans,c=s.lodInfo,f=c.level,d=e.state.resolution,p=!e.stationary&&d>this._previousResolution;this._previousResolution=d,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,n.clear();var v=0,I=0;if(u.length>0)for(var T=0,g=u;T<g.length;T++)for(var y=g[T],b=y.row,P=y.colFrom,w=y.colTo,x=P;x<=w;x++){v++;var E=a.set(f,b,c.normalizeCol(x),c.getWorldForColumn(x)).id;if(i.has(E)){var _=i.get(E);if(_.status!==r.TileStatus.INITIALIZED&&I++,_.attached){n.set(E,_);continue}_.attached||p||this._addParentTile(E,n)}else{var _=this.acquireTile(a);this.tileIndex.set(E,_),p||this._addParentTile(E,n)}}var k=I===v;h.length=0,o.length=0,i.forEach(function(e,i){if(a.set(i),!n.has(i)){var l=t.tileInfoView.intersects(s,a);!l||!p&&k?"purge"===t.cachePolicy&&e.status!==r.TileStatus.MODIFIED&&e.status!==r.TileStatus.READY?o.push(i):(a.level>f||!l)&&o.push(i):e.attached?h.push(i):a.level>f&&o.push(i)}});for(var V=0,m=h;V<m.length;V++){var E=m[V],_=i.get(E);_&&_.attached&&n.set(E,_)}for(var S=0,q=o;S<q.length;S++){var E=q[S],_=i.get(E);this.releaseTile(_),l(i,E)}n.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){n.has(e.key.id)||(e.visible=!1)}),h.length=0,o.length=0,n.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;;){if(!(i=this.tileInfoView.getTileParentId(i)))break;if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.attached){t.has(r.key.id)||t.set(r.key.id,r);break}}},e}()});
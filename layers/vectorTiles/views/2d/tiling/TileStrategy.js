// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./enums","./TileKey"],function(e,t,i,a,s){function l(e,t){e.delete(t)}var r=new s(0,0,0,0),n=new Map,o=[],h=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,s=this.tileInfoView.getTileCoverage(e.state);if(s){var c=s.spans,u=s.lodInfo,f=u.level,d=e.state.resolution,p=!e.stationary&&d>this._previousResolution;this._previousResolution=d,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,n.clear();var v=0,I=0;if(c.length>0)for(var T=0,g=c;T<g.length;T++)for(var y=g[T],P=y.row,w=y.colFrom,x=y.colTo,E=w;E<=x;E++){v++;var _=r.set(f,P,u.normalizeCol(E),u.getWorldForColumn(E)).id;if(i.has(_)){var k=i.get(_);if(k.status!==a.TileStatus.INITIALIZED&&I++,k.attached){n.set(_,k);continue}k.attached||p||this._addParentTile(_,n)}else{var k=this.acquireTile(r);this.tileIndex.set(_,k),p||this._addParentTile(_,n)}}var V=I===v;h.length=0,o.length=0,i.forEach(function(e,i){if(r.set(i),!n.has(i)){var l=t.tileInfoView.intersects(s,r);!l||!p&&V?"purge"===t.cachePolicy&&e.status!==a.TileStatus.MODIFIED&&e.status!==a.TileStatus.READY?o.push(i):(r.level>f||!l)&&o.push(i):e.attached?h.push(i):r.level>f&&o.push(i)}});for(var b=0,m=h;b<m.length;b++){var _=m[b],k=i.get(_);k&&k.attached&&n.set(_,k)}for(var S=0,q=o;S<q.length;S++){var _=q[S],k=i.get(_);this.releaseTile(k),l(i,_)}n.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){n.has(e.key.id)||(e.visible=!1)}),h.length=0,o.length=0,n.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,a=null;;){if(!(i=this.tileInfoView.getTileParentId(i)))break;if(this.tileIndex.has(i)&&(a=this.tileIndex.get(i))&&a.attached){t.has(a.key.id)||t.set(a.key.id,a);break}}},e}()});
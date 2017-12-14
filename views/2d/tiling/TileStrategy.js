// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,t,i,r){function a(e,t){e["delete"](t)}var l=new r(0,0,0,0),n=new Map,o=[],s=[],h=function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,r=this.tileInfoView.getTileCoverage(e.state);if(r){var h=r.spans,c=r.lodInfo,u=c.level,f=e.state.resolution,d=!e.stationary&&f>this._previousResolution;this._previousResolution=f,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,n.clear();var p=0,v=0;if(h.length>0)for(var I=0,g=h;I<g.length;I++)for(var T=g[I],y=T.row,P=T.colFrom,w=T.colTo,x=P;w>=x;x++){p++;var _=l.set(u,y,c.normalizeCol(x),c.getWorldForColumn(x)).id;if(i.has(_)){var k=i.get(_);if(k.attached){n.set(_,k),v++;continue}k.attached||d||this._addParentTile(_,n)}else{var k=this.acquireTile(l);this.tileIndex.set(_,k),d||this._addParentTile(_,n)}}var E=v===p;s.length=0,o.length=0,i.forEach(function(e,i){if(l.set(i),!n.has(i)){var a=t.tileInfoView.intersects(r,l);!a||!d&&E?"purge"===t.cachePolicy?o.push(i):(l.level>u||!a)&&o.push(i):e.attached?s.push(i):d&&o.push(i)}});for(var V=0,b=s;V<b.length;V++){var _=b[V],k=i.get(_);k&&k.attached&&n.set(_,k)}for(var m=0,q=o;m<q.length;m++){var _=q[m],k=i.get(_);this.releaseTile(k),a(i,_)}n.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){n.has(e.key.id)||(e.visible=!1)}),s.length=0,o.length=0,n.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;;){if(i=this.tileInfoView.getTileParentId(i),!i)break;if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i),r&&r.attached)){t.has(r.key.id)||t.set(r.key.id,r);break}}},e}();return h});
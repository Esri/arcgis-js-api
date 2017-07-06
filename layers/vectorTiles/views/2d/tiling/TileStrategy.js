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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,t,i,r){function l(e,t){e["delete"](t)}var a=new r(0,0,0,0),n=new Map,s=[],o=[],h=function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,r=this.tileInfoView.getTileCoverage(e.state);if(r){var h=r.spans,c=r.lodInfo,u=c.level,f=e.state.resolution,d=!e.stationary&&f>this._previousResolution;this._previousResolution=f,this.tiles.length=0,n.clear();var p=0,v=0;if(h.length>0)for(var g=0,I=h;g<I.length;g++)for(var T=I[g],y=T.row,P=T.colFrom,w=T.colTo,x=P;w>=x;x++){p++;var _=a.set(u,y,c.normalizeCol(x),c.getWorldForColumn(x)).id;if(i.has(_)){var V=i.get(_);if(V.attached){n.set(_,V),v++;continue}V.attached||d||this._addParentTile(_,n)}else{var V=this.acquireTile(a);this.tileIndex.set(_,V),d||this._addParentTile(_,n)}}var k=v===p;o.length=0,s.length=0,i.forEach(function(e,i){if(a.set(i),!n.has(i)){var l=t.tileInfoView.intersects(r,a);!l||!d&&k?"purge"===t.cachePolicy?s.push(i):(a.level>u||!l)&&s.push(i):e.attached?o.push(i):d&&s.push(i)}});for(var m=0,q=o;m<q.length;m++){var _=q[m],V=i.get(_);V&&V.attached&&n.set(_,V)}for(var C=0,E=s;C<E.length;C++){var _=E[C],V=i.get(_);this.releaseTile(V),l(i,_)}n.forEach(function(e){return t.tiles.push(e)}),o.length=0,s.length=0,n.clear()}},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i),r&&r.attached)){t.has(r.key.id)||t.set(r.key.id,r);break}},e}();return h});
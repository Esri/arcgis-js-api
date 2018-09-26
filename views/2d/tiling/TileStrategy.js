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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(e,t,i,r){function l(e,t){e.delete(t)}var n=new r(0,0,0,0),a=new Map,s=[],o=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,r=this.tileInfoView.getTileCoverage(e.state,this.buffer);if(r){var h=r.spans,c=r.lodInfo,f=c.level,u=e.state.resolution,d=!e.stationary&&u>this._previousResolution;this._previousResolution=u,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,a.clear();var v=0,p=0;if(h.length>0)for(var I=0,g=h;I<g.length;I++)for(var T=g[I],y=T.row,b=T.colFrom,P=T.colTo,w=b;w<=P;w++){v++;var x=n.set(f,y,c.normalizeCol(w),c.getWorldForColumn(w)).id;if(i.has(x)){var _=i.get(x);if(_.attached){a.set(x,_),p++;continue}_.attached||d||this._addParentTile(x,a)}else{var _=this.acquireTile(n);this.tileIndex.set(x,_),d||this._addParentTile(x,a)}}var k=p===v;o.length=0,s.length=0,i.forEach(function(e,i){if(n.set(i),!a.has(i)){var l=t.tileInfoView.intersects(r,n);if(!l||!d&&k)if("purge"===t.cachePolicy){var h=n.level!==f;!h&&l||s.push(i)}else(n.level>f||!l)&&s.push(i);else e.attached?o.push(i):n.level>f&&s.push(i)}});for(var E=0,V=o;E<V.length;E++){var x=V[E],_=i.get(x);_&&_.attached&&a.set(x,_)}for(var m=0,q=s;m<q.length;m++){var x=q[m],_=i.get(x);this.releaseTile(_),l(i,x)}return a.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){a.has(e.key.id)||(e.visible=!1)}),o.length=0,s.length=0,a.clear(),k}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;;){if(!(i=this.tileInfoView.getTileParentId(i)))break;if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.attached){t.has(r.key.id)||t.set(r.key.id,r);break}}},e}()});
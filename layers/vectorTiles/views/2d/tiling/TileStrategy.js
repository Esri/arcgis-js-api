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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./enums","./TileKey"],function(e,t,i,r,s){function l(e,t){e.delete(t)}var a=new s(0,0,0,0),o=new Map,n=[],h=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,s=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.coveragePolicy);if(s){var c=s.spans,u=s.lodInfo,f=u.level,v=e.state.resolution,d=!e.stationary&&v>this._previousResolution;this._previousResolution=v,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,o.clear();var p=0,I=0;if(c.length>0)for(var g=0,y=c;g<y.length;g++)for(var T=y[g],P=T.row,b=T.colFrom,w=T.colTo,x=b;x<=w;x++){p++;var E=a.set(f,P,u.normalizeCol(x),u.getWorldForColumn(x)).id;if(i.has(E)){var _=i.get(E);if(_.status!==r.TileStatus.INITIALIZED&&I++,_.attached){o.set(E,_);continue}_.attached||d||this._addParentTile(E,o)}else{var _=this.acquireTile(a);this.tileIndex.set(E,_),d||this._addParentTile(E,o)}}var k=I===p;h.length=0,n.length=0,i.forEach(function(e,i){if(a.set(i),!o.has(i)){var l=t.tileInfoView.intersects(s,a);!l||!d&&k?"purge"===t.cachePolicy&&e.status!==r.TileStatus.MODIFIED&&e.status!==r.TileStatus.READY?n.push(i):(a.level>f||!l)&&n.push(i):e.attached?h.push(i):a.level>f&&n.push(i)}});for(var V=0,m=h;V<m.length;V++){var E=m[V],_=i.get(E);_&&_.attached&&o.set(E,_)}for(var S=0,q=n;S<q.length;S++){var E=q[S],_=i.get(E);this.releaseTile(_),l(i,E)}return o.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){o.has(e.key.id)||(e.visible=!1)}),h.length=0,n.length=0,o.clear(),k}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;;){if(!(i=this.tileInfoView.getTileParentId(i)))break;if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.attached){t.has(r.key.id)||t.set(r.key.id,r);break}}},e}()});
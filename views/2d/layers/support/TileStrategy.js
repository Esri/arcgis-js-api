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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/LRUCache","./TileKey"],function(e,t,i,s){function n(e,t){e["delete"](t)}var r=[],o=[null,null],a=[],l=new i(30),h=new s(0,0,0,0),u=function(){function e(e){this._tilesToRender=new Map,this._requests=new Map,this._updates=new Map,this._prevResolution=Number.POSITIVE_INFINITY,this._isStationary=!1,this.cachePolicy="keep",this.tiles=new Map,this.container=e.container,this.tileInfoView=e.tileInfoView,this.requestUpdate=e.requestUpdate,this.fetchTile=e.fetchTile,e.cachePolicy&&(this.cachePolicy=e.cachePolicy)}return e.prototype.destroy=function(){this._requests&&(this._requests.forEach(function(e){e.isFulfilled()||e.cancel()}),this._requests=null,this._tilesToRender=null)},Object.defineProperty(e.prototype,"updating",{get:function(){return 0!==this._requests.size||0!==this._updates.size},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=this,s=i.tiles,o=i._tilesToRender,u=i._requests,c=i._updates,f=this.tileInfoView.getTileCoverage(e.state);if(f){var p=f.lodInfo,d=p.level,_=e.state.resolution,v=_>this._prevResolution;this._createCoverageList(r,f);var g=r;o.clear();for(var T=0,y=0,w=g;y<w.length;y++){var I=w[y];if(s.has(I)){var q=s.get(I);if(o.set(I,q),T++,q.attached)continue;v||this._addParentTile(I,o)}else l.has(I)?T++:u.has(I)||this._getTile(I,e),v||this._addParentTile(I,o)}var P=T===g.length;!this._isStationary&&e.stationary&&this.requestUpdate(),this._isStationary=e.stationary;var V=[],R=[];s.forEach(function(e,i){h.set(i),o.has(i)||(!v&&P||!t.tileInfoView.intersects(f,h)?"purge"===t.cachePolicy?V.push(i):(h.level>d||!t.tileInfoView.intersects(f,h))&&V.push(i):R.push(i))});for(var b=0,m=R;b<m.length;b++){var I=m[b];o.set(I,s.get(I))}for(var C=0,U=V;C<U.length;C++){var I=U[C];if(c.has(I)){var E=c.get(I);E.cancel(),n(c,I)}var q=s.get(I);q.dispose(),n(s,I)}this.container.removeAllTiles(),o.forEach(function(e){return t.container.addTile(e)}),u.forEach(function(e,i){h.set(i),(h.level>d||!t.tileInfoView.intersects(f,h))&&(e.cancel(),a.push(i))});for(var z=0,F=a;z<F.length;z++){var I=F[z];n(u,I)}a.length=0}},e.prototype.updateTiles=function(e,t){var i=this;this._tilesToRender.forEach(function(s,r){if(s.attached){var o=e(s,t);if(o){if(i._updates.has(r)){var a=i._updates.get(r);a.cancel(),n(i._updates,r)}o.then(function(e){n(i._updates,r),i._tilesToRender.has(r)&&i._tilesToRender.set(r,e),i.requestUpdate()}).otherwise(function(e){if(n(i._updates,r),i.requestUpdate(),e&&"cancel"!==e.dojoType)throw e}),i._updates.set(r,o)}}})},e.prototype._addParentTile=function(e,t){this._getAvailableParentTile(o,e),o[0]&&!t.has(o[0])&&t.set(o[0],o[1])},e.prototype._getTile=function(e,t){var i=this,s=this.fetchTile(e,t).then(function(t){h.set(e),i.tileInfoView.getTileCoords(t.coords,h),t.resolution=i.tileInfoView.getTileResolution(h),s=i.tileInfoView.tileInfo.size,t.width=s[0],t.height=s[1],i.tiles.set(e,t),n(i._requests,e),i.requestUpdate();var s}).otherwise(function(t){t&&"no data"===t.message&&l.insert(e,e),n(i._requests,e)});this._requests.set(e,s)},e.prototype._getAvailableParentTile=function(e,t){e[0]=null,e[1]=null;for(var i=t;i=this.tileInfoView.getTileParentId(i);)if(this.tiles.has(i)){e[0]=i,e[1]=this.tiles.get(i);break}return e},e.prototype._createCoverageList=function(e,t){e.length=0;var i=t.spans,s=t.lodInfo,n=s.level;if(0!==i.length)for(var r=0,o=i;r<o.length;r++)for(var a=o[r],l=a.row,u=a.colFrom,c=a.colTo,f=u;c>=f;f++)h.set(n,l,s.normalizeCol(f),s.getWorldForColumn(f)),e.push(h.id)},e}();return u});
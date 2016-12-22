// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../../core/LRUCache","./TileKey"],function(e,t,i,r){function o(e,t){e["delete"](t)}var s=[],n=[],a=[null,null],l=[],h=new i(30),u=function(){function e(e,t,i,r,o){void 0===o&&(o=null),this.container=e,this.tileInfoView=t,this.requestUpdate=i,this.fetchTile=r,this.tileFilter=o,this._tiles=new Map,this._tilesToRender=new Map,this._requests=new Map,this._updates=new Map,this._prevResolution=Number.POSITIVE_INFINITY,this._isStationary=!1}return e.prototype.destroy=function(){this._requests&&(this._requests.forEach(function(e){e.isFulfilled()||e.cancel()}),this._requests=null,this._tilesToRender=null)},Object.defineProperty(e.prototype,"updating",{get:function(){return 0!==this._requests.size||0!==this._updates.size},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=this,n=i._tiles,a=i._tilesToRender,u=i._requests,f=i._updates,c=this.tileInfoView.getTileCoverage(e.state);if(c){var d=c.lodInfo,p=d.level,v=e.state.resolution,_=v>this._prevResolution;this._createCoverageList(s,c);var g=this.tileFilter?this.tileFilter([],s):s;a.clear();for(var T=0,w=0,m=g;w<m.length;w++){var I=m[w];if(n.has(I)){var y=n.get(I);if(a.set(I,y),T++,y.attached)continue;_||this._addParentTile(I,a)}else h.has(I)?T++:u.has(I)||this._getTile(I,e),_||this._addParentTile(I,a)}var q=T===g.length;!this._isStationary&&e.stationary&&this.requestUpdate(),this._isStationary=e.stationary;var R,b=[],C=[];n.forEach(function(e,i){R=r.from(i),a.has(i)||(!_&&q||!t.tileInfoView.intersects(c,R)?(R.level>p||!t.tileInfoView.intersects(c,R))&&b.push(i):C.push(i))});for(var M=0,V=C;M<V.length;M++){var F=V[M];a.set(F,n.get(F))}for(var P=0,E=b;P<E.length;P++){var F=E[P];if(f.has(F)){var L=f.get(F);L.cancel(F),o(f,F)}var y=n.get(F);y.dispose(),o(n,F)}this.container.removeAllChildren(),a.forEach(function(e){return t.container.addChild(e)}),u.forEach(function(e,i){R=r.from(i),(R.level>p||!t.tileInfoView.intersects(c,R))&&(e.cancel(),l.push(i))});for(var z=0,S=l;z<S.length;z++){var I=S[z];o(u,I)}l.length=0}},e.prototype.updateTiles=function(e,t){var i=this;this._tilesToRender.forEach(function(r,s){if(r.attached){var n=e(r,t);if(n){if(i._updates.has(s)){var a=i._updates.get(s);a.cancel(),o(i._updates,s)}n.then(function(e){o(i._updates,s),i._tilesToRender.has(s)&&i._tilesToRender.set(s,e)}).otherwise(function(e){if(o(i._updates,s),e&&"cancel"!==e.dojoType)throw e}),i._updates.set(s,n)}}})},e.prototype._addParentTile=function(e,t){this._getAvailableParentTile(a,e),a[0]&&!t.has(a[0])&&t.set(a[0],a[1])},e.prototype._getTile=function(e,t){var i=this,s=this.fetchTile(e,t).then(function(t){var s=r.fromId(e);i.tileInfoView.getTileTopLeft(t.topLeft,s),i.tileInfoView.getTileBottomRight(t.bottomRight,s),t.resolution=i.tileInfoView.getTileResolution(s),i._tiles.set(e,t),o(i._requests,e),i.requestUpdate()}).otherwise(function(t){t&&"no data"===t.message&&h.insert(e,e),o(i._requests,e)});this._requests.set(e,s)},e.prototype._getAvailableParentTile=function(e,t){e[0]=null,e[1]=null;for(var i=t;i=this.tileInfoView.getTileParentId(i);)if(this._tiles.has(i)){e[0]=i,e[1]=this._tiles.get(i);break}return e},e.prototype._createCoverageList=function(e,t){e.length=0,n.length=0;var i=t.spans;if(0!==i.length){var o=0,s=0,a=1/0,l=-(1/0);o=i[0].row,s=i[i.length-1].row;for(var h=0,u=i;h<u.length;h++)for(var f=u[h],c=f.colFrom,d=f.colTo;d>=c;c++)a=Math.min(a,c),l=Math.max(l,c);var p,v=t.lodInfo,_=v.level,g=o+Math.floor((s-o)/2),T=a+Math.floor((l-a)/2),w=g-o;w>=0&&w<i.length&&(p=r.from(_,g,v.normalizeCol(T),v.getWorldForColumn(T)),n.push({dist:0,id:p.id}));for(var m,I,y=0,q=i;y<q.length;y++){var f=q[y];I=f.row;for(var c=f.colFrom,d=f.colTo;d>=c;c++)m=Math.abs(c-T)+Math.abs(I-g),0!==m&&(p.row=I,p.col=v.normalizeCol(c),p.world=v.getWorldForColumn(c),n.push({dist:m,id:p.id}))}n.sort(function(e,t){return e.dist-t.dist});for(var R=0,b=n;R<b.length;R++){var C=b[R];e.push(C.id)}}},e}();return u});
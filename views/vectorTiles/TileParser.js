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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","../../core/promiseUtils","../../core/executeAsync","../../core/pbf","./SourceLayerData","./Feature","./BackgroundBucket","./FillBucket","./LineBucket","./SymbolBucket","../2d/engine/webgl/TileClipper"],function(e,t,r,n,i,a,l,s,u,o,c,f,p){var h=function(){function e(e,t,r){this._pbfTile=new a(new Uint8Array(e),new DataView(e)),this._tile=t,this._connection=r,this._layers=t.getLayers();var n=t.tileKey.split("/").map(parseFloat),i=n[0],l=n[1],s=n[2];this._level=i;var u=t.refKey;if(u){var o=t.refKey.split("/").map(parseFloat)[0],c=i-o;if(c>0){var f=(1<<c)-1,h=l&f,v=s&f;this._tileClipper=new p.TileClipper(c,h,v)}}this._tileClipper||(this._tileClipper=new p.SimpleBuilder)}return e.prototype.parse=function(){for(var e,t=this,a=this._parseTileData(this._pbfTile),l=this._layers,u=l.length,o=this._level,c=[],f={},p=new Set,h=u-1;h>=0;h--)if(e=l[h],!(e.minzoom&&o<e.minzoom||e.maxzoom&&o>=e.maxzoom||e.layout&&"none"===e.layout.visibility))if(0!==e.type){var v=e.sourceLayer,_=a[v];if(_){p.add(v);var y=this._createBucket(e);if(y){y.layerIndex=h,y.layerExtent=_.extent;var g=f[v];g||(g=f[v]=[]),g.push(y)}}}else{var y=this._createBucket(e);y.layerIndex=h,c.push(y)}var B=10*(this._level+1),k=[],d=[],x=[],w=[],m=this._tileClipper,b=new Set,I={},F=[];p.forEach(function(e){return F.push(e)});var L=0,S=0,T=F.length;return i(function(){if(6===t._tile.status)return!0;switch(L){case 0:if(T>S){var e=F[S++],r=a[e],n=f[e];if(!n||0===n.length)break;for(var i=r.getData();i.next(2);){var l=new s(i.getMessage(),r),u=l.values;if(u){var o=u._minzoom;if(o&&o>=B)continue}for(var c=0,p=n;c<p.length;c++){var h=p[c];h.pushFeature(l)}}}else{var v=t._tile;for(var e in f)for(var n=f[e],_=0,y=n;_<y.length;_++){var h=y[_];h.hasFeatures()&&(3===h.layer.type?(k.push(h),v.addBucket(h)):h.layer.refLayerId?x.push(h):(d.push(h),w[h.layer.id]=h))}L=1,S=0,T=k.length}break;case 1:if(T>S){var g=k[S++];g.getResources(m,b,I)}else L=2}return 2===L},50).then(function(){if(6===t._tile.status)return[];var e,a=[],l=t._tile.getWorkerTileHandler();b.size>0&&(e=l.fetchSprites(b,t._connection),a.push(e));var s;for(var u in I){var o=I[u];o.size>0&&(s=l.fetchGlyphs(t._tile.tileKey,u,o,t._connection),a.push(s))}return r(a).then(function(e){if(6===t._tile.status)return[];var r=0,n=0,a=d.length;return i(function(){if(6===t._tile.status)return!0;switch(r){case 0:if(a>n){var e=d[n++];e.processFeatures(m,t._tile),c.push(e)}else r=1,n=0,a=x.length;break;case 1:for(var i=0,l=x;i<l.length;i++){var e=l[i],s=w[e.layer.refLayerId];s&&(s.assignBufferInfo(e),c.push(e))}r=2,n=0,a=k.length;break;case 2:if(a>n){var e=k[n++];e.processFeatures(m,t._tile),c.push(e)}else r=3}return 3===r},50).then(function(){return c.sort(function(e,t){return e.layerIndex-t.layerIndex}),c})}).otherwise(function(e){return n.reject(new Error(e))})}).otherwise(function(e){return n.reject(new Error(e))})},e.prototype._parseTileData=function(e){for(var t={};e.next();)switch(e.tag()){case 3:var r=new l(e.getMessage());t[r.name]=r;break;default:e.skip()}return t},e.prototype._createBucket=function(e){switch(e.type){case 0:return this._createBackgroundBucket(e);case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 3:return this._createSymbolBucket(e)}},e.prototype._createBackgroundBucket=function(e){var t=new u(e,this._level);return t},e.prototype._createFillBucket=function(e){var t=this._tile,r=new o(e,this._level,t.polygonVertexBuffer,t.polygonIndexBuffer,t.polygonOutlineVertexBuffer,t.polygonOutlineIndexBuffer);return r},e.prototype._createLineBucket=function(e){var t=this._tile,r=new c(e,this._level,t.lineVertexBuffer,t.lineIndexBuffer);return r},e.prototype._createSymbolBucket=function(e){var t=this._tile,r=new f(e,this._level,t.markerVertexBuffer,t.markerIndexBuffer,t.textVertexBuffer,t.textIndexBuffer,t.placementEngine,t.getWorkerTileHandler());return r},e}();return h});
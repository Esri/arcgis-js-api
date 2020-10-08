// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/maybe","./util"],(function(e,l,t,r){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.SymbolRepository=void 0;var o=function(){function e(e,l,t){this.tileCoordRange=e,this._tileForest=l,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}return Object.defineProperty(e.prototype,"uniqueSymbols",{get:function(){return t.isNone(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray},enumerable:!1,configurable:!0}),e.prototype.addTile=function(e,l){var t,o=this;void 0===l&&(l=!0),this._uniqueSymbolLayerArray=null,l?(t={flatLatestSymbols:null,indexedLatestSymbols:null},this._tiles.set(e,t)):(t=this._tiles.get(e),this._removeSymbols(t.flatLatestSymbols));var i=e.symbols;i.forEach((function(l){for(var t=0,r=l;t<r.length;t++){r[t].tile=e}}));var n=new Map;i.forEach((function(e,l){var t=e.length;if(t>=32){var i=o.tileCoordRange;do{i/=2,t/=4}while(t>8&&i>64);var s=new r.GridIndex(o.tileCoordRange,o.tileCoordRange,i);n.set(l,s);for(var a=0,y=e;a<y.length;a++){var u=y[a];s.getCell(u.xTile,u.yTile).push(u)}}})),t.flatLatestSymbols=i,t.indexedLatestSymbols=n,this._addSymbols(e.key,i)},e.prototype.removeTile=function(e){this._uniqueSymbolLayerArray=null,this._removeSymbols(e.symbols),this._tiles.delete(e)},e.prototype._removeSymbols=function(e){var l=this;e.forEach((function(e,t){for(var r=0,o=e;r<o.length;r++){for(var i=o[r],n=i.unique,s=n.tileSymbols,a=s.length-1,y=0;y<a;y++)if(s[y]===i){s[y]=s[a];break}if(s.length=a,0===a){var u=l._uniqueSymbolsReferences.get(t);u.delete(n),0===u.size&&l._uniqueSymbolsReferences.delete(t)}i.unique=null,i.tile=null}}))},e.prototype._addSymbols=function(e,l){var r=this;if(0!==l.size){for(var o=0,i=this._tileForest.getRoots();o<i.length;o++){var n=i[o];n.key.world===e.world&&((n.key.level!==e.level||n.key.equals(e))&&this._matchSymbols(n,e,l))}l.forEach((function(e,l){for(var o=0,i=e;o<i.length;o++){var n=i[o];if(t.isNone(n.unique)){var s=r._createUnique();n.unique=s,s.tileSymbols.push(n);var a=r._uniqueSymbolsReferences.get(l);a||(a=new Set,r._uniqueSymbolsReferences.set(l,a)),a.add(s)}}}))}},e.prototype._matchSymbols=function(e,l,t){var o=this;if(e.key.level>l.level){var i=e.key.level-l.level;if(e.key.row>>i!==l.row||e.key.col>>i!==l.col)return}if(l.level>e.key.level){i=l.level-e.key.level;if(l.row>>i!==e.key.row||l.col>>i!==e.key.col)return}if(l.equals(e.key))for(var n=0,s=this._tileForest.getChildren(e);n<s.length;n++){var a=s[n];this._matchSymbols(a,l,t)}else{var y=new Map;t.forEach((function(t,i){for(var n=[],s=0,a=t;s<a.length;s++){var u=a[s],h=r.tileCoordChange(o.tileCoordRange,u.xTile,l.level,l.col,e.key.level,e.key.col),f=r.tileCoordChange(o.tileCoordRange,u.yTile,l.level,l.row,e.key.level,e.key.row);h>=0&&h<o.tileCoordRange&&f>=0&&f<o.tileCoordRange&&n.push({symbol:u,xTransformed:h,yTransformed:f})}var v=[],m=e.key.level<l.level?1:1<<e.key.level-l.level,b=o._tiles.get(e),c=b.flatLatestSymbols.get(i);if(c)for(var d=b.indexedLatestSymbols.get(i),S=0,g=n;S<g.length;S++){var _=g[S],p=!1,q=void 0,k=_.xTransformed,R=_.yTransformed;q=d?d.getCell(k,R):c;for(var w=(u=_.symbol).hash,C=0,L=q;C<L.length;C++){var T=L[C];if(w===T.hash&&Math.abs(k-T.xTile)<=m&&Math.abs(R-T.yTile)<=m){var x=T.unique;u.unique=x,x.tileSymbols.push(u),p=!0;break}}p||v.push(u)}v.length>0&&y.set(i,v)}));for(var u=0,h=this._tileForest.getChildren(e);u<h.length;u++){a=h[u];this._matchSymbols(a,l,y)}}},e.prototype._createUniqueSymbolLayerArray=function(){var e=new Array(this._uniqueSymbolsReferences.size),l=0;return this._uniqueSymbolsReferences.forEach((function(t,r){var o=[];t.forEach((function(e){o.push(e)})),e[l]={layerIndex:r,uniqueSymbols:o},l++})),e},e}();l.SymbolRepository=o}));
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","./util"],(function(e,s,o,t){"use strict";const l=32,i=8,n=64;let r=function(){function e(e,s,o){this.tileCoordRange=e,this._visibleTiles=s,this._createUnique=o,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}var r=e.prototype;return r.add=function(e,s){this._uniqueSymbolLayerArray=null;let o=this._tiles.get(e.id);o||(o={symbols:new Map},this._tiles.set(e.id,o));const r=new Map;if(s)for(const t of s)o.symbols.has(t)&&(r.set(t,o.symbols.get(t)),o.symbols.delete(t));else for(const[t,l]of e.layerData)o.symbols.has(t)&&(r.set(t,o.symbols.get(t)),o.symbols.delete(t));this._removeSymbols(r);const y=e.symbols,a=new Map;for(const[f,c]of y){let e=c.length;if(e>=l){let s=this.tileCoordRange;do{s/=2,e/=4}while(e>i&&s>n);const l=new t.GridIndex(this.tileCoordRange,this.tileCoordRange,s);a.set(f,{flat:c,index:l}),o.symbols.set(f,{flat:c,index:l});for(const e of c)l.getCell(e.xTile,e.yTile).push(e)}else a.set(f,{flat:c}),o.symbols.set(f,{flat:c})}this._addSymbols(e.key,y)},r.deleteStyleLayers=function(e){this._uniqueSymbolLayerArray=null;for(const[s,o]of this._tiles){const t=new Map;for(const s of e)o.symbols.has(s)&&(t.set(s,o.symbols.get(s)),o.symbols.delete(s));this._removeSymbols(t),0===o.symbols.size&&this._tiles.delete(s)}},r.removeTile=function(e){this._uniqueSymbolLayerArray=null;const s=this._tiles.get(e.id);if(!s)return;const o=new Map;for(const[t,l]of e.symbols)s.symbols.has(t)&&(o.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(o),0===s.symbols.size&&this._tiles.delete(e.id)},r._removeSymbols=function(e){for(const[s,{flat:o}]of e)for(const e of o){const o=e.unique,t=o.tileSymbols,l=t.length-1;for(let s=0;s<l;s++)if(t[s]===e){t[s]=t[l];break}if(t.length=l,0===l){const e=this._uniqueSymbolsReferences.get(s);e.delete(o),0===e.size&&this._uniqueSymbolsReferences.delete(s)}e.unique=null}},r._addSymbols=function(e,s){if(0===s.size)return;const t=this._visibleTiles;for(const o of t)o.parentTile||o.key.world!==e.world||o.key.level===e.level&&!o.key.equals(e)||this._matchSymbols(o,e,s);for(const[l,i]of s)for(const e of i)if(o.isNone(e.unique)){const s=this._createUnique();e.unique=s,s.tileSymbols.push(e);let o=this._uniqueSymbolsReferences.get(l);o||(o=new Set,this._uniqueSymbolsReferences.set(l,o)),o.add(s)}},r._matchSymbols=function(e,s,l){if(e.key.level>s.level){const o=e.key.level-s.level;if(e.key.row>>o!==s.row||e.key.col>>o!==s.col)return}if(s.level>e.key.level){const o=s.level-e.key.level;if(s.row>>o!==e.key.row||s.col>>o!==e.key.col)return}if(s.equals(e.key)){for(const o of e.childrenTiles)this._matchSymbols(o,s,l);return}const i=new Map;for(const[n,r]of l){const l=[];for(const o of r){const i=t.tileCoordChange(this.tileCoordRange,o.xTile,s.level,s.col,e.key.level,e.key.col),n=t.tileCoordChange(this.tileCoordRange,o.yTile,s.level,s.row,e.key.level,e.key.row);i>=0&&i<this.tileCoordRange&&n>=0&&n<this.tileCoordRange&&l.push({symbol:o,xTransformed:i,yTransformed:n})}const y=[],a=e.key.level<s.level?1:1<<e.key.level-s.level,f=this._tiles.get(e.id).symbols.get(n);if(f){const e=f.flat;for(const s of l){let t,l=!1;const i=s.xTransformed,n=s.yTransformed;t=o.isSome(f.index)?f.index.getCell(i,n):e;const r=s.symbol,c=r.hash;for(const e of t)if(c===e.hash&&Math.abs(i-e.xTile)<=a&&Math.abs(n-e.yTile)<=a){const s=e.unique;r.unique=s,s.tileSymbols.push(r),l=!0;break}l||y.push(r)}}y.length>0&&i.set(n,y)}for(const o of e.childrenTiles)this._matchSymbols(o,s,i)},r._createUniqueSymbolLayerArray=function(){const e=this._uniqueSymbolsReferences,s=new Array(e.size);let o,t=0;for(const[l,i]of e){const e=new Array(i.size);o=0;for(const s of i)e[o++]=s;s[t]={styleLayerUID:l,uniqueSymbols:e},t++}return s},s._createClass(e,[{key:"uniqueSymbols",get:function(){return o.isNone(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}}]),e}();e.SymbolRepository=r,Object.defineProperty(e,"__esModule",{value:!0})}));

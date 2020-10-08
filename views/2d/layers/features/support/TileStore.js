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

define(["require","exports","tslib","../../../../../core/Evented","../../../../../core/has","../../../../../core/libs/rbush/rbush","./Tile","../../../tiling/TileCoverage","../../../tiling/TileKey"],(function(e,t,i,s,n,r,o,d,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={added:[],removed:[]},a=new Set,u=new h(0,0,0,0),c=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=r(9,n("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=t,i}return i.__extends(t,e),t.prototype.destroy=function(){this.clear()},t.prototype.clear=function(){this.tiles.length=0,this._tiles.clear(),this._index.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var s=t*i.resolution,n=i.bounds[0]-s,r=i.bounds[1]-s,o=i.bounds[2]+s,d=i.bounds[3]+s,h=[],l=0,a=this._index.search({minX:n,minY:r,maxX:o,maxY:d});l<a.length;l++){var u=a[l],c=u.bounds.slice();c[0]=Math.max(c[0],n),c[1]=Math.max(c[1],r),c[2]=Math.min(c[2],o),c[3]=Math.min(c[3],d),c[2]-c[0]>0&&c[3]-c[1]>0&&h.push({bounds:c,tile:u})}return h},t.prototype.boundsIntersections=function(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})},t.prototype.updateTiles=function(e){for(var t=this,i={added:[],removed:[]},s=0,n=e.added;s<n.length;s++){var r=n[s];if(!this.has(r)){var d=new o.default(this.tileScheme,r);this._tiles.set(r,d),this._index.insert(d),i.added.push(d)}}for(var h=0,l=e.removed;h<l.length;h++){r=l[h];if(this.has(r)){d=this.get(r);this._tiles.delete(r),this._index.remove(d),i.removed.push(d)}}this.tiles.length=0,this._tiles.forEach((function(e){return t.tiles.push(e)})),(i.added.length||i.removed.length)&&this.emit("update",i)},t.prototype.setViewState=function(e){var t=this.tileScheme.getTileCoverage(e,0);if(t){var i=t.spans,s=t.lodInfo,n=s.level;if(i.length>0)for(var r=0,h=i;r<h.length;r++)for(var c=h[r],p=c.row,f=c.colFrom,m=c.colTo,v=f;v<=m;v++){var g=u.set(n,p,s.normalizeCol(v),s.getWorldForColumn(v)).id;if(a.add(g),!this.has(g)){var _=new o.default(this.tileScheme,g);this._tiles.set(g,_),this._index.insert(_),this.tiles.push(_),l.added.push(_)}}for(var b=this.tiles.length-1;b>=0;b--){_=this.tiles[b];a.has(_.id)||(this._tiles.delete(_.id),this.tiles.splice(b,1),this._index.remove(_),l.removed.push(_))}(l.added.length||l.removed.length)&&this.emit("update",l),d.pool.release(t),a.clear(),l.added.length=0,l.removed.length=0}},t}(s);t.default=c}));
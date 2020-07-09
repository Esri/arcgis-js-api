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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/Evented","../../../../../core/has","../../../../../core/libs/rbush/rbush","./Tile","../../../tiling/TileCoverage","../../../tiling/TileKey"],(function(e,t,i,n,s,o,r,l,d){Object.defineProperty(t,"__esModule",{value:!0});var a={added:[],removed:[]},h=new Set,u=new d(0,0,0,0),c=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=o(9,s("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=t,i}return i.__extends(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.clear=function(){this._tiles.clear(),this._index.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var n=t*i.resolution,s=i.bounds[0]-n,o=i.bounds[1]-n,r=i.bounds[2]+n,l=i.bounds[3]+n,d=[],a=0,h=this._index.search({minX:s,minY:o,maxX:r,maxY:l});a<h.length;a++){var u=h[a],c=u.bounds.slice();c[0]=Math.max(c[0],s),c[1]=Math.max(c[1],o),c[2]=Math.min(c[2],r),c[3]=Math.min(c[3],l),c[2]-c[0]>0&&c[3]-c[1]>0&&d.push({bounds:c,tile:u})}return d},t.prototype.boundsIntersections=function(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})},t.prototype.setViewState=function(e){var t=this.tileScheme.getTileCoverage(e,0);if(t){var i=t.spans,n=t.lodInfo,s=n.level;if(i.length>0)for(var o=0,d=i;o<d.length;o++)for(var c=d[o],p=c.row,m=c.colFrom,f=c.colTo,v=m;v<=f;v++){var b=u.set(s,p,n.normalizeCol(v),n.getWorldForColumn(v)).id;if(h.add(b),!this.has(b)){var g=new r.default(this.tileScheme,b);this._tiles.set(b,g),this._index.insert(g),this.tiles.push(g),a.added.push(g)}}for(var _=this.tiles.length-1;_>=0;_--){g=this.tiles[_];h.has(g.id)||(this._tiles.delete(g.id),this.tiles.splice(_,1),this._index.remove(g),a.removed.push(g))}(a.added.length||a.removed.length)&&this.emit("update",a),l.pool.release(t),h.clear(),a.added.length=0,a.removed.length=0}},t}(n);t.default=c}));
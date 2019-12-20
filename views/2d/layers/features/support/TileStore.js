// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Evented","../../../../../core/has","../../../../../core/libs/rbush/rbush","./Tile","../../../tiling/TileCoverage","../../../tiling/TileKey"],function(e,t,i,n,s,r,o,d,l,a){Object.defineProperty(t,"__esModule",{value:!0});var u={added:[],removed:[]},h=new Set,c=new a(0,0,0,0),p=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=o(9,r("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=t,i}return i(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var n=t*i.resolution,s=i.bounds[0]-n,r=i.bounds[1]-n,o=i.bounds[2]+n,d=i.bounds[3]+n,l=[],a=0,u=this._index.search({minX:s,minY:r,maxX:o,maxY:d});a<u.length;a++){var h=u[a],c=h.bounds.slice();c[0]=Math.max(c[0],s),c[1]=Math.max(c[1],r),c[2]=Math.min(c[2],o),c[3]=Math.min(c[3],d),c[2]-c[0]>0&&c[3]-c[1]>0&&l.push({bounds:c,tile:h})}return l},t.prototype.boundsIntersections=function(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})},t.prototype.setViewState=function(e){var t=this.tileScheme.getTileCoverage(e,0);if(t){var i=t.spans,n=t.lodInfo,s=n.level;if(i.length>0)for(var r=0,o=i;r<o.length;r++)for(var a=o[r],p=a.row,m=a.colFrom,f=a.colTo,v=m;v<=f;v++){var b=c.set(s,p,n.normalizeCol(v),n.getWorldForColumn(v)).id;if(h.add(b),!this.has(b)){var g=new d.default(this.tileScheme,b);this._tiles.set(b,g),this._index.insert(g),this.tiles.push(g),u.added.push(g)}}for(var x=this.tiles.length-1;x>=0;x--){var g=this.tiles[x];h.has(g.id)||(this._tiles.delete(g.id),this.tiles.splice(x,1),this._index.remove(g),u.removed.push(g))}(u.added.length||u.removed.length)&&this.emit("update",u),l.pool.release(t),h.clear(),u.added.length=0,u.removed.length=0}},t}(s);t.default=p});
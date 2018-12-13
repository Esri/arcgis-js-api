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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/decorateHelper","@dojo/framework/shim/Set","../../../../../core/has","../../../../../core/libs/rbush/rbush","./Tile","../../../support/Evented","../../../tiling/TileKey"],function(e,t,i,n,s,r,o,d,l,u){Object.defineProperty(t,"__esModule",{value:!0});var a={added:[],removed:[]},h=new s.default,p=new u(0,0,0,0),c=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=o(9,r("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileScheme=t,i}return i(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var n=t*i.resolution,s=i.bounds[0]-n,r=i.bounds[1]-n,o=i.bounds[2]+n,d=i.bounds[3]+n,l=[],u=0,a=this._index.search({minX:s,minY:r,maxX:o,maxY:d});u<a.length;u++){var h=a[u],p=h.bounds.slice();p[0]=Math.max(p[0],s),p[1]=Math.max(p[1],r),p[2]=Math.min(p[2],o),p[3]=Math.min(p[3],d),p[2]-p[0]>0&&p[3]-p[1]>0&&l.push({bounds:p,tile:h})}return l},t.prototype.boundsIntersections=function(e){return this._index.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]})},t.prototype.setViewState=function(e){var t=this.tileScheme.getTileCoverage(e,0);if(t){var i=t.spans,n=t.lodInfo,s=n.level;if(i.length>0)for(var r=0,o=i;r<o.length;r++)for(var l=o[r],u=l.row,c=l.colFrom,m=l.colTo,f=c;f<=m;f++){var v=p.set(s,u,n.normalizeCol(f),n.getWorldForColumn(f)).id;if(h.add(v),!this.has(v)){var b=new d.default(this.tileScheme,v);this._tiles.set(v,b),this._index.insert(b),this.tiles.push(b),a.added.push(b)}}for(var g=this.tiles.length-1;g>=0;g--){var b=this.tiles[g];h.has(b.id)||(this._tiles.delete(b.id),this.tiles.splice(g,1),this._index.remove(b),a.removed.push(b))}(a.added.length||a.removed.length)&&this.emit("update",a),h.clear(),a.added.length=0,a.removed.length=0}},t}(l.default);t.default=c});
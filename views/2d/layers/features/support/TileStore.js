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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/decorateHelper","@dojo/framework/shim/Set","../../../../../core/has","../../../../../core/libs/rbush/rbush","../../../tiling","./Tile","../../../support/Evented","../../../tiling/TileKey"],function(e,t,i,n,s,o,r,l,d,a,u){Object.defineProperty(t,"__esModule",{value:!0});var h={added:[],removed:[]},f=new s.default,p=new u(0,0,0,0),c=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i._index=r(9,o("csp-restrictions")?function(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),i.tiles=[],i.tileInfo=t,i._tileInfoView=new l.TileInfoView(t),i.spatialReference=t.spatialReference,i}return i(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.intersections=function(e,t){var i="string"==typeof e?this.get(e):e;if(!i)return[];for(var n=t*i.resolution,s=i.bounds[0]-n,o=i.bounds[1]-n,r=i.bounds[2]+n,l=i.bounds[3]+n,d=[],a=0,u=this._index.search({minX:s,minY:o,maxX:r,maxY:l});a<u.length;a++){var h=u[a],f=h.bounds.slice();f[0]=Math.max(f[0],s),f[1]=Math.max(f[1],o),f[2]=Math.min(f[2],r),f[3]=Math.min(f[3],l),f[2]-f[0]>0&&f[3]-f[1]>0&&d.push({bounds:f,tile:h})}return d},t.prototype.setViewState=function(e){var t=this._tileInfoView.getTileCoverage(e,0);if(t){var i=t.spans,n=t.lodInfo,s=n.level;if(i.length>0)for(var o=0,r=i;o<r.length;o++)for(var l=r[o],a=l.row,u=l.colFrom,c=l.colTo,m=u;m<=c;m++){var v=p.set(s,a,n.normalizeCol(m),n.getWorldForColumn(m)).id;if(f.add(v),!this.has(v)){var b=new d.default(this._tileInfoView,v);this._tiles.set(v,b),this._index.insert(b),this.tiles.push(b),h.added.push(b)}}for(var g=this.tiles.length-1;g>=0;g--){var b=this.tiles[g];f.has(b.id)||(this._tiles.delete(b.id),this.tiles.splice(g,1),this._index.remove(b),h.removed.push(b))}(h.added.length||h.removed.length)&&this.emit("update",h),f.clear(),h.added.length=0,h.removed.length=0}},t}(a.default);t.default=c});
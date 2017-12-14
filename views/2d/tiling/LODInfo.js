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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./TileKey","../../../geometry/support/spatialReferenceUtils"],function(t,o,r,i){function e(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}function s(t,o,r,i,e){return t[0]=o,t[1]=r,t[2]=i,t[3]=e,t}var l=function(){function t(t,o,r,i,e,n,s,l,u,h,a,p){this.level=t,this.resolution=o,this.scale=r,this.origin=i,this.first=e,this.last=n,this.size=s,this.norm=l,this.worldStart=u,this.worldEnd=h,this.worldSize=a,this.wrap=p}return t.create=function(o,r,s){var l=i.getInfo(o.spatialReference),u=e(o.origin.x,o.origin.y),h=e(o.size[0]*r.resolution,o.size[1]*r.resolution),a=e(-(1/0),-(1/0)),p=e(+(1/0),+(1/0)),f=e(+(1/0),+(1/0));s&&(n(a,Math.max(0,Math.floor((s.xmin-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymax)/h[1]))),n(p,Math.max(0,Math.floor((s.xmax-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymin)/h[1]))),n(f,p[0]-a[0]+1,p[1]-a[1]+1));var c,g,m,w;return o.isWrappable?(c=e(Math.ceil(Math.round(2*l.origin[1]/r.resolution)/o.size[0]),f[1]),g=e(Math.floor((l.origin[0]-u[0])/h[0]),a[1]),m=e(c[0]+g[0]-1,p[1]),w=!0):(g=a,m=p,c=f,w=!1),new t(r.level,r.resolution,r.scale,u,a,p,f,h,g,m,c,w)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var o=this.worldSize[0];return 0>t?o-1-Math.abs((t+1)%o):t%o},t.prototype.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileBounds=function(t,o){var i=r.pool.acquire(o),e=this.denormalizeCol(i.col,i.world),n=i.row;return s(t,this.getXForColumn(e),this.getYForRow(n+1),this.getXForColumn(e+1),this.getYForRow(n)),r.pool.release(i),t},t.prototype.getTileCoords=function(t,o){var i=r.pool.acquire(o);return n(t,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row)),r.pool.release(i),t},t}();return l});
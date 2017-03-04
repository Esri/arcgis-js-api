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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./TileKey","../../../../geometry/support/spatialReferenceUtils"],function(o,t,r,i){function e(o,t){return[o,t]}function n(o,t,r){return o[0]=t,o[1]=r,o}function s(o,t,r,i,e){return o[0]=t,o[1]=r,o[2]=i,o[3]=e,o}var l=function(){function o(o,t,r,i,e,n,s,l,u,h,a,p){this.level=o,this.resolution=t,this.scale=r,this.origin=i,this.first=e,this.last=n,this.size=s,this.norm=l,this.worldStart=u,this.worldEnd=h,this.worldSize=a,this.wrap=p}return o.create=function(t,r,s){var l=i.getInfo(t.spatialReference),u=e(t.origin.x,t.origin.y),h=e(t.size[0]*r.resolution,t.size[1]*r.resolution),a=e(-(1/0),-(1/0)),p=e(+(1/0),+(1/0)),f=e(+(1/0),+(1/0));s&&(n(a,Math.max(0,Math.floor((s.xmin-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymax)/h[1]))),n(p,Math.max(0,Math.floor((s.xmax-u[0])/h[0])),Math.max(0,Math.floor((u[1]-s.ymin)/h[1]))),n(f,p[0]-a[0]+1,p[1]-a[1]+1));var c,m,g,w;return l?(c=e(Math.ceil(Math.round(2*l.origin[1]/r.resolution)/t.size[0]),f[1]),m=e(Math.floor((l.origin[0]-u[0])/h[0]),a[1]),g=e(c[0]-m[0]-1,p[1]),w=!0):(m=a,g=p,c=f,w=!1),new o(r.level,r.resolution,r.scale,u,a,p,f,h,m,g,c,w)},o.prototype.normalizeCol=function(o){if(!this.wrap)return o;var t=this.worldSize[0];return 0>o?t-1-Math.abs((o+1)%t):o%t},o.prototype.denormalizeCol=function(o,t){return this.wrap?this.worldSize[0]*t+o:o},o.prototype.getWorldForColumn=function(o){return this.wrap?Math.floor(o/this.worldSize[0]):0},o.prototype.getFirstColumnForWorld=function(o){return o*this.worldSize[0]+this.first[0]},o.prototype.getLastColumnForWorld=function(o){return o*this.worldSize[0]+this.first[0]+this.size[0]-1},o.prototype.getColumnForX=function(o){return(o-this.origin[0])/this.norm[0]},o.prototype.getXForColumn=function(o){return this.origin[0]+o*this.norm[0]},o.prototype.getRowForY=function(o){return(this.origin[1]-o)/this.norm[1]},o.prototype.getYForRow=function(o){return this.origin[1]-o*this.norm[1]},o.prototype.getTileBounds=function(o,t){var i=r.pool.acquire(t);return s(o,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row+1),this.getXForColumn(this.denormalizeCol(i.col,i.world)+1),this.getYForRow(i.row)),r.pool.release(i),o},o.prototype.getTileCoords=function(o,t){var i=r.pool.acquire(t);return n(o,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row)),r.pool.release(i),o},o}();return l});
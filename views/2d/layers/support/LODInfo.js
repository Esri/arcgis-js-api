// COPYRIGHT © 2016 Esri
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

define(["require","exports","./TileKey","../../../../geometry/support/spatialReferenceUtils"],function(t,o,r,i){function e(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}var s=function(){function t(t,o,r,i,e,n,s,l,h,u,a){this.level=t,this.resolution=o,this.origin=r,this.first=i,this.last=e,this.size=n,this.norm=s,this.worldStart=l,this.worldEnd=h,this.worldSize=u,this.wrap=a}return t.create=function(o,r,s){var l=i.getInfo(o.spatialReference),h=e(o.origin.x,o.origin.y),u=e(o.size[0]*r.resolution,o.size[1]*r.resolution),a=e(-(1/0),-(1/0)),f=e(+(1/0),+(1/0)),p=e(+(1/0),+(1/0));s&&(n(a,Math.max(0,Math.floor((s.xmin-h[0])/u[0])),Math.max(0,Math.floor((h[1]-s.ymax)/u[1]))),n(f,Math.max(0,Math.floor((s.xmax-h[0])/u[0])),Math.max(0,Math.floor((h[1]-s.ymin)/u[1]))),n(p,f[0]-a[0]+1,f[1]-a[1]+1));var m,g,c,w;return l?(m=e(Math.ceil(Math.round(2*l.origin[1]/r.resolution)/o.size[0]),p[1]),g=e(Math.floor((l.origin[0]-h[0])/u[0]),a[1]),c=e(m[0]-g[0]-1,f[1]),w=!0):(g=a,c=f,m=p,w=!1),new t(r.level,r.resolution,h,a,f,p,u,g,c,m,w)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var o=this.worldSize[0];return 0>t?o-1-Math.abs((t+1)%o):t%o},t.prototype.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileTopLeft=function(t,o){var i=r.from(o);return n(t,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row))},t.prototype.getTileBottomRight=function(t,o){var i=r.from(o);return n(t,this.getXForColumn(this.denormalizeCol(i.col,i.world)+1),this.getYForRow(i.row+1))},t}();return s});
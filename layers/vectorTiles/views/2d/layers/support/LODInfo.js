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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","./TileKey"],function(t,o,r){function i(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}var e=function(){function t(t,o,r,i,n,e,s,l,h,u,a){this.level=t,this.resolution=o,this.origin=r,this.first=i,this.last=n,this.size=e,this.norm=s,this.worldStart=l,this.worldEnd=h,this.worldSize=u,this.wrap=a}return t.create=function(o,r,e){var s=o.spatialReference._getInfo(),l=i(o.origin.x,o.origin.y),h=i(o.size[0]*r.resolution,o.size[1]*r.resolution),u=i(-(1/0),-(1/0)),a=i(+(1/0),+(1/0)),f=i(+(1/0),+(1/0));e&&(n(u,Math.max(0,Math.floor((e.xmin-l[0])/h[0])),Math.max(0,Math.floor((l[1]-e.ymax)/h[1]))),n(a,Math.max(0,Math.floor((e.xmax-l[0])/h[0])),Math.max(0,Math.floor((l[1]-e.ymin)/h[1]))),n(f,a[0]-u[0]+1,a[1]-u[1]+1));var p,m,g,c;return s?(p=i(Math.ceil(Math.round(2*s.origin[1]/r.resolution)/o.size[0]),f[1]),m=i(Math.floor((s.origin[0]-l[0])/h[0]),u[1]),g=i(p[0]-m[0]-1,a[1]),c=!0):(m=u,g=a,p=f,c=!1),new t(r.level,r.resolution,l,u,a,f,h,m,g,p,c)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var o=this.worldSize[0];return 0>t?o-1-Math.abs((t+1)%o):t%o},t.prototype.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileTopLeft=function(t,o){var i=r.from(o);return n(t,this.getXForColumn(this.denormalizeCol(i.col,i.world)),this.getYForRow(i.row))},t.prototype.getTileBottomRight=function(t,o){var i=r.from(o);return n(t,this.getXForColumn(this.denormalizeCol(i.col,i.world)+1),this.getYForRow(i.row+1))},t}();return e});
// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/spatialReferenceUtils","./TileKey"],(function(t,o,r,i){function e(t,o){return[t,o]}function n(t,o,r){return t[0]=o,t[1]=r,t}var s=new i("0/0/0/0");return function(){function t(t,o,r,i,e,n,s,l,h,u,a,p){this.level=t,this.resolution=o,this.scale=r,this.origin=i,this.first=e,this.last=n,this.size=s,this.norm=l,this.worldStart=h,this.worldEnd=u,this.worldSize=a,this.wrap=p}return t.create=function(o,i,s){var l,h,u,a,p=r.getInfo(o.spatialReference),f=e(o.origin.x,o.origin.y),c=e(o.size[0]*i.resolution,o.size[1]*i.resolution),g=e(-1/0,-1/0),m=e(1/0,1/0),w=e(1/0,1/0);return s&&(n(g,Math.max(0,Math.floor((s.xmin-f[0])/c[0])),Math.max(0,Math.floor((f[1]-s.ymax)/c[1]))),n(m,Math.max(0,Math.floor((s.xmax-f[0])/c[0])),Math.max(0,Math.floor((f[1]-s.ymin)/c[1]))),n(w,m[0]-g[0]+1,m[1]-g[1]+1)),o.isWrappable?(l=e(Math.ceil(Math.round(2*p.origin[1]/i.resolution)/o.size[0]),w[1]),h=e(Math.floor((p.origin[0]-f[0])/c[0]),g[1]),u=e(l[0]+h[0]-1,m[1]),a=!0):(h=g,u=m,l=w,a=!1),new t(i.level,i.resolution,i.scale,f,g,m,w,c,h,u,l,a)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var o=this.worldSize[0];return t<0?o-1-Math.abs((t+1)%o):t%o},t.prototype.denormalizeCol=function(t,o){return this.wrap?this.worldSize[0]*o+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileBounds=function(t,o,r){void 0===r&&(r=!1),s.set(o);var i=r?s.col:this.denormalizeCol(s.col,s.world),e=s.row;return function(t,o,r,i,e){t[0]=o,t[1]=r,t[2]=i,t[3]=e}(t,this.getXForColumn(i),this.getYForRow(e+1),this.getXForColumn(i+1),this.getYForRow(e)),t},t.prototype.getTileCoords=function(t,o,r){void 0===r&&(r=!1),s.set(o);var i=r?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(t)?n(t,this.getXForColumn(i),this.getYForRow(s.row)):(t.x=this.getXForColumn(i),t.y=this.getYForRow(s.row)),t},t}()}));